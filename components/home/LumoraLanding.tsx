"use client";

import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { LoadingScreen } from "@/components/three/LoadingScreen";
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
    <MotionConfig
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
    >
      {isMounted && showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} duration={1.8} />}
      <div className="min-h-screen bg-[#F4EFE7] text-[#2A211D]">
        <main>
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
    </MotionConfig>
  );
}

export default LumoraLanding;
