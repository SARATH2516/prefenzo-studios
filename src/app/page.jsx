import Hero from "@/components/Hero";
import CoreFocus from "@/components/CoreFocus";
import Approach from "@/components/Approach";
import Portfolio from "@/components/Portfolio";
import IndustryList from "@/components/IndustryList";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <Hero />

      <CoreFocus />
      <Approach />
      <Portfolio />
      <IndustryList />
      <WhyUs />
    </main>
  );
}
