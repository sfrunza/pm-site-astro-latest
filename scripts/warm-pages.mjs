#!/usr/bin/env node
/**
 * Fetch every URL from the site XML sitemap, then fetch image assets
 * referenced on each page (warms CDN / edge cache after deploy).
 *
 * Usage:
 *   node scripts/warm-pages.mjs
 *   node scripts/warm-pages.mjs --base https://www.insightmoving.com
 *   node scripts/warm-pages.mjs --concurrency 8
 */

const DEFAULT_BASE = 'https://www.insightmoving.com';
const DEFAULT_CONCURRENCY = 6;

function parseArgs(argv) {
  const opts = {
    base: DEFAULT_BASE,
    concurrency: DEFAULT_CONCURRENCY,
    sitemapPath: '/sitemap-0.xml',
  };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--base' && argv[i + 1]) {
      opts.base = argv[++i].replace(/\/$/, '');
    } else if (argv[i] === '--concurrency' && argv[i + 1]) {
      opts.concurrency = Math.max(1, Number(argv[++i]) || DEFAULT_CONCURRENCY);
    } else if (argv[i] === '--sitemap' && argv[i + 1]) {
      opts.sitemapPath = argv[++i];
    }
  }
  return opts;
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

function extractImageUrls(html, pageUrl) {
  const base = new URL(pageUrl);
  const urls = new Set();

  for (const m of html.matchAll(/\ssrc=["']([^"']+)["']/gi)) {
    if (/\.(avif|webp|jpe?g|png|gif|svg)(\?|$)/i.test(m[1]) || m[1].includes('/_astro/')) {
      urls.add(new URL(m[1], base).href);
    }
  }

  for (const m of html.matchAll(/srcset=["']([^"']+)["']/gi)) {
    for (const part of m[1].split(',')) {
      const src = part.trim().split(/\s+/)[0];
      if (src) urls.add(new URL(src, base).href);
    }
  }

  for (const m of html.matchAll(/href=["']([^"']+\/_astro\/[^"']+)["']/gi)) {
    urls.add(new URL(m[1], base).href);
  }

  return [...urls];
}

async function fetchOk(url, label) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'pm-site-warm-cache/1.0' },
    redirect: 'follow',
  });
  if (!res.ok) {
    throw new Error(`${label} ${url} → ${res.status}`);
  }
  return res;
}

async function runPool(items, concurrency, worker) {
  const queue = [...items];
  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length) {
      const item = queue.shift();
      if (item !== undefined) await worker(item);
    }
  });
  await Promise.all(workers);
}

async function main() {
  const { base, concurrency, sitemapPath } = parseArgs(process.argv);
  const sitemapUrl = `${base}${sitemapPath.startsWith('/') ? '' : '/'}${sitemapPath}`;

  console.log(`Sitemap: ${sitemapUrl}`);
  const sitemapRes = await fetchOk(sitemapUrl, 'sitemap');
  const xml = await sitemapRes.text();
  const pageUrls = extractLocs(xml);

  if (!pageUrls.length) {
    console.error('No URLs found in sitemap.');
    process.exit(1);
  }

  console.log(`Pages: ${pageUrls.length} (concurrency ${concurrency})`);

  let pagesOk = 0;
  let pagesFail = 0;
  const allImageUrls = new Set();

  await runPool(pageUrls, concurrency, async (pageUrl) => {
    try {
      const res = await fetchOk(pageUrl, 'page');
      const html = await res.text();
      for (const img of extractImageUrls(html, pageUrl)) allImageUrls.add(img);
      pagesOk++;
      process.stdout.write('.');
    } catch (err) {
      pagesFail++;
      process.stdout.write('x');
      console.error(`\n  ${err.message}`);
    }
  });

  console.log(`\nPages OK: ${pagesOk}, failed: ${pagesFail}`);
  console.log(`Images to warm: ${allImageUrls.size}`);

  let imagesOk = 0;
  let imagesFail = 0;
  const imageList = [...allImageUrls];

  await runPool(imageList, concurrency, async (imgUrl) => {
    try {
      await fetchOk(imgUrl, 'image');
      imagesOk++;
    } catch (err) {
      imagesFail++;
      console.error(`  ${err.message}`);
    }
  });

  console.log(`Images OK: ${imagesOk}, failed: ${imagesFail}`);

  if (pagesFail || imagesFail) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
