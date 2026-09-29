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

const journey = [
  { label: "THINK", image: "/numbers.png", alt: "A notebook sketched with early ideas", shape: "rounded-[46%_54%_58%_42%]", translate: "sm:translate-y-2", rotate: "-rotate-2" },
  { label: "CREATE", image: "/founder-photo.png", alt: "Designing at a desk surrounded by creative direction", shape: "rounded-[58%_42%_46%_54%]", translate: "sm:translate-y-10", rotate: "rotate-2" },
  { label: "BUILD", image: "/about-hero.png", alt: "A laptop mid-build on a sunlit desk", shape: "rounded-[42%_58%_54%_46%]", translate: "sm:translate-y-1", rotate: "-rotate-1" },
  { label: "GROW", image: "/decor-flower.png", alt: "A plant marking the growth stage", shape: "rounded-[54%_46%_42%_58%]", translate: "sm:translate-y-9", rotate: "rotate-3" },
];

export function ProcessHero() {
  return (
    <section className="relative mx-auto max-w-[1440px] overflow-x-clip px-6 pb-[clamp(2.5rem,5vw,3.5rem)] pt-[clamp(6rem,9vw,7.5rem)] md:px-12">
      <div className="grid gap-14 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[540px]"
        >
          <Eyebrow>How we work</Eyebrow>

          <h1 className="mt-6 font-serif text-[clamp(2.1rem,4.2vw,3.4rem)] font-normal leading-[1.08] tracking-[-0.03em] text-[#2A211D]">
            From your idea to
            <br />
            <span className="text-[#6EA9C7]">something that works.</span>
          </h1>

          <p className="mt-7 max-w-[460px] text-sm leading-7 text-[#6B584B]">
            Every project starts differently. Some begin with a rough idea, some
            with a problem that needs solving, and some with a business that&apos;s
            ready for its next chapter.
          </p>

          <p className="mt-4 max-w-[460px] text-sm leading-7 text-[#6B584B]">
            Our process turns that starting point into a clear strategy,
            thoughtful design, and a digital experience built to move your
            business forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[560px] py-6"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 560 220"
            className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-24 w-full -translate-y-1/2 text-[#88C5E8]/60 sm:block"
            fill="none"
          >
            <path
              d="M30 60 C 110 130, 160 40, 240 110 S 380 150, 440 70 S 500 40, 530 90"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeDasharray="1 7"
            />
          </svg>

          <div className="relative z-10 flex items-end justify-between gap-2 sm:gap-4">
            {journey.map((stage) => (
              <div key={stage.label} className={`flex flex-1 flex-col items-center ${stage.translate}`}>
                <span
                  className={`${caveat.className} mb-2 text-[13px] leading-none text-[#2A211D]/80 sm:text-[17px] ${stage.rotate}`}
                >
                  {stage.label.charAt(0) + stage.label.slice(1).toLowerCase()}
                </span>
                <div
                  className={`relative aspect-square w-full max-w-[118px] overflow-hidden border-[3px] border-white shadow-[0_16px_32px_rgba(42,33,29,0.14)] sm:border-[4px] ${stage.shape}`}
                >
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(min-width: 640px) 118px, 22vw"
                    className="object-cover"
                    priority={stage.label === "THINK"}
                  />
                </div>
              </div>
            ))}
          </div>

          <span className="absolute -right-2 -top-2 text-[20px] text-[#6EA9C7]">✦</span>
        </motion.div>
      </div>
    </section>
  );
}

export default ProcessHero;
