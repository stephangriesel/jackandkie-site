import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site?.href ?? 'https://www.jackandkie.com/';
  return new Response(`User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${new URL('sitemap.xml', base).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
