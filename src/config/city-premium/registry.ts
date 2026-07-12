import type { CityPremiumContent } from '@/config/city-premium/types';

const premiumModules = import.meta.glob<{ [exportName: string]: unknown }>(
  '../../content/ma-cities/*-content.ts',
  { eager: true },
);

function isCityPremiumContent(value: unknown): value is CityPremiumContent {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Partial<CityPremiumContent>;
  return (
    typeof candidate.path === 'string' &&
    candidate.path.startsWith('/') &&
    typeof candidate.breadcrumbLabel === 'string' &&
    typeof candidate.schema?.cityName === 'string'
  );
}

function discoverPremiumCities(): CityPremiumContent[] {
  const cities: CityPremiumContent[] = [];

  for (const mod of Object.values(premiumModules)) {
    for (const [exportName, value] of Object.entries(mod)) {
      if (!exportName.endsWith('Premium')) continue;
      if (!isCityPremiumContent(value)) {
        throw new Error(
          `Invalid premium city export "${exportName}" in ma-cities — expected CityPremiumContent.`,
        );
      }
      cities.push(value);
    }
  }

  const paths = new Set<string>();
  for (const city of cities) {
    if (paths.has(city.path)) {
      throw new Error(
        `Duplicate premium city path "${city.path}" — each *Premium export must have a unique path.`,
      );
    }
    paths.add(city.path);
  }

  return cities.sort((a, b) =>
    a.schema.cityName.localeCompare(b.schema.cityName),
  );
}

/** All full-guide city landing pages (auto-discovered from `content/ma-cities/*-content.ts`). */
export const premiumCities: CityPremiumContent[] = discoverPremiumCities();

const bySlug = new Map(
  premiumCities.map((city) => [city.path.replace(/^\//, ''), city]),
);

export function getPremiumCityBySlug(
  slug: string,
): CityPremiumContent | undefined {
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
  return premiumCities.map((city) => ({
    href: city.path,
    cityName: city.schema.cityName,
    label: city.breadcrumbLabel,
  }));
}
