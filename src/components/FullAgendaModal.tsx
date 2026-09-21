"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/ui/Icons";
import type { AgendaDay } from "@/data/agenda";
import { event } from "@/data/event";
import { cn } from "@/lib/cn";

type FullAgendaModalProps = {
  open: boolean;
  onClose: () => void;
  days: AgendaDay[];
  defaultDayId: string;
};

const labelClass = "text-[9px] font-semibold uppercase tracking-[0.2em] text-brand";

/** Full agenda in a native <dialog> (the browser handles focus, Escape and the backdrop), one tab per day. */
export function FullAgendaModal({ open, onClose, days, defaultDayId }: FullAgendaModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const [dayId, setDayId] = useState(defaultDayId);
  const day = days.find((d) => d.id === dayId) ?? days[0];

  useEffect(() => {
    if (open) ref.current?.showModal();
    else ref.current?.close();
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="full-agenda-title"
      className="m-auto max-h-[calc(100vh-24px)] w-[min(920px,calc(100%-24px))] max-w-none flex-col overflow-hidden rounded-[14px] border-0 bg-white p-0 text-ink shadow-[0_30px_80px_rgba(20,10,60,0.35)] transition-[opacity,translate] duration-300 backdrop:bg-[rgba(28,34,80,0.55)] backdrop:backdrop-blur-[6px] open:flex sm:max-h-[calc(100vh-48px)] sm:rounded-[18px] starting:open:translate-y-6 starting:open:opacity-0"
      onClose={() => {
        setDayId(defaultDayId);
        onClose();
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex items-center justify-between gap-5 px-5 pt-6.5 pb-4.5 sm:px-8">
        <h2 id="full-agenda-title" className="text-[clamp(15px,1.4vw,19px)] font-light tracking-widest uppercase">
          {event.name} — Full Agenda
        </h2>
        <button
          type="button"
          className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line text-muted transition-colors duration-250 hover:border-ink hover:bg-ink hover:text-white"
          aria-label="Close full agenda"
          onClick={onClose}
        >
          <CloseIcon className="h-3 w-3" />
        </button>
      </div>

      <div
        className="flex flex-wrap gap-2.5 border-b border-line px-5 pb-4.5 sm:px-8"
        role="tablist"
        aria-label="Agenda days"
      >
        {days.map((d) => (
          <button
            key={d.id}
            type="button"
            role="tab"
            aria-selected={d.id === day.id}
            className={cn(
              "rounded-full border px-5 py-2.25 text-[10px] font-medium tracking-[0.18em] uppercase transition-colors duration-250",
              d.id === day.id
                ? "border-brand bg-brand text-white"
                : "border-line text-muted hover:border-[#d9c9ef] hover:text-ink",
            )}
            onClick={() => setDayId(d.id)}
          >
            {d.title}
          </button>
        ))}
      </div>

      <div className="overflow-y-auto px-5 pt-5.5 pb-6.5 sm:px-8" role="tabpanel">
        <h3 className="text-[clamp(17px,1.6vw,22px)] font-light tracking-[0.08em] uppercase">{day.title}</h3>
        <p className="mt-1 text-[12.5px] text-muted">{day.place}</p>

        <ol className="mt-2">
          {day.sessions.map((session) => (
            <li
              key={`${session.time}-${session.title}`}
              className="grid gap-2.5 border-b border-dashed border-line py-5.5 last:border-b-0 sm:grid-cols-[170px_1fr] sm:gap-6"
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-sm">{session.time}</span>
                <span className={labelClass}>{session.type}</span>
              </div>

              <div>
                <h4 className="text-[15.5px] leading-normal font-medium">{session.title}</h4>
                {session.description ? (
                  <p className="mt-1.5 text-[13px] leading-[1.7] text-muted">{session.description}</p>
                ) : null}

                {session.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {session.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={cn(
                          "rounded-full border bg-white px-3.5 py-1.5 text-[11.5px]",
                          tag.kind === "speaker" ? "border-[#d9c3f0] text-brand" : "border-line text-body",
                        )}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                ) : null}

                {session.tracks?.length ? (
                  <div className="mt-3.5 grid gap-3.5 sm:grid-cols-3">
                    {session.tracks.map((track) => (
                      <div key={track.code} className="rounded-xl border border-line bg-white px-4.5 py-4">
                        <span className={cn(labelClass, "block")}>{track.code}</span>
                        <h5 className="mt-2 text-sm leading-[1.4] font-medium">{track.title}</h5>
                        <p className="mt-1.5 text-[12.5px] leading-[1.65] text-muted">{track.description}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        {day.footnote ? <p className="mt-4.5 border-t border-line pt-4 text-xs text-muted">{day.footnote}</p> : null}
      </div>
    </dialog>
  );
}
