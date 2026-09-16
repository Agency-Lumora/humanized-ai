/*"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function CTASection() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.95 }}
        className="relative overflow-hidden rounded-[40px] border border-violet-200/50 bg-gradient-to-br from-white to-violet-50 px-8 py-20 text-center shadow-[0_30px_100px_rgba(124,92,255,0.12)]"
      >
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-400/10 blur-[120px]" />

       <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#7C5CFF]">
            LET'S BUILD SOMETHING AMAZING
          </p>

          <h2 className="text-[clamp(1.75rem,2.75vw,2.25rem)] font-black leading-[1.2] text-slate-900">
            Your Business Deserves
            <br />
            A Website That Works.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you're starting from scratch or redesigning your existing
            website, Lumora creates premium digital experiences that build
            trust and convert visitors into customers.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Button href="#pricing" variant="primary">
              View Pricing
            </Button>

            <Button href="#founder" variant="ghost">
              Meet the Founder
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}*/