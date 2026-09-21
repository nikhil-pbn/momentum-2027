export type Reason = {
  number: string;
  title: string;
  body: string;
  /** Colour of the large number. */
  color: string;
};

/** "Why Attend" cards, left to right. */
export const reasons: Reason[] = [
  {
    number: "01",
    title: "Learn from people leading the way.",
    body: "Hear from practice owners, operators and industry leaders who are in the trenches, excelling at the work in real time. CE, keynotes and candid conversations focused on what they're doing now, what's working, and what you can put to work in your own practice.",
    color: "#c05cd6",
  },
  {
    number: "02",
    title: "Turn proven ideas into action.",
    body: "Go beyond inspiration with practical breakouts and guided discussions built around real-world strategies, systems and approaches you can take home and use.",
    color: "#4a7fe8",
  },
  {
    number: "03",
    title: "Connect with people raising the bar.",
    body: "Momentum is intentionally small, creating meaningful access to high-performing practice leaders, experts and peers, and the time for conversations that rarely happen in a crowded conference hall.",
    color: "#9b4cdb",
  },
];
