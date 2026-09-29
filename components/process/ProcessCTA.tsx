"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Caveat } from "next/font/google";
import { Eyebrow } from "./Eyebrow";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export function ProcessCTA() {
  return (
    <section className="bg-[#F4EFE7] py-[clamp(4rem,8vw,6.5rem)]">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            data-motion-reveal
            className="max-w-[440px]"
          >
            <Eyebrow>Ready when you are</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.4vw,2.6rem)] font-normal leading-[1.15] tracking-[-0.025em] text-[#2A211D]">
              Have an idea
              <br />
              worth building?
            </h2>
            <p className="mt-5 max-w-[380px] text-sm leading-7 text-[#6B584B]">
              Let&apos;s turn it into something your business can grow with.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#DCE7EA] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-[#2A211D] transition-transform hover:-translate-y-0.5"
              >
                Let&apos;s create
                <ArrowRight size={13} strokeWidth={1.4} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <span className={`${caveat.className} rotate-[-3deg] text-[17px] leading-none text-[#6EA9C7]`}>
                Your next chapter starts here.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[380px]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[999px] rounded-b-[28px] border-[6px] border-white shadow-[0_28px_50px_rgba(42,33,29,0.14)]">
              <Image
                src="/texture-fabric.png"
                alt="Warm, tactile materials on a desk"
                fill
                sizes="(min-width: 768px) 380px, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProcessCTA;
