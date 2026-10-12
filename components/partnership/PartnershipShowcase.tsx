"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { WebsiteMockup } from "./WebsiteMockup";

const mockups = [
  {
    brand: "ATLAS",
    navItems: ["Work", "About", "Services", "Contact"],
    ctaLabel: "View work",
    headline: "Digital experiences that convert.",
    body: "Strategy-driven websites for growing businesses.",
    actionLabel: "View work",
    imageSrc: "/about-hero.png",
    imageAlt: "Preview of a conversion-focused agency website Lumora built as a white-label partner",
    accentColor: "#3B2314",
    position: "left" as const,
  },
  {
    brand: "Brand",
    navItems: ["Home", "About", "Services", "Work"],
    ctaLabel: "Explore work",
    headline: "Ideas that build brands.",
    body: "Thoughtful strategy. Beautiful design. Real business impact.",
    actionLabel: "Explore work",
    imageSrc: "/decor-flower.png",
    imageAlt: "Preview of a branding studio's website Lumora built as a white-label partner",
    accentColor: "#3B2314",
    position: "center" as const,
  },
  {
    brand: "Elevate",
    navItems: ["About", "Work", "Services", "Contact"],
    ctaLabel: "Get in touch",
    headline: "A better way to grow.",
    body: "Digital solutions for modern businesses.",
    actionLabel: "Get in touch",
    imageSrc: "/texture-arch-shadow.png",
    imageAlt: "Preview of a growth-focused business website Lumora built as a white-label partner",
    accentColor: "#3B2314",
    position: "right" as const,
  },
] as const;

export function PartnershipShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = shouldReduceMotion ?? false;

  return (
    <section className="relative overflow-hidden border-t border-[#806C5D]/15 bg-white py-[clamp(3.5rem,7vw,5.5rem)]">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left column */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
              Trusted by agencies
            </p>
            <h2 className="mt-3 max-w-md font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.025em] text-[#35251B]">
              Your clients. Your relationship.
              <br />
              <span className="text-[#806C5D]">Our expertise.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#6B584B]">
              We&apos;ve partnered with agencies across industries to deliver
              beautiful, functional websites for their clients.
            </p>
            <Link
              href="/portfolio"
              className="group mt-7 inline-flex items-center gap-2 border-b border-[#2A211D]/30 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2A211D] transition-colors hover:border-[#88C5E8] hover:text-[#806C5D]"
            >
              Explore our work
              <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          {/* Right column — layered showcase */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto h-[300px] w-full max-w-[560px] sm:h-[340px]"
          >
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#88C5E8]/25 blur-3xl" />

            <WebsiteMockup
              {...mockups[0]}
              className="absolute left-0 top-6 w-[62%] max-w-[260px] -rotate-3 sm:top-10"
            />
            <WebsiteMockup
              {...mockups[2]}
              className="absolute right-0 top-10 w-[62%] max-w-[260px] rotate-3 sm:top-14"
            />
            <WebsiteMockup
              {...mockups[1]}
              className="absolute left-1/2 top-0 w-[68%] max-w-[280px] -translate-x-1/2"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PartnershipShowcase;
