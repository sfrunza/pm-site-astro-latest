import { SITE } from '@/config/site';
import type { GooglePlaceReviews } from '@/lib/google-reviews';
import { getGoogleReviews } from '@/lib/google-reviews';
import { canonicalUrl, normalizeCanonicalPath } from '@/seo/canonical';
import { OG_IMAGE } from '@/seo/constants';
import {
  buildArticleJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  type BlogSeoPost,
} from '@/seo/json-ld';
import { buildOpenGraph } from '@/seo/open-graph';
import { buildPageSeo } from '@/seo/page-seo';
import type { AstroSeoProps } from '@/seo/types';

function articleImageUrls(image?: string): string[] {
  if (image) {
    const url = image.startsWith('http')
      ? image
      : new URL(image, SITE.url).href;
    return [url, OG_IMAGE];
  }
  return [OG_IMAGE];
}

function buildBlogPostSeo(
  pageUrl: URL,
  post: BlogSeoPost,
  displayTitle: string,
  reviewsData?: GooglePlaceReviews,
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
    reviewsData,
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

/** Full SEO props for a blog post (article OG + BlogPosting + FAQ/HowTo). */
export async function fetchBlogPostSeo(
  pageUrl: URL,
  post: BlogSeoPost,
  displayTitle: string,
): Promise<AstroSeoProps> {
  const reviewsData = await getGoogleReviews();
  return buildBlogPostSeo(pageUrl, post, displayTitle, reviewsData);
}
