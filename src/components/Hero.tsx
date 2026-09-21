import Image from "next/image";
import heroMark from "@/assets/hero-mark.gif";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Lines } from "@/components/ui/Lines";
import { Wrap } from "@/components/ui/Wrap";
import { copy } from "@/data/copy";
import { event } from "@/data/event";

export function Hero() {
  const c = copy.hero;
  return (
    <header
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(48%_60%_at_6%_4%,rgba(155,76,219,0.10),transparent_62%),radial-gradient(44%_56%_at_96%_96%,rgba(74,127,232,0.07),transparent_62%),linear-gradient(160deg,#faf8fe_0%,#f5f3fc_60%,#f9f7fe_100%)] pt-32.5 pb-17.5 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(#ddd4ee_1px,transparent_1px)] before:bg-size-[26px_26px] before:opacity-50 before:content-[''] sm:pt-37.5 sm:pb-22.5 nav:pt-47.5 nav:pb-30"
    >
      <Wrap className="relative z-1 grid items-center gap-11 nav:grid-cols-[1.02fr_0.98fr] nav:gap-15">
        <Reveal>
          <h1 className="text-[26px] leading-[1.28] font-extralight tracking-[0.08em] text-ink uppercase min-[401px]:text-[28px] sm:text-[clamp(34px,3.9vw,62px)] sm:leading-[1.24] sm:tracking-widest nav:whitespace-nowrap">
            <Lines lines={c.titleLines} />
          </h1>
          <p className="mt-3 text-sm tracking-[0.02em] text-body sm:mt-3.5 sm:text-[15px]">
            {event.dateShort} | {event.venue.name} · {event.venue.city}
          </p>
          <Button href={event.links.register} className="mt-7 sm:mt-9">
            {c.button}
          </Button>
        </Reveal>

        <Reveal className="flex justify-center" delay={0.08}>
          <Image
            src={heroMark}
            alt={event.name}
            className="h-auto w-[min(100%,360px)] sm:w-[min(100%,520px)]"
            unoptimized
            priority
          />
        </Reveal>
      </Wrap>
    </header>
  );
}
