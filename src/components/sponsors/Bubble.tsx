"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { GatheredBubble } from "./gather";

type BubbleProps = GatheredBubble & { progress: MotionValue<number> };

/** One floating bubble. Rests at left/top and is pulled to its gathered spot as `progress` goes from 0 to 1. */
export function Bubble({ i, size, left, top, dx, dy, progress }: BubbleProps) {
  const tx = useTransform(progress, (p) => dx * p);
  const ty = useTransform(progress, (p) => dy * p);

  return (
    <motion.div className="absolute" style={{ left, top, width: size, height: size, x: tx, y: ty }} aria-hidden="true">
      <div
        className="size-full animate-floaty rounded-full border border-[#CFBDEA] bg-bubble [--float:-8px] motion-reduce:animate-none"
        style={{ animationDuration: `${6 + (i % 5)}s`, animationDelay: `${i * 0.4}s` }}
      />
    </motion.div>
  );
}
