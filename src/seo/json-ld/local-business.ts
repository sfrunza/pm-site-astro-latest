import { services } from '@/config/services';
import { SITE } from '@/config/site';
import type { GooglePlaceReviews } from '@/lib/google-reviews';
import {
  LOGO_URL,
  OG_IMAGE,
  ORGANIZATION_ID,
  sameAsProfiles,
} from '@/seo/constants';
import { buildReviewSchemas } from '@/seo/reviews';

export type LocalMoverJsonLdInput = {
  pathname: string;
  cityName: string;
  /** Optional hero or logo image URL for LocalBusiness.image */
  image?: string;
  areaServed?: Array<
    | { '@type': 'City'; name: string }
    | { '@type': 'PostalCode'; name: string }
    | { '@type': 'State'; name: string }
  >;
  geo?: { latitude: number; longitude: number };
  /** When reviews are visible on the page, include rating + review schema. */
  reviewsData?: GooglePlaceReviews;
  includeReviews?: boolean;
};

/** City landing page LocalBusiness / MovingCompany node (links to site #business). */
export function buildLocalMoverJsonLd(
  input: LocalMoverJsonLdInput,
): Record<string, unknown> {
  const reviewSchemas =
    input.includeReviews && input.reviewsData
      ? buildReviewSchemas(input.reviewsData)
      : [];
  const url = `${SITE.url}${input.pathname}`;
  const address = SITE.businessAddresses[0];
  const geo = input.geo ?? {
    latitude: SITE.schema.serviceArea.geoMidpoint.latitude,
    longitude: SITE.schema.serviceArea.geoMidpoint.longitude,
  };

  return {
    '@type': ['LocalBusiness', 'MovingCompany'],
    '@id': `${url}#localbusiness`,
    name: `${SITE.businessShortName} — ${input.cityName}`,
    url,
    logo: LOGO_URL,
    image: input.image ?? OG_IMAGE,
    telephone: SITE.contactPhone,
    email: SITE.contactEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.address,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    parentOrganization: { '@id': ORGANIZATION_ID },
    areaServed: input.areaServed ?? [
      { '@type': 'City', name: input.cityName },
      { '@type': 'State', name: 'Massachusetts' },
    ],
    priceRange: SITE.schema.priceRange,
    openingHours: SITE.schema.openingHours,
    sameAs: [...sameAsProfiles],
    ...(reviewSchemas.length > 0 ? { review: reviewSchemas } : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${input.cityName} Moving Services`,
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
        },
      })),
    },
  };
}
