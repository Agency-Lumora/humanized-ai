"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { process } from "@/lib/content";

export function ProcessSection() {
  return (
    <Section id="process">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-10"
      >
        <SectionHeading
          eyebrow="Our Process"
          title="Simple. Transparent. Results-Driven."
          description="A streamlined process designed to take your idea from concept to a premium digital experience without the complexity."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step) => (
              <GlassPanel
                key={step.step}
                className="group relative overflow-hidden rounded-[28px] p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_70px_rgba(124,92,255,0.18)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#9A7CFF] text-lg font-bold text-white">
                  {step.step}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  {step.description}
                </p>
              </GlassPanel>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

export default ProcessSection;
