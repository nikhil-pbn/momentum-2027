"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import logo from "@/assets/momentum-logo.png";
import { Button } from "@/components/ui/Button";
import { event } from "@/data/event";
import { cn } from "@/lib/cn";

const barClass = "absolute left-2.5 right-2.5 h-[1.5px] bg-ink transition-[transform,top] duration-300";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const raised = scrolled || open;

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-120 flex items-center justify-between px-7 py-3.5 transition-[background-color,box-shadow,padding] duration-300 nav:px-15 nav:py-4.5",
        raised && "bg-[rgba(248,246,253,0.92)] shadow-[0_1px_0_var(--color-line)] backdrop-blur-[14px] nav:py-3",
      )}
    >
      <a href="#home" aria-label={event.name}>
        <Image
          src={logo}
          alt={event.name}
          priority
          className={cn("h-13 w-auto transition-[height] duration-300 sm:h-15", raised ? "nav:h-15.5" : "nav:h-21")}
        />
      </a>

      <div className="hidden nav:flex nav:gap-5.5 wide:gap-8.5">
        {event.nav.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[11.5px] font-medium tracking-[0.16em] text-ink uppercase transition-colors duration-200 hover:text-brand"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3.5">
        <Button href={event.links.register} variant="navy" size="sm" className="hidden min-[481px]:inline-block">
          Register Now
        </Button>
        <button
          type="button"
          className="relative h-10 w-10 rounded-lg nav:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn(barClass, open ? "top-[19.5px] rotate-45" : "top-3.75")} />
          <span className={cn(barClass, open ? "top-[19.5px] -rotate-45" : "top-6")} />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="absolute inset-x-0 top-full flex flex-col border-b border-line bg-[rgba(248,246,253,0.98)] px-7 pt-2.5 pb-6.5 shadow-[0_18px_40px_rgba(60,30,110,0.10)] nav:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {event.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line-2 py-3.25 text-xs font-medium tracking-[0.16em] text-ink uppercase"
              >
                {link.label}
              </a>
            ))}
            <Button href={event.links.register} className="mt-4.5 text-center" onClick={() => setOpen(false)}>
              Register Now
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
