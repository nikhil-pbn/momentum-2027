import { Reveal } from "@/components/motion/Reveal";
import { Lines } from "@/components/ui/Lines";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wrap } from "@/components/ui/Wrap";
import { copy } from "@/data/copy";
import { event } from "@/data/event";
import { Countdown } from "./Countdown";

const bigNumberClass =
  "text-[54px] font-extralight leading-[0.9] tracking-[-0.01em] text-brand sm:text-[clamp(56px,7.4vw,112px)]";
const bigWordClass =
  "pb-[0.1em] text-sm font-normal uppercase leading-[1.3] tracking-[0.02em] text-ink sm:text-[clamp(15px,1.4vw,21px)]";

export function Registration() {
  const c = copy.register;
  const { price } = event;
  return (
    <Section
      id="register"
      className="bg-[radial-gradient(50%_50%_at_94%_94%,rgba(46,124,246,0.08)_0%,rgba(46,124,246,0.00)_100%),radial-gradient(52%_52%_at_8%_10%,rgba(155,76,219,0.10)_0%,rgba(155,76,219,0.00)_100%),#FAFAFE]"
    >
      <Wrap>
        <SectionHeading eyebrow={c.eyebrow} title={c.title} lede={c.lede} />

        <Reveal className="mt-7.5 rounded-3xl bg-white px-3.5 pt-7 pb-7.5 sm:mt-9 sm:px-10 sm:pt-11.5 sm:pb-10">
          <div className="text-center text-[10px] font-semibold tracking-[0.26em] text-muted uppercase sm:text-xs sm:tracking-[0.3em]">
            {c.countdownLabel}
          </div>
          <Countdown deadline={price.earlyBirdDeadline} />
        </Reveal>

        {/* the two figures sit in a narrower centred pair of columns, each left-aligned */}
        <div className="mx-auto mt-11 grid items-start justify-items-start gap-11 sm:mt-16 nav:max-w-240 nav:grid-cols-2 nav:gap-10">
          <Reveal>
            <div className="flex items-end gap-3.5">
              <span className={bigNumberClass}>{event.seats}</span>
              <span className={bigWordClass}>
                <Lines lines={c.seatsWord} />
              </span>
            </div>
            <p className="mt-4 max-w-75 text-[13px] leading-[1.55] text-muted sm:text-sm">{c.seatsBody}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex items-end gap-3.5">
              <span className={bigNumberClass}>
                <i className="mr-[0.02em] text-[0.55em] tracking-normal not-italic">$</i>
                {price.earlyBird}
              </span>
              <span className={bigWordClass}>
                <Lines lines={c.priceWord} />
              </span>
            </div>
            <p className="mt-4 text-[13px] font-medium text-muted sm:text-sm">
              Save ${price.savings} when you register by {price.earlyBirdEndsLabel}
            </p>
            <p className="mt-1 text-[13px] text-muted sm:text-sm">
              Regular price{" "}
              <s className="font-bold text-accent [text-decoration-color:var(--color-accent)]">${price.regular}</s>
            </p>
          </Reveal>
        </div>
      </Wrap>
    </Section>
  );
}
