/**
 * Where this build is served. Netlify sets URL during its builds, and the
 * GitHub Pages workflow sets it to the Pages address; locally it falls back
 * to the Netlify site. Everything that must name the site's own address —
 * canonical, share cards, sitemap, robots.txt, llms.txt — reads it from here,
 * so none of them can drift back to the old Wix domain.
 */
export const origin = (process.env.URL ?? "https://cebumarathon.netlify.app").replace(/\/$/, "");
export const home = `${origin}/`;
