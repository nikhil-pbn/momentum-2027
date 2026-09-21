"use client";

import { useEffect, useState } from "react";

const LABELS = ["Days", "Hours", "Minutes", "Seconds"];
const pad = (n: number) => String(n).padStart(2, "0");

function valuesUntil(deadline: string) {
  const ms = Math.max(0, new Date(deadline).getTime() - Date.now());
  return [
    String(Math.floor(ms / 86_400_000)),
    pad(Math.floor(ms / 3_600_000) % 24),
    pad(Math.floor(ms / 60_000) % 60),
    pad(Math.floor(ms / 1000) % 60),
  ];
}

/**
 * Early-bird countdown. Recomputed from the real clock every second, so it can never drift.
 * The server renders dashes; the client fills in the numbers on mount.
 */
export function Countdown({ deadline }: { deadline: string }) {
  const [values, setValues] = useState<string[]>();

  useEffect(() => {
    const tick = () => setValues(valuesUntil(deadline));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [deadline]);

  return (
    // `@container` lets the digits size from the row width (cqi) so three digits always fit a column
    <div role="timer" className="@container mx-auto mt-6 grid max-w-230 grid-cols-4 sm:mt-11">
      {LABELS.map((label, i) => (
        <div key={label} className="min-w-0 border-r border-line px-1.5 text-center last:border-r-0">
          <b className="block text-[clamp(22px,9.5cqi,42px)] leading-none font-light text-brand tabular-nums sm:text-[clamp(36px,10cqi,92px)]">
            {values?.[i] ?? "—"}
          </b>
          <span className="mt-3 block text-[9px] font-medium tracking-[0.06em] text-muted uppercase sm:mt-5.5 sm:text-xs sm:tracking-[0.08em]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
