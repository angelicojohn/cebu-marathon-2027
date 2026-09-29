/**
 * Condensed data set for the BYQ build.
 *
 * Same facts as the full site, cut to what an eight-section page needs:
 * the four distances, the numbers that build trust, six FAQs instead of
 * eight, and the sponsor board. Anything that needed its own section on
 * the full site (hotels, history, community runs, prize tables) is either
 * folded into a single stat or dropped.
 */

export const event = {
  name: "Cebu Marathon",
  year: 2027,
  presenter: "Cebu Landmasters, Inc.",
  dateLong: "Sunday, 10 January 2027",
  startsAt: "2027-01-10T00:00:00+08:00",
  endsAt: "2027-01-10T08:00:00+08:00",
  venue: "SM Seaside City Cebu",
  venueLocality: "Cebu City",
  venueRegion: "Cebu",
  venueCountry: "PH",
  siteUrl: "https://www.cebumarathon.com.ph",
  registrationUrl: "https://cebumarathon.myruntime.com/register",
  registrationCloses: "15 November 2026",
  facebookUrl: "https://web.facebook.com/CebuMarathonOfficial",
  infoEmail: "cebumarathon.info@gmail.com",
  partnerEmail: "cebumarathon.partner@gmail.com",
};

/**
 * `kitItems` are the race-kit artwork shown on the back of each distance
 * card. `slug` maps to src/assets/kit/<distance>/<slug>.png — the official
 * entitlement renders, renamed to match across all four distances.
 *
 * They are the physical items only. The post-race meal and the raffle
 * entry have no artwork, so the card lists those as text.
 */
export const categories = [
  {
    id: "42k",
    distance: "42K",
    kitItems: [
      { slug: "finisher-medal", label: "Finisher medal" },
      { slug: "race-shirt", label: "Official race shirt" },
      { slug: "finisher-shirt", label: "Finisher shirt by Salt+Fin" },
      { slug: "finisher-towel", label: "Finisher towel" },
      { slug: "race-bag", label: "Race kit bag" },
      { slug: "race-bib", label: "Race bib" },
    ],
    name: "Full Marathon",
    price: 2999,
    priceLabel: "₱2,999",
    gunStart: "12:00 AM",
    cutoff: "8 hours",
    blurb:
      "The full distance over the CCLEX and back along the coast. AIMS-certified, so the time counts toward international qualifiers.",
    kit: [
      "Official race shirt",
      "Finisher shirt (DriFit) by Salt+Fin",
      "Finisher towel",
      "Race kit bag",
      "Finisher medal",
      "Post-race meal",
      "1 entry to the Omoda–Jaecoo J5 HEV grand raffle and minor raffle prizes",
    ],
    route: "/images/route-42k.webp",
    accent: "aqua",
    featured: false,
  },
  {
    id: "21k",
    distance: "21K",
    kitItems: [
      { slug: "finisher-medal", label: "Finisher medal" },
      { slug: "race-shirt", label: "Official race shirt" },
      { slug: "finisher-shirt", label: "Finisher shirt by Salt+Fin" },
      { slug: "finisher-towel", label: "Finisher towel" },
      { slug: "race-bag", label: "Race kit bag" },
      { slug: "race-bib", label: "Race bib" },
    ],
    name: "Half Marathon",
    price: 2799,
    priceLabel: "₱2,799",
    gunStart: "3:00 AM",
    cutoff: "4 hours",
    blurb:
      "Cross the longest bridge in the Philippines as the sun comes up over the Mactan Channel.",
    kit: [
      "Official race shirt",
      "Finisher shirt (DriFit) by Salt+Fin",
      "Finisher towel",
      "Race kit bag",
      "Finisher medal",
      "Post-race meal",
      "1 entry to the Omoda–Jaecoo J5 HEV grand raffle and minor raffle prizes",
    ],
    route: "/images/route-21k.webp",
    accent: "rose",
    featured: true,
  },
  {
    id: "10k",
    distance: "10K",
    kitItems: [
      { slug: "finisher-medal", label: "Finisher medal" },
      { slug: "race-shirt", label: "Official race shirt" },
      { slug: "finisher-shirt", label: "Finisher shirt by Salt+Fin" },
      { slug: "race-bag", label: "Race kit bag" },
      { slug: "race-bib", label: "Race bib" },
    ],
    name: "Ten Kilometre",
    price: 1499,
    priceLabel: "₱1,499",
    gunStart: "4:30 AM",
    cutoff: "2 hours",
    blurb:
      "A fast, flat coastal loop through the South Road Properties — a real race, and a sane first one.",
    kit: [
      "Official race shirt",
      "Finisher shirt (DriFit) by Salt+Fin",
      "Race kit bag",
      "Finisher medal",
      "Post-race meal",
      "1 entry to the Omoda–Jaecoo J5 HEV grand raffle and minor raffle prizes",
    ],
    route: "/images/route-10k.webp",
    accent: "gold",
    featured: false,
  },
  {
    id: "5k",
    distance: "5K",
    kitItems: [
      { slug: "finisher-medal", label: "Finisher medal" },
      { slug: "race-shirt", label: "Official race shirt" },
      { slug: "finisher-shirt", label: "Finisher shirt by Salt+Fin" },
      { slug: "race-bag", label: "Race kit bag" },
      { slug: "race-bib", label: "Race bib" },
    ],
    name: "Five Kilometre",
    price: 1499,
    priceLabel: "₱1,499",
    gunStart: "5:30 AM",
    cutoff: "1 hour",
    blurb:
      "The whole-family distance, run in daylight and done in time for breakfast at the Seaside grounds.",
    kit: [
      "Official race shirt",
      "Finisher shirt (DriFit) by Salt+Fin",
      "Race kit bag",
      "Finisher medal",
      "Post-race meal",
      "1 entry to the Omoda–Jaecoo J5 HEV grand raffle and minor raffle prizes",
    ],
    route: "/images/route-5k.webp",
    accent: "purple",
    featured: false,
  },
];

/** Counters for the stats band. `value` is the number the counter animates to. */
export const stats = [
  { value: 12000, suffix: "+", label: "Runners in 2025" },
  { value: 40, suffix: "+", label: "Countries represented" },
  { value: 70000, prefix: "₱", label: "42K champion prize" },
  { value: 19, suffix: " yrs", label: "Since the first race" },
];

/** Bento tiles — route, kit, raffle and the two credibility marks. */
export const bento = {
  route: {
    title: "Over the CCLEX at sunrise",
    body: "Cebu City, Cordova and CCLEX Management signed a memorandum putting the Cebu–Cordova Link Expressway into the official 2027 route. The 42K and 21K cross the longest and tallest bridge in the Philippines.",
    image: "/images/route-42k.webp",
  },
  kit: {
    title: "Every distance gets a medal",
    body: "Race shirt, finisher shirt by Salt+Fin, race bag and finisher medal in every category. The 42K and 21K add a finisher towel.",
    image: "/images/kit-42k.webp",
  },
  raffle: {
    title: "Win a Jaecoo J5 Super Hybrid",
    body: "Every registered runner gets one entry to the Omoda–Jaecoo J5 HEV grand raffle, plus the minor raffle prizes.",
    image: "/images/raffle-jaecoo-j5.webp",
  },
  sinulog: {
    title: "Sinulog on the roadside",
    body: "Timed to the festival on purpose — street entertainment, drum beaters and colour the whole way to the finish.",
    image: "/images/aerial-cclex.webp",
  },
  zeroWaste: {
    title: "Zero-waste hydration",
    body: "Water every 2.5 KM, isotonic every 5 KM from KM 10, and no single-use plastics anywhere on course.",
  },
};

export const faqs = [
  {
    q: "When is race day?",
    a: "Sunday, 10 January 2027, starting and finishing at the SM Seaside City Cebu grounds. The race is held every year on the second Sunday of January, in Sinulog season.",
  },
  {
    q: "When does registration close?",
    a: "15 November 2026, or earlier if slots run out. Slots are limited across every category and earlier editions have closed early.",
  },
  {
    q: "Is there walk-in registration?",
    a: "No. Registration is online only through the official portal — there is no walk-in or race-day entry.",
  },
  {
    q: "What do the gun starts look like?",
    a: "42K at 12:00 AM with an 8-hour cut-off, 21K at 3:00 AM with 4 hours, 10K at 4:30 AM with 2 hours, and 5K at 5:30 AM with 1 hour. Official pacers run the 42K and 21K.",
  },
  {
    q: "Is the finisher shirt included for 10K and 5K?",
    a: "Yes. The ₱1,499 fee already includes it — it is not an add-on. It is issued in the same size as the race shirt you picked at registration.",
  },
  {
    q: "Can someone else run in my place?",
    a: "No. Bibs and registrations are strictly non-transferable, and running under another name means disqualification and permanent exclusion from results.",
  },
  {
    q: "What support is there on course?",
    a: "Water every 2.5 KM and isotonic drinks every 5 KM from KM 10. First-aid stations and emergency medical personnel are positioned along the route, and official pacers run the 42K and 21K for a range of target finishing times.",
  },
];

/* Matches the sponsor board on cebumarathon.com.ph as of late September
   2026: GU joined the majors, GraphicStar is no longer listed, and
   Nature's Spring and NuStar moved to minor.

   `w`/`h` are each logo's real pixel size, used by the marquee to scale
   them to the same optical size — a wide, short logo and a square one look
   wildly different when both are simply capped to the same height. */
export const sponsors = {
  presenter: [
    { name: "Cebu Landmasters, Inc.", logo: "/images/sponsor-cebu-landmasters.png", w: 420, h: 144 },
  ],
  vehicle: [{ name: "OMODA JAECOO", logo: "/images/sponsor-omoda-jaecoo.png", w: 420, h: 33 }],
  major: [
    { name: "ImmuniPlus", logo: "/images/sponsor-immuniplus.png", w: 600, h: 128 },
    { name: "Pocari Sweat", logo: "/images/sponsor-pocari-sweat.png", w: 175, h: 122 },
    { name: "GU", logo: "/images/sponsor-gu.png", w: 298, h: 306 },
  ],
  minor: [
    { name: "Nature's Spring", logo: "/images/sponsor-natures-spring.png", w: 170, h: 100 },
    { name: "NUSTAR", logo: "/images/sponsor-nustar.png", w: 228, h: 128 },
    { name: "Hello Glow", logo: "/images/sponsor-hello-glow.png", w: 359, h: 103 },
    { name: "Leonas", logo: "/images/sponsor-leonas.png", w: 180, h: 180 },
    { name: "Omega Active", logo: "/images/sponsor-omega-active.png", w: 284, h: 135 },
  ],
  venue: [
    { name: "SM Seaside City Cebu", logo: "/images/sponsor-sm-seaside.png", w: 258, h: 36 },
    { name: "CCLEX", logo: "/images/sponsor-cclex.png", w: 176, h: 58 },
  ],
};

/** Flat list for the marquee — order is what scrolls past. */
export const marqueeLogos = [
  ...sponsors.presenter,
  ...sponsors.vehicle,
  ...sponsors.major,
  ...sponsors.minor,
  ...sponsors.venue,
];

/**
 * Footer credits, matching the live site's footer (late September 2026):
 * organised by DJT Events in partnership with the Cebu City Sports
 * Commission, for the benefit of the CCSC and the Sinulog Foundation.
 * White versions of the logos, since they sit directly on the navy.
 */
export const organisers = {
  organisedBy: { name: "DJT Events", logo: "/images/org-djt-events-white.png", w: 94, h: 68 },
  partner: { name: "Cebu City Sports Commission", logo: "/images/org-ccsc-white.png", w: 169, h: 91 },
  beneficiaries: [
    { name: "Cebu City Sports Commission", logo: "/images/org-ccsc-white.png", w: 169, h: 91 },
    { name: "Sinulog Foundation, Inc.", logo: "/images/org-sinulog-foundation.png", w: 60, h: 59 },
  ],
};

/**
 * Race history, oldest first. Text is from the History page on the live
 * site (cebumarathon.com.ph/history), which lists the years out of order;
 * this puts them back in sequence. Where the live page gives a year no
 * title, the title here is a short label drawn from that year's own copy.
 *
 * `logo` is that edition's race logo as the live page shows it. Five early
 * years have none there, so their slide is set in type instead.
 *
 * `photo` is a race-day photo for that edition where one could be found.
 * 2025 and 2027 are the organiser's own drone photography; the rest come
 * from news outlets and running blogs and are credited on the card — they
 * need the owner's permission before this goes live. 2015's photo comes
 * from a December 2015 preview article, so it shows an earlier edition,
 * most likely 2015 itself.
 */
export const history = [
  {
    year: "2008",
    title: "Cebu City Half-Marathon",
    when: "January 2008 · Cebu City streets",
    distances: "21K, 10K, 5K",
    body: "Part of the Sinulog Festival celebrations, focused on community participation and endurance running. It laid the organisational and cultural foundation for what became the full Cebu Marathon.",
  },
  {
    year: "2010",
    photo: "/images/history/photo-2010.jpg",
    credit: { name: "Bald Runner", url: "https://baldrunner.com/2010/01/10/perfect-race-in-cebu-city/" },
    title: "The first full marathon",
    when: "10 January 2010 · Cebu City",
    body: "Known as “01-10-10”, the first official full Cebu Marathon introduced the 42K distance and established Cebu as a marathon destination.",
  },
  {
    year: "2011",
    title: "An annual January race",
    when: "January 2011 · Cebu City",
    distances: "42K, 21K, 10K, 5K",
    body: "Held a week before the Sinulog Festival, keeping the race going as an annual January event after the inaugural full marathon.",
  },
  {
    year: "2012",
    title: "Establishing the tradition",
    when: "January 2012 · Cebu City",
    body: "The marathon strengthened its place in the Sinulog calendar, drawing more local and visiting runners and building consistency in organisation and participation.",
  },
  {
    year: "2013",
    title: "Results go online",
    when: "13 January 2013 · Cebu City streets",
    logo: "/images/history/2013.png",
    body: "Race results and photos were published online, a sign of better race documentation and wider participation from the Philippine running community.",
  },
  {
    year: "2014",
    title: "A more festive finish",
    when: "12 January 2014 · Cebu City streets",
    logo: "/images/history/2014.png",
    body: "This edition focused on better race logistics, finisher medals and a more festive atmosphere inspired by international races.",
  },
  {
    year: "2015",
    photo: "/images/history/photo-2015.jpg",
    credit: { name: "RunSociety", url: "https://www.runsociety.com/news/cebu-marathon-2016-the-soft-side-of-a-loud-city/" },
    title: "SRP becomes a key route",
    when: "11 January 2015 · Cebu City & South Road Properties",
    body: "Adding the SRP brought faster, flatter sections. Participation grew, with foreign runners joining the event.",
  },
  {
    year: "2016",
    title: "Setting the stage",
    when: "January 2016 · Cebu City",
    logo: "/images/history/2016.png",
    body: "The marathon continued uninterrupted and set the stage for major route changes the following year.",
  },
  {
    year: "2017",
    title: "The Tri-City marathon",
    when: "8 January 2017 · Cebu City, Mandaue City & Lapu-Lapu City",
    logo: "/images/history/2017.png",
    body: "One of the most ambitious editions: a Tri-City route crossing several LGUs, showing off Cebu's metropolitan scale.",
  },
  {
    year: "2018",
    title: "Through Cebu Business Park",
    when: "14 January 2018 · Cebu City, including Cebu Business Park",
    logo: "/images/history/2018.png",
  },
  {
    year: "2019",
    photo: "/images/history/photo-2019.jpg",
    credit: { name: "Observer (etugonon)", url: "https://etugonon.wordpress.com/2019/01/14/cebu-marathon-2019-complete-race-results/" },
    title: "A central race hub",
    when: "13 January 2019 · Cebu Business Park",
    logo: "/images/history/2019.png",
    body: "The marathon made Cebu Business Park its central hub, improving logistics, branding and the spectator experience.",
  },
  {
    year: "2020",
    photo: "/images/history/photo-2020.jpg",
    credit: { name: "SunStar Cebu", url: "https://www.sunstar.com.ph/cebu/sports/love-reigns-in-cebu-marathon" },
    title: "Pre-pandemic milestone",
    when: "12 January 2020 · Cebu City (CBP and major city roads)",
    logo: "/images/history/2020.png",
    body: "The last full in-person Cebu Marathon before the pandemic, with strong participation across every category.",
  },
  {
    year: "2021",
    title: "The pandemic-era marathon",
    when: "January 2021 · Limited in-person formats",
    logo: "/images/history/2021.png",
    body: "Under COVID-19 restrictions the race went virtual and ran modified formats, so the tradition continued.",
  },
  {
    year: "2022",
    title: "Moving forward",
    when: "January 2022 · Cebu City",
    logo: "/images/history/2022.png",
  },
  {
    year: "2023",
    photo: "/images/history/photo-2023.jpg",
    credit: { name: "SunStar Cebu", url: "https://www.sunstar.com.ph/cebu/sports/cebu-marathon-returns-with-massive-numbers" },
    title: "The CCLEX landmark edition",
    when: "January 2023 · SM Seaside City Cebu & CCLEX",
    logo: "/images/history/2023.png",
    body: "A historic edition over the CCLEX, the longest bridge in the Philippines, with SM Seaside City Cebu as start and finish.",
  },
  {
    year: "2024",
    photo: "/images/history/photo-2024.jpg",
    credit: { name: "Speed.ph", url: "https://www.speed.ph/" },
    title: "AIA Vitality Cebu Marathon",
    when: "14 January 2024 · Cebu City",
    distances: "42K, 24K, 12K, 6K",
    logo: "/images/history/2024.png",
    body: "Branded under AIA Vitality, the race put health, wellness and lifestyle running first while keeping its Sinulog-season tradition.",
  },
  {
    year: "2025",
    photo: "/images/history/photo-2025.jpg",
    credit: { name: "Cebu Marathon" },
    title: "The largest yet",
    when: "January 2025 · SM Seaside City Cebu & Cebu City roads",
    distances: "42K, 24K, 12K, 6K",
    logo: "/images/history/2025.png",
    body: "Over 12,000 runners from more than 40 countries — the race's rise as a globally recognised event and a step toward full international accreditation.",
  },
  {
    year: "2026",
    photo: "/images/history/photo-2026.jpg",
    credit: { name: "SunStar Cebu", url: "https://www.sunstar.com.ph/cebu/ccm-draws-flak-anew" },
    title: "AIMS-certified course",
    when: "January 2026 · SM Seaside City Cebu & Cebu City roads",
    distances: "42K, 24K, 12K, 6K",
    logo: "/images/history/2026.png",
    body: "Now officially AIMS-certified: the course meets international standards, so times here can count toward qualifying for major marathons worldwide.",
  },
  {
    year: "2027",
    photo: "/images/aerial-cclex.webp",
    credit: { name: "Cebu Marathon" },
    title: "Your race",
    when: "10 January 2027 · SM Seaside City Cebu & CCLEX",
    distances: "42K, 21K, 10K, 5K",
    logo: "/images/logo-cli-black.png",
    current: true,
    body: "The 2027 edition, presented by Cebu Landmasters. Registration is open.",
  },
];

/**
 * Hotel partners with runner rates, from cebumarathon.com.ph/hotels.
 * Rates are per night; `was` is the published rate before the runner
 * discount. Runners show their registration confirmation code when they
 * book direct with the hotel.
 */
export const hotels = [
  { name: "Summit Galleria Cebu", note: "Closest to the venue", rates: [{ room: "Room for 2, daily breakfast for 2", price: 4100, was: 4300 }] },
  { name: "Citadines Cebu City", note: "Free hotel transfers", rates: [
    { room: "Studio Executive, no breakfast (2 pax)", price: 3800, was: 4000 },
    { room: "Studio Executive, with breakfast (2 pax)", price: 4500, was: 4800 },
  ] },
  { name: "Bayfront Hotel Cebu – North Reclamation", rates: [{ room: "Room for 2, buffet breakfast for 2", price: 3150, was: 3400 }] },
  { name: "Bai Hotel", rates: [{ room: "Room for 2, buffet breakfast for 2", price: 4800, was: 5000 }] },
  { name: "The Pad", note: "Budget bunks · free hotel transfers", rates: [
    { room: "Solo Room (1 pax)", price: 1250, was: 1350 },
    { room: "Duo Bunk (2 pax)", price: 1750, was: 1850 },
    { room: "Queen Room (2 pax)", price: 1800, was: 1900 },
    { room: "Trio Bunk (3 pax)", price: 2250, was: 2350 },
    { room: "Quad Bunk (4 pax)", price: 3100, was: 3200 },
    { room: "Family Room (4 pax)", price: 3400, was: 3500 },
  ] },
  { name: "Radisson Blu Cebu", soon: true, rates: [] },
  { name: "Cebu Grand Hotel", soon: true, rates: [] },
];

/**
 * Free training runs for registered CM27 runners, from
 * cebumarathon.com.ph/community. Venues are listed only where the live page
 * gives one.
 */
export const trainingRuns = [
  { date: "22 Aug", km: 16, time: "4:00 AM", club: "Guild of Runners", venue: "The Astra Center" },
  { date: "5 Sep", km: 21, time: "4:00 AM", club: "Mandaue Runners Group", venue: "Mandaue City Hall" },
  { date: "27 Sep", km: 26, time: "3:30 AM", club: "RWP Cebu" },
  { date: "4 Oct", km: 18, time: "4:00 AM", club: "Guild of Runners" },
  { date: "17 Oct", km: 21, time: "4:00 AM", club: "Mandaue Runners Group" },
  { date: "15 Nov", km: 30, time: "3:00 AM", club: "Mandaue Runners Group" },
  { date: "22 Nov", km: 24, time: "3:30 AM", club: "RWP Cebu" },
  { date: "13 Dec", km: 32, time: "3:00 AM", club: "Guild of Runners" },
  { date: "20 Dec", km: 21, time: "4:00 AM", club: "Mandaue Runners Group" },
  { date: "9 Jan", km: 5, time: "5:00 AM", club: "All run clubs", shakeout: true /* the day before race day */ },
];

/**
 * One colour set per distance, taken off the race-card artwork: `g1 → g3`
 * runs light to deep, `a` is the solid accent. Shared by the distance cards
 * and the prize table so both always match.
 */
export const distancePalette: Record<string, { a: string; g1: string; g2: string; g3: string }> = {
  "42k": { a: "#4fd08f", g1: "#c6f35c", g2: "#5ad98a", g3: "#2bbfd4" },
  "21k": { a: "#ff6a3d", g1: "#ffc93d", g2: "#ff7a2e", g3: "#f0284f" },
  "10k": { a: "#2cc3ee", g1: "#aef4ff", g2: "#3cc9f0", g3: "#1f7fe0" },
  "5k": { a: "#ff4f9a", g1: "#ffa6d8", g2: "#ff4f9a", g3: "#d8186f" },
};
/** The palette as CSS custom properties, for an element's `style`. */
export const paletteVars = (id: string) => {
  const c = distancePalette[id];
  return `--a:${c.a};--g1:${c.g1};--g2:${c.g2};--g3:${c.g3}`;
};

/**
 * Cash prizes, from the official 2027 prize boards. Every amount is paid
 * identically in the male and female divisions.
 */
export const prizes = {
  open: [
    { id: "42k", distance: "42K", amounts: [70000, 30000, 20000, 10000, 8000] },
    { id: "21k", distance: "21K", amounts: [25000, 15000, 8000, 6000, 3500] },
    { id: "10k", distance: "10K", amounts: [10000, 8000, 5000, 3000, 2000] },
    { id: "5k", distance: "5K", amounts: [5000, 4000, 3000, 2000, 1000] },
  ],
  /** Paid in each of the four brackets, male and female. */
  ageGroup: {
    brackets: ["40–49", "50–59", "60–69", "70 and up"],
    tiers: [
      { id: "42k", distance: "42K", amounts: [3500, 2500, 2000] },
      { id: "21k", distance: "21K", amounts: [2500, 1500, 1000] },
    ],
  },
  costume: [5000, 3000, 2000],
  oldest: [
    { label: "Male", note: "42K only", amount: 3000 },
    { label: "Female", note: "42K only", amount: 3000 },
  ],
};
