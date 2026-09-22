import type { StaticImageData } from "next/image";

export type Sponsor = {
  name: string;
  /** Logo shown inside the bubble. Until it arrives the bubble stays a plain circle. */
  logo?: StaticImageData;
};

/**
 * One entry per bubble, in slot order (the 14 slot positions live in components/sponsors/bubbles.ts).
 * To add a logo, drop the file in src/assets and import it here, e.g.
 *   import glidewell from "@/assets/sponsor-glidewell.png";
 *   { name: "Glidewell", logo: glidewell },
 */
export const sponsors: Sponsor[] = [
  // { name: "Sponsor 1", logo: sponsor1Logo },
  { name: "Sponsor 1" },
  { name: "Sponsor 2" },
  { name: "Sponsor 3" },
  { name: "Sponsor 4" },
  { name: "Sponsor 5" },
  { name: "Sponsor 6" },
  { name: "Sponsor 7" },
  { name: "Sponsor 8" },
  { name: "Sponsor 9" },
  { name: "Sponsor 10" },
  { name: "Sponsor 11" },
  { name: "Sponsor 12" },
  { name: "Sponsor 13" },
  { name: "Sponsor 14" },
];
