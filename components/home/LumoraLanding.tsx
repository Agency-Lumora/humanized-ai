"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/three/LoadingScreen";
import { FloatingNav } from "@/components/ui";
import { useLenis } from "@/hooks/useLenis";
import { HeroSection } from "./HeroSection";
import { BrandsSection } from "./BrandsSection";
import { ServicesSection } from "./ServicesSection";
import { ProcessSection } from "./ProcessSection";
import { WhyChooseLumoraSection } from "./WhyChooseLumoraSection";
import ConsultationSection from "./ConsultationSection";
import AboutSection from "./AboutSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FAQSection } from "./FAQSection";
import PortfolioSection from "./PortfolioSection";
import { Footer } from "./Footer";

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
          <BrandsSection />
          <ServicesSection />
          <PortfolioSection />
          <ProcessSection />
          <AboutSection />
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
