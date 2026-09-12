"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3 Yrs", label: "Of Pure Craft" },
  { value: "100%", label: "Client Retention" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-[#806C5D]/20 bg-[#F4EFE7] py-[clamp(3rem,6vw,4.5rem)]"
    >
      <div className="mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          {/* Image */}
          {/* TODO: replace this placeholder with a real studio/team photo
              asset once one is available (no suitable existing image asset
              was found in the project). */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#DCE7EA] to-[#AFC4CE]"
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
              <span className="text-[#88C5E8]">04</span>
              <span className="mx-2 text-[#806C5D]/30">·</span>
              About Lumora
            </p>

            <h2 className="mt-3 max-w-lg font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] leading-[1.2] tracking-[-0.02em] text-[#35251B]">
              A small studio with big ambitions.
            </h2>

            <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#6B584B]">
              Founded in Surat, Gujarat, Lumora is a team of designers,
              developers, and strategists who believe great design is the
              shortest distance between a brand and its audience. We blend
              creativity with technology to build digital experiences that
              matter.
            </p>

            <div className="mt-8 h-px w-full max-w-[520px] bg-[#806C5D]/20" />

            <div className="mt-6 flex max-w-[520px] items-start justify-between gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl text-[#35251B] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#6B584B]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
