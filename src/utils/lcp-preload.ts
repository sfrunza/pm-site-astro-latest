import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/** Preload URL for LCP hero images (WebP). */
export async function getLcpPreload(
  src: ImageMetadata,
  options: { width?: number; quality?: number } = {},
): Promise<string> {
  const { width = 1920, quality = 60 } = options;
  const optimized = await getImage({
    src,
    width,
    format: 'webp',
    quality,
  });
  return optimized.src;
}
