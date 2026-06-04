import type { AstroSeoProps } from '@/types/seo';
import { services } from '@/config/services';
import { SITE } from '@/config/site';

const OG_IMAGE = new URL(SITE.ogImage, SITE.url).href;
const LOGO_URL = new URL(SITE.logo, SITE.url).href;
const ORGANIZATION_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const BUSINESS_ID = `${SITE.url}/#business`;

/** Update when substantive page content changes (Tier 3 freshness). */
export const CONTENT_DATE_MODIFIED = '2026-05-28';
export const CONTENT_DATE_PUBLISHED = '2024-01-15';

const sameAsProfiles = [
  'https://www.facebook.com/phoenixmoving',
  'https://www.instagram.com/phoenixmovingboston/',
  'https://www.yelp.com/biz/phoenix-moving-natick-6',
] as const;

/** Path without trailing slash (stable for canonical + JSON-LD). */
export function normalizeCanonicalPath(pathname: string): string {
  if (pathname === '/' || pathname === '') return '/';
  return pathname.replace(/\/+$/, '');
}

/** Absolute canonical URL aligned with non-trailing-slash routes. */
export function canonicalUrl(pathname: string): string {
  return new URL(normalizeCanonicalPath(pathname), SITE.url).href;
}

/** Shared robots directives (matches homepage). */
export const defaultRobotsProps = {
  maxSnippet: -1,
  maxImagePreview: 'large' as const,
  maxVideoPreview: -1,
};

export function buildOpenGraph(opts: {
  url: string;
  title: string;
  description: string;
  type?: string;
  /** Absolute URL; defaults to site og-image.jpg */
  imageUrl?: string;
  imageAlt?: string;
}) {
  const imageUrl = opts.imageUrl ?? OG_IMAGE;
  const imageAlt =
    opts.imageAlt ??
    `${SITE.businessShortName} — professional movers in Boston, MA`;

  return {
    url: opts.url,
    type: opts.type ?? 'website',
    title: opts.title,
    description: opts.description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: imageAlt,
      },
    ],
    site_name: SITE.businessShortName,
    locale: SITE.locale,
  };
}

export function buildTwitter() {
  return {
    handle: SITE.twitterHandle,
    site: SITE.twitterHandle,
    cardType: 'summary_large_image',
  };
}

function webPage(pathname: string, name: string, description: string) {
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

function breadcrumb(
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

function serviceSchema(
  pathname: string,
  name: string,
  description: string,
) {
  const url = `${SITE.url}${pathname}`;
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'State', name: 'Massachusetts' },
    serviceType: 'Moving Services',
  };
}

type PageSeoInput = {
  title: string;
  description: string;
  keywords: string;
  pathname: string;
  breadcrumbs: { name: string; path: string }[];
  service?: { name: string; description: string };
  jsonLdExtra?: Record<string, unknown>[];
  /** Override canonical URL (e.g. legacy city page → rich landing page). */
  canonical?: string;
  /** Absolute URL for og:image, twitter:image, and optional schema image */
  ogImage?: string;
  ogImageAlt?: string;
};

/** Builds Layout SEO props from the current page URL and page-specific fields. */
export function buildPageSeo(
  _pageUrl: URL,
  input: PageSeoInput,
): AstroSeoProps {
  const pathname = normalizeCanonicalPath(input.pathname);
  const canonical = input.canonical ?? canonicalUrl(pathname);
  const ogTitle =
    input.title.split('|').at(-1)?.trim() ?? SITE.businessShortName;

  const additionalMetaTags: { name: string; content: string }[] = [
    { name: 'keywords', content: input.keywords },
  ];

  if (input.ogImage) {
    additionalMetaTags.push(
      { name: 'twitter:image', content: input.ogImage },
      { name: 'twitter:title', content: ogTitle },
      { name: 'twitter:description', content: input.description },
    );
  }

  return {
    title: input.title,
    description: input.description,
    canonical,
    additionalMetaTags,
    robotsProps: defaultRobotsProps,
    openGraph: buildOpenGraph({
      url: canonical,
      title: ogTitle,
      description: input.description,
      imageUrl: input.ogImage,
      imageAlt: input.ogImageAlt,
    }),
    twitter: buildTwitter(),
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        webPage(pathname, input.title, input.description),
        breadcrumb(pathname, input.breadcrumbs),
        ...(input.service
          ? [
            serviceSchema(
              pathname,
              input.service.name,
              input.service.description,
            ),
          ]
          : []),
        ...(input.jsonLdExtra ?? []),
      ],
    },
  };
}

const primaryAddress = SITE.businessAddresses[0];

const aggregateRating = {
  '@type': 'AggregateRating',
  ratingValue: '4.98',
  reviewCount: '243',
  bestRating: '5',
};

function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE.businessShortName,
    legalName: SITE.businessName,
    url: `${SITE.url}/`,
    logo: LOGO_URL,
    image: OG_IMAGE,
    description: SITE.description,
    telephone: SITE.schema.telephone,
    email: SITE.contactEmail,
    address: SITE.schema.address,
    sameAs: [...sameAsProfiles],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: SITE.schema.telephone,
      email: SITE.contactEmail,
      areaServed: 'US',
      availableLanguage: 'English',
    },
  };
}

function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.businessShortName,
    description: SITE.description,
    inLanguage: SITE.locale.replace('_', '-'),
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/** Homepage-only structured data (Organization, WebSite, LocalBusiness, services). */
export function getHomeJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(),
      websiteSchema(),
      {
        '@type': ['LocalBusiness', 'MovingCompany'],
        '@id': BUSINESS_ID,
        name: SITE.businessShortName,
        url: `${SITE.url}/`,
        logo: LOGO_URL,
        image: OG_IMAGE,
        telephone: SITE.schema.telephone,
        email: SITE.contactEmail,
        address: SITE.schema.address,
        parentOrganization: { '@id': ORGANIZATION_ID },
        areaServed: [
          { '@type': 'City', name: 'Boston' },
          { '@type': 'State', name: 'Massachusetts' },
        ],
        priceRange: SITE.schema.priceRange,
        openingHours: SITE.schema.openingHours,
        sameAs: [...sameAsProfiles],
        aggregateRating,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Moving Services',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
            },
          })),
        },
      },
      webPage('/', SITE.title, SITE.description),
      breadcrumb('/', [{ name: 'Home', path: '/' }]),
    ],
  };
}

export function buildFaqJsonLd(
  pathname: string,
  faqs: { question: string; answer: string }[],
): Record<string, unknown> {
  const url = `${SITE.url}${pathname}`;
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildHowToJsonLd(
  pathname: string,
  name: string,
  description: string,
  steps: { name: string; text: string }[],
): Record<string, unknown> {
  const url = `${SITE.url}${pathname}`;
  return {
    '@type': 'HowTo',
    '@id': `${url}#howto`,
    url,
    name,
    description,
    totalTime: 'PT8H',
    tool: [{ '@type': 'HowToTool', name: 'Moving blankets, dollies, and straps' }],
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/** Strips HTML for FAQ schema answer text. */
export function stripHtmlForSchema(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

export type LocalMoverJsonLdInput = {
  pathname: string;
  cityName: string;
  /** Optional hero or logo image URL for LocalBusiness.image */
  image?: string;
  areaServed?: Array<
    | { '@type': 'City'; name: string }
    | { '@type': 'PostalCode'; name: string }
    | { '@type': 'State'; name: string }
  >;
  geo?: { latitude: number; longitude: number };
};

/** City landing page LocalBusiness / MovingCompany node (links to site #business). */
export function buildLocalMoverJsonLd(
  input: LocalMoverJsonLdInput,
): Record<string, unknown> {
  const url = `${SITE.url}${input.pathname}`;
  const address = SITE.businessAddresses[0];
  const geo = input.geo ?? {
    latitude: SITE.schema.serviceArea.geoMidpoint.latitude,
    longitude: SITE.schema.serviceArea.geoMidpoint.longitude,
  };

  return {
    '@type': ['LocalBusiness', 'MovingCompany'],
    '@id': `${url}#localbusiness`,
    name: `${SITE.businessShortName} — ${input.cityName}`,
    url,
    logo: LOGO_URL,
    image: input.image ?? OG_IMAGE,
    telephone: SITE.contactPhone,
    email: SITE.contactEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.address,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    parentOrganization: { '@id': ORGANIZATION_ID },
    areaServed: input.areaServed ?? [
      { '@type': 'City', name: input.cityName },
      { '@type': 'State', name: 'Massachusetts' },
    ],
    priceRange: SITE.schema.priceRange,
    openingHours: SITE.schema.openingHours,
    sameAs: [...sameAsProfiles],
    aggregateRating,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${input.cityName} Moving Services`,
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
        },
      })),
    },
  };
}

export type BlogSeoPost = {
  title: string;
  description: string;
  keywords: string;
  pathname: string;
  pubDate: Date;
  updatedDate?: Date;
  category: string;
  tags: string[];
  image?: string;
  faq?: { question: string; answer: string }[];
  howTo?: {
    name: string;
    description: string;
    steps: { name: string; text: string }[];
  };
};

function articleImageUrls(image?: string): string[] {
  if (image) {
    const url = image.startsWith('http')
      ? image
      : new URL(image, SITE.url).href;
    return [url, OG_IMAGE];
  }
  return [OG_IMAGE];
}

/** BlogPosting JSON-LD for article pages (headline ≤110 chars). */
export function buildArticleJsonLd(
  pathname: string,
  post: BlogSeoPost,
  headline: string,
): Record<string, unknown> {
  const url = `${SITE.url}${pathname}`;
  const published = post.pubDate.toISOString().split('T')[0];
  const modified = (post.updatedDate ?? post.pubDate)
    .toISOString()
    .split('T')[0];

  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${url}#webpage` },
    headline: headline.slice(0, 110),
    description: post.description,
    image: articleImageUrls(post.image),
    datePublished: published,
    dateModified: modified,
    author: {
      '@type': 'Organization',
      name: 'Phoenix Moving Team',
      url: `${SITE.url}/blog`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.businessShortName,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    inLanguage: SITE.locale.replace('_', '-'),
  };
}

export function buildBlogListingJsonLd(
  posts: { title: string; pathname: string; description: string }[],
): Record<string, unknown>[] {
  const blogUrl = `${SITE.url}/blog`;
  return [
    {
      '@type': 'Blog',
      '@id': `${blogUrl}#blog`,
      url: blogUrl,
      name: `${SITE.businessShortName} Moving Blog`,
      description:
        'Boston and Massachusetts moving tips, cost guides, packing advice, and checklists from licensed Phoenix Moving crews.',
      publisher: { '@id': ORGANIZATION_ID },
      inLanguage: SITE.locale.replace('_', '-'),
    },
    {
      '@type': 'ItemList',
      '@id': `${blogUrl}#itemlist`,
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: post.title,
        url: `${SITE.url}${post.pathname}`,
        description: post.description,
      })),
    },
  ];
}

/** Full SEO props for a blog post (article OG + BlogPosting + FAQ/HowTo). */
export function buildBlogPostSeo(
  pageUrl: URL,
  post: BlogSeoPost,
  displayTitle: string,
): AstroSeoProps {
  const pathname = normalizeCanonicalPath(post.pathname);
  const canonical = canonicalUrl(pathname);
  const ogTitle = displayTitle;
  const publishedIso = post.pubDate.toISOString();
  const modifiedIso = (post.updatedDate ?? post.pubDate).toISOString();
  const images = articleImageUrls(post.image).map((url) => ({
    url,
    width: 1200,
    height: 630,
    alt: displayTitle,
  }));

  const jsonLdExtra: Record<string, unknown>[] = [
    buildArticleJsonLd(post.pathname, post, displayTitle),
  ];

  if (post.faq?.length) {
    jsonLdExtra.push(buildFaqJsonLd(post.pathname, post.faq));
  }

  if (post.howTo) {
    jsonLdExtra.push(
      buildHowToJsonLd(
        post.pathname,
        post.howTo.name,
        post.howTo.description,
        post.howTo.steps,
      ),
    );
  }

  const base = buildPageSeo(pageUrl, {
    title: `${displayTitle} | ${SITE.businessShortName} Blog`,
    description: post.description,
    keywords: post.keywords,
    pathname,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: displayTitle, path: post.pathname },
    ],
    jsonLdExtra,
  });

  return {
    ...base,
    openGraph: {
      ...buildOpenGraph({
        url: canonical,
        title: ogTitle,
        description: post.description,
        type: 'article',
      }),
      images,
      article: {
        publishedTime: publishedIso,
        modifiedTime: modifiedIso,
        authors: ['Phoenix Moving Team'],
        section: post.category,
        tags: post.tags,
      },
    },
  };
}

export const homeSeo = (_url: URL): AstroSeoProps => {
  const canonical = canonicalUrl('/');
  return {
    title: `${SITE.businessShortName} — Boston Moving Company (Free Estimate)`,
    description: SITE.description,
    canonical,
    additionalMetaTags: [{ name: 'keywords', content: SITE.keywords }],
    robotsProps: defaultRobotsProps,
    openGraph: buildOpenGraph({
      url: canonical,
      title: SITE.businessShortName,
      description: SITE.description,
    }),
    twitter: buildTwitter(),
    jsonLd: getHomeJsonLd(),
  };
};
