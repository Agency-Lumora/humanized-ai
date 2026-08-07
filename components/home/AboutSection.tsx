"use client";

import { motion } from "framer-motion";
import { GlassPanel, Section, SectionHeading } from "@/components/ui";


export function AboutSection() {
  return (
    <Section id="founder">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-12"
      >
        <SectionHeading
          eyebrow="About Lumora"
          title="Building websites people trust."
          description="We combine strategy, design, AI, and modern development to create websites that don't just look premium—they help businesses grow."
        />

        <div className="flex flex-col items-center gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <GlassPanel className="p-6 sm:p-8 lg:p-12">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                {/* LEFT */}

                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-[#7C5CFF]">
                    ABOUT LUMORA
                  </p>

                  <h3 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                    We build websites that people trust.
                  </h3>

                  <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                    Lumora is a premium web design studio helping businesses
                    establish a powerful online presence through modern design,
                    AI-assisted development, and high-performance websites.
                  </p>

                  <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                    Every project is designed to build credibility, improve user
                    experience, and turn visitors into customers while keeping
                    speed, SEO and scalability at its core.
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 rounded-xl bg-slate-50 p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" />
                      <span className="text-slate-700">Premium Design</span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" />
                      <span className="text-slate-700">SEO Optimized</span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" />
                      <span className="text-slate-700">Lightning Fast</span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" />
                      <span className="text-slate-700">AI Powered</span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" />
                      <span className="text-slate-700">Responsive</span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" />
                      <span className="text-slate-700">Conversion Focused</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}

                <div className="order-first flex justify-center lg:order-last">
                  <div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFF]/20 to-transparent sm:h-64 sm:w-64 lg:h-[360px] lg:w-[360px]">
                    <div className="absolute h-40 w-40 rounded-full bg-[#7C5CFF]/10 blur-3xl sm:h-52 sm:w-52 lg:h-64 lg:w-64" />

                    <img
                      src="/icon.svg"
                      alt="Lumora"
                      className="relative h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
                    />
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}

export default AboutSection;
