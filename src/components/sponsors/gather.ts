export type Box = { w: number; h: number; r: number };
export type RestingBubble = { i: number; x: number; y: number; size: number };
/** A bubble's resting top-left in px, plus the offset from there to where the pull stops it. */
export type GatheredBubble = { i: number; size: number; left: number; top: number; dx: number; dy: number };

type Pt = { x: number; y: number };
type Circle = Pt & { r: number };

/** The two points where circles a and b cross (none if they don't). */
function crossings(a: Circle, b: Circle): Pt[] {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const d = Math.hypot(dx, dy);
  if (d === 0 || d > a.r + b.r || d < Math.abs(a.r - b.r)) return [];
  const along = (a.r * a.r - b.r * b.r + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, a.r * a.r - along * along));
  const mx = a.x + (dx * along) / d;
  const my = a.y + (dy * along) / d;
  return [
    { x: mx - (dy * h) / d, y: my + (dx * h) / d },
    { x: mx + (dy * h) / d, y: my - (dx * h) / d },
  ];
}

/**
 * Where each bubble rests and where it settles when pulled toward the centre. Bubbles resting nearer the centre arrive
 * first and take the spot on the CTA's rim straight ahead of them. A later bubble whose spot is taken slides round to
 * the nearest free spot on the rim, or wedges into the crevice between two earlier arrivals, so the cluster hugs the
 * circle.
 */
export function gatherBubbles(bubbles: RestingBubble[], box: Box, gap: number): GatheredBubble[] {
  const centre = { x: box.w / 2, y: box.h / 2 };
  const placed: Circle[] = [];

  const resting = bubbles.map((b) => {
    const r = b.size / 2;
    let x0 = (b.x / 100) * box.w + r;
    let y0 = (b.y / 100) * box.h + r;
    // Resting bubbles keep clear of the CTA too: any the layout puts against it is pushed straight out to three gaps.
    const d = Math.hypot(x0 - centre.x, y0 - centre.y);
    const clear = box.r + 3 * gap + r;
    if (d < clear) {
      x0 = centre.x + ((x0 - centre.x) / d) * clear;
      y0 = centre.y + ((y0 - centre.y) / d) * clear;
    }
    return { ...b, r, x0, y0 };
  });
  resting.sort((a, b) => Math.hypot(a.x0 - centre.x, a.y0 - centre.y) - Math.hypot(b.x0 - centre.x, b.y0 - centre.y));

  return resting.map((b) => {
    const angle0 = Math.atan2(b.y0 - centre.y, b.x0 - centre.x);
    // Circles this bubble's centre must stay on or outside: the rim, and one around each earlier arrival.
    const rim: Circle = { ...centre, r: box.r + gap + b.r };
    const around: Circle[] = placed.map((p) => ({ x: p.x, y: p.y, r: p.r + b.r + gap }));

    // Candidate spots: straight ahead on the rim; on the rim touching an earlier bubble; wedged between two of them.
    const spots: Pt[] = [{ x: centre.x + Math.cos(angle0) * rim.r, y: centre.y + Math.sin(angle0) * rim.r }];
    around.forEach((a, k) => {
      spots.push(...crossings(rim, a));
      around.slice(k + 1).forEach((o) => spots.push(...crossings(a, o)));
    });
    const free = spots.filter(
      (s) =>
        Math.hypot(s.x - centre.x, s.y - centre.y) >= rim.r - 0.5 &&
        around.every((a) => Math.hypot(s.x - a.x, s.y - a.y) >= a.r - 0.5),
    );

    // Nearest the centre wins, penalised by how far round from its own direction it has to slide.
    const score = (s: Pt) => {
      const turn = Math.abs(Math.atan2(s.y - centre.y, s.x - centre.x) - angle0);
      return Math.hypot(s.x - centre.x, s.y - centre.y) * (1 + Math.min(turn, 2 * Math.PI - turn));
    };
    const spot = free.length ? free.reduce((best, s) => (score(s) < score(best) ? s : best)) : { x: b.x0, y: b.y0 };

    placed.push({ ...spot, r: b.r });
    return { i: b.i, size: b.size, left: b.x0 - b.r, top: b.y0 - b.r, dx: spot.x - b.x0, dy: spot.y - b.y0 };
  });
}
