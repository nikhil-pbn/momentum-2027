import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Lines } from "@/components/ui/Lines";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wrap } from "@/components/ui/Wrap";
import { copy } from "@/data/copy";
import { speakers } from "@/data/speakers";

const socialClass =
  "flex h-8.5 w-8.5 items-center justify-center rounded-full border border-[#CFC4E4] text-[11px] text-muted transition-colors duration-250 hover:border-ink hover:bg-ink hover:text-white";

export function Speakers() {
  const c = copy.speakers;
  return (
    <Section id="speakers" alt>
      <Wrap className="text-center">
        <SectionHeading
          eyebrow={c.eyebrow}
          title={<Lines lines={c.title} breakOnMobile={false} />}
          subline={c.subline}
          lede={c.lede}
          ledeClassName="max-w-260"
        />

        <div className="mt-10 grid gap-8.5 sm:mt-14 sm:grid-cols-2 sm:gap-6.5 wide:grid-cols-4">
          {speakers.map((speaker, i) => (
            <Reveal key={speaker.name} className="group flex h-full flex-col text-center" delay={i * 0.08}>
              <div className="relative mb-4 h-75 overflow-hidden rounded-md bg-[#e9e1f6] transition-transform duration-350 group-hover:-translate-y-1 sm:mb-5.5 sm:h-88">
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 300px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-base font-medium tracking-[0.06em] text-brand sm:text-[17px]">{speaker.name}</h3>
              <p className="mt-2 text-xs leading-[1.65] text-muted sm:text-[12.5px]">{speaker.role}</p>
              {/* pushed to the bottom so every card's icons sit on the same line */}
              <div className="mt-auto flex justify-center gap-2.5 pt-4">
                <a href={speaker.socials.x} aria-label={`${speaker.name} on X`} className={socialClass}>
                  𝕏
                </a>
                <a href={speaker.socials.linkedin} aria-label={`${speaker.name} on LinkedIn`} className={socialClass}>
                  in
                </a>
                <a href={speaker.socials.facebook} aria-label={`${speaker.name} on Facebook`} className={socialClass}>
                  f
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </Section>
  );
}
