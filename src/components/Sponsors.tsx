"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Lines } from "@/components/ui/Lines";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wrap } from "@/components/ui/Wrap";
import { copy } from "@/data/copy";
import { event } from "@/data/event";

/** Resting bubble layout from the design: x/y as % of the field, size in px on desktop. */
const BUBBLES = [
  { x: 4, y: 6, size: 150 },
  { x: 20, y: 2, size: 120 },
  { x: 38, y: 8, size: 170 },
  { x: 60, y: 3, size: 130 },
  { x: 78, y: 9, size: 180 },
  { x: 93, y: 20, size: 120 },
  { x: 2, y: 38, size: 130 },
  { x: 16, y: 52, size: 170 },
  { x: 88, y: 52, size: 160 },
  { x: 97, y: 75, size: 110 },
  { x: 5, y: 74, size: 150 },
  { x: 22, y: 84, size: 130 },
  { x: 74, y: 82, size: 150 },
  { x: 60, y: 92, size: 110 },
];
/** Phones show only these (indices into BUBBLES) so the ring around the CTA isn't crowded. */
const PHONE_BUBBLES = [0, 1, 2, 4, 6, 7, 8, 10, 12, 13];

type Box = { w: number; h: number; r: number };

const smoothstep = (t: number) => t * t * (3 - 2 * t);

/** Sponsor CTA with floating bubbles that gather into a ring around it as the section scrolls through the viewport. */
export function Sponsors() {
  const c = copy.sponsors;
  const fieldRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<Box>({ w: 0, h: 0, r: 0 });

  // 0 when the field's top reaches the bottom of the viewport, 1 when its bottom leaves the top.
  const { scrollYProgress } = useScroll({ target: fieldRef, offset: ["start end", "end start"] });
  const eased = useTransform(scrollYProgress, (v) => smoothstep(Math.min(1, Math.max(0, (v - 0.28) / 0.55))));
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

  const scale = box.w < 640 ? 0.5 : box.w < 1000 ? 0.75 : 1;
  const shown = BUBBLES.map((b, i) => ({ ...b, i })).filter((b) => box.w >= 640 || PHONE_BUBBLES.includes(b.i));
  // Ring slots follow the resting order around the centre, so no bubble crosses the CTA on its way in.
  const byAngle = [...shown].sort((a, b) => Math.atan2(a.y - 45, a.x - 45) - Math.atan2(b.y - 45, b.x - 45));

  return (
    <Section id="sponsors" className="overflow-hidden">
      <Wrap className="text-center">
        <SectionHeading title={<Lines lines={c.title} breakOnMobile={false} />} />
      </Wrap>

      <div ref={fieldRef} className="relative mt-4 h-130 sm:mt-8 sm:h-160 nav:h-190">
        {box.w > 0 &&
          shown.map((b) => (
            <Bubble
              key={`${b.i}-${box.w}`}
              {...b}
              size={b.size * scale}
              slot={byAngle.indexOf(b) / shown.length}
              box={box}
              progress={progress}
            />
          ))}

        <Reveal className="absolute inset-0 z-5 m-auto h-[min(440px,70vw)] w-[min(440px,70vw)] sm:h-[min(440px,78vw)] sm:w-[min(440px,78vw)]">
          <div
            ref={ctaRef}
            className="flex h-full w-full animate-floaty flex-col items-center justify-center gap-3 rounded-full bg-accent p-6 text-center text-white shadow-[0_0_70px_rgba(74,127,232,0.28)] [animation-duration:9s] motion-reduce:animate-none sm:gap-5 sm:p-11 sm:shadow-[0_0_110px_rgba(74,127,232,0.32)]"
          >
            <h3 className="text-[15px] leading-[1.3] font-light tracking-widest uppercase sm:text-[clamp(18px,1.8vw,26px)]">
              <Lines lines={c.ctaTitle} />
            </h3>
            <p className="max-w-50 text-xs leading-[1.6] text-pretty text-white/88 sm:max-w-70 sm:text-[13px] sm:leading-[1.7]">
              {c.ctaBody}
            </p>
            <Button
              href={event.links.sponsor}
              variant="navy"
              className="px-5 py-3 text-[10.5px] tracking-[0.14em] whitespace-nowrap sm:px-9.5 sm:py-4 sm:text-xs sm:tracking-[0.16em]"
            >
              {c.ctaButton}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

type BubbleProps = {
  i: number;
  x: number;
  y: number;
  size: number;
  /** Position on the ring, 0–1 clockwise from the top. */
  slot: number;
  box: Box;
  progress: MotionValue<number>;
};

function Bubble({ i, x, y, size, slot, box, progress }: BubbleProps) {
  // From its resting centre to its slot on a ring just outside the CTA's rim.
  const cx = (x / 100) * box.w + size / 2;
  const cy = (y / 100) * box.h + size / 2;
  const angle = -Math.PI / 2 + slot * Math.PI * 2;
  const ring = box.r + size * 0.45;
  const dx = box.w / 2 + Math.cos(angle) * ring - cx;
  const dy = box.h / 2 + Math.sin(angle) * ring - cy;
  const tx = useTransform(progress, (p) => dx * p);
  const ty = useTransform(progress, (p) => dy * p);

  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, x: tx, y: ty }}
      aria-hidden="true"
    >
      <div
        className="size-full animate-floaty rounded-full bg-bubble motion-reduce:animate-none"
        style={{ animationDuration: `${6 + (i % 5)}s`, animationDelay: `${i * 0.4}s` }}
      />
    </motion.div>
  );
}
