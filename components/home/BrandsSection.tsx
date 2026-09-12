"use client";

import { motion } from "framer-motion";

const brands = [
  "Narrativ Studio",
  "Aurel Diamond Co",
  "RK Architects",
  "Gujarat Crafts",
  "Vivid Media",
];

export function BrandsSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#806C5D]/15 bg-[#F4EFE7] py-8 sm:py-9">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[9px] font-medium uppercase tracking-[0.28em] text-[#6B584B]"
        >
          Partnering with brands that dare to stand out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 sm:justify-between"
        >
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#88C5E8]" />
              <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B584B]">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BrandsSection;
