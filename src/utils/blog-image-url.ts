import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import { SITE } from '@/config/site';

/** Absolute URL for OG / Twitter / JSON-LD (1200×630 WebP). */
export async function getSocialImageUrl(
  image: ImageMetadata | undefined,
  site: URL | string = SITE.url,
): Promise<string | undefined> {
  if (!image) return undefined;

  const optimized = await getImage({
    src: image,
    width: 1200,
    height: 630,
    format: 'webp',
    quality: 80,
  });

  return new URL(optimized.src, site).href;
}

/** @deprecated Use getSocialImageUrl */
export const getBlogImageUrl = getSocialImageUrl;
