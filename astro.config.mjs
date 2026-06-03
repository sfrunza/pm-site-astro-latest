import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  output: 'static',
  integrations: [sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()],
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
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  ],
});
