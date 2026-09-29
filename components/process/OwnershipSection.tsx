"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Caveat } from "next/font/google";
import { Eyebrow } from "./Eyebrow";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export function OwnershipSection() {
  return (
    <section className="border-b border-[#806C5D]/20 bg-[#AFC4CE] py-[clamp(4rem,8vw,6.5rem)]">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <span
              className={`${caveat.className} absolute -left-2 -top-5 z-10 -rotate-6 text-[17px] leading-none text-[#2A211D]/80 sm:-left-6`}
            >
              You&apos;re in control
            </span>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[55%_45%_60%_40%] border-[6px] border-[#F4EFE7] shadow-[0_28px_50px_rgba(42,33,29,0.16)]">
              <Image
                src="/about-hero.png"
                alt="A calm, organized desk that reflects a client managing their own site"
                fill
                sizes="(min-width: 768px) 420px, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[480px]"
          >
            <Eyebrow tone="light">Built for ownership</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[#2A211D]">
              We don&apos;t want you
              <br />
              dependent on us.
            </h2>
            <p className="mt-6 max-w-[440px] text-sm leading-7 text-[#2A211D]/70">
              Your website shouldn&apos;t feel like something you need to call your
              agency to understand. That&apos;s why we build with ownership in
              mind.
            </p>
            <p className="mt-4 max-w-[440px] text-sm leading-7 text-[#2A211D]/70">
              We give you the tools, access, and knowledge to manage your
              digital presence confidently.
            </p>
            <p className="mt-4 max-w-[440px] text-sm leading-7 text-[#2A211D]/70">
              We&apos;ll support you through the transition, teach you how
              things work, and stay available when you need us.
            </p>

            <div className="mt-10 w-fit rotate-[-4deg] text-[#2A211D]/75">
              <p className={`${caveat.className} text-[19px] leading-[1.05]`}>
                No dependency.
                <br />
                Just ownership.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OwnershipSection;
