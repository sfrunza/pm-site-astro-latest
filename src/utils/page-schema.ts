import { getServiceFaqs } from '@/config/service-faqs';
import { movingHowToSchemaSteps } from '@/config/moving-howto';
import {
  buildFaqJsonLd,
  buildHowToJsonLd,
  stripHtmlForSchema,
} from '@/config/seo';

type HowToInput = {
  name: string;
  description: string;
};

/** FAQPage (+ optional HowTo) JSON-LD for service and conversion pages. */
export function servicePageJsonLd(
  pathname: string,
  howTo?: HowToInput,
): Record<string, unknown>[] {
  const extras: Record<string, unknown>[] = [];
  const faqs = getServiceFaqs(pathname);

  if (faqs.length > 0) {
    extras.push(
      buildFaqJsonLd(
        pathname,
        faqs.map((faq) => ({
          question: faq.question,
          answer: stripHtmlForSchema(faq.answer),
        })),
      ),
    );
  }

  if (howTo) {
    extras.push(
      buildHowToJsonLd(
        pathname,
        howTo.name,
        howTo.description,
        movingHowToSchemaSteps,
      ),
    );
  }

  return extras;
}
