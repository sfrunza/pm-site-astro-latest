import type { CityPremiumContent } from '@/config/city-premium/types';
import { getGoogleReviews } from '@/lib/google-reviews';
import {
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildLocalMoverJsonLd,
  stripHtmlForSchema,
} from '@/seo/json-ld';
import { buildPageSeo } from '@/seo/page-seo';
import type { AstroSeoProps } from '@/seo/types';

/** Fetches reviews once (cached per build) and builds city premium SEO. */
export async function fetchCityPremiumPageSeo(
  content: CityPremiumContent,
  pageUrl: URL,
  socialImageUrl?: string,
): Promise<AstroSeoProps> {
  const reviewsData = await getGoogleReviews();
  return buildCityPremiumPageSeo(content, pageUrl, socialImageUrl, reviewsData);
}

function buildCityPremiumPageSeo(
  content: CityPremiumContent,
  pageUrl: URL,
  socialImageUrl: string | undefined,
  reviewsData: Awaited<ReturnType<typeof getGoogleReviews>>,
): AstroSeoProps {
  const pathname = content.path;

  const jsonLdExtra = [
    buildLocalMoverJsonLd({
      pathname,
      cityName: content.schema.cityName,
      image: socialImageUrl,
      addressIndex: content.schema.officeIndex,
      areaServed: content.schema.areaServed ?? [
        { '@type': 'City', name: content.schema.cityName },
        { '@type': 'PostalCode', name: content.schema.postalCode },
        { '@type': 'State', name: 'Massachusetts' },
      ],
      geo: content.schema.geo,
      reviewsData,
      includeReviews: content.reviews,
    }),
    buildFaqJsonLd(
      pathname,
      content.faq.items.map((faq) => ({
        question: faq.question,
        answer: stripHtmlForSchema(faq.answer),
      })),
    ),
    buildHowToJsonLd(
      pathname,
      content.seo.howToName,
      content.seo.howToDescription,
      content.howTo.steps.map((step) => ({
        name: step.title,
        text: step.description,
      })),
    ),
  ];

  return buildPageSeo(pageUrl, {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.keywords,
    pathname,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Local Moving', path: '/local-moving' },
      { name: content.breadcrumbLabel, path: pathname },
    ],
    service: {
      name: content.seo.serviceName,
      description: content.seo.serviceDescription,
    },
    ogImage: socialImageUrl,
    ogImageAlt: content.ogImageAlt,
    reviewsData,
    jsonLdExtra,
  });
}
