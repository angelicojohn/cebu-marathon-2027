/**
 * Cebu Marathon 2027 — 21K course geometry.
 *
 * Built from four authoritative anchors, used verbatim:
 *
 *   START / FINISH   10.280821, 123.879987
 *   Perico Road      10.266949, 123.874757
 *   CCLEX Toll Plaza 10.287531, 123.888948
 *   U-turn           10.264556, 123.939153
 *
 * Course order:
 *
 *   START → Perico Rd → CCLEX Toll Plaza     (road-snapped SRP approach)
 *         → CCLEX eastbound → U-TURN         (outbound carriageway)
 *         → CCLEX westbound → Toll Plaza     (return carriageway, ~44 m across)
 *         → Perico Rd → FINISH               (approach reversed)
 *
 * The CCLEX legs are NOT one line with a lateral offset applied. OSM tags
 * every CCLEX way `oneway=yes`, so the eastbound and westbound carriageways
 * are genuinely separate geometry; the outbound and return lines land on
 * opposite sides of the divider on their own. The SRP approach is undivided
 * for the race, so its return is the same tarmac reversed.
 *
 * MEASURED LENGTH: 26.78 km, against a nominal 21.1 km. Following the four
 * anchors in the order above genuinely produces this; the Perico spur adds
 * roughly 12.5 km across its two passes. Resolve by moving an anchor, not by
 * trimming the geometry.
 */

export type LngLat = [number, number];

/** Tunables the animation reads. Everything else derives from `progress` 0→1. */
export const CONFIG = {
  animationDuration: 90000,
  /** Metres above sea level. Raised for the 3D terrain view so the
   *  camera clears the hills behind the city on the inbound legs. */
  cameraAltitude: 700,
  /** How far ahead along the route the camera looks, in normalised progress. */
  cameraLookAhead: 0.004,
  /** Frames of bearing smoothing — higher rides through the U-turns calmer. */
  bearingSmoothing: 0.06,
  routeWidth: 7,
  routeOutlineWidth: 12,
  loop: true,
  loopDelay: 2000,
  /** Target spacing between densified vertices, in metres. */
  sampleSpacingMetres: 25,
};

/* ---------------------------------------------------------------------------
   1. Leg waypoints
   Sparse control points per leg — densified into the final LineString below.
   Order is [longitude, latitude].
--------------------------------------------------------------------------- */

/** START -> Perico Rd -> CCLEX Toll Plaza. Road-snapped through OSRM, so it follows the actual SRP road network rather than cutting across it. */
export const LEG_APPROACH: LngLat[] = [
  [123.879988, 10.280822],
  [123.879928, 10.280907],
  [123.879908, 10.280937],
  [123.879829, 10.281098],
  [123.879773, 10.281245],
  [123.879726, 10.281412],
  [123.879704, 10.281524],
  [123.879691, 10.281631],
  [123.879684, 10.281758],
  [123.879685, 10.281830],
  [123.879687, 10.281903],
  [123.879693, 10.281992],
  [123.879711, 10.282152],
  [123.879737, 10.282286],
  [123.879773, 10.282413],
  [123.879813, 10.282520],
  [123.879848, 10.282616],
  [123.879951, 10.282812],
  [123.880070, 10.282993],
  [123.880167, 10.283109],
  [123.880252, 10.283209],
  [123.880361, 10.283312],
  [123.880421, 10.283365],
  [123.880477, 10.283401],
  [123.880620, 10.283493],
  [123.880771, 10.283565],
  [123.880915, 10.283620],
  [123.881035, 10.283669],
  [123.881213, 10.283736],
  [123.881328, 10.283773],
  [123.881445, 10.283665],
  [123.881962, 10.283186],
  [123.882204, 10.282962],
  [123.882247, 10.282923],
  [123.882327, 10.282849],
  [123.882407, 10.282774],
  [123.883046, 10.282183],
  [123.883248, 10.281996],
  [123.883272, 10.281973],
  [123.883392, 10.281862],
  [123.883288, 10.281748],
  [123.883066, 10.281517],
  [123.882717, 10.281143],
  [123.882550, 10.280955],
  [123.882398, 10.280775],
  [123.882315, 10.280667],
  [123.882206, 10.280519],
  [123.882028, 10.280267],
  [123.881847, 10.279984],
  [123.881739, 10.279796],
  [123.881604, 10.279539],
  [123.881471, 10.279277],
  [123.881346, 10.278994],
  [123.881092, 10.278326],
  [123.880609, 10.276969],
  [123.880247, 10.275982],
  [123.879840, 10.274862],
  [123.879674, 10.274396],
  [123.879303, 10.273357],
  [123.879239, 10.273105],
  [123.879206, 10.272953],
  [123.879193, 10.272800],
  [123.879191, 10.272653],
  [123.879195, 10.272501],
  [123.879208, 10.272349],
  [123.879261, 10.272080],
  [123.879339, 10.271817],
  [123.879388, 10.271679],
  [123.879592, 10.271101],
  [123.879636, 10.270954],
  [123.879682, 10.270802],
  [123.879729, 10.270485],
  [123.879752, 10.270168],
  [123.879736, 10.269951],
  [123.879699, 10.269728],
  [123.879650, 10.269534],
  [123.879590, 10.269385],
  [123.879435, 10.269094],
  [123.879239, 10.268805],
  [123.878880, 10.268386],
  [123.878448, 10.267882],
  [123.878387, 10.267812],
  [123.878282, 10.267690],
  [123.877686, 10.266994],
  [123.877581, 10.266871],
  [123.876520, 10.265633],
  [123.876476, 10.265587],
  [123.876370, 10.265595],
  [123.876004, 10.265915],
  [123.875910, 10.265989],
  [123.874814, 10.266919],
  [123.874766, 10.266959],
  [123.874814, 10.266919],
  [123.875910, 10.265989],
  [123.876004, 10.265915],
  [123.876370, 10.265595],
  [123.876400, 10.265499],
  [123.876501, 10.265412],
  [123.876574, 10.265498],
  [123.876620, 10.265551],
  [123.876957, 10.265946],
  [123.878465, 10.267711],
  [123.878542, 10.267799],
  [123.879336, 10.268736],
  [123.879549, 10.269037],
  [123.879638, 10.269200],
  [123.879713, 10.269338],
  [123.879772, 10.269501],
  [123.879798, 10.269606],
  [123.879822, 10.269703],
  [123.879859, 10.269924],
  [123.879860, 10.269972],
  [123.879855, 10.270495],
  [123.879797, 10.270832],
  [123.879708, 10.271124],
  [123.879453, 10.271850],
  [123.879384, 10.272106],
  [123.879334, 10.272354],
  [123.879313, 10.272503],
  [123.879313, 10.272652],
  [123.879320, 10.272789],
  [123.879332, 10.272934],
  [123.879360, 10.273077],
  [123.879418, 10.273318],
  [123.879506, 10.273579],
  [123.879538, 10.273678],
  [123.879583, 10.273806],
  [123.879948, 10.274823],
  [123.880363, 10.275959],
  [123.880539, 10.276460],
  [123.880715, 10.276927],
  [123.881203, 10.278279],
  [123.881459, 10.278938],
  [123.881582, 10.279212],
  [123.881712, 10.279476],
  [123.881846, 10.279738],
  [123.881955, 10.279923],
  [123.882138, 10.280206],
  [123.882319, 10.280461],
  [123.882498, 10.280697],
  [123.882642, 10.280880],
  [123.882802, 10.281061],
  [123.882971, 10.281239],
  [123.883174, 10.281452],
  [123.883375, 10.281663],
  [123.883483, 10.281778],
  [123.883542, 10.281840],
  [123.885786, 10.284199],
  [123.886046, 10.284473],
  [123.887184, 10.285704],
  [123.888544, 10.287149],
  [123.888562, 10.287167],
  [123.888853, 10.287456],
  [123.888893, 10.287489],
  [123.888946, 10.287533],
];

/** CCLEX Toll Plaza -> U-turn, on the EASTBOUND carriageway. Taken straight from the OSM one-way ways for that side of the divider. */
export const LEG_CCLEX_OUT: LngLat[] = [
  [123.889246, 10.287748],
  [123.889272, 10.287755],
  [123.889700, 10.287872],
  [123.889824, 10.287899],
  [123.890023, 10.287933],
  [123.890143, 10.287947],
  [123.890307, 10.287958],
  [123.890561, 10.287964],
  [123.890843, 10.287948],
  [123.891188, 10.287909],
  [123.891458, 10.287890],
  [123.891661, 10.287895],
  [123.891845, 10.287910],
  [123.892103, 10.287956],
  [123.892410, 10.288051],
  [123.892639, 10.288148],
  [123.892838, 10.288242],
  [123.893142, 10.288379],
  [123.893369, 10.288476],
  [123.893750, 10.288615],
  [123.894036, 10.288720],
  [123.894313, 10.288819],
  [123.894566, 10.288891],
  [123.894772, 10.288935],
  [123.895013, 10.288962],
  [123.895160, 10.288967],
  [123.895306, 10.288965],
  [123.895506, 10.288947],
  [123.895678, 10.288919],
  [123.895820, 10.288887],
  [123.895928, 10.288858],
  [123.896077, 10.288807],
  [123.896197, 10.288761],
  [123.896370, 10.288680],
  [123.896518, 10.288596],
  [123.896663, 10.288496],
  [123.896793, 10.288393],
  [123.896912, 10.288289],
  [123.897345, 10.287867],
  [123.897735, 10.287484],
  [123.899288, 10.286010],
  [123.900306, 10.285058],
  [123.901068, 10.284368],
  [123.901718, 10.283778],
  [123.902518, 10.283041],
  [123.903015, 10.282611],
  [123.903526, 10.282186],
  [123.903713, 10.282036],
  [123.904155, 10.281698],
  [123.904940, 10.281122],
  [123.905372, 10.280820],
  [123.906110, 10.280336],
  [123.906610, 10.280030],
  [123.907288, 10.279632],
  [123.907900, 10.279286],
  [123.908845, 10.278758],
  [123.909573, 10.278344],
  [123.911221, 10.277413],
  [123.912063, 10.276937],
  [123.912502, 10.276692],
  [123.913581, 10.276081],
  [123.914446, 10.275591],
  [123.915044, 10.275249],
  [123.915513, 10.274968],
  [123.915965, 10.274669],
  [123.916418, 10.274340],
  [123.916808, 10.274035],
  [123.917140, 10.273755],
  [123.917627, 10.273314],
  [123.917997, 10.272950],
  [123.918229, 10.272701],
  [123.918514, 10.272379],
  [123.918787, 10.272051],
  [123.919223, 10.271486],
  [123.919436, 10.271185],
  [123.919558, 10.271004],
  [123.919676, 10.270817],
  [123.919853, 10.270535],
  [123.920083, 10.270141],
  [123.920362, 10.269573],
  [123.920618, 10.269036],
  [123.920738, 10.268752],
  [123.921001, 10.268089],
  [123.922049, 10.265391],
  [123.922258, 10.264925],
  [123.922503, 10.264476],
  [123.922744, 10.264094],
  [123.923038, 10.263704],
  [123.923419, 10.263285],
  [123.923787, 10.262935],
  [123.924168, 10.262624],
  [123.924543, 10.262376],
  [123.924922, 10.262149],
  [123.925305, 10.261956],
  [123.928735, 10.260339],
  [123.930482, 10.259515],
  [123.931774, 10.258920],
  [123.931988, 10.258832],
  [123.932237, 10.258758],
  [123.932503, 10.258699],
  [123.932794, 10.258663],
  [123.933125, 10.258660],
  [123.933502, 10.258701],
  [123.933824, 10.258767],
  [123.934078, 10.258851],
  [123.934294, 10.258937],
  [123.934586, 10.259085],
  [123.934826, 10.259241],
  [123.934978, 10.259362],
  [123.935113, 10.259478],
  [123.935207, 10.259567],
  [123.935300, 10.259666],
  [123.935387, 10.259773],
  [123.937287, 10.262369],
  [123.937619, 10.262803],
  [123.937754, 10.262962],
  [123.937967, 10.263214],
  [123.937994, 10.263246],
  [123.939005, 10.264046],
  [123.939082, 10.264125],
  [123.939135, 10.264195],
  [123.939146, 10.264208],
];

/** U-turn -> CCLEX Toll Plaza, on the WESTBOUND carriageway — the opposite side of the divider, ~44 m across from the outbound line. */
export const LEG_CCLEX_IN: LngLat[] = [
  [123.938837, 10.264468],
  [123.938768, 10.264390],
  [123.938696, 10.264305],
  [123.937934, 10.263308],
  [123.937543, 10.262859],
  [123.937211, 10.262426],
  [123.935218, 10.259726],
  [123.935048, 10.259548],
  [123.934914, 10.259432],
  [123.934756, 10.259312],
  [123.934513, 10.259158],
  [123.934244, 10.259028],
  [123.934036, 10.258942],
  [123.933805, 10.258870],
  [123.933491, 10.258802],
  [123.933118, 10.258768],
  [123.932796, 10.258780],
  [123.932516, 10.258812],
  [123.932269, 10.258864],
  [123.932030, 10.258933],
  [123.931820, 10.259015],
  [123.930523, 10.259580],
  [123.928779, 10.260400],
  [123.925315, 10.262035],
  [123.924957, 10.262220],
  [123.924577, 10.262445],
  [123.924220, 10.262688],
  [123.923839, 10.262992],
  [123.923477, 10.263336],
  [123.923097, 10.263757],
  [123.922804, 10.264147],
  [123.922560, 10.264528],
  [123.922310, 10.264988],
  [123.922113, 10.265432],
  [123.921068, 10.268121],
  [123.920794, 10.268799],
  [123.920681, 10.269070],
  [123.920418, 10.269617],
  [123.920152, 10.270178],
  [123.919917, 10.270578],
  [123.919737, 10.270866],
  [123.919619, 10.271047],
  [123.919489, 10.271241],
  [123.919284, 10.271529],
  [123.919050, 10.271840],
  [123.918854, 10.272087],
  [123.918588, 10.272410],
  [123.918293, 10.272742],
  [123.917977, 10.273071],
  [123.917678, 10.273368],
  [123.917436, 10.273591],
  [123.917179, 10.273820],
  [123.916888, 10.274068],
  [123.916477, 10.274395],
  [123.916062, 10.274693],
  [123.915592, 10.275007],
  [123.915319, 10.275177],
  [123.914897, 10.275422],
  [123.914511, 10.275638],
  [123.913826, 10.276027],
  [123.912533, 10.276761],
  [123.910935, 10.277662],
  [123.909566, 10.278436],
  [123.908884, 10.278821],
  [123.907938, 10.279352],
  [123.907332, 10.279691],
  [123.906650, 10.280091],
  [123.906167, 10.280392],
  [123.905423, 10.280878],
  [123.904987, 10.281181],
  [123.904201, 10.281754],
  [123.903767, 10.282091],
  [123.903556, 10.282262],
  [123.903068, 10.282663],
  [123.902563, 10.283106],
  [123.901759, 10.283843],
  [123.901144, 10.284434],
  [123.900741, 10.284822],
  [123.900394, 10.285152],
  [123.898525, 10.286912],
  [123.897823, 10.287578],
  [123.897450, 10.287932],
  [123.896994, 10.288359],
  [123.896863, 10.288463],
  [123.896719, 10.288569],
  [123.896559, 10.288668],
  [123.896408, 10.288753],
  [123.896238, 10.288832],
  [123.896099, 10.288887],
  [123.895951, 10.288937],
  [123.895806, 10.288976],
  [123.895698, 10.288999],
  [123.895507, 10.289031],
  [123.895337, 10.289046],
  [123.895175, 10.289050],
  [123.894986, 10.289045],
  [123.894759, 10.289018],
  [123.894544, 10.288972],
  [123.894278, 10.288891],
  [123.894024, 10.288799],
  [123.893426, 10.288580],
  [123.893107, 10.288483],
  [123.892952, 10.288447],
  [123.892789, 10.288417],
  [123.892378, 10.288381],
  [123.891515, 10.288325],
  [123.891033, 10.288294],
  [123.890631, 10.288262],
  [123.890302, 10.288225],
  [123.889984, 10.288178],
  [123.889827, 10.288145],
  [123.889669, 10.288106],
  [123.889535, 10.288058],
  [123.889387, 10.287995],
  [123.889193, 10.287898],
  [123.889077, 10.287830],
  [123.888961, 10.287751],
  [123.888836, 10.287653],
];

/* ---------------------------------------------------------------------------
   2. Named markers — replace these coordinates independently of the line.
--------------------------------------------------------------------------- */

export const marathonMarkers = {
  /**
   * The four authoritative anchors, used exactly as supplied — the route is
   * snapped to these rather than these being nudged onto the route.
   */
  start: [123.879987, 10.280821] as LngLat,
  finish: [123.879987, 10.280821] as LngLat,
  perico: [123.874757, 10.266949] as LngLat,
  tollPlaza: [123.888948, 10.287531] as LngLat,
  uTurn: [123.939153, 10.264556] as LngLat,
  /** Water every 2.5 KM, resampled along the finished course. */
  hydration: [
    [123.878031, 10.267397],
    [123.881880, 10.279796],
    [123.899823, 10.285510],
    [123.918508, 10.272386],
    [123.934670, 10.259140],
    [123.926337, 10.261552],
    [123.911139, 10.277547],
    [123.892200, 10.288369],
    [123.879949, 10.275161],
  ] as LngLat[],
};

/* ---------------------------------------------------------------------------
   3. Geometry helpers
--------------------------------------------------------------------------- */

const EARTH_R = 6371008.8;
const rad = (d: number) => (d * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;

/** Great-circle distance in metres. */
export function distanceMetres(a: LngLat, b: LngLat): number {
  const dLat = rad(b[1] - a[1]);
  const dLon = rad(a[0] - b[0]) * -1;
  const lat1 = rad(a[1]);
  const lat2 = rad(b[1]);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * EARTH_R * Math.asin(Math.sqrt(h));
}

/** Initial bearing from a to b, in degrees. */
export function bearingBetween(a: LngLat, b: LngLat): number {
  const lat1 = rad(a[1]);
  const lat2 = rad(b[1]);
  const dLon = rad(b[0] - a[0]);
  const y = Math.sin(dLon) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  return (deg(Math.atan2(y, x)) + 360) % 360;
}

/** Linear interpolation between two positions. */
function lerp(a: LngLat, b: LngLat, t: number): LngLat {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}


/** Resample a line to roughly even spacing, so the runner moves at constant speed. */
function resample(line: LngLat[], spacing: number): LngLat[] {
  const out: LngLat[] = [line[0]];
  let carry = 0;

  for (let i = 1; i < line.length; i++) {
    const segLen = distanceMetres(line[i - 1], line[i]);
    if (segLen === 0) continue;
    let travelled = spacing - carry;
    while (travelled < segLen) {
      out.push(lerp(line[i - 1], line[i], travelled / segLen));
      travelled += spacing;
    }
    carry = segLen - (travelled - spacing);
  }
  out.push(line[line.length - 1]);
  return out;
}


/* ---------------------------------------------------------------------------
   4. Route assembly
--------------------------------------------------------------------------- */

/**
 * Builds the full 21K LineString in race order.
 *
 * Both directions of every out-and-back arm are preserved — the inbound legs
 * are NOT merged into the outbound ones, because the runner genuinely covers
 * that tarmac twice and the animation has to show it twice.
 */
/**
 * The finished course, in race order.
 *
 *   START → Perico Rd → CCLEX Toll Plaza    (road-snapped SRP approach)
 *        → CCLEX eastbound  → U-TURN        (outbound carriageway)
 *        → CCLEX westbound  → Toll Plaza    (return carriageway, ~44 m across)
 *        → Perico Rd → FINISH               (approach reversed)
 *
 * There is no lateral offset applied anywhere. The two CCLEX directions are
 * genuinely different roads — OSM tags every CCLEX way `oneway=yes`, so the
 * eastbound and westbound carriageways are separate geometry and the outbound
 * and return lines land on opposite sides of the divider on their own.
 *
 * The SRP approach is undivided for the race, so the return there is the same
 * tarmac reversed — a real out-and-back, not a parallel copy.
 */
export function createMarathonRoute(): GeoJSON.Feature<GeoJSON.LineString> {
  const join = (...legs: LngLat[][]) =>
    legs.reduce((acc, leg) =>
      acc.length === 0
        ? [...leg]
        : [...acc, ...(distanceMetres(acc[acc.length - 1], leg[0]) < 30 ? leg.slice(1) : leg)],
      [] as LngLat[]);

  const course = join(
    LEG_APPROACH,
    LEG_CCLEX_OUT,
    LEG_CCLEX_IN,
    [...LEG_APPROACH].reverse(),
  );

  return {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: resample(course, CONFIG.sampleSpacingMetres),
    },
  };
}

/** Cumulative distance table, so progress 0→1 maps to constant ground speed. */
export function buildDistanceTable(coords: LngLat[]) {
  const cumulative = [0];
  for (let i = 1; i < coords.length; i++) {
    cumulative.push(cumulative[i - 1] + distanceMetres(coords[i - 1], coords[i]));
  }
  return { cumulative, total: cumulative[cumulative.length - 1] };
}

/** Position at normalised progress along the route. */
export function getPointAlongRoute(
  coords: LngLat[],
  table: { cumulative: number[]; total: number },
  progress: number,
): LngLat {
  const target = Math.max(0, Math.min(1, progress)) * table.total;
  let lo = 0;
  let hi = table.cumulative.length - 1;
  while (lo < hi - 1) {
    const mid = (lo + hi) >> 1;
    if (table.cumulative[mid] <= target) lo = mid;
    else hi = mid;
  }
  const span = table.cumulative[hi] - table.cumulative[lo] || 1;
  return lerp(coords[lo], coords[hi], (target - table.cumulative[lo]) / span);
}

/** Every vertex up to `progress`, plus the exact head — the revealed trail. */
export function sliceRoute(
  coords: LngLat[],
  table: { cumulative: number[]; total: number },
  progress: number,
): LngLat[] {
  const target = Math.max(0, Math.min(1, progress)) * table.total;
  const out: LngLat[] = [];
  for (let i = 0; i < coords.length; i++) {
    if (table.cumulative[i] > target) break;
    out.push(coords[i]);
  }
  const head = getPointAlongRoute(coords, table, progress);
  if (out.length === 0) out.push(coords[0]);
  out.push(head);
  return out;
}

/** Total course length in km, for display and for sanity-checking the geometry. */
export function routeLengthKm(): number {
  const route = createMarathonRoute();
  const coords = route.geometry.coordinates as LngLat[];
  return buildDistanceTable(coords).total / 1000;
}
