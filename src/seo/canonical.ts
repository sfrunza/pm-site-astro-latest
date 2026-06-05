import { SITE } from '@/config/site';

/** Path without trailing slash (stable for canonical + JSON-LD). */
export function normalizeCanonicalPath(pathname: string): string {
  if (pathname === '/' || pathname === '') return '/';
  return pathname.replace(/\/+$/, '');
}

/** Absolute canonical URL aligned with non-trailing-slash routes. */
export function canonicalUrl(pathname: string): string {
  return new URL(normalizeCanonicalPath(pathname), SITE.url).href;
}
