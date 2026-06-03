import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const blogCategoryValues = [
  'moving-tips',
  'costs',
  'packing',
  'planning',
  'safety',
  'guides',
  'family',
  'preparation',
  'long-distance',
  'sustainability',
] as const;

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const howToSchema = z.object({
  name: z.string(),
  description: z.string(),
  steps: z.array(
    z.object({
      name: z.string(),
      text: z.string(),
    }),
  ),
});

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/content/blog',
    retainBody: true,
  }),
  schema: ({ image }) =>
    z.object({
    title: z.string(),
    /** SEO meta description (120–160 characters). */
    description: z.string(),
    excerpt: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    keywords: z.string(),
    category: z.enum(blogCategoryValues),
    tags: z.array(z.string()).default([]),
    /** Path relative to this .mdx file, e.g. ../../assets/blog/my-post.jpg */
    image: image().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    keyTakeaways: z.array(z.string()).min(3).max(5),
    faq: z.array(faqSchema).min(3).max(5).optional(),
    howTo: howToSchema.optional(),
    relatedSlugs: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
