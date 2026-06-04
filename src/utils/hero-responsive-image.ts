import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/** Breakpoints aligned with Astro Picture `layout="full-width"`. */
export const HERO_WIDTHS = [640, 750, 828, 1080, 1280] as const;

type FormatSet = {
  srcset: string;
  /** ~828w candidate for preload href */
  href: string;
};

export type HeroResponsiveImage = {
  avif: FormatSet;
  webp: FormatSet;
  width: number;
  height: number;
};

/** One getImage pass per width — reuse srcset for preload + <picture>. */
export async function buildHeroResponsiveImage(
  src: ImageMetadata,
): Promise<HeroResponsiveImage> {
  const buildFormat = async (format: 'avif' | 'webp'): Promise<FormatSet> => {
    const images = await Promise.all(
      HERO_WIDTHS.map((width) =>
        getImage({ src, width, format, quality: 50 }),
      ),
    );
    return {
      srcset: images
        .map((img, i) => `${img.src} ${HERO_WIDTHS[i]}w`)
        .join(', '),
      href: images[2].src,
    };
  };

  const [avif, webp] = await Promise.all([
    buildFormat('avif'),
    buildFormat('webp'),
  ]);

  return { avif, webp, width: src.width, height: src.height };
}
