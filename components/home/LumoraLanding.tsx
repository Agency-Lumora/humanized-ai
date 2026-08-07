"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CrystalScene } from "@/components/three/CrystalScene";
import { LoadingScreen } from "@/components/three/LoadingScreen";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
//import { TrustedBySection } from "@/components/home/TrustedBySection";
import { WhyChooseLumoraSection } from "@/components/home/WhyChooseLumoraSection";
import ConsultationSection from "@/components/home/ConsultationSection";
//import { PricingSection } from "@/components/home/PricingSection";
import  AboutSection  from "@/components/home/AboutSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/home/Footer";
import { AnimatedHeading, Badge, Container, FloatingNav, GlowEffect, GradientText, Section, Typography } from "@/components/ui";
import { HeroSection } from "./HeroSection";
import { metrics } from "@/lib/content";
import { gradients, radius, shadows } from "@/lib/design-system";
import { useLenis } from "@/hooks/useLenis";
import PortfolioSection from "@/components/home/PortfolioSection";
//import CTASection from "@/components/home/CTASection";

export function LumoraLanding() {
  const [showLoading, setShowLoading] = useState(true);
  useLenis();

  return (
    <>
      {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} duration={1.8} />}

      <div className={`min-h-screen ${gradients.aurora} text-slate-900`}>
        <div className="relative overflow-hidden">
          <GlowEffect className="left-0 top-0" intensity="lg" />
          <GlowEffect className="right-0 top-24" intensity="md" />

          <FloatingNav />

          <main id="top" className="relative z-10 pb-16">
            <HeroSection />

          
          
            <ServicesSection />
            <WhyChooseLumoraSection />
            <AboutSection />
            <ProcessSection />
            <PortfolioSection />
            <ConsultationSection />
            <TestimonialsSection />
            <FAQSection />
          
            <ContactSection />
            
          </main>

          <Footer/> 
        </div>
      </div>
    </>
  );
}

export default LumoraLanding;
