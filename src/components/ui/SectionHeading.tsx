import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  /** Uppercase mid-weight line under the title, e.g. "Neither Should You". */
  subline?: string;
  /** Muted paragraph under the title. */
  lede?: string;
  ledeClassName?: string;
};

/** Eyebrow + light uppercase H2 + optional subline and lede, centred, each line revealing in turn. */
export function SectionHeading({ eyebrow, title, subline, lede, ledeClassName = "max-w-220" }: SectionHeadingProps) {
  return (
    <div className="text-center">
      {eyebrow ? (
        <Reveal
          as="span"
          className="inline-block text-[11px] font-bold tracking-[0.3em] text-muted uppercase sm:text-xs sm:tracking-[0.42em]"
        >
          {eyebrow}
        </Reveal>
      ) : null}
      <Reveal
        as="h2"
        className={cn(
          "text-2xl leading-[1.22] font-light tracking-[0.08em] text-ink uppercase sm:text-[clamp(28px,3.7vw,54px)] sm:tracking-widest",
          eyebrow && "mt-5.5",
        )}
        delay={0.08}
      >
        {title}
      </Reveal>
      {subline ? (
        <Reveal
          as="p"
          className="mt-4.5 text-[13px] leading-[1.4] font-medium tracking-widest text-[#746B87] uppercase sm:text-[clamp(14px,1.55vw,20px)]"
          delay={0.16}
        >
          {subline}
        </Reveal>
      ) : null}
      {lede ? (
        <Reveal
          as="p"
          className={cn("mx-auto mt-5.5 text-[15px] leading-[1.85] text-muted sm:text-base", ledeClassName)}
          delay={0.24}
        >
          {lede}
        </Reveal>
      ) : null}
    </div>
  );
}
