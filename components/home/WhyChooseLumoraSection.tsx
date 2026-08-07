"use client";

import { motion } from "framer-motion";
import { GlassPanel, Section, SectionHeading } from "@/components/ui";
//import { values } from "@/lib/content";
import { Sparkles, Palette, Zap, Handshake } from "lucide-react";

export function WhyChooseLumoraSection() {
  const benefits = [
    {
      title: "Humanized AI-First Design",
      description:
        "We bridge the gap between advanced technology and human intuition, creating interfaces that feel natural and approachable.",
      icon: Sparkles,
    },
    {
      title: "Premium Aesthetics",
      description:
        "Apple-inspired design principles with glassmorphism, smooth animations, and luxury details that elevate your brand.",
      icon: Palette,
    },
    {
      title: "Performance Optimized",
      description:
        "Lightning-fast load times, smooth interactions, and optimized for all devices without compromising on design quality.",
      icon: Zap,
    },
    {
      title: "Strategic Partnership",
      description:
        "We don't just build websites—we collaborate as partners in your growth journey, understanding your business deeply.",
      icon: Handshake,
    },
  ];

  return (
    <Section id="why-lumora">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-12"
      >
        <SectionHeading
          eyebrow="Why Lumora"
          title="Everything you need to stand out."
          description="We combine cutting-edge technology with timeless design principles to create web experiences that truly connect."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <GlassPanel className="flex h-full flex-col gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-950">
                      {benefit.title}
                    </h3>
                    <p className="text-base leading-7 text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
         
        </motion.div>
      </motion.div>
    </Section>
  );
}

export default WhyChooseLumoraSection;
