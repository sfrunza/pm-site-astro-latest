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

let cachedReviews: GooglePlaceReviews | null = null;
let cacheKey: string | null = null;

export async function getGoogleReviews(options?: {
  placeId?: string;
  apiKey?: string;
  googleMapsUrl?: string;
}): Promise<GooglePlaceReviews> {
  const placeId = options?.placeId ?? import.meta.env.PUBLIC_GOOGLE_PLACE_ID;
  const apiKey = options?.apiKey ?? import.meta.env.PUBLIC_GOOGLE_PLACES_API_KEY;
  const googleMapsUrl = options?.googleMapsUrl ?? '';
  const key = `${apiKey ?? ''}:${placeId ?? ''}:${googleMapsUrl}`;

  if (cachedReviews && cacheKey === key) {
    return cachedReviews;
  }

  if (!apiKey || !placeId) {
    return { ...emptyResult, reviewsUrl: googleMapsUrl };
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,url&key=${apiKey}`,
    );
    const data: PlaceDetailsResponse = await response.json();

    if (data.status === 'OK' && data.result) {
      cachedReviews = {
        reviews: data.result.reviews ?? [],
        averageRating: data.result.rating ?? 0,
        totalReviews: data.result.user_ratings_total ?? 0,
        reviewsUrl: data.result.url ?? googleMapsUrl,
      };
      cacheKey = key;
      return cachedReviews;
    }

    console.error('Google Places API error:', data.status);
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
  }

  return { ...emptyResult, reviewsUrl: googleMapsUrl };
}
