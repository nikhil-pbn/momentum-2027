import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wrap } from "@/components/ui/Wrap";
import { copy } from "@/data/copy";
import { passItems } from "@/data/pass";

export function MomentumPass() {
  const c = copy.pass;
  return (
    <Section id="pass">
      <Wrap className="text-center">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} />

        <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-4.5 nav:grid-cols-3">
          {passItems.map((item, i) => (
            <Reveal
              key={item}
              className="flex min-h-18 items-center gap-4 rounded-xl border border-line-2 bg-white px-5.5 py-5 text-left transition-[border-color,box-shadow] duration-300 hover:border-[#d9c9ef] hover:shadow-[0_12px_28px_rgba(120,70,180,0.08)] sm:min-h-22 sm:gap-5 sm:px-7 sm:py-6.5"
              delay={(i % 3) * 0.08}
              whileHover={{ y: -3 }}
            >
              <div className="flex size-9 flex-none items-center justify-center rounded-full border border-[#e0d2f2] text-[11px] font-medium tracking-[0.06em] text-brand sm:size-10 sm:text-xs">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-[13.5px] leading-[1.55] text-ink sm:text-sm">{item}</p>
            </Reveal>
          ))}
        </div>

        {/* <Reveal as="p" className="mt-8 text-xs italic text-faint">
          {c.footnote}
        </Reveal> */}
      </Wrap>
    </Section>
  );
}
