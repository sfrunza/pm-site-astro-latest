import { SITE } from '@/config/site';

export const OG_IMAGE = new URL(SITE.ogImage, SITE.url).href;
export const LOGO_URL = new URL(SITE.logo, SITE.url).href;
export const ORGANIZATION_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const BUSINESS_ID = `${SITE.url}/#business`;

/** Update when substantive page content changes (Tier 3 freshness). */
export const CONTENT_DATE_MODIFIED = '2026-05-28';
export const CONTENT_DATE_PUBLISHED = '2024-01-15';

export const sameAsProfiles = [
  SITE.businessUrls.facebook,
  SITE.businessUrls.instagram,
  SITE.businessUrls.yelp,
] as const;

/** Shared robots directives (matches homepage). */
export const defaultRobotsProps = {
  maxSnippet: -1,
  maxImagePreview: 'large' as const,
  maxVideoPreview: -1,
};
