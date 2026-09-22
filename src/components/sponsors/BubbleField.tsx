"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useScroll, useSpring, useTransform } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import type { Sponsor } from "@/data/sponsors";
import { Bubble } from "./Bubble";
import { BUBBLES, GAP, PHONE_BUBBLES } from "./bubbles";
import { gatherBubbles, type Box } from "./gather";

const smoothstep = (t: number) => t * t * (3 - 2 * t);

type BubbleFieldProps = { sponsors: Sponsor[]; children: ReactNode };

/** Full-bleed field of floating sponsor bubbles pulled in around the centred CTA (children) as it scrolls into view. */
export function BubbleField({ sponsors, children }: BubbleFieldProps) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<Box>({ w: 0, h: 0, r: 0 });

  // scrollYProgress is 0 when the field's top reaches the bottom of the viewport and 0.5 when the field is centred in it.
  // The pull runs over that stretch so the bubbles are fully gathered while the CTA is still in full view.
  const { scrollYProgress } = useScroll({ target: fieldRef, offset: ["start end", "end start"] });
  const eased = useTransform(scrollYProgress, (v) => smoothstep(Math.min(1, Math.max(0, (v - 0.1) / 0.4))));
  const progress = useSpring(eased, { stiffness: 140, damping: 28, mass: 0.6 });

  useEffect(() => {
    const field = fieldRef.current!;
    const cta = ctaRef.current!;
    const observer = new ResizeObserver(() =>
      setBox({ w: field.clientWidth, h: field.clientHeight, r: cta.offsetWidth / 2 }),
    );
    observer.observe(field);
    observer.observe(cta);
    return () => observer.disconnect();
  }, []);

  // One bubble per sponsor, in slot order; phones show only some slots.
  const scale = Math.min(1, Math.max(0.5, box.w / 1100));
  const shown = sponsors
    .slice(0, BUBBLES.length)
    .map((_, i) => ({ ...BUBBLES[i], i, size: BUBBLES[i].size * scale }))
    .filter((b) => box.w >= 640 || PHONE_BUBBLES.includes(b.i));
  const gathered = gatherBubbles(shown, box, GAP * scale);

  return (
    <div ref={fieldRef} className="relative mt-4 h-130 sm:mt-10 sm:h-170 nav:h-200">
      {box.w > 0 &&
        gathered.map((b) => <Bubble key={`${b.i}-${box.w}`} {...b} sponsor={sponsors[b.i]} progress={progress} />)}

      <Reveal
        ref={ctaRef}
        className="absolute inset-0 z-5 m-auto h-[min(440px,70vw)] w-[min(440px,70vw)] sm:h-[min(440px,78vw)] sm:w-[min(440px,78vw)]"
      >
        {children}
      </Reveal>
    </div>
  );
}
