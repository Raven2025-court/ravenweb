import { About } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { WhatSetsUsApart } from "@/components/difference";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MarketOpportunity } from "@/components/market";
import { Navbar } from "@/components/navbar";
import { Playground } from "@/components/playground";
import { RecentProjects } from "@/components/projects";
import { ServicesAndProcesses } from "@/components/services";

export default function HomePage() {
  return (
    <div className="m-0 p-0 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <MarketOpportunity />
      <ServicesAndProcesses />
      <Playground />
      <WhatSetsUsApart />
      <RecentProjects />
      <ContactSection />
      <Footer />
    </div>
  );
}
