/*"use client";

import { motion } from "framer-motion";
import { Badge, Section, SectionHeading } from "@/components/ui";
import { trustedBy } from "@/lib/content";

export function TrustedBySection() {
  return (
    <Section id="trusted">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-12"
      >
        <SectionHeading
          eyebrow="Partners"
          title="Trusted by forward-thinking teams."
          description="From AI pioneers to fintech leaders, visionary companies choose Lumora to build their digital presence."
          align="center"
        />

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustedBy.map((company) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2"
            >
              <div className="h-8 w-1 rounded-full bg-linear-to-b from-[#6D5EF9] to-[#64E6D9]" />
              <p className="text-sm font-semibold text-slate-700 md:text-base">{company}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

export default TrustedBySection;*/
