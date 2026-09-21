/**
 * Section copy for Momentum 2027. Headings that break onto specific lines are stored as arrays.
 */
export const copy = {
  hero: {
    /** "Mastering the Modern Practice" broken as the design shows it. */
    titleLines: ["Mastering", "the Modern", "Practice"],
    button: "Register Now",
  },

  about: {
    eyebrow: "About The Event",
    title: ["The Modern Practice", "Doesn't Stand Still."],
    subline: "Neither Should You",
    paragraphs: [
      {
        text: "Momentum brings together dental practice owners, industry leaders and innovators for two days focused on what's next, and what it takes to build a stronger practice now. ",
        strong: "Growth. Operations. Technology. Leadership.",
      },
      {
        text: "Hosted at Glidewell in Irvine, California, Momentum combines education, real-world conversations and hands-on experiences in an intentionally intimate setting.",
      },
    ],
  },

  who: {
    eyebrow: "Who Should Attend",
    title: "Who Is Momentum For?",
    lede: "Momentum is designed for the people building, operating and shaping modern dental practices.",
  },

  why: {
    eyebrow: "Why Attend",
    title: ["Two Days That Move Your", "Practice Forward."],
  },

  pass: {
    eyebrow: "What Is Included",
    title: "Your Momentum Pass",
    footnote: "*CE credit total to be confirmed.",
  },

  speakers: {
    eyebrow: "Speakers",
    title: ["Ideas Worth", "Bringing Home"],
    subline: "Learn From The Leaders Setting The Pace.",
    lede: "Momentum brings together high-performing practice owners, operators, educators and industry experts who are solving the challenges of the modern practice in real time. Hear what they're doing now, what's working, what they've learned, and the strategies they're using to build stronger, smarter practices.",
  },

  venue: {
    eyebrow: "World-Class Venue",
    title: ["Inside One Of Dentistry's", "Premier Centers Of", "Innovation"],
    body: "Momentum 2027 gives attendees the opportunity to step inside Glidewell and experience one of dentistry's most recognized centers of technology and innovation.",
    tag: ["Come For Momentum.", "Stay For California."],
  },

  register: {
    eyebrow: "Registration",
    title: "Save Your Spot",
    lede: "Two days, 100 seats, and a room built for real conversation.",
    countdownLabel: "Early Bird Ends In",
    seatsWord: ["Seats.", "That's it."],
    seatsBody:
      "Momentum is intentionally intimate, designed for better conversations, better access, and a more valuable experience.",
    priceWord: ["Early", "Bird"],
  },

  agenda: {
    eyebrow: "Preliminary Agenda",
    title: ["Your Momentum 2027", "Experience"],
    fullAgendaButton: "View Full Agenda",
    note: "The full agenda opens closer to the event.",
  },

  sponsors: {
    // eyebrow: "Sponsors",
    title: ["Our 2027 Sponsors", "& Partners"],
    ctaTitle: ["Industry Partners", "& Sponsors"],
    ctaBody: "Sponsorship packages with hosted dinner options",
    ctaButton: "Become a Sponsor",
  },

  faq: {
    title: ["Frequently Asked", "Questions"],
    more: "View More",
    less: "View Less",
  },

  finalCta: {
    heading: "What's Next Starts Here",
    button: "Register Now",
  },
} as const;
