import type { APIRoute } from "astro";
import { home } from "../lib/site";
import { event, categories, faqs } from "../data/event";

/* A plain-text map of the site for AI crawlers and answer engines
   (llmstxt.org). Built from the same data as the page, so it never drifts. */
export const GET: APIRoute = () => {
  const distances = categories
    .map((c) => `- ${c.distance} ${c.name}: ${c.priceLabel}, gun start ${c.gunStart}, cut-off ${c.cutoff}`)
    .join("\n");
  const qa = faqs.map((f) => `- ${f.q} ${f.a}`).join("\n");
  const body = `# Cebu Marathon 2027

> ${event.dateLong} at ${event.venue}, over the Cebu–Cordova Link Expressway (CCLEX). AIMS-certified. Presented by ${event.presenter.replace(/\.$/, "")}. Organised by DJT Events in partnership with the Cebu City Sports Commission.

## Key facts
${distances}
- Registration: online only at ${event.registrationUrl}. No walk-in or race-day entry. Bibs are non-transferable.
- Contact: ${event.infoEmail} · Partnerships: ${event.partnerEmail}

## Sections
- [Distances and fees](${home}#distances)
- [Cash prizes](${home}#prizes)
- [Route and race kit](${home}#race)
- [Route map](${home}#route)
- [By the numbers](${home}#numbers)
- [History since 2008](${home}#history)
- [Hotel rates and training runs](${home}#perks)
- [FAQ](${home}#faq)

## FAQ
${qa}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
