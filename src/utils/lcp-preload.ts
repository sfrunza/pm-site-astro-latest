import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/** Matches Astro Picture full-width hero breakpoints. */
const HERO_LCP_WIDTHS = [640, 750, 828, 1080, 1280] as const;

/** Same preset as `<Picture quality="mid" />`. */
const HERO_LCP_QUALITY = 50;

export type LcpPreloadLink = {
  href: string;
  srcset: string;
  type: 'image/avif' | 'image/webp';
};

type LcpPreloadOptions = {
  /** Single width (e.g. blog hero). Omit for responsive hero srcset. */
  width?: number;
  quality?: number;
  format?: 'avif' | 'webp';
};

/** Preload metadata aligned with Picture AVIF/WebP srcsets. */
export async function getLcpPreload(
  src: ImageMetadata,
  options: LcpPreloadOptions = {},
): Promise<LcpPreloadLink> {
  const { width, quality = HERO_LCP_QUALITY, format = 'avif' } = options;

  if (width != null) {
    const optimized = await getImage({ src, width, format, quality });
    return {
      href: optimized.src,
      srcset: `${optimized.src} ${width}w`,
      type: format === 'avif' ? 'image/avif' : 'image/webp',
    };
  }

  const srcsetParts = await Promise.all(
    HERO_LCP_WIDTHS.map(async (w) => {
      const optimized = await getImage({ src, width: w, format, quality });
      return `${optimized.src} ${w}w`;
    }),
  );

  const fallback = await getImage({ src, width: 828, format, quality });

  return {
    href: fallback.src,
    srcset: srcsetParts.join(', '),
    type: format === 'avif' ? 'image/avif' : 'image/webp',
  };
}
