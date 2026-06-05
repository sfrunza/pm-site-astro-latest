import { SITE } from '@/config/site';

export function buildFaqJsonLd(
  pathname: string,
  faqs: { question: string; answer: string }[],
): Record<string, unknown> {
  const url = `${SITE.url}${pathname}`;
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** Strips HTML for FAQ schema answer text. */
export function stripHtmlForSchema(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
