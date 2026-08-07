"use client";

import { motion } from "framer-motion";
import { Button, GlassPanel, Section } from "@/components/ui";
import { FiMessageCircle } from "react-icons/fi";

export default function ConsultationSection() {
  return (
    <Section id="consultation">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GlassPanel className="rounded-[40px] p-7 sm:p-10 text-center lg:p-16">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#7C5CFF]">
            FREE CONSULTATION
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">
            Every business deserves a website built around its goals.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Instead of fixed packages, we understand your business first,
            then recommend the perfect solution for your budget and growth.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              href="https://wa.me/917383172979?text=Hi%20Lumora,%20I'd%20like%20to%20build%20a%20website."
              target="_blank"
              className="gap-3"
            >
              <FiMessageCircle />
              Chat on WhatsApp
            </Button>
          </div>

        </GlassPanel>
      </motion.div>
    </Section>
  );
}