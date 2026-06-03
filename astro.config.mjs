import { defineConfig, fontProviders, sessionDrivers } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://pm-site-astro-latest.frunza-sergiu3.workers.dev',
  trailingSlash: 'never',
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

  headers: [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'index, follow',
        },
      ],
    },
  ],

  // No server-side sessions on this site — avoids Cloudflare KV auto-provision
  // (re-deploy fails if namespace "pm-site-astro-latest-session" already exists).
  session: {
    driver: sessionDrivers.memory(),
  },

  adapter: cloudflare({
    imageService: { build: 'compile', runtime: 'cloudflare-binding' },
  }),
});
