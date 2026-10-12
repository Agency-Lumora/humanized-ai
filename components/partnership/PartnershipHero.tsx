"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WebsiteMockup } from "./WebsiteMockup";

const heroNavItems = ["Home", "About", "Work", "Services", "Contact"] as const;

export function PartnershipHero() {
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = shouldReduceMotion ?? false;

  return (
    <section className="relative overflow-hidden bg-[#F4EFE7] pb-[clamp(3rem,6vw,4.5rem)] pt-[clamp(2.5rem,5vw,3.75rem)]">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left column */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
              <span className="h-px w-8 bg-[#88C5E8]" />
              Partnership
            </p>

            <h1 className="mt-5 max-w-lg font-serif text-[clamp(2.1rem,4vw,3.3rem)] font-normal leading-[1.1] tracking-[-0.03em] text-[#35251B]">
              You bring the clients.
              <br />
              <span className="text-[#806C5D]">We build the websites.</span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#6B584B]">
              A reliable digital partner for agencies that need exceptional
              websites without building an in-house development team.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#2A211D] px-6 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F4EFE7] transition-transform hover:-translate-y-0.5"
              >
                Partner with Lumora
                <ArrowRight
                  size={14}
                  strokeWidth={1.4}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#partnership-process"
                className="group inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#35251B]"
              >
                See how it works
                <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right column — abstract composition + floating website mockup */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[480px]"
          >
            <img
              src="/partnership/hero-partnership.svg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
            />

            <div className="absolute left-1/2 top-1/2 w-[80%] max-w-[300px] -translate-x-[58%] -translate-y-[54%]">
              <WebsiteMockup
                brand="Studio"
                navItems={heroNavItems}
                ctaLabel="Get in touch"
                headline="Modern spaces for modern living."
                body="Architecture and design that creates spaces people love."
                actionLabel="Explore work"
                imageSrc="/about-hero.png"
                imageAlt="Preview of an editorial interior-design website Lumora built for an agency's client"
                accentColor="#2A211D"
              />
            </div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[14%] right-0 max-w-[170px] rounded-lg border border-[#806C5D]/15 bg-white px-3.5 py-3 text-[11px] leading-[1.4] text-[#35251B] shadow-[0_12px_30px_rgba(42,33,29,0.16)]"
            >
              Your client&apos;s website, built by Lumora.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PartnershipHero;
