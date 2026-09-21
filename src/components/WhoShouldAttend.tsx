import { Reveal } from "@/components/motion/Reveal";
import { Lines } from "@/components/ui/Lines";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wrap } from "@/components/ui/Wrap";
import { audience } from "@/data/audience";
import { copy } from "@/data/copy";

export function WhoShouldAttend() {
  const c = copy.who;
  return (
    <Section id="who">
      <Wrap className="text-center">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} lede={c.lede} />

        {/* 1 column on phones, 3 + 2 on tablets, 5 across on wide screens. The 1px gaps over a tinted background draw the grid lines. */}
        <Reveal
          className="mt-10 grid gap-px border border-line bg-line sm:mt-13 sm:grid-cols-6 wide:grid-cols-5"
          delay={0.1}
        >
          {audience.map((cell) => (
            <div
              key={cell.title.join(" ")}
              className="group relative flex flex-col items-center justify-center overflow-hidden bg-canvas-2 px-6 py-8.5 before:absolute before:inset-0 before:translate-y-[101%] before:bg-brand before:transition-transform before:duration-750 before:ease-[cubic-bezier(0.22,0.68,0.28,1)] before:content-[''] hover:before:translate-y-0 sm:col-span-2 sm:min-h-76.5 sm:px-6.5 sm:py-11.5 sm:nth-[n+4]:col-span-3 wide:col-span-1 wide:nth-[n+4]:col-span-1"
            >
              <div className="relative z-1">
                <h3 className="text-sm leading-[1.5] font-normal tracking-widest text-ink uppercase transition-colors duration-600 group-hover:text-white sm:text-[15px]">
                  <Lines lines={cell.title} />
                </h3>
                {/* always visible on touch screens; where a pointer can hover it slides open on hover */}
                <p className="mt-3 text-[12.5px] leading-[1.7] text-muted group-hover:text-white can-hover:mt-0 can-hover:max-h-0 can-hover:overflow-hidden can-hover:text-white can-hover:opacity-0 can-hover:[transition:max-height_.7s_cubic-bezier(.22,.68,.28,1),opacity_.6s_ease_.12s,margin-top_.7s_cubic-bezier(.22,.68,.28,1)] can-hover:group-hover:mt-4 can-hover:group-hover:max-h-55 can-hover:group-hover:opacity-100">
                  {cell.body}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </Wrap>
    </Section>
  );
}
