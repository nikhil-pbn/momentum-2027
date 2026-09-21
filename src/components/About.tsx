import Image from "next/image";
import aboutImage from "@/assets/about.jpg";
import { Reveal } from "@/components/motion/Reveal";
import { Lines } from "@/components/ui/Lines";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wrap } from "@/components/ui/Wrap";
import { copy } from "@/data/copy";

export function About() {
  const c = copy.about;
  return (
    <Section id="about" className="bg-[linear-gradient(97deg,#EDF2FF_0%,#FAF9FE_40%,#FFF_100%)]">
      <Wrap>
        <SectionHeading
          eyebrow={c.eyebrow}
          title={<Lines lines={c.title} breakOnMobile={false} />}
          subline={c.subline}
        />

        <div className="mt-10 grid items-center gap-7.5 sm:mt-14 sm:gap-11 nav:grid-cols-2 nav:gap-16">
          <Reveal className="relative h-82.5 overflow-hidden rounded-md bg-[#e9e1f6]">
            <Image
              src={aboutImage}
              alt="Attendees photographing a Momentum keynote"
              fill
              sizes="(max-width: 1000px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal className="space-y-6" delay={0.08}>
            {c.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-[15.5px] leading-[1.85] text-body">
                {paragraph.text}
                <br />
                {"strong" in paragraph ? <strong className="font-semibold text-ink">{paragraph.strong}</strong> : null}
              </p>
            ))}
          </Reveal>
        </div>
      </Wrap>
    </Section>
  );
}
