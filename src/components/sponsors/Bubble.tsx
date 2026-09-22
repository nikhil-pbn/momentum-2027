"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "motion/react";
import type { Sponsor } from "@/data/sponsors";
import type { GatheredBubble } from "./gather";

type BubbleProps = GatheredBubble & { sponsor: Sponsor; progress: MotionValue<number> };

/**
 * One floating sponsor bubble. Rests at left/top and is pulled to its gathered spot as `progress` goes from 0 to 1.
 * Shows the sponsor's logo once there is one; until then it is a plain, decorative circle.
 */
export function Bubble({ i, size, left, top, dx, dy, sponsor, progress }: BubbleProps) {
  const tx = useTransform(progress, (p) => dx * p);
  const ty = useTransform(progress, (p) => dy * p);

  return (
    <motion.div
      className="absolute"
      style={{ left, top, width: size, height: size, x: tx, y: ty }}
      aria-hidden={!sponsor.logo}
    >
      <div
        className="relative size-full animate-floaty rounded-full border border-[#CFBDEA] bg-bubble [--float:-8px] motion-reduce:animate-none"
        style={{ animationDuration: `${6 + (i % 5)}s`, animationDelay: `${i * 0.4}s` }}
      >
        {sponsor.logo ? (
          <Image src={sponsor.logo} alt={sponsor.name} fill sizes="180px" className="object-contain p-[18%]" />
        ) : null}
      </div>
    </motion.div>
  );
}
