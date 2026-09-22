/** Resting slot for each sponsor bubble, from the design: x/y as % of the field, size in px at desktop scale. */
export const BUBBLES = [
  { x: 4, y: 6, size: 150 },
  { x: 20, y: 2, size: 120 },
  { x: 38, y: 8, size: 170 },
  { x: 60, y: 3, size: 130 },
  { x: 78, y: 9, size: 180 },
  { x: 93, y: 20, size: 120 },
  { x: 2, y: 38, size: 130 },
  { x: 16, y: 52, size: 170 },
  { x: 88, y: 52, size: 160 },
  { x: 97, y: 75, size: 110 },
  { x: 5, y: 74, size: 150 },
  { x: 22, y: 84, size: 130 },
  { x: 74, y: 82, size: 150 },
  { x: 60, y: 92, size: 110 },
];

/** Phones show only these (indices into BUBBLES) so the ring around the CTA isn't crowded. */
export const PHONE_BUBBLES = [0, 2, 4, 6, 7, 8, 10, 12, 13];

/** Space between neighbouring bubbles once gathered, at desktop scale. Leaves room for their float bob. */
export const GAP = 16;
