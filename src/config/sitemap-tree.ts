import { getPublishedPosts } from '@/config/blog';
import { cities } from '@/config/cities-data';
import { getPremiumSitemapEntries } from '@/config/city-premium/registry';
import { services } from '@/config/services';

export type SitemapNode = {
  label: string;
  href?: string;
  children?: SitemapNode[];
};

export async function getSitemapTree(): Promise<SitemapNode[]> {
  const sortedCities = [...cities].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const blogPosts = await getPublishedPosts();

  return [
    { label: 'Home', href: '/' },
    {
      label: 'Moving Services',
      children: services.map((service) => ({
        label: service.name,
        href: service.href,
      })),
    },
    { label: 'Book Your Move', href: '/book' },
    { label: 'Pricing', href: '/pricing' },
    {
      label: 'Blog',
      href: '/blog',
      children: blogPosts.map((post) => ({
        label: post.data.title,
        href: `/blog/${post.id}`,
      })),
    },
    { label: 'FAQ', href: '/faq' },
    { label: 'About', href: '/about' },
    {
      label: "Service Areas",
      children: [
        ...getPremiumSitemapEntries(),
        ...sortedCities.map((city) => ({
          label: city.fullName,
          href: `/${city.slug}`,
        })),
      ],
    },
    {
      label: 'Legal & Policies',
      children: [
        { label: 'Company Policy', href: '/policy' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms and Conditions', href: '/terms' },
      ],
    },
  ];
}