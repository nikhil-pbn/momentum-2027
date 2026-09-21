import type { StaticImageData } from "next/image";
import venue1 from "@/assets/venue-1.jpg";
import venue2 from "@/assets/venue-2.jpg";
import venue3 from "@/assets/venue-3.jpg";
import venue4 from "@/assets/venue-4.jpg";
import venue5 from "@/assets/venue-5.jpg";
import venue6 from "@/assets/venue-6.jpg";
import venue7 from "@/assets/venue-7.jpg";

export type VenueSlide = { image: StaticImageData; alt: string };

/** Venue slider images, in rotation order. */
export const venueSlides: VenueSlide[] = [
  { image: venue1, alt: "Speaker on stage at a Momentum session" },
  { image: venue2, alt: "Attendees seated during a keynote" },
  { image: venue3, alt: "Momentum stage and screens" },
  { image: venue4, alt: "Audience at a Momentum presentation" },
  { image: venue5, alt: "Presenter addressing the room" },
  { image: venue6, alt: "Event hall during a session" },
  { image: venue7, alt: "Networking at Momentum" },
];
