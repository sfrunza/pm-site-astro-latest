/**
 * Central SEO module — import from `@/seo` in pages and layouts.
 *
 * Structure:
 * - page-seo.ts      → buildPageSeo / fetchPageSeo (standard pages)
 * - home-seo.ts      → fetchHomeSeo (homepage)
 * - blog-seo.ts      → fetchBlogPostSeo (blog posts)
 * - city-premium-seo → fetchCityPremiumPageSeo (premium city landings)
 * - service-page-schema.ts → FAQ/HowTo JSON-LD for service pages
 * - social-image.ts  → OG/Twitter image URLs from hero assets
 * - json-ld/         → structured data builders
 * - open-graph.ts    → OG + Twitter card objects
 * - canonical.ts     → URL normalization
 * - reviews.ts       → Google review schema helpers
 * - build-tags.ts    → HTML meta tag renderer
 * - AstroSeo.astro   → Layout head component
 */

// Page builders (what most .astro files import)
export { buildPageSeo, fetchPageSeo } from '@/seo/page-seo';
export type { PageSeoBuildInput, PageSeoInput } from '@/seo/page-seo';
export { fetchHomeSeo, homeSeo } from '@/seo/home-seo';
export { fetchBlogPostSeo } from '@/seo/blog-seo';
export type { BlogSeoPost } from '@/seo/json-ld';
export { fetchCityPremiumPageSeo } from '@/seo/city-premium-seo';
export { servicePageJsonLd } from '@/seo/service-page-schema';
export {
  getBlogImageUrl,
  getSocialImageUrl,
} from '@/seo/social-image';

// JSON-LD helpers (used inline on some pages)
export {
  buildArticleJsonLd,
  buildBlogListingJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildLocalMoverJsonLd,
  getHomeJsonLd,
  stripHtmlForSchema,
} from '@/seo/json-ld';
export type { LocalMoverJsonLdInput } from '@/seo/json-ld';

// URL + freshness utilities
export {
  canonicalUrl,
  normalizeCanonicalPath,
} from '@/seo/canonical';
export {
  CONTENT_DATE_MODIFIED,
  CONTENT_DATE_PUBLISHED,
} from '@/seo/constants';

// Meta tag rendering
export { buildTags } from '@/seo/build-tags';

// Types
export type { AstroSeoProps } from '@/seo/types';
