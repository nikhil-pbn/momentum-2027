import type { StaticImageData } from "next/image";
import scottLeune from "@/assets/speaker-scott-leune.jpg";
import aditiAgarwal from "@/assets/speaker-aditi-agarwal.jpg";
import marcusVale from "@/assets/speaker-marcus-vale.jpg";
import elenaRuiz from "@/assets/speaker-elena-ruiz.jpg";

export type Speaker = {
  name: string;
  role: string;
  photo: StaticImageData;
  /** Social links. "#" is a placeholder until real profiles are supplied. */
  socials: { x: string; linkedin: string; facebook: string };
};

const placeholderSocials = { x: "#", linkedin: "#", facebook: "#" };

/**
 * Speaker line-up. NOTE: "Dr. Marcus Vale" and "Elena Ruiz" came from the design
 * as placeholders and should be replaced with confirmed speakers.
 */
export const speakers: Speaker[] = [
  {
    name: "Scott Leune",
    role: "Dentist, Entrepreneur & Practice Management Educator",
    photo: scottLeune,
    socials: placeholderSocials,
  },
  {
    name: "Dr. Aditi Agarwal",
    role: "Clinical Innovation & Digital Dentistry",
    photo: aditiAgarwal,
    socials: placeholderSocials,
  },
  {
    name: "Dr. Marcus Vale",
    role: "Group Practice Growth & DSO Strategy",
    photo: marcusVale,
    socials: placeholderSocials,
  },
  {
    name: "Elena Ruiz",
    role: "Dental Operations & Team Development Coach",
    photo: elenaRuiz,
    socials: placeholderSocials,
  },
];
