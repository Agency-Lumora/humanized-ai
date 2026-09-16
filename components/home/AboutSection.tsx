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
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            data-motion-reveal
            className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#DCE7EA] to-[#AFC4CE]"
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.05, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            data-motion-reveal
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
              <span className="text-[#88C5E8]">04</span>
              <span className="mx-2 text-[#806C5D]/30">·</span>
              Why us
            </p>

            <h2 className="mt-3 max-w-lg font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] leading-[1.2] tracking-[-0.02em] text-[#35251B]">
              Not a vendor. A growth partner.
            </h2>

            <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#6B584B]">
              We&apos;re a Surat-based digital agency that works the way a great in-house team would invested in your outcomes, not your invoice total. We think about your business before we touch the brief.
            </p>

            <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#6B584B]">
              We&apos;ve seen what basic agencies do. We built something different.
              <br />
              Pretty decks. Missed deadlines. No strategy behind the scroll animations. We started this agency because the founders we were working with deserved better. Still do.
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
