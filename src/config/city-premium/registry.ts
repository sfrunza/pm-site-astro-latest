import { bostonPremium } from '@/content/ma-cities/boston-content';
import { dedhamPremium } from '@/content/ma-cities/dedham-content';
import { natickPremium } from '@/content/ma-cities/natick-content';
import { newtonPremium } from '@/content/ma-cities/newton-content';
import type { CityPremiumContent } from '@/config/city-premium/types';

/** All full-guide city landing pages. Add a `{city}-content.ts` + `*Premium` export, then register here. */
export const premiumCities: CityPremiumContent[] = [
  bostonPremium,
  natickPremium,
  dedhamPremium,
  newtonPremium,
];

const bySlug = new Map(
  premiumCities.map((city) => [city.path.replace(/^\//, ''), city]),
);

export function getPremiumCityBySlug(slug: string): CityPremiumContent | undefined {
  return bySlug.get(slug.replace(/^\//, ''));
}

export function getPremiumCityPaths(): string[] {
  return [...bySlug.keys()];
}

export function getPremiumSitemapEntries(): { label: string; href: string }[] {
  return premiumCities.map((city) => ({
    label: `${city.breadcrumbLabel} (full guide)`,
    href: city.path,
  }));
}

export type PremiumCityLink = {
  href: string;
  cityName: string;
  label: string;
};

/** Sorted links for homepage / service-area grids. */
export function getPremiumCityLinks(): PremiumCityLink[] {
  return premiumCities
    .map((city) => ({
      href: city.path,
      cityName: city.schema.cityName,
      label: city.breadcrumbLabel,
    }))
    .sort((a, b) => a.cityName.localeCompare(b.cityName));
}