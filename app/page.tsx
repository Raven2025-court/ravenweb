import { About } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { WhatSetsUsApart } from "@/components/difference";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MarketOpportunity } from "@/components/market";
import { Navbar } from "@/components/navbar";
import { RecentProjects } from "@/components/projects";
import { ServicesAndProcesses } from "@/components/services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MarketOpportunity />
      <ServicesAndProcesses />
      <WhatSetsUsApart />
      <RecentProjects />
      <ContactSection />
      <Footer />
    </>
  );
}
