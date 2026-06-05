import { SITE } from '@/config/site';
import {
  getGoogleReviews,
  type GooglePlaceReviews,
} from '@/lib/google-reviews';
import { canonicalUrl, normalizeCanonicalPath } from '@/seo/canonical';
import { defaultRobotsProps } from '@/seo/constants';
import {
  breadcrumb,
  buildLocalMoverJsonLd,
  serviceSchema,
  webPage,
} from '@/seo/json-ld';
import { buildBusinessRatingJsonLd } from '@/seo/reviews';
import { buildOpenGraph, buildTwitter } from '@/seo/open-graph';
import type { AstroSeoProps } from '@/seo/types';

export type PageSeoInput = {
  title: string;
  description: string;
  keywords: string;
  pathname: string;
  breadcrumbs: { name: string; path: string }[];
  service?: { name: string; description: string };
  jsonLdExtra?: Record<string, unknown>[];
  /**
   * When the page shows Reviews1, adds city LocalBusiness JSON-LD with
   * aggregateRating + individual reviews (handled internally by fetchPageSeo).
   */
  includeReviewSchema?: boolean;
  reviewSchemaCityName?: string;
  /** Override canonical URL (e.g. legacy city page → rich landing page). */
  canonical?: string;
  /** Absolute URL for og:image, twitter:image, and optional schema image */
  ogImage?: string;
  ogImageAlt?: string;
};

export type PageSeoBuildInput = PageSeoInput & {
  reviewsData?: GooglePlaceReviews;
};

/** Builds Layout SEO props from the current page URL and page-specific fields. */
export function buildPageSeo(
  _pageUrl: URL,
  input: PageSeoBuildInput,
): AstroSeoProps {
  const pathname = normalizeCanonicalPath(input.pathname);
  const canonical = input.canonical ?? canonicalUrl(pathname);
  const ogTitle =
    input.title.split('|').at(-1)?.trim() ?? SITE.businessShortName;

  const additionalMetaTags: { name: string; content: string }[] = [
    { name: 'keywords', content: input.keywords },
  ];

  if (input.ogImage) {
    additionalMetaTags.push(
      { name: 'twitter:image', content: input.ogImage },
      { name: 'twitter:title', content: ogTitle },
      { name: 'twitter:description', content: input.description },
    );
  }

  return {
    title: input.title,
    description: input.description,
    canonical,
    additionalMetaTags,
    robotsProps: defaultRobotsProps,
    openGraph: buildOpenGraph({
      url: canonical,
      title: ogTitle,
      description: input.description,
      imageUrl: input.ogImage,
      imageAlt: input.ogImageAlt,
    }),
    twitter: buildTwitter(),
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        webPage(pathname, input.title, input.description),
        breadcrumb(pathname, input.breadcrumbs),
        buildBusinessRatingJsonLd(input.reviewsData),
        ...(input.service
          ? [
            serviceSchema(
              pathname,
              input.service.name,
              input.service.description,
            ),
          ]
          : []),
        ...(input.jsonLdExtra ?? []),
      ],
    },
  };
}

/** Fetches live Google reviews (cached per build) and builds page SEO props. */
export async function fetchPageSeo(
  pageUrl: URL,
  input: PageSeoInput,
): Promise<AstroSeoProps> {
  const reviewsData = await getGoogleReviews();
  const pathname = normalizeCanonicalPath(input.pathname);

  const reviewSchema =
    input.includeReviewSchema && input.reviewSchemaCityName
      ? [
        buildLocalMoverJsonLd({
          pathname,
          cityName: input.reviewSchemaCityName,
          reviewsData,
          includeReviews: true,
        }),
      ]
      : [];

  return buildPageSeo(pageUrl, {
    ...input,
    reviewsData,
    jsonLdExtra: [...reviewSchema, ...(input.jsonLdExtra ?? [])],
  });
}
