import { BubbleField } from "@/components/sponsors/BubbleField";
import { Button } from "@/components/ui/Button";
import { Lines } from "@/components/ui/Lines";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wrap } from "@/components/ui/Wrap";
import { copy } from "@/data/copy";
import { event } from "@/data/event";
import { sponsors } from "@/data/sponsors";

/** Sponsor CTA with floating bubbles that gather around it like a magnet as the section scrolls through the viewport. */
export function Sponsors() {
  const c = copy.sponsors;
  return (
    <Section id="sponsors" className="overflow-hidden">
      <Wrap className="text-center">
        <SectionHeading title={<Lines lines={c.title} breakOnMobile={false} />} />
      </Wrap>

      <BubbleField sponsors={sponsors}>
        <div className="flex size-full animate-floaty flex-col items-center justify-center gap-3 rounded-full bg-accent p-6 text-center text-white shadow-[0_0_70px_rgba(74,127,232,0.28)] [--float:-12px] [animation-duration:9s] motion-reduce:animate-none sm:gap-5 sm:p-11 sm:shadow-[0_0_110px_rgba(74,127,232,0.32)]">
          <h3 className="text-[15px] leading-[1.3] font-light tracking-widest uppercase sm:text-[clamp(18px,1.8vw,26px)]">
            <Lines lines={c.ctaTitle} />
          </h3>
          <p className="max-w-50 text-xs leading-[1.6] text-pretty text-white/88 sm:max-w-70 sm:text-[13px] sm:leading-[1.7]">
            {c.ctaBody}
          </p>
          <Button
            href={event.links.sponsor}
            variant="navy"
            className="px-5 py-3 text-[10.5px] tracking-[0.14em] whitespace-nowrap sm:px-9.5 sm:py-4 sm:text-xs sm:tracking-[0.16em]"
          >
            {c.ctaButton}
          </Button>
        </div>
      </BubbleField>
    </Section>
  );
}
