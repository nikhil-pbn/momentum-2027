"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { Chevron } from "@/components/ui/Icons";
import { Lines } from "@/components/ui/Lines";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wrap } from "@/components/ui/Wrap";
import { agenda, defaultAgendaDayId } from "@/data/agenda";
import { copy } from "@/data/copy";
import { cn } from "@/lib/cn";
import { FullAgendaModal } from "./FullAgendaModal";

export function Agenda() {
  const c = copy.agenda;
  const [openId, setOpenId] = useState<string | null>(agenda[0]?.id ?? null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Section id="agenda">
      <Wrap>
        <SectionHeading eyebrow={c.eyebrow} title={<Lines lines={c.title} breakOnMobile={false} />} />

        <Reveal className="mt-10 border-t border-line sm:mt-13.5" delay={0.1}>
          {agenda.map((day) => {
            const open = openId === day.id;
            return (
              <div key={day.id} className="border-b border-line">
                <button
                  type="button"
                  className="flex w-full items-center gap-3 px-1 py-5 text-left transition-colors duration-250 hover:bg-brand/5 sm:gap-6.5 sm:px-1.5 sm:py-6.5"
                  aria-expanded={open}
                  aria-controls={`agenda-${day.id}`}
                  onClick={() => setOpenId(open ? null : day.id)}
                >
                  <span
                    className={cn(
                      "flex-none rounded-full border px-3.5 py-1.75 text-[9px] font-medium tracking-[0.2em] uppercase transition-colors duration-300",
                      open ? "border-brand bg-brand text-white" : "border-line text-brand",
                    )}
                  >
                    {day.dayLabel}
                  </span>
                  <span className="flex-1 text-sm font-light tracking-[0.08em] text-ink uppercase sm:text-[clamp(16px,1.5vw,21px)]">
                    {day.title}
                  </span>
                  <span
                    className={cn(
                      "flex h-7.5 w-7.5 flex-none items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-350 sm:h-8.5 sm:w-8.5",
                      open ? "rotate-180 border-brand bg-brand text-white" : "border-line text-muted",
                    )}
                  >
                    <Chevron className="h-2.75 w-2.75" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={`agenda-${day.id}`}
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 0.68, 0.28, 1] }}
                    >
                      <div className="flex flex-wrap gap-2.5 px-1 pb-5.5 sm:px-1.5 sm:pb-6.5 sm:pl-29">
                        {day.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="rounded-full border border-line bg-white px-4.5 py-2 text-xs text-body sm:px-5.5 sm:py-2.25 sm:text-[12.5px]"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>

        <Reveal className="text-center">
          <button
            type="button"
            className="mt-8.5 inline-block rounded-lg border border-line bg-white px-7.5 py-3.5 text-[11px] font-medium tracking-[0.2em] text-muted uppercase transition-[color,border-color,transform,box-shadow] duration-250 hover:-translate-y-0.5 hover:border-[#d9c9ef] hover:text-ink hover:shadow-[0_10px_24px_rgba(120,70,180,0.10)] sm:mt-11 sm:px-10 sm:py-3.75"
            onClick={() => setModalOpen(true)}
          >
            {c.fullAgendaButton}
          </button>
          <p className="mt-4 text-xs text-faint">{c.note}</p>
        </Reveal>
      </Wrap>

      <FullAgendaModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        days={agenda}
        defaultDayId={defaultAgendaDayId}
      />
    </Section>
  );
}
