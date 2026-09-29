"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

function WaveGraphic() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-0 w-[55%] max-w-[520px] sm:w-[45%]"
      aria-hidden="true"
    >
      <Image
        src="/final-cta-wave.png"
        alt=""
        fill
        aria-hidden="true"
        sizes="(min-width: 1024px) 520px, 55vw"
        className="object-contain object-left opacity-80"
      />
    </div>
  );
}

function SparkleBadge() {
  return (
    <div
      className="pointer-events-none absolute right-0 top-1/2 hidden h-[90px] w-[90px] -translate-y-1/2 lg:block xl:h-[110px] xl:w-[110px]"
      aria-hidden="true"
    >
      <Image
        src="/final-cta-sparkle.png"
        alt=""
        fill
        aria-hidden="true"
        sizes="110px"
        className="object-contain"
      />
    </div>
  );
}

type FinalCTAProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function FinalCTA({
  eyebrow = "Our why",
  heading = "Because every brand deserves a digital home that works as hard as they do.",
  description = "We're here for the founders, dreamers and doers who are ready to grow — with a partner who understands the bigger picture, and cares about the details.",
  buttonLabel = "Let's work together",
  buttonHref = "/contact",
}: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden border-t border-[#806C5D]/10 bg-[#F7F3EB]">
      {/* Decorative watercolor — absolute, out of layout flow */}
      <WaveGraphic />
      {/* Decorative sparkle doodle — absolute, out of layout flow */}
      <SparkleBadge />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 py-10 pl-[8%] sm:flex-row sm:items-center sm:gap-10 sm:py-12 sm:pl-[18%] lg:gap-14 lg:pl-[16%] lg:pr-[7%]"
        >
          {/* Heading */}
          <div className="sm:flex-[1.3]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9AAEB3]">
              {eyebrow}
            </p>
            <h2 className="mt-3 max-w-[420px] text-[26px] font-medium leading-[1.15] tracking-[-0.02em] text-[#2A211D] sm:text-[30px] lg:text-[34px]">
              {heading}
            </h2>
          </div>

          {/* Vertical divider */}
          <div className="hidden h-[110px] w-px shrink-0 self-center bg-[#806C5D]/15 sm:block" />

          {/* Description + CTA */}
          <div className="flex flex-col items-start sm:flex-1">
            <p className="max-w-[340px] text-[13px] leading-[1.65] text-[#81776C]">
              {description}
            </p>

            <Link
              href={buttonHref}
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#DCE9EC] px-4 py-2.5 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-[#2A211D] transition-colors duration-300 hover:bg-[#C8DCE1]"
            >
              {buttonLabel}
              <ArrowRight
                size={11}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default FinalCTA;
