import type { APIRoute } from 'astro';

// Add more page paths here if the site gets more pages.
const pages = ['/'];

export const GET: APIRoute = ({ site }) => {
  const base = site?.href ?? 'https://www.jackandkie.com/';
  const urls = pages.map((p) => `  <url><loc>${new URL(p, base).href}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
