import { Reveal } from "@/components/motion/Reveal";
import { Lines } from "@/components/ui/Lines";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wrap } from "@/components/ui/Wrap";
import { copy } from "@/data/copy";
import { reasons } from "@/data/reasons";

export function WhyAttend() {
  const c = copy.why;
  return (
    <Section id="why" alt>
      <Wrap>
        <SectionHeading eyebrow={c.eyebrow} title={<Lines lines={c.title} breakOnMobile={false} />} />

        <Reveal className="mt-13.5 grid border border-line bg-white/60 nav:grid-cols-3" delay={0.1}>
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="border-b border-line px-6.5 pt-8.5 pb-9.5 last:border-b-0 sm:px-10 sm:pt-12 sm:pb-13.5 nav:border-r nav:border-b-0 nav:last:border-r-0"
            >
              <div
                className="mb-4.5 text-[34px] leading-none font-extralight tracking-[0.04em] sm:mb-6.5 sm:text-[56px]"
                style={{ color: reason.color }}
              >
                {reason.number}
              </div>
              <h3 className="text-[13px] leading-[1.6] font-medium tracking-widest text-ink uppercase sm:text-sm">
                {reason.title}
              </h3>
              <p className="mt-3.5 text-[13px] leading-[1.85] text-muted sm:mt-4.5 sm:text-[13.5px]">{reason.body}</p>
            </div>
          ))}
        </Reveal>
      </Wrap>
    </Section>
  );
}
