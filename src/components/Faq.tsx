"use client";

import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { Chevron } from "@/components/ui/Icons";
import { Lines } from "@/components/ui/Lines";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wrap } from "@/components/ui/Wrap";
import { copy } from "@/data/copy";
import { event } from "@/data/event";
import { faq, faqVisibleCount } from "@/data/faq";
import { cn } from "@/lib/cn";

export function Faq() {
  const c = copy.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? faq : faq.slice(0, faqVisibleCount);

  return (
    <Section id="faq">
      <Wrap>
        <SectionHeading title={<Lines lines={c.title} breakOnMobile={false} />} />

        <Reveal className="mt-10 border-t border-line sm:mt-13.5" delay={0.1}>
          {visible.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question} className="border-b border-line">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-1 py-4.5 text-left transition-colors duration-250 hover:bg-brand/5 sm:gap-6 sm:px-2 sm:py-8"
                  aria-expanded={open}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <h3 className="text-[15px] leading-normal font-normal tracking-[0.04em] text-ink sm:text-lg">
                    {item.question}
                  </h3>
                  {/* 48px circle with the soft purple border from the design; fills purple when open */}
                  <span
                    className={cn(
                      "flex h-9 w-9 flex-none items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-350 sm:h-12 sm:w-12",
                      open
                        ? "rotate-180 border-brand bg-brand text-white"
                        : "border-[rgba(155,76,219,0.30)] text-muted",
                    )}
                  >
                    <Chevron className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={`faq-${i}`}
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 0.68, 0.28, 1] }}
                    >
                      <div className="max-w-225 px-1 pb-5.5 text-[13.5px] leading-[1.85] text-muted sm:px-2 sm:pb-8 sm:text-[15px]">
                        <Answer text={item.answer} />
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>

        {faq.length > faqVisibleCount ? (
          <Reveal className="text-center">
            <button
              type="button"
              className="mt-8 inline-block rounded-lg border border-[rgba(155,76,219,0.30)] bg-canvas-2 px-9 py-4 text-[11px] font-medium tracking-[0.2em] text-muted uppercase transition-[background-color,transform,color] duration-250 hover:-translate-y-0.5 hover:bg-[#e9e2f7] hover:text-ink sm:mt-10 sm:px-11 sm:py-5 sm:text-xs"
              aria-expanded={showAll}
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? c.less : c.more}
            </button>
          </Reveal>
        ) : null}
      </Wrap>
    </Section>
  );
}

/** Replaces the {email} token with a mailto link. */
function Answer({ text }: { text: string }) {
  const parts = text.split("{email}");
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 ? (
            <a href={`mailto:${event.contactEmail}`} className="text-brand">
              {event.contactEmail}
            </a>
          ) : null}
        </Fragment>
      ))}
    </>
  );
}
