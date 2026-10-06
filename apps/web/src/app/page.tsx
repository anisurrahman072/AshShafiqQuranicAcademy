import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowToJoin } from "@/components/sections/HowToJoin";
import { Instructor } from "@/components/sections/Instructor";
import { Pricing } from "@/components/sections/Pricing";
import { Schedule } from "@/components/sections/Schedule";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyUs />
      <Schedule />
      <Pricing />
      <Instructor />
      <HowToJoin />
      <Footer />
    </div>
  );
}
