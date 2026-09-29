import type { APIRoute } from "astro";
import { event } from "../data/event";

/**
 * The old Wix sitemap advertised thirteen `/blank-N` URLs — duplicate home
 * pages, an empty "fullscreen-page", and slugs that told a crawler nothing.
 * This site is one page, so the sitemap is one canonical URL and the section
 * structure is expressed through the SportsEvent JSON-LD in the layout
 * instead. Fewer, honest URLs beat thirteen that mostly 404 on meaning.
 */
const lastmod = new Date().toISOString().split("T")[0];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${event.siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
