import { About } from "@/components/About";
import { Agenda } from "@/components/Agenda";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MarqueeBand } from "@/components/MarqueeBand";
import { MomentumPass } from "@/components/MomentumPass";
import { Nav } from "@/components/Nav";
import { Registration } from "@/components/Registration";
import { Speakers } from "@/components/Speakers";
import { Sponsors } from "@/components/Sponsors";
import { Venue } from "@/components/Venue";
import { WhoShouldAttend } from "@/components/WhoShouldAttend";
import { WhyAttend } from "@/components/WhyAttend";
import { event } from "@/data/event";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MarqueeBand text={event.marquee.top} />
        <About />
        <WhoShouldAttend />
        <WhyAttend />
        <MomentumPass />
        <Speakers />
        <Venue />
        <Registration />
        <Agenda />
        <Sponsors />
        <Faq />
        <MarqueeBand text={event.marquee.bottom} />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
