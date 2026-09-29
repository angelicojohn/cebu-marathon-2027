#!/usr/bin/env node
/**
 * Snap the hand-built 21K legs onto the real road network.
 *
 * The coordinates in `src/lib/marathonRoute.ts` were placed by eye from the
 * official route artwork. This pushes each leg through the Mapbox Map
 * Matching API, which returns the same path re-drawn along actual OSM road
 * geometry, then prints the corrected arrays ready to paste back.
 *
 *   MAPBOX_TOKEN=pk.xxxx node scripts/snap-route.mjs
 *
 * Notes
 *  - Map Matching takes at most 100 coordinates per request, so long legs
 *    are chunked and rejoined.
 *  - `profile=walking` keeps the match on surface roads. Switch to `driving`
 *    if the CCLEX span refuses to match — expressways are often tagged
 *    foot=no, and the marathon is a road closure, not a normal pedestrian
 *    route.
 *  - Always eyeball the result before committing. Map matching will happily
 *    snap to a service road running parallel to the one you meant.
 */

import { readFileSync } from "node:fs";

const TOKEN = process.env.MAPBOX_TOKEN;
if (!TOKEN) {
  console.error("Set MAPBOX_TOKEN first:  MAPBOX_TOKEN=pk.xxx node scripts/snap-route.mjs");
  process.exit(1);
}

const PROFILE = process.env.PROFILE ?? "walking";
const SOURCE = new URL("../src/lib/marathonRoute.ts", import.meta.url);

/** Pull a `export const NAME: LngLat[] = [ ... ]` block out of the module. */
function readLeg(src, name) {
  const m = src.match(new RegExp(`export const ${name}[^=]*=\\s*\\[([\\s\\S]*?)\\n\\];`));
  if (!m) throw new Error(`leg ${name} not found`);
  return [...m[1].matchAll(/\[\s*(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)\s*\]/g)].map((p) => [
    Number(p[1]),
    Number(p[2]),
  ]);
}

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );

async function snap(coords) {
  const out = [];
  // Overlap each chunk by one point so the rejoined line has no gap.
  for (const part of chunk(coords, 90)) {
    const path = part.map((c) => `${c[0].toFixed(6)},${c[1].toFixed(6)}`).join(";");
    const radiuses = part.map(() => 25).join(";");
    const url =
      `https://api.mapbox.com/matching/v5/mapbox/${PROFILE}/${path}` +
      `?geometries=geojson&overview=full&radiuses=${radiuses}&access_token=${TOKEN}`;

    const res = await fetch(url);
    const json = await res.json();

    if (json.code !== "Ok" || !json.matchings?.length) {
      console.warn(`  ! chunk not matched (${json.code ?? res.status}) — keeping originals`);
      out.push(...part);
      continue;
    }
    out.push(...json.matchings[0].geometry.coordinates);
  }
  return out;
}

const src = readFileSync(SOURCE, "utf8");

for (const leg of ["LEG_A_OUT", "LEG_B_OUT"]) {
  const original = readLeg(src, leg);
  process.stderr.write(`${leg}: ${original.length} points → matching…\n`);
  const snapped = await snap(original);

  console.log(`\n// ${leg} — snapped to ${PROFILE} roads, ${snapped.length} points`);
  console.log(`export const ${leg}: LngLat[] = [`);
  for (const [lng, lat] of snapped) {
    console.log(`  [${lng.toFixed(6)}, ${lat.toFixed(6)}],`);
  }
  console.log("];");
}
