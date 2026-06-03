import type { RelatedLink } from '@/config/service-faqs';

const SERVICE_LINKS: RelatedLink[] = [
  {
    href: '/local-moving',
    label: 'Local Moving',
    description:
      'Licensed Boston-area crews for apartments, condos, and homes.',
  },
  {
    href: '/interstate-moving',
    label: 'Interstate Moving',
    description: 'Long-distance relocations with dedicated coordinators.',
  },
  {
    href: '/packing-services',
    label: 'Packing Services',
    description: 'Full or partial packing with professional materials.',
  },
  {
    href: '/pricing',
    label: 'Moving Pricing',
    description: 'Transparent hourly and flat-rate options for MA moves.',
  },
  {
    href: '/book',
    label: 'Book Your Move',
    description: 'Request a free estimate online in minutes.',
  },
];

/** Default service cluster links for blog footers. */
export function getBlogRelatedServices(
  preferred: string[] = ['/local-moving', '/packing-services', '/book'],
): RelatedLink[] {
  const picked = preferred
    .map((href) => SERVICE_LINKS.find((l) => l.href === href))
    .filter((l): l is RelatedLink => Boolean(l));
  const rest = SERVICE_LINKS.filter(
    (l) => !picked.some((p) => p.href === l.href),
  );
  return [...picked, ...rest].slice(0, 3);
}
