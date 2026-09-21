/**
 * Core facts about Momentum 2027. Edit here and every section updates.
 */
export const event = {
  name: "Momentum 2027",
  tagline: "Mastering the Modern Practice",
  subtitle: "The people, ideas and technology moving dentistry forward.",

  /** Full run including the Thursday arrival evening. */
  dateShort: "April 29–May 1, 2027",
  dateLong: "April 29 – May 1, 2027",
  /** The two programme days, used on the lower marquee band. */
  programmeDates: "April 30 – May 1, 2027",

  venue: {
    name: "Glidewell",
    city: "Irvine, California",
    campus: "Glidewell Campus",
    /** As shown in the venue section: "GLIDEWELL · Irvine, California" */
    label: "GLIDEWELL · Irvine, California",
    /** As shown in the footer. */
    footer: "Glidewell Campus, Irvine, CA",
  },

  seats: 100,

  price: {
    earlyBird: 399,
    regular: 449,
    savings: 150,
    earlyBirdEndsLabel: "February 28",
    /** Pacific time, end of day. Drives the countdown. */
    earlyBirdDeadline: "2027-02-28T23:59:59-08:00",
  },

  contactEmail: "insiders@practicenumbers.com",

  links: {
    register: "#register",
    /** TODO: replace with the sponsorship prospectus or contact link. */
    sponsor: "#",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Speaker", href: "#speakers" },
    { label: "Agenda", href: "#agenda" },
    { label: "Venue", href: "#venue" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "FAQ", href: "#faq" },
  ],

  footerLinks: [
    { label: "About", href: "#about" },
    { label: "Agenda", href: "#agenda" },
    { label: "Venue", href: "#venue" },
    { label: "Register", href: "#register" },
    { label: "FAQ", href: "#faq" },
  ],

  marquee: {
    top: "MOMENTUM 2027 · KEYNOTES · WORKSHOPS · ROUNDTABLES · NETWORKING ·",
    bottom: "REGISTER NOW · APRIL 30 – MAY 1, 2027 · GLIDEWELL CAMPUS · REGISTER NOW ·",
  },

  copyright: "© 2026 Practice by Numbers. All rights reserved.",
} as const;
