import type { ImageMetadata } from 'astro';
import type { CityPremiumContent } from '@/config/city-premium/types';
import { getSocialImageUrl } from '@/utils/blog-image-url';
import { getCityHeroImage, getCityLogoImage } from '@/utils/city-image';
import { getLcpPreload } from '@/utils/lcp-preload';

export type CityPremiumAssets = {
  cityHero: ImageMetadata;
  cityLogo: ImageMetadata;
  lcpPreload: string;
  socialImageUrl?: string;
};

export async function resolveCityPremiumAssets(
  content: CityPremiumContent,
  siteBase: string,
): Promise<CityPremiumAssets> {
  const cityHero = getCityHeroImage(content.imageSlug)!;
  const cityLogo = getCityLogoImage(content.imageSlug)!;

  const [lcpPreload, socialImageUrl] = await Promise.all([
    getLcpPreload(cityHero),
    getSocialImageUrl(cityHero, siteBase),
  ]);

  return { cityHero, cityLogo, lcpPreload, socialImageUrl };
}
