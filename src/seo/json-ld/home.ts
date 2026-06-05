import { services } from '@/config/services';
import { SITE } from '@/config/site';
import type { GooglePlaceReviews } from '@/lib/google-reviews';
import {
  BUSINESS_ID,
  LOGO_URL,
  OG_IMAGE,
  ORGANIZATION_ID,
  sameAsProfiles,
  WEBSITE_ID,
} from '@/seo/constants';
import {
  buildAggregateRatingSchema,
  buildReviewSchemas,
} from '@/seo/reviews';
import { breadcrumb, webPage } from '@/seo/json-ld/shared';

function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE.businessShortName,
    legalName: SITE.businessName,
    url: `${SITE.url}/`,
    logo: LOGO_URL,
    image: OG_IMAGE,
    description: SITE.description,
    telephone: SITE.schema.telephone,
    email: SITE.contactEmail,
    address: SITE.schema.address,
    sameAs: [...sameAsProfiles],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: SITE.schema.telephone,
      email: SITE.contactEmail,
      areaServed: 'US',
      availableLanguage: 'English',
    },
  };
}

function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.businessShortName,
    description: SITE.description,
    inLanguage: SITE.locale.replace('_', '-'),
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/** Homepage-only structured data (Organization, WebSite, LocalBusiness, services). */
export function getHomeJsonLd(
  reviewsData?: GooglePlaceReviews,
): Record<string, unknown> {
  const reviewSchemas = reviewsData ? buildReviewSchemas(reviewsData) : [];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(),
      websiteSchema(),
      {
        '@type': ['LocalBusiness', 'MovingCompany'],
        '@id': BUSINESS_ID,
        name: SITE.businessShortName,
        url: `${SITE.url}/`,
        logo: LOGO_URL,
        image: OG_IMAGE,
        telephone: SITE.schema.telephone,
        email: SITE.contactEmail,
        address: SITE.schema.address,
        parentOrganization: { '@id': ORGANIZATION_ID },
        areaServed: [
          { '@type': 'City', name: 'Boston' },
          { '@type': 'State', name: 'Massachusetts' },
        ],
        priceRange: SITE.schema.priceRange,
        openingHours: SITE.schema.openingHours,
        sameAs: [...sameAsProfiles],
        aggregateRating: buildAggregateRatingSchema(reviewsData),
        ...(reviewSchemas.length > 0 ? { review: reviewSchemas } : {}),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Moving Services',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
            },
          })),
        },
      },
      webPage('/', SITE.title, SITE.description),
      breadcrumb('/', [{ name: 'Home', path: '/' }]),
    ],
  };
}
