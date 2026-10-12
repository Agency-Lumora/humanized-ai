"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function PartnershipFinalCTA() {
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = shouldReduceMotion ?? false;

  return (
    <section className="relative overflow-hidden bg-[#AFD6EB] py-[clamp(4rem,8vw,6rem)]">
      <img
        src="/partnership/cta-background.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto max-w-[48rem] px-6 text-center sm:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2A211D]/70">
            Let&apos;s build together
          </p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] text-[#2A211D]">
            Ready to partner with Lumora?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#2A211D]/75">
            Get in touch and let&apos;s create something great — for your clients.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#2A211D] px-7 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F4EFE7] transition-transform hover:-translate-y-0.5"
          >
            Partner with Lumora
            <ArrowRight
              size={14}
              strokeWidth={1.4}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default PartnershipFinalCTA;
