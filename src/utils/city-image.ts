import type { ImageMetadata } from 'astro';

const cityHeroModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/cities-hero/*.{jpeg,jpg,png,webp}',
  { eager: true },
);

const cityLogoModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/cities-logo/*.{jpeg,jpg,png,webp}',
  { eager: true },
);

const SLUG_ALIASES: Record<string, string> = {
  'cape-cod': 'capecod',
  'rhode-island': 'rhodeisland',
  'new-hampshire': 'newhampshire',
};

/** Logo filenames differ for some cities (e.g. foxborough.png). */
const LOGO_ALIASES: Record<string, string> = {
  ...SLUG_ALIASES,
  foxboro: 'foxborough',
};

function citySlugToBase(slug: string): string {
  return slug.replace(/-movers$/, '');
}

function resolveName(base: string, aliases: Record<string, string>): string {
  return aliases[base] ?? base;
}

function findImage(
  modules: Record<string, { default: ImageMetadata }>,
  basename: string,
): ImageMetadata | undefined {
  const entry = Object.entries(modules).find(([path]) => {
    const file = path.split('/').pop() ?? '';
    const nameWithoutExt = file.replace(/\.[^.]+$/, '');
    return nameWithoutExt === basename;
  });
  return entry?.[1].default;
}

/** Hero photo: `src/assets/cities-hero/{city}-ma.jpeg` */
export function getCityHeroImage(slug: string): ImageMetadata | undefined {
  const base = citySlugToBase(slug);
  const name = resolveName(base, SLUG_ALIASES);
  return findImage(cityHeroModules, `${name}-ma`);
}

/** Content logo: `src/assets/cities-logo/{city}.png` */
export function getCityLogoImage(slug: string): ImageMetadata | undefined {
  const base = citySlugToBase(slug);
  const name = resolveName(base, LOGO_ALIASES);
  return findImage(cityLogoModules, name);
}

export function getDefaultCityHeroImage(): ImageMetadata {
  return (
    getCityHeroImage('boston-movers') ??
    Object.values(cityHeroModules)[0]!.default
  );
}

export function getDefaultCityLogoImage(): ImageMetadata {
  return (
    getCityLogoImage('boston-movers') ??
    Object.values(cityLogoModules)[0]!.default
  );
}
