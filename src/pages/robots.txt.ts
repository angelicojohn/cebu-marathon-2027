import type { APIRoute } from "astro";
import { origin } from "../lib/site";

/* Generated so the sitemap line always names this site, not the old Wix
   domain it used to point at (which led crawlers to audit the Wix pages). */
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
