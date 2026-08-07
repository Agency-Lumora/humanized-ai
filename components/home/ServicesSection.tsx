"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Section } from "@/components/ui/Section";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <Section id="services">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-10"
      >
        <SectionHeading
          eyebrow="Services"
          title="Everything Your Business Needs to Grow Online."
          description="From premium website design to AI-powered solutions, we build digital experiences that attract, engage, and convert."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <GlassPanel
                key={service.title}
                className="group flex h-full flex-col gap-5 rounded-[28px] p-7 transition-all duration-500 hover:-translate-y-3 hover:border-violet-400/40 hover:shadow-[0_20px_70px_rgba(124,92,255,0.18)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFF] to-[#9A7CFF] text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold tracking-[0.35em] text-violet-500">
                    0{index + 1}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base leading-8 text-slate-600">
                  {service.description}
                </p>
              </GlassPanel>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}

export default ServicesSection;
