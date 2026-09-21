export type AudienceCell = {
  /** Heading lines, one per array entry, as the design breaks them. */
  title: string[];
  body: string;
};

/** "Who Should Attend" cells, left to right. */
export const audience: AudienceCell[] = [
  {
    title: ["Practice Owners", "& Dentists"],
    body: "Ideas, technology and operating strategies to build a stronger, more profitable practice.",
  },
  {
    title: ["DSO & Group", "Practice", "Executives"],
    body: "Practical insight for improving performance, visibility and consistency across locations.",
  },
  {
    title: ["Office Managers", "& Operations", "Leaders"],
    body: "Tools and strategies for turning practice data into better workflows, decisions and outcomes.",
  },
  {
    title: ["Industry", "Partners", "& Sponsors"],
    body: "Connect with practice leaders and participate in conversations shaping the future of dentistry.",
  },
  {
    title: ["Select Prospects", "& Industry", "Experts"],
    body: "Join a curated community of operators, educators and innovators exchanging what's working now.",
  },
];
