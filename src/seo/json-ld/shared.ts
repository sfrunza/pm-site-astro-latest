import { SITE } from '@/config/site';
import { canonicalUrl } from '@/seo/canonical';
import {
  BUSINESS_ID,
  CONTENT_DATE_MODIFIED,
  CONTENT_DATE_PUBLISHED,
  WEBSITE_ID,
} from '@/seo/constants';

export function webPage(pathname: string, name: string, description: string) {
  const url = `${SITE.url}${pathname}`;
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: SITE.locale.replace('_', '-'),
    isPartOf: { '@id': WEBSITE_ID },
    datePublished: CONTENT_DATE_PUBLISHED,
    dateModified: CONTENT_DATE_MODIFIED,
  };
}

export function breadcrumb(
  pathname: string,
  items: { name: string; path: string }[],
) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE.url}${pathname}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export type ServiceAreaServed =
  | { '@type': 'City'; name: string }
  | { '@type': 'PostalCode'; name: string }
  | { '@type': 'State'; name: string };

export function serviceSchema(
  pathname: string,
  name: string,
  description: string,
  areaServed?: ServiceAreaServed | ServiceAreaServed[],
) {
  const url = `${SITE.url}${pathname}`;
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    provider: { '@id': BUSINESS_ID },
    areaServed:
      areaServed ?? { '@type': 'State', name: 'Massachusetts' },
    serviceType: 'Moving Services',
  };
}
