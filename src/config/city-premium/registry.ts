import { dedhamPremium } from '@/config/dedham-content';
import { natickPremium } from '@/config/natick-content';
import { newtonPremium } from '@/config/newton-content';
import type { CityPremiumContent } from '@/config/city-premium/types';

/** All full-guide city landing pages. Add a `{city}-content.ts` + `*Premium` export, then register here. */
export const premiumCities: CityPremiumContent[] = [
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

/** Re-export paths for legacy slug canonical overrides. */
export { NATICK_PATH } from '@/config/natick-content';
export { DEDHAM_PATH } from '@/config/dedham-content';
export { NEWTON_PATH } from '@/config/newton-content';
