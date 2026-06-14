import { getCollection, type CollectionEntry } from 'astro:content';
import { formatReadingTime } from '@/utils/reading-time';
import { SITE } from '@/config/site';

export {
  BLOG_CATEGORY_VALUES,
  BLOG_CATEGORIES,
  type BlogCategory,
} from '@/config/blog-categories';

export const BLOG_AUTHOR = {
  name: `${SITE.businessShortName} Team`,
  url: '/blog',
  bio: 'Licensed and insured Boston-area movers sharing field-tested advice from thousands of local and long-distance relocations across Massachusetts.',
  credentials:
    'Massachusetts DPU-licensed carrier · Fully insured moving crews',
} as const;

export type BlogPost = CollectionEntry<'blog'>;

export function isPublished(post: BlogPost): boolean {
  return !post.data.draft;
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getPublishedPosts();
  const featured = posts.filter((post) => post.data.featured);
  return featured.length > 0 ? featured : posts.slice(0, 4);
}

export function getPostUrl(post: BlogPost): string {
  return `/blog/${post.id}`;
}

/** Reading time from collection entry body (avoids raw .mdx imports in Vite). */
export function getPostReadingTime(post: BlogPost): string {
  const text =
    post.body ??
    [post.data.excerpt, ...post.data.keyTakeaways].join(' ');
  return formatReadingTime(text);
}

export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York',
  });
}

export function getRelatedPosts(
  current: BlogPost,
  allPosts: BlogPost[],
  limit = 3,
): BlogPost[] {
  const explicit = current.data.relatedSlugs ?? [];
  const bySlug = explicit
    .map((slug) => allPosts.find((p) => p.id === slug))
    .filter((p): p is BlogPost => p != null && p.id !== current.id);

  if (bySlug.length >= limit) {
    return bySlug.slice(0, limit);
  }

  const tagSet = new Set(current.data.tags);
  const scored = allPosts
    .filter((p) => p.id !== current.id && !bySlug.some((b) => b.id === p.id))
    .map((p) => {
      let score = 0;
      if (p.data.category === current.data.category) score += 2;
      for (const tag of p.data.tags) {
        if (tagSet.has(tag)) score += 1;
      }
      return { post: p, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  const combined = [...bySlug, ...scored.map((s) => s.post)];
  const seen = new Set<string>();
  const unique: BlogPost[] = [];
  for (const post of combined) {
    if (seen.has(post.id)) continue;
    seen.add(post.id);
    unique.push(post);
    if (unique.length >= limit) break;
  }

  if (unique.length < limit) {
    for (const post of allPosts) {
      if (post.id === current.id || seen.has(post.id)) continue;
      unique.push(post);
      if (unique.length >= limit) break;
    }
  }

  return unique.slice(0, limit);
}
