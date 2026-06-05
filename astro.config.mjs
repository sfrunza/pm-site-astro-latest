import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.insightmoving.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['astro/toolbar'],
    },
  },

  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
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
