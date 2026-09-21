"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { VenueSlide } from "@/data/venue";
import { cn } from "@/lib/cn";

/** Cross-fading photo slider. Advances every few seconds; clicking a dot jumps there and restarts the timer. */
export function VenueSlider({ slides }: { slides: VenueSlide[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setCurrent((c) => (c + 1) % slides.length), 3800);
    return () => window.clearInterval(id);
  }, [slides.length, current]);

  return (
    <div className="relative h-60 overflow-hidden rounded-md bg-[#e9e1f6] sm:h-85">
      {slides.map((slide, i) => (
        <motion.div
          key={slide.image.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="(max-width: 1000px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* 18px tap targets around 7px dots */}
      <div
        className="absolute inset-x-0 bottom-2.5 z-2 flex justify-center gap-0.5"
        role="tablist"
        aria-label="Venue photos"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.image.src}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={cn(
              "relative h-4.5 w-4.5 before:absolute before:top-1/2 before:left-1/2 before:h-1.75 before:w-1.75 before:-translate-1/2 before:rounded-full before:transition-[background-color,scale] before:duration-300 before:content-['']",
              i === current ? "before:scale-140 before:bg-white" : "before:bg-white/55",
            )}
          />
        ))}
      </div>
    </div>
  );
}
