export const BLOG_CATEGORY_VALUES = [
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

export type BlogCategory = (typeof BLOG_CATEGORY_VALUES)[number];

export const BLOG_CATEGORIES: Record<
  BlogCategory,
  { label: string; description: string }
> = {
  'moving-tips': {
    label: 'Moving Tips',
    description: 'Practical advice for smoother Boston-area moves.',
  },
  costs: {
    label: 'Costs & Pricing',
    description: 'What to budget and how Boston move pricing works.',
  },
  packing: {
    label: 'Packing',
    description: 'Room-by-room packing strategies and supplies.',
  },
  planning: {
    label: 'Planning',
    description: 'Timelines, checklists, and move coordination.',
  },
  safety: {
    label: 'Safety',
    description: 'Avoid scams and protect your belongings.',
  },
  guides: {
    label: 'Guides',
    description: 'In-depth guides for hiring movers and DIY moves.',
  },
  family: {
    label: 'Family',
    description: 'Moving with kids, pets, and household transitions.',
  },
  preparation: {
    label: 'Preparation',
    description: 'Get your home ready before the truck arrives.',
  },
  'long-distance': {
    label: 'Long Distance',
    description: 'Interstate and cross-country moving from Boston.',
  },
  sustainability: {
    label: 'Sustainability',
    description: 'Lower-waste, eco-conscious moving options.',
  },
};
