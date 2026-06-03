import type { CityPremiumContent } from '@/config/city-premium/types';
import type { AstroSeoProps } from '@/types/seo';
import {
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildLocalMoverJsonLd,
  buildPageSeo,
  stripHtmlForSchema,
} from '@/config/seo';

export function buildCityPremiumPageSeo(
  content: CityPremiumContent,
  pageUrl: URL,
  socialImageUrl?: string,
): AstroSeoProps {
  const pathname = content.path;

  const jsonLdExtra = [
    buildLocalMoverJsonLd({
      pathname,
      cityName: content.schema.cityName,
      image: socialImageUrl,
      areaServed: content.schema.areaServed ?? [
        { '@type': 'City', name: content.schema.cityName },
        { '@type': 'PostalCode', name: content.schema.postalCode },
        { '@type': 'State', name: 'Massachusetts' },
      ],
      geo: content.schema.geo,
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
    jsonLdExtra,
  });
}
