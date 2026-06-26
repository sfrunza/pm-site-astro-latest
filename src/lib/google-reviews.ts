export interface GoogleReview {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePlaceReviews {
  reviews: GoogleReview[];
  averageRating: number;
  totalReviews: number;
  reviewsUrl: string;
}

export interface YelpReview {
  id: string;
  url: string;
  text: string;
  rating: number;
  time_created: string;
  relative_time_description: string;
  user: {
    id: string;
    profile_url: string;
    image_url: string;
    name: string;
  };
}

export interface YelpBusinessReviews {
  reviews: YelpReview[];
  averageRating: number;
  totalReviews: number;
  reviewsUrl: string;
}

interface PlaceDetailsResponse {
  result?: {
    reviews?: GoogleReview[];
    rating?: number;
    user_ratings_total?: number;
    url?: string;
  };
  status: string;
}

const emptyResult: GooglePlaceReviews = {
  reviews: [],
  averageRating: 0,
  totalReviews: 0,
  reviewsUrl: '',
};

interface YelpReviewsResponse {
  reviews?: Array<{
    id: string;
    url: string;
    text: string;
    rating: number;
    time_created: string;
    user: {
      id: string;
      profile_url: string;
      image_url?: string | null;
      name: string;
    };
  }>;
  total?: number;
  error?: { code: string; description: string };
}

interface YelpBusinessDetailsResponse {
  rating?: number;
  review_count?: number;
  url?: string;
  error?: { code: string; description: string };
}

let cachedReviews: GooglePlaceReviews | null = null;
let cacheKey: string | null = null;

function resolveGooglePlaceIds(options?: {
  placeIds?: string | string[];
  placeId?: string;
}): string[] {
  if (options?.placeIds) {
    const ids = Array.isArray(options.placeIds)
      ? options.placeIds
      : [options.placeIds];
    return [...new Set(ids.filter(Boolean))];
  }

  if (options?.placeId) {
    return [options.placeId];
  }

  return [
    ...new Set(
      [
        import.meta.env.PUBLIC_GOOGLE_PLACE_ID_NATICK,
        import.meta.env.PUBLIC_GOOGLE_PLACE_ID_NEWTON,
        import.meta.env.PUBLIC_GOOGLE_PLACE_ID,
      ].filter(Boolean),
    ),
  ];
}

function mergeGooglePlaceReviews(
  results: GooglePlaceReviews[],
  fallbackReviewsUrl: string,
): GooglePlaceReviews {
  const reviews = results
    .flatMap((result) => result.reviews)
    .sort((a, b) => b.time - a.time);

  let totalReviews = 0;
  let weightedRating = 0;

  for (const result of results) {
    totalReviews += result.totalReviews;
    weightedRating += result.averageRating * result.totalReviews;
  }

  return {
    reviews,
    averageRating: totalReviews > 0 ? weightedRating / totalReviews : 0,
    totalReviews,
    reviewsUrl:
      fallbackReviewsUrl ||
      results.find((result) => result.reviewsUrl)?.reviewsUrl ||
      '',
  };
}

async function fetchGoogleReviewsForPlace(
  placeId: string,
  apiKey: string,
  reviewsSort: 'newest' | 'most_relevant',
): Promise<GooglePlaceReviews> {
  // i need limit 3 reviews to be fetched from the API
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,url&reviews_sort=${reviewsSort}&key=${apiKey}`,
  );
  const data: PlaceDetailsResponse = await response.json();

  if (data.status === 'OK' && data.result) {
    const reviews = [...(data.result.reviews ?? [])].sort(
      (a, b) => b.time - a.time,
    );

    return {
      reviews,
      averageRating: data.result.rating ?? 0,
      totalReviews: data.result.user_ratings_total ?? 0,
      reviewsUrl: data.result.url ?? '',
    };
  }

  console.error(`Google Places API error for ${placeId}:`, data.status);
  return { ...emptyResult };
}

let cachedYelpReviews: YelpBusinessReviews | null = null;
let yelpCacheKey: string | null = null;

const emptyYelpResult: YelpBusinessReviews = {
  reviews: [],
  averageRating: 0,
  totalReviews: 0,
  reviewsUrl: '',
};

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString.replace(' ', 'T'));
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  const intervals: [number, string][] = [
    [31536000, 'year'],
    [2592000, 'month'],
    [604800, 'week'],
    [86400, 'day'],
    [3600, 'hour'],
    [60, 'minute'],
  ];

  for (const [secondsInUnit, unit] of intervals) {
    const count = Math.floor(seconds / secondsInUnit);
    if (count >= 1) {
      return `${count} ${unit}${count === 1 ? '' : 's'} ago`;
    }
  }

  return 'just now';
}

function resolveYelpApiKey(options?: { apiKey?: string }): string | undefined {
  return (
    options?.apiKey ??
    import.meta.env.YELP_API_KEY ??
    import.meta.env.PUBLIC_YELP_API_KEY
  );
}

function resolveYelpBusinessId(options?: {
  businessIdOrAlias?: string;
}): string | undefined {
  return (
    options?.businessIdOrAlias ??
    import.meta.env.YELP_BUSINESS_ID ??
    import.meta.env.PUBLIC_YELP_BUSINESS_ID
  );
}

export async function getGoogleReviews(options?: {
  placeIds?: string | string[];
  placeId?: string;
  apiKey?: string;
  googleMapsUrl?: string;
  reviewsSort?: 'newest' | 'most_relevant';
}): Promise<GooglePlaceReviews> {
  const placeIds = resolveGooglePlaceIds(options);
  const apiKey = options?.apiKey ?? import.meta.env.PUBLIC_GOOGLE_PLACES_API_KEY;
  const googleMapsUrl = options?.googleMapsUrl ?? '';
  const reviewsSort = options?.reviewsSort ?? 'newest';
  const key = `${apiKey ?? ''}:${placeIds.join(',')}:${googleMapsUrl}:${reviewsSort}`;

  if (cachedReviews && cacheKey === key) {
    return cachedReviews;
  }

  if (!apiKey || placeIds.length === 0) {
    return { ...emptyResult, reviewsUrl: googleMapsUrl };
  }

  try {
    const results = await Promise.all(
      placeIds.map((placeId) =>
        fetchGoogleReviewsForPlace(placeId, apiKey, reviewsSort),
      ),
    );

    cachedReviews = mergeGooglePlaceReviews(results, googleMapsUrl);
    cacheKey = key;
    return cachedReviews;
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
  }

  return { ...emptyResult, reviewsUrl: googleMapsUrl };
}

export async function getYelpReviews(options?: {
  businessIdOrAlias?: string;
  apiKey?: string;
  yelpUrl?: string;
}): Promise<YelpBusinessReviews> {
  const businessIdOrAlias = resolveYelpBusinessId(options);
  const apiKey = resolveYelpApiKey(options);
  const yelpUrl = options?.yelpUrl ?? '';
  const key = `${apiKey ?? ''}:${businessIdOrAlias ?? ''}:${yelpUrl}`;

  if (cachedYelpReviews && yelpCacheKey === key) {
    return cachedYelpReviews;
  }

  if (!apiKey || !businessIdOrAlias) {
    return { ...emptyYelpResult, reviewsUrl: yelpUrl };
  }

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    Accept: 'application/json',
  };

  try {
    const encodedId = encodeURIComponent(businessIdOrAlias);
    const [detailsResponse, reviewsResponse] = await Promise.all([
      fetch(`https://api.yelp.com/v3/businesses/${encodedId}`, { headers }),
      fetch(
        `https://api.yelp.com/v3/businesses/${encodedId}/reviews`,
        { headers },
      ),
    ]);

    const details: YelpBusinessDetailsResponse = await detailsResponse.json();
    const reviewsData: YelpReviewsResponse = await reviewsResponse.json();

    if (details.error) {
      console.error('Yelp Business API error:', details.error.code, details.error.description);
    }

    if (reviewsData.error) {
      console.error('Yelp Reviews API error:', reviewsData.error.code, reviewsData.error.description);
    }

    const reviews =
      reviewsData.reviews?.map((review) => ({
        ...review,
        relative_time_description: formatRelativeTime(review.time_created),
        user: {
          ...review.user,
          image_url: review.user.image_url ?? '',
        },
      })) ?? [];

    if (details.rating || reviews.length > 0) {
      cachedYelpReviews = {
        reviews,
        averageRating: details.rating ?? 0,
        totalReviews: details.review_count ?? reviewsData.total ?? 0,
        reviewsUrl: details.url ?? yelpUrl,
      };
      yelpCacheKey = key;
      return cachedYelpReviews;
    }
  } catch (error) {
    console.error('Failed to fetch Yelp reviews:', error);
  }

  return { ...emptyYelpResult, reviewsUrl: yelpUrl };
}
