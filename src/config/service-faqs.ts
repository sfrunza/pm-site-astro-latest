export type ServiceFaq = {
  question: string;
  answer: string;
};

/** Per-page FAQs for visible content and FAQPage JSON-LD. */
export const serviceFaqsByPath: Record<string, ServiceFaq[]> = {
  '/local-moving': [
    {
      question: 'How much do Boston local movers charge?',
      answer:
        '<p>Local moves are billed by labor time plus travel time to and from your addresses, prorated in 15-minute increments. Request a <a href="/book">free quote</a> for a transparent estimate.</p>',
    },
    {
      question: 'Do you serve Cambridge, Somerville, and Brookline?',
      answer:
        '<p>Yes. Phoenix Moving serves Greater Boston including Cambridge, Somerville, Brookline, Newton, and surrounding communities.</p>',
    },
    {
      question: 'Are your local movers licensed and insured in Massachusetts?',
      answer:
        '<p>Yes. We are licensed with the Massachusetts Department of Public Utilities and carry cargo, motor vehicle, and general liability insurance.</p>',
    },
    {
      question: 'Can you pack and move on the same day?',
      answer:
        '<p>Yes. We offer <a href="/packing-services">packing services</a> and can coordinate packing and loading in one visit when scheduled in advance.</p>',
    },
  ],
  '/interstate-moving': [
    {
      question: 'What is included in your interstate moving price?',
      answer:
        '<p>Flat-rate long-distance quotes typically include labor, truck, fuel, mileage, tolls, and insurance. Your coordinator confirms details before booking.</p>',
    },
    {
      question: 'How far in advance should I book a long-distance move?',
      answer:
        '<p>We recommend booking 4-8 weeks ahead for interstate moves. Peak season dates fill quickly — <a href="/book">request a quote</a> early.</p>',
    },
    {
      question: 'Do you offer packing for cross-country moves?',
      answer:
        '<p>Yes. Our <a href="/packing-services">packing team</a> can prepare your home before pickup for long-distance relocation.</p>',
    },
  ],
  '/packing-services': [
    {
      question: 'Do you provide boxes and packing materials?',
      answer:
        '<p>Yes. We supply boxes, wardrobe cartons, dish packs, and protective materials. Ask about supply bundles when you <a href="/book">book your move</a>.</p>',
    },
    {
      question: 'What is full-service packing?',
      answer:
        '<p>Our crew packs your entire home room by room, labels cartons, and prepares furniture for transport — ideal when you need to focus on closing or travel.</p>',
    },
    {
      question: 'Can I pack myself and have you load only?',
      answer:
        '<p>Yes. Partial packing and load-only services are available for local and long-distance moves.</p>',
    },
  ],
  '/storage-solutions': [
    {
      question: 'Do you offer short-term storage between closings?',
      answer:
        '<p>Yes. Short-term and overnight storage options are available when your move-in date does not align with closing.</p>',
    },
    {
      question: 'Is your moving storage climate controlled?',
      answer:
        '<p>We offer temperature-controlled storage for eligible shipments. Contact us for availability and monthly rates.</p>',
    },
    {
      question: 'How is storage priced?',
      answer:
        '<p>Rates depend on volume and duration. See <a href="/pricing">moving prices</a> for starting points or request a custom quote.</p>',
    },
  ],
  '/piano-moving': [
    {
      question: 'How much does piano moving cost in Boston?',
      answer:
        '<p>Piano moving quotes depend on instrument type, stairs, distance, and access. <a href="/book">Get a free estimate</a> with your piano details.</p>',
    },
    {
      question: 'Do you move baby grand and upright pianos?',
      answer:
        '<p>Yes. We move upright, baby grand, and grand pianos using piano boards, straps, and floor protection.</p>',
    },
    {
      question: 'Will my piano be insured during the move?',
      answer:
        '<p>Yes. Piano moves are performed by licensed, insured crews. Your coordinator reviews coverage before move day.</p>',
    },
  ],
  '/book': [
    {
      question: 'How do I book Boston movers online?',
      answer:
        '<p>Complete the form on this page with your addresses, date, and inventory. We respond with a free, no-obligation quote.</p>',
    },
    {
      question: 'Is the online moving quote free?',
      answer:
        '<p>Yes. Online estimates are free with no obligation to book.</p>',
    },
    {
      question: 'How quickly will I hear back after I submit the form?',
      answer:
        '<p>Most requests receive a response within one business day. For urgent moves, call us directly.</p>',
    },
  ],
  '/pricing': [
    {
      question: 'How are Boston moving prices calculated?',
      answer:
        '<p>Local moves use hourly labor plus travel time. Long-distance moves use flat-rate pricing. See service pages for details or <a href="/book">request a quote</a>.</p>',
    },
    {
      question: 'Is there a deposit to reserve my move?',
      answer:
        '<p>Local moves require a $100 deposit. Long-distance moves require a 10% deposit from the final price.</p>',
    },
    {
      question: 'Are packing materials included in the listed rates?',
      answer:
        '<p>Packing supply and labor are quoted separately. Visit <a href="/packing-services">packing services</a> for options.</p>',
    },
  ],
};

export type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

/** Topic-cluster internal links (hub ↔ supporting pages). */
export const relatedLinksByPath: Record<string, RelatedLink[]> = {
  '/': [
    {
      href: '/local-moving',
      label: 'Boston local movers',
      description: 'Residential and commercial moves across Greater Boston.',
    },
    {
      href: '/pricing',
      label: 'Moving prices & rates',
      description: 'Transparent pricing for local and long-distance moves.',
    },
    {
      href: '/book',
      label: 'Book your move online',
      description: 'Free, no-obligation quote in minutes.',
    },
  ],
  '/local-moving': [
    {
      href: '/packing-services',
      label: 'Packing services',
      description: 'Full or partial packing before your local move.',
    },
    {
      href: '/storage-solutions',
      label: 'Storage solutions',
      description: 'Short- and long-term storage between closings.',
    },
    {
      href: '/book',
      label: 'Get a free moving quote',
      description: 'Schedule Boston local movers online.',
    },
  ],
  '/interstate-moving': [
    {
      href: '/packing-services',
      label: 'Packing for long-distance moves',
      description: 'Professional packing before interstate pickup.',
    },
    {
      href: '/storage-solutions',
      label: 'Storage between destinations',
      description: 'Hold belongings until delivery is ready.',
    },
    {
      href: '/book',
      label: 'Request an interstate quote',
      description: 'Flat-rate long-distance estimates.',
    },
  ],
  '/packing-services': [
    {
      href: '/local-moving',
      label: 'Local moving services',
      description: 'Pair packing with our Boston moving crews.',
    },
    {
      href: '/interstate-moving',
      label: 'Interstate moving',
      description: 'Long-distance moves with optional packing.',
    },
    {
      href: '/book',
      label: 'Book packing & moving',
      description: 'Combine services in one quote.',
    },
  ],
  '/storage-solutions': [
    {
      href: '/local-moving',
      label: 'Local moving',
      description: 'Move in, store, or move out with one team.',
    },
    {
      href: '/pricing',
      label: 'Storage & moving prices',
      description: 'Monthly and overnight storage rates.',
    },
    {
      href: '/book',
      label: 'Get a storage quote',
      description: 'Tell us your timeline and volume.',
    },
  ],
  '/piano-moving': [
    {
      href: '/local-moving',
      label: 'Local moving services',
      description: 'Full-home moves with specialized piano handling.',
    },
    {
      href: '/packing-services',
      label: 'Packing services',
      description: 'Protect valuables beyond your piano.',
    },
    {
      href: '/book',
      label: 'Book piano movers',
      description: 'Free estimate for upright and grand pianos.',
    },
  ],
  '/pricing': [
    {
      href: '/local-moving',
      label: 'Local moving services',
      description: 'Hourly Boston mover rates explained.',
    },
    {
      href: '/interstate-moving',
      label: 'Interstate moving',
      description: 'Flat-rate long-distance pricing.',
    },
    {
      href: '/book',
      label: 'Get your custom quote',
      description: 'Pricing tailored to your inventory.',
    },
  ],
  '/book': [
    {
      href: '/local-moving',
      label: 'Local moving services',
      description: 'Learn what our Boston crews include.',
    },
    {
      href: '/pricing',
      label: 'Moving prices',
      description: 'Review rates before you book.',
    },
    {
      href: '/faq',
      label: 'Moving FAQ',
      description: 'Payments, deposits, and move-day details.',
    },
  ],
  '/faq': [
    {
      href: '/book',
      label: 'Book your move',
      description: 'Ready to schedule? Start your free quote.',
    },
    {
      href: '/local-moving',
      label: 'Local moving',
      description: 'Service areas and local move details.',
    },
    {
      href: '/pricing',
      label: 'Pricing',
      description: 'How local and long-distance rates work.',
    },
  ],
};

import { normalizeCanonicalPath } from '@/seo';

/** Strip trailing slashes so lookups work in dev and directory-format production builds. */
export function normalizePathKey(pathname: string): string {
  return normalizeCanonicalPath(pathname);
}

export function getServiceFaqs(pathname: string): ServiceFaq[] {
  return serviceFaqsByPath[normalizePathKey(pathname)] ?? [];
}

export function getRelatedLinks(pathname: string): RelatedLink[] {
  return relatedLinksByPath[normalizePathKey(pathname)] ?? [];
}
