import { SITE } from '@/config/site';
import { LOGO_URL, OG_IMAGE, ORGANIZATION_ID } from '@/seo/constants';

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
