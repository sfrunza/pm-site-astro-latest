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
  type ServiceAreaServed,
  webPage,
} from '@/seo/json-ld';
import { buildBusinessRatingJsonLd } from '@/seo/reviews';
import { buildOpenGraph, buildTwitter } from '@/seo/open-graph';
import type { BreadcrumbItem } from '@/seo/breadcrumbs';
import type { AstroSeoProps } from '@/seo/types';

export type PageSeoInput = {
  title: string;
  description: string;
  keywords: string;
  pathname: string;
  breadcrumbs: BreadcrumbItem[];
  service?: {
    name: string;
    description: string;
    areaServed?: ServiceAreaServed | ServiceAreaServed[];
  };
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
  noindex?: boolean;
};

export type PageSeoBuildInput = PageSeoInput & {
  reviewsData?: GooglePlaceReviews;
};

export type PageSeoResult = AstroSeoProps & {
  breadcrumbItems: BreadcrumbItem[];
};

/** Builds Layout SEO props from the current page URL and page-specific fields. */
export function buildPageSeo(
  _pageUrl: URL,
  input: PageSeoBuildInput,
): PageSeoResult {
  const pathname = normalizeCanonicalPath(input.pathname);
  const canonical = input.canonical ?? canonicalUrl(pathname);

  const additionalMetaTags: { name: string; content: string }[] = [
    { name: 'keywords', content: input.keywords },
  ];

  if (input.ogImage) {
    additionalMetaTags.push(
      { name: 'twitter:image', content: input.ogImage },
      { name: 'twitter:title', content: input.title },
      { name: 'twitter:description', content: input.description },
    );
  }

  return {
    title: input.title,
    description: input.description,
    canonical,
    additionalMetaTags,
    noindex: input.noindex,
    robotsProps: defaultRobotsProps,
    openGraph: buildOpenGraph({
      url: canonical,
      title: input.title,
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
              input.service.areaServed,
            ),
          ]
          : []),
        ...(input.jsonLdExtra ?? []),
      ],
    },
    breadcrumbItems: input.breadcrumbs,
  };
}

/** Fetches live Google reviews (cached per build) and builds page SEO props. */
export async function fetchPageSeo(
  pageUrl: URL,
  input: PageSeoInput,
): Promise<PageSeoResult> {
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
