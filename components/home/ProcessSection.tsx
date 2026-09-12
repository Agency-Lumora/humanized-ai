"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const process = [
  ["Discover", "We listen, research, and understand your vision."],
  ["Strategy", "We map the path from insight to impact."],
  ["Design", "We craft every pixel with purpose and taste."],
  ["Develop", "We build fast, responsive, future-ready digital products."],
  ["Launch & Grow", "We launch, measure, and optimize for lasting growth."],
] as const;

export function ProcessSection() {
  return (
    <section
      id="process"
      className="border-b border-[#806C5D]/20 bg-[#F4EFE7] py-[clamp(3.75rem,6vw,5rem)]"
    >
      <Container>
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
          <span className="text-[#88C5E8]">03</span>
          <span className="mx-2 text-[#806C5D]/30">·</span>
          Our Process
        </p>
        <h2 className="mt-2 font-serif text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] tracking-[-0.02em] text-[#35251B]">
          How we create success
        </h2>

        {/* Timeline */}
        <div className="relative mt-10">
          <div className="h-px w-full bg-[#806C5D]/20" />
          <span className="absolute left-[20%] top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#88C5E8]" />
        </div>

        {/* Steps */}
        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {process.map(([title, description], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-xl text-[#88C5E8]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[13px] font-semibold text-[#35251B]">
                  {title}
                </h3>
              </div>
              <p className="mt-2 text-[12px] leading-5 text-[#6B584B]">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
