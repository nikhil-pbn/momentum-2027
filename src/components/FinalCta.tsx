import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Wrap } from "@/components/ui/Wrap";
import { copy } from "@/data/copy";
import { event } from "@/data/event";

export function FinalCta() {
  const c = copy.finalCta;
  return (
    <section className="pt-12.5 pb-17.5 sm:pt-17.5 sm:pb-22.5">
      <Wrap>
        {/* gradient box with a thin purple-to-blue hairline along the top edge */}
        <Reveal className="relative overflow-hidden rounded-2xl border border-[#e3d9f3] bg-[radial-gradient(58%_90%_at_12%_4%,rgba(155,76,219,0.14),transparent_62%),radial-gradient(54%_86%_at_90%_96%,rgba(74,127,232,0.11),transparent_62%),linear-gradient(158deg,#f8f5fe_0%,#efe8fb_52%,#f7f4fe_100%)] px-6 py-14 text-center before:absolute before:top-0 before:right-[14%] before:left-[14%] before:h-0.5 before:bg-[linear-gradient(90deg,transparent,var(--color-brand),var(--color-accent),transparent)] before:opacity-50 before:content-[''] sm:rounded-[22px] sm:px-[6vw] sm:py-24">
          <h2 className="text-[22px] leading-tight font-light tracking-wider text-ink uppercase sm:text-[clamp(26px,3.1vw,46px)] sm:tracking-[0.06em]">
            {c.heading}
          </h2>
          <div className="mt-6 text-[10px] font-medium tracking-[0.3em] text-muted uppercase sm:mt-7.5 sm:text-sm sm:tracking-[0.4em]">
            {event.name}
          </div>
          <div className="mt-3 text-lg font-normal tracking-[0.03em] text-brand uppercase sm:text-[clamp(19px,2vw,28px)]">
            {event.dateLong}
          </div>
          <div className="mt-2.5 text-[11px] font-semibold tracking-[0.16em] text-accent uppercase sm:text-xs sm:tracking-[0.2em]">
            {event.venue.name} · {event.venue.city}
          </div>
          <Button href={event.links.register} className="mt-7.5 font-semibold sm:mt-9">
            {c.button}
          </Button>
        </Reveal>
      </Wrap>
    </section>
  );
}
