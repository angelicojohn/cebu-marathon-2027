#!/usr/bin/env node
/**
 * Re-point root-relative URLs in a finished build at a sub-path.
 *
 * GitHub Pages serves a project site from /<repo>/ rather than the domain
 * root, but the site's markup and CSS use root paths (/images, /_astro, …).
 * Rather than threading a base through every component, this rewrites the
 * built files once, for the Pages build only. Netlify serves from the root
 * and never runs it.
 *
 *   node scripts/prefix-base.mjs dist /cebu-marathon-2027
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [dir = "dist", base = ""] = process.argv.slice(2);
if (!base.startsWith("/")) throw new Error("base must start with /");

const roots = "images|fonts|video|_astro|favicon|apple-touch-icon|icon-192|robots\\.txt|sitemap";
const pattern = new RegExp(`(["'(\\s=,])/(${roots})`, "g");
const exts = [".html", ".css", ".js", ".xml", ".txt", ".webmanifest"];

let files = 0;
let hits = 0;
const walk = (d) => {
  for (const name of readdirSync(d)) {
    const p = join(d, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (exts.some((e) => p.endsWith(e))) {
      const src = readFileSync(p, "utf8");
      let n = 0;
      let out = src.replace(pattern, (_, pre, root) => (n++, `${pre}${base}/${root}`));
      out = out.replaceAll('href="/"', `href="${base}/"`);
      if (out !== src) {
        writeFileSync(p, out);
        files++;
        hits += n;
      }
    }
  }
};
walk(dir);
writeFileSync(join(dir, ".nojekyll"), "");
console.log(`prefixed ${hits} paths in ${files} files with ${base}`);
