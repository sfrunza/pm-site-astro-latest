import type { ImageMetadata } from 'astro';
import type { CityPremiumContent } from '@/config/city-premium/types';
import { getSocialImageUrl } from '@/seo';
import { getCityHeroImage, getCityLogoImage } from '@/utils/city-image';

export type CityPremiumAssets = {
  cityHero: ImageMetadata;
  cityLogo: ImageMetadata;
  socialImageUrl?: string;
};

export async function resolveCityPremiumAssets(
  content: CityPremiumContent,
  siteBase: string,
): Promise<CityPremiumAssets> {
  const cityHero = getCityHeroImage(content.imageSlug)!;
  const cityLogo = getCityLogoImage(content.imageSlug)!;

  const socialImageUrl = await getSocialImageUrl(cityHero, siteBase);

  return { cityHero, cityLogo, socialImageUrl };
}
