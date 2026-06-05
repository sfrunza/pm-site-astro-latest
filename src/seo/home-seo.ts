import type { GooglePlaceReviews } from '@/lib/google-reviews';
import { SITE } from '@/config/site';
import { getGoogleReviews } from '@/lib/google-reviews';
import { canonicalUrl } from '@/seo/canonical';
import { defaultRobotsProps } from '@/seo/constants';
import { getHomeJsonLd } from '@/seo/json-ld/home';
import { buildOpenGraph, buildTwitter } from '@/seo/open-graph';
import type { AstroSeoProps } from '@/seo/types';

export function homeSeo(
  _url: URL,
  reviewsData?: GooglePlaceReviews,
): AstroSeoProps {
  const canonical = canonicalUrl('/');
  return {
    title: `${SITE.businessShortName} — Boston Moving Company (Free Estimate)`,
    description: SITE.description,
    canonical,
    additionalMetaTags: [{ name: 'keywords', content: SITE.keywords }],
    robotsProps: defaultRobotsProps,
    openGraph: buildOpenGraph({
      url: canonical,
      title: SITE.businessShortName,
      description: SITE.description,
    }),
    twitter: buildTwitter(),
    jsonLd: getHomeJsonLd(reviewsData),
  };
}

/** Homepage SEO with full review schema (reviews visible via Reviews1). */
export async function fetchHomeSeo(pageUrl: URL): Promise<AstroSeoProps> {
  const reviewsData = await getGoogleReviews();
  return homeSeo(pageUrl, reviewsData);
}
