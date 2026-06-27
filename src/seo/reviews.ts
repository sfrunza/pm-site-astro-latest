import type { GooglePlaceReviews } from '@/lib/google-reviews';
import { BUSINESS_ID } from '@/seo/constants';

const fallbackAggregateRating = {
  '@type': 'AggregateRating',
  ratingValue: '4.98',
  reviewCount: '243',
  bestRating: '5',
};

export function buildAggregateRatingSchema(
  data?: GooglePlaceReviews,
): Record<string, unknown> {
  if (!data || data.averageRating <= 0 || data.totalReviews <= 0) {
    return fallbackAggregateRating;
  }

  return {
    '@type': 'AggregateRating',
    ratingValue: data.averageRating.toFixed(2),
    reviewCount: String(data.totalReviews),
    bestRating: '5',
  };
}

export function buildReviewSchemas(
  data: GooglePlaceReviews,
): Record<string, unknown>[] {
  return data.reviews.map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author_name,
    },
    datePublished: new Date(review.time * 1000).toISOString().slice(0, 10),
    reviewBody: review.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(review.rating),
      bestRating: '5',
    },
  }));
}

/**
 * Site-wide aggregateRating on the canonical #business @id.
 * Individual reviews belong on page-specific LocalBusiness nodes only
 * (homepage, city pages with Reviews1) — never duplicate aggregateRating there.
 */
export function buildBusinessRatingJsonLd(
  reviewsData?: GooglePlaceReviews,
): Record<string, unknown> {
  return {
    '@type': ['LocalBusiness', 'MovingCompany'],
    '@id': BUSINESS_ID,
    aggregateRating: buildAggregateRatingSchema(reviewsData),
  };
}
