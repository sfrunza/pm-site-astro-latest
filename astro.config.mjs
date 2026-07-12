import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.insightmoving.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [sitemap(), mdx()],
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      { protocol: 'https', hostname: '**.yelpcdn.com' },
      { protocol: 'https', hostname: '**.googleusercontent.com' },
    ],
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Maven Pro',
      cssVariable: '--font-sans',
      weights: [400, 500, 600, 700],
    },
  ],
});
