import { SITE } from '@/config/site';
import { OG_IMAGE } from '@/seo/constants';

export function buildOpenGraph(opts: {
  url: string;
  title: string;
  description: string;
  type?: string;
  /** Absolute URL; defaults to site og-image.jpg */
  imageUrl?: string;
  imageAlt?: string;
}) {
  const imageUrl = opts.imageUrl ?? OG_IMAGE;
  const imageAlt =
    opts.imageAlt ??
    `${SITE.businessShortName} — professional movers in Boston, MA`;

  return {
    url: opts.url,
    type: opts.type ?? 'website',
    title: opts.title,
    description: opts.description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: imageAlt,
      },
    ],
    site_name: SITE.businessShortName,
    locale: SITE.locale,
  };
}

export function buildTwitter() {
  return {
    handle: SITE.twitterHandle,
    site: SITE.twitterHandle,
    cardType: 'summary_large_image',
  };
}
