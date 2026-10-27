import type { APIRoute } from 'astro';
import { site } from '../content/site';

/** robots.txt dibuat otomatis dari domain di src/content/site.ts */
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\nDisallow: /styleguide\n\nSitemap: ${new URL('/sitemap-index.xml', site.url).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
