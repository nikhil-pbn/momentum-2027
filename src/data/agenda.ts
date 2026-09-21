export type AgendaTag = {
  label: string;
  /** speaker = purple outline, place = neutral, ce = neutral. */
  kind?: "speaker" | "place" | "ce";
};

export type AgendaTrack = {
  code: string;
  title: string;
  description: string;
};

export type AgendaSession = {
  time: string;
  /** Small uppercase label under the time, e.g. "CE Keynote". */
  type: string;
  title: string;
  description?: string;
  tags?: AgendaTag[];
  /** Parallel breakout tracks rendered as cards. */
  tracks?: AgendaTrack[];
};

export type AgendaDay = {
  id: string;
  /** Pill on the preliminary accordion, e.g. "Day 0". */
  dayLabel: string;
  /** Accordion title and modal tab, e.g. "Thursday · April 29". */
  title: string;
  /** Pills shown in the preliminary accordion. */
  highlights: string[];
  /** Detailed schedule shown in the Full Agenda modal. */
  place: string;
  sessions: AgendaSession[];
  footnote?: string;
  /**
   * True when the detailed schedule was not part of the design and is a
   * placeholder to be replaced by the event team.
   */
  placeholder?: boolean;
};

/** Which day the Full Agenda modal opens on. */
export const defaultAgendaDayId = "friday";

export const agenda: AgendaDay[] = [
  {
    id: "thursday",
    dayLabel: "Day 0",
    title: "Thursday · April 29",
    highlights: ["Arrival", "Registration", "Welcome Reception"],
    place: "Host Hotel, Irvine",
    placeholder: true,
    // PLACEHOLDER: the design only detailed Friday. Times below are illustrative.
    sessions: [
      {
        time: "From 2:00 PM",
        type: "Arrival",
        title: "Arrival & Hotel Check-In",
        description: "Settle in at the host hotel ahead of the evening.",
        tags: [{ label: "Host Hotel", kind: "place" }],
      },
      {
        time: "4:00 PM – 6:00 PM",
        type: "Registration",
        title: "Registration & Badge Pickup",
        tags: [{ label: "Host Hotel", kind: "place" }],
      },
      {
        time: "6:00 PM – 8:00 PM",
        type: "Reception",
        title: "Welcome Reception",
        description: "Meet fellow attendees, speakers and sponsors before the programme begins.",
        tags: [{ label: "Host Hotel", kind: "place" }],
      },
    ],
    footnote: "Preliminary schedule. Times to be confirmed.",
  },
  {
    id: "friday",
    dayLabel: "Day 1",
    title: "Friday · April 30",
    highlights: ["CE", "Keynotes", "Practice Conversations", "Glidewell Experience", "Breakouts", "Hosted Dinners"],
    place: "Glidewell Campus, Irvine",
    sessions: [
      {
        time: "7:30 AM – 8:30 AM",
        type: "Networking",
        title: "Breakfast & Networking",
        tags: [{ label: "Main Foyer", kind: "place" }],
      },
      {
        time: "8:30 AM – 9:00 AM",
        type: "Opening",
        title: "Welcome & Opening Remarks",
        description: "Framing the two days and what you should walk away with.",
        tags: [
          { label: "Scott Leune", kind: "speaker" },
          { label: "Main Hall", kind: "place" },
        ],
      },
      {
        time: "9:00 AM – 10:15 AM",
        type: "CE Keynote",
        title: "From Data to a Brighter Tomorrow",
        description: "How data-led decision making reshapes growth, staffing, and case acceptance.",
        tags: [
          { label: "Scott Leune", kind: "speaker" },
          { label: "Main Hall", kind: "place" },
          { label: "1.25 CE", kind: "ce" },
        ],
      },
      {
        time: "10:45 AM – 12:00 PM",
        type: "Panel",
        title: "Practice Conversations",
        description: "Owners and operators on what actually moved the needle this year.",
        tags: [
          { label: "Panel of practice owners", kind: "speaker" },
          { label: "Main Hall", kind: "place" },
        ],
      },
      {
        time: "2:30 PM – 3:45 PM",
        type: "Breakouts",
        title: "Breakout Workshops",
        tracks: [
          {
            code: "Track A",
            title: "Growth & Case Acceptance",
            description: "Turning consultations into treatment plans patients say yes to.",
          },
          {
            code: "Track B",
            title: "Operations & Team",
            description: "Scheduling, staffing models, and building a team that stays.",
          },
          {
            code: "Track C",
            title: "Technology & AI",
            description: "What to adopt now, what to wait on, and how to measure it.",
          },
        ],
      },
    ],
    footnote: "Continues: CE Session · Sponsor Hosted Dinners",
  },
  {
    id: "saturday",
    dayLabel: "Day 2",
    title: "Saturday · May 1",
    highlights: ["CE", "Industry Voices", "Peer Insights", "Closing Session"],
    place: "Glidewell Campus, Irvine",
    placeholder: true,
    // PLACEHOLDER: the design only detailed Friday. Times below are illustrative.
    sessions: [
      {
        time: "7:30 AM – 8:30 AM",
        type: "Networking",
        title: "Breakfast & Networking",
        tags: [{ label: "Main Foyer", kind: "place" }],
      },
      {
        time: "8:30 AM – 10:00 AM",
        type: "CE Session",
        title: "CE Session",
        description: "Continuing education focused on the modern practice.",
        tags: [
          { label: "Main Hall", kind: "place" },
          { label: "CE", kind: "ce" },
        ],
      },
      {
        time: "10:30 AM – 12:00 PM",
        type: "Panel",
        title: "Industry Voices",
        description: "Industry leaders on where dentistry is heading next.",
        tags: [{ label: "Main Hall", kind: "place" }],
      },
      {
        time: "1:00 PM – 2:30 PM",
        type: "Roundtables",
        title: "Peer Insights",
        description: "Small-group conversations with high-performing peers.",
        tags: [{ label: "Main Hall", kind: "place" }],
      },
      {
        time: "2:30 PM – 3:30 PM",
        type: "Closing",
        title: "Closing Session",
        description: "Key takeaways and what to put to work on Monday.",
        tags: [{ label: "Main Hall", kind: "place" }],
      },
    ],
    footnote: "Preliminary schedule. Times to be confirmed.",
  },
];
