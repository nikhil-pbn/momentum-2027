export type FaqItem = {
  question: string;
  /** Plain text answer. Use {email} to insert a mailto link to the contact address. */
  answer: string;
};

/** How many questions show before "View More". */
export const faqVisibleCount = 5;

export const faq: FaqItem[] = [
  {
    question: "Where is Momentum 2027 being held?",
    answer:
      "Momentum 2027 is hosted at Glidewell in Irvine, California — one of dentistry's most recognized centers of technology and innovation, minutes from John Wayne Airport (SNA).",
  },
  {
    question: "When should I arrive and depart?",
    answer:
      "Plan to arrive Thursday, April 29 for registration and the welcome reception. The programme runs Friday, April 30 and Saturday, May 1.",
  },
  {
    question: "What does my registration include?",
    answer:
      "Two-day event access at Glidewell, the welcome reception, keynotes and CE presentations, breakout workshops and guided discussions, industry panels and innovation sessions, sponsor-hosted evening experiences, breakfast, lunch and refreshments, networking experiences, and CE credits.",
  },
  {
    question: "Can I earn CE credits?",
    answer:
      "Yes. CE credits are available through the keynotes and CE presentations across both days. CE credit total to be confirmed.",
  },
  {
    question: "Where should I stay?",
    answer:
      "A host hotel close to Glidewell will be announced shortly. Thursday's registration and welcome reception take place there.",
  },
  {
    question: "Is there a discounted hotel room block?",
    answer:
      "Yes — a discounted room block will be held at the host hotel. Booking details go out to registered attendees once the hotel is confirmed.",
  },
  {
    question: "What is the cancellation/refund policy?",
    answer:
      "Registrations are transferable to a colleague at any time. The refund window will be confirmed alongside final pricing.",
  },
  {
    question: "Can I bring members of my team?",
    answer:
      "Yes. Group rates are available — bear in mind the room is limited to 100 paid attendees, so book team seats early.",
  },
  {
    question: "Who should I contact with questions?",
    answer: "Email {email} and the event team will get back to you.",
  },
];
