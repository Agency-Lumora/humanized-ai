"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/three/LoadingScreen";
import { FloatingNav } from "@/components/ui";
import { useLenis } from "@/hooks/useLenis";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { ProcessSection } from "./ProcessSection";
import { WhyChooseLumoraSection } from "./WhyChooseLumoraSection";
import ConsultationSection from "./ConsultationSection";
import AboutSection from "./AboutSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FAQSection } from "./FAQSection";
import PortfolioSection from "./PortfolioSection";
import { Footer } from "./Footer";

function BrandStrip() {
  return (
    <section aria-label="Selected client brands" className="border-y border-[#806C5D]/25 bg-[#F4EFE7]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:px-12">
        <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#806C5D]">
          Trusted by ambitious businesses
        </p>
        <div className="grid flex-1 grid-cols-2 gap-y-5 border-[#806C5D]/25 text-center sm:grid-cols-3 lg:grid-cols-6 lg:border-l">
          {["NovaTech", "Bloom", "RK Interiors", "TechFlow", "Aurora Labs", "Vertex"].map((brand) => (
            <span key={brand} className="font-serif text-sm tracking-[0.12em] text-[#2A211D]/65">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LumoraLanding() {
  const [showLoading, setShowLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  useLenis();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} duration={1.8} />}
      <div className="min-h-screen bg-[#F4EFE7] text-[#2A211D]">
        <FloatingNav />
        <main id="top">
          <HeroSection />
          <BrandStrip />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <PortfolioSection />
          <WhyChooseLumoraSection />
          <TestimonialsSection />
          <FAQSection />
          <ConsultationSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default LumoraLanding;
