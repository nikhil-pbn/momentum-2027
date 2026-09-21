import { Reveal } from "@/components/motion/Reveal";
import { Lines } from "@/components/ui/Lines";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wrap } from "@/components/ui/Wrap";
import { copy } from "@/data/copy";
import { event } from "@/data/event";
import { venueSlides } from "@/data/venue";
import { VenueSlider } from "./VenueSlider";

export function Venue() {
  const c = copy.venue;
  return (
    <Section
      id="venue"
      className="bg-[radial-gradient(44%_56%_at_6%_6%,rgba(155,76,219,0.09),transparent_62%),radial-gradient(44%_56%_at_96%_94%,rgba(74,127,232,0.07),transparent_62%),var(--color-canvas)]"
    >
      <Wrap>
        <SectionHeading eyebrow={c.eyebrow} title={<Lines lines={c.title} breakOnMobile={false} />} />

        <div className="mt-10 grid items-center gap-7.5 sm:mt-14 sm:gap-11 nav:grid-cols-2 nav:gap-16">
          <Reveal>
            <VenueSlider slides={venueSlides} />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="text-sm font-semibold tracking-[0.06em] text-accent sm:text-[15px]">
              {event.venue.label}
            </div>
            <p className="mt-3.5 text-sm leading-[1.85] text-body sm:mt-5 sm:text-[14.5px] lg:max-w-120">{c.body}</p>
            <div className="mt-6 text-[17px] leading-[1.45] font-normal tracking-[0.06em] text-[#544C67] uppercase max-md:text-center sm:text-[clamp(18px,1.5vw,24px)]">
              <Lines lines={c.tag} />
            </div>
          </Reveal>
        </div>
      </Wrap>
    </Section>
  );
}
