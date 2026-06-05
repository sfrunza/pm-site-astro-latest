import { SITE } from '@/config/site';

/** Path without trailing slash or `.html` (stable for canonical + JSON-LD). */
export function normalizeCanonicalPath(pathname: string): string {
  if (pathname === '/' || pathname === '') return '/';
  let path = pathname.replace(/\/+$/, '');
  // `build.format: 'file'` makes Astro.url.pathname include `.html` on static
  // pages; dynamic routes pass clean paths manually — strip for one canonical shape.
  if (path.endsWith('.html')) {
    path = path.slice(0, -5) || '/';
  }
  return path;
}

/** Absolute canonical URL aligned with non-trailing-slash routes. */
export function canonicalUrl(pathname: string): string {
  return new URL(normalizeCanonicalPath(pathname), SITE.url).href;
}
