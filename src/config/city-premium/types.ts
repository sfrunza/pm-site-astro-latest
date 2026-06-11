import type { Faq } from '@/blocks/faq/faqs';
import type { MovingStep } from '@/config/moving-howto';
import type { RelatedLink } from '@/config/service-faqs';
import type { SvgComponent } from 'astro/types';

export type CityPremiumReview = {
  author: string;
  location: string;
  rating: number;
  text: string;
};

export type CityPremiumCard = {
  title: string;
  description: string;
};

export type CityPremiumWhyFeature = {
  name: string;
  description: string;
  icon: SvgComponent;
};

export type CityPremiumGeo = {
  latitude: number;
  longitude: number;
};

export type CityPremiumSchema = {
  cityName: string;
  postalCode: string;
  geo: CityPremiumGeo;
  areaServed?: Array<
    | { '@type': 'City'; name: string }
    | { '@type': 'PostalCode'; name: string }
    | { '@type': 'State'; name: string }
  >;
};

export type CityPremiumSeo = {
  title: string;
  description: string;
  serviceName: string;
  serviceDescription: string;
  howToName: string;
  howToDescription: string;
};

/** Reorderable body sections (hero, trust, intro always render first). */
export type CityPremiumSectionId =
  | 'services'
  | 'movingInCity'
  | 'moveTypes'
  | 'whyChoose'
  | 'howTo'
  | 'neighborhoods'
  | 'midCta'
  | 'pricing'
  | 'commercial'
  | 'localGuide'
  | 'prepTips'
  | 'movingChecklist'
  | 'reviews'
  | 'faq'
  | 'related';

export const DEFAULT_CITY_PREMIUM_SECTION_ORDER: CityPremiumSectionId[] = [
  'services',
  'movingInCity',
  'moveTypes',
  'whyChoose',
  'howTo',
  'neighborhoods',
  'midCta',
  'pricing',
  'commercial',
  'prepTips',
  'movingChecklist',
  'reviews',
  'faq',
  'related',
];

/** Slug used by `getCityHeroImage` / `getCityLogoImage` (e.g. `natick-movers`). */
export type CityPremiumContent = {
  path: string;
  imageSlug: string;
  legacySlug?: string;
  keywords: string;
  ogImageAlt: string;
  schema: CityPremiumSchema;
  seo: CityPremiumSeo;
  breadcrumbLabel: string;
  hero: { title: string; subtitle: string };
  directAnswer: string;
  intro: {
    label: string;
    title: string;
    imageAlt: string;
    trustLead: string;
    /** Index into SITE.businessAddresses (e.g. 1 for Newton office). */
    officeIndex?: number;
  };
  /** Custom section order so premium pages do not share identical layouts. */
  sectionOrder?: CityPremiumSectionId[];
  trustFeatures: string[];
  services?: { label: string; title: string; subtitle: string };
  movingInCity?: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    imageAlt: string;
  };
  moveTypes?: {
    label: string;
    title: string;
    subtitle: string;
    items: CityPremiumCard[];
    quoteButtonLabel?: string;
    showPianoLink?: boolean;
  };
  whyChoose: {
    label: string;
    title: string;
    subtitle: string;
    features: CityPremiumWhyFeature[];
  };
  howTo: {
    label: string;
    title: string;
    subtitle: string;
    steps: MovingStep[];
  };
  neighborhoods: {
    label: string;
    title: string;
    subtitle: string;
    areas: CityPremiumCard[];
    nearbyHeading?: string;
  };
  nearbyTowns: RelatedLink[];
  midCta?: {
    title: string;
    description: string;
  };
  pricing: {
    label: string;
    title: string;
    subtitle: string;
    factors?: CityPremiumCard[];
  };
  commercial?: {
    label: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    imageAlt: string;
  };
  prepTips?: {
    label: string;
    title: string;
    subtitle: string;
    tips: string[];
  };
  /** Extra long-form copy block for GEO depth (optional). */
  localGuide?: {
    label: string;
    title: string;
    subtitle?: string;
    paragraphs: string[];
  };
  movingChecklist: boolean
  reviews: boolean;
  faq: {
    title: string;
    label: string;
    groupName: string;
    items: Faq[];
  };
  relatedLinks: RelatedLink[];
  relatedTitle: string;
  finalCta: {
    title: string;
    description: string;
  };
};
