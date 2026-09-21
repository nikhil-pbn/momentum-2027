import Image from "next/image";
import logo from "@/assets/momentum-logo.png";
import { Wrap } from "@/components/ui/Wrap";
import { event } from "@/data/event";

export function Footer() {
  return (
    <footer className="bg-canvas-2 pt-12 pb-7 sm:pt-15 sm:pb-8">
      <Wrap>
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <a href="#home" aria-label={event.name}>
              <Image src={logo} alt={event.name} className="h-14 w-auto sm:h-21" />
            </a>
            <p className="mt-4.5 text-[12.5px] leading-[1.8] text-muted">
              {event.name}
              <br />
              {event.dateLong} · {event.venue.footer}
            </p>
          </div>

          <nav className="flex flex-wrap gap-5.5 pt-3.5 sm:gap-7.5" aria-label="Footer">
            {event.footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.18em] text-ink uppercase transition-colors duration-200 hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-9 border-t border-line sm:mt-12" />
        <div className="mt-5.5 text-center text-[11.5px] text-faint">{event.copyright}</div>
      </Wrap>
    </footer>
  );
}
