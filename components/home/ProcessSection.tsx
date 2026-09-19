/*"use client";

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
        <h2 className="mt-2 font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] leading-[1.2] tracking-[-0.02em] text-[#35251B]">
          How we create success
        </h2> */

      /*  {/* Timeline */
       /* <div className="relative mt-10">
          <div className="h-px w-full bg-[#806C5D]/20" />
          <span className="absolute left-[20%] top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#88C5E8]" />
        </div>

        {/* Steps */
        /*<div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {process.map(([title, description], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
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

export default ProcessSection;*/


"use client";

import { useState } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { Container } from "@/components/ui/Container";

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We listen, research, and understand your vision.",
    keyword: "Understand",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We map the path from insight to impact.",
    keyword: "Define",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We craft every pixel with purpose and taste.",
    keyword: "Create",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build fast, responsive, future-ready digital products.",
    keyword: "Build",
  },
  {
    number: "05",
    title: "Launch & Grow",
    description:
      "We launch, measure, and optimize for lasting growth.",
    keyword: "Evolve",
  },
] as const;

type ProcessGraphicProps = {
  activeIndex: number;
  reducedMotion: boolean;
};

function ProcessGraphic({
  activeIndex,
  reducedMotion,
}: ProcessGraphicProps) {
  const active = process[activeIndex];

  return (
    <div className="relative aspect-square w-full max-w-[440px] overflow-hidden rounded-[2rem] border border-[#806C5D]/20 bg-[#DCE7EA]">
      {/* Editorial background details */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#806C5D]/20" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-[#806C5D]/20" />
        <div className="absolute inset-[12%] rounded-full border border-[#806C5D]/15" />
        <div className="absolute inset-[25%] rounded-full border border-[#806C5D]/15" />
      </div>

      <div className="absolute left-5 top-5 z-10">
        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#6B584B]">
          Lumora / Method
        </p>
      </div>

      <div className="absolute right-5 top-5 z-10">
        <p className="font-mono text-[10px] text-[#6B584B]">
          {`${active.number} / 05`}
        </p>
      </div>

      {/* Abstract animated graphic */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={`Abstract visual representing the ${active.title} stage`}
        animate={reducedMotion ? undefined : { opacity: 1 }}
      >
        <defs>
          <pattern
            id="lumora-grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#806C5D"
              strokeWidth="0.5"
              opacity="0.18"
            />
          </pattern>
        </defs>

        <rect
          x="0"
          y="0"
          width="400"
          height="400"
          fill="url(#lumora-grid)"
        />

        {/* Connecting route */}
        <motion.path
          d="M 72 280 C 115 280 100 110 200 110 S 285 280 328 280"
          fill="none"
          stroke="#806C5D"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          opacity="0.5"
          animate={
            reducedMotion
              ? undefined
              : { pathLength: [0.7, 1, 0.7] }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Stage-specific abstract form */}
        <motion.g
          key={`stage-${activeIndex}`}
          initial={{ opacity: 1, scale: 1 }}
          animate={
            reducedMotion
              ? { opacity: 1, rotate: 0, scale: 1 }
              : {
                  opacity: 1,
                  rotate: [0, 4, 0],
                  scale: [1, 1.025, 1],
                }
          }
          transition={{
            opacity: { duration: reducedMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] },
            rotate: { duration: reducedMotion ? 0 : 18, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: reducedMotion ? 0 : 18, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ transformOrigin: "200px 200px" }}
        >
          {activeIndex === 0 && (
            <>
              <rect
                x="118"
                y="118"
                width="164"
                height="164"
                rx="8"
                fill="#F4EFE7"
                stroke="#806C5D"
                strokeWidth="1.5"
                transform="rotate(-8 200 200)"
              />
              <rect
                x="145"
                y="145"
                width="110"
                height="110"
                rx="55"
                fill="#88C5E8"
                opacity="0.65"
              />
              <circle
                cx="200"
                cy="200"
                r="31"
                fill="none"
                stroke="#35251B"
                strokeWidth="5"
              />
              <path
                d="M 222 222 L 252 252"
                stroke="#35251B"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="200" cy="200" r="5" fill="#35251B" />
            </>
          )}

          {activeIndex === 1 && (
            <>
              <path
                d="M 200 82 L 305 143 L 305 263 L 200 324 L 95 263 L 95 143 Z"
                fill="#F4EFE7"
                stroke="#806C5D"
                strokeWidth="1.5"
              />
              <path
                d="M 200 82 L 200 202 L 305 263"
                fill="none"
                stroke="#806C5D"
                strokeWidth="1.5"
              />
              <path
                d="M 200 202 L 95 263 M 200 202 L 305 143 M 200 202 L 95 143"
                fill="none"
                stroke="#806C5D"
                strokeWidth="1.5"
              />
              <circle cx="200" cy="202" r="16" fill="#88C5E8" />
              <circle cx="200" cy="82" r="7" fill="#35251B" />
              <circle cx="305" cy="143" r="7" fill="#35251B" />
              <circle cx="305" cy="263" r="7" fill="#35251B" />
              <circle cx="200" cy="324" r="7" fill="#35251B" />
              <circle cx="95" cy="263" r="7" fill="#35251B" />
              <circle cx="95" cy="143" r="7" fill="#35251B" />
            </>
          )}

          {activeIndex === 2 && (
            <>
              <rect
                x="88"
                y="105"
                width="224"
                height="190"
                rx="10"
                fill="#F4EFE7"
                stroke="#806C5D"
                strokeWidth="1.5"
              />
              <rect
                x="88"
                y="105"
                width="224"
                height="28"
                rx="10"
                fill="#35251B"
              />
              <circle cx="106" cy="119" r="4" fill="#F4EFE7" />
              <circle cx="120" cy="119" r="4" fill="#F4EFE7" />
              <circle cx="134" cy="119" r="4" fill="#F4EFE7" />
              <rect
                x="112"
                y="155"
                width="76"
                height="96"
                rx="5"
                fill="#88C5E8"
              />
              <rect
                x="200"
                y="155"
                width="84"
                height="9"
                rx="4"
                fill="#806C5D"
              />
              <rect
                x="200"
                y="176"
                width="62"
                height="7"
                rx="3"
                fill="#806C5D"
                opacity="0.5"
              />
              <rect
                x="200"
                y="198"
                width="84"
                height="7"
                rx="3"
                fill="#806C5D"
                opacity="0.5"
              />
              <rect
                x="200"
                y="220"
                width="48"
                height="7"
                rx="3"
                fill="#806C5D"
                opacity="0.5"
              />
            </>
          )}

          {activeIndex === 3 && (
            <>
              <rect
                x="105"
                y="90"
                width="190"
                height="220"
                rx="12"
                fill="#35251B"
              />
              <rect
                x="119"
                y="104"
                width="162"
                height="192"
                rx="5"
                fill="#F4EFE7"
              />
              <path
                d="M 143 148 L 161 166 L 143 184"
                fill="none"
                stroke="#88C5E8"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 177 190 L 207 190"
                stroke="#806C5D"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <rect
                x="143"
                y="220"
                width="114"
                height="5"
                rx="2"
                fill="#806C5D"
                opacity="0.4"
              />
              <rect
                x="143"
                y="236"
                width="82"
                height="5"
                rx="2"
                fill="#806C5D"
                opacity="0.4"
              />
              <circle cx="200" cy="270" r="6" fill="#88C5E8" />
            </>
          )}

          {activeIndex === 4 && (
            <>
              <path
                d="M 85 285 L 145 225 L 190 245 L 245 155 L 315 95"
                fill="none"
                stroke="#35251B"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 280 95 L 315 95 L 315 130"
                fill="none"
                stroke="#35251B"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="85" cy="285" r="9" fill="#88C5E8" />
              <circle cx="145" cy="225" r="9" fill="#88C5E8" />
              <circle cx="190" cy="245" r="9" fill="#88C5E8" />
              <circle cx="245" cy="155" r="9" fill="#88C5E8" />
              <circle cx="315" cy="95" r="9" fill="#88C5E8" />
              <path
                d="M 85 315 H 315"
                stroke="#806C5D"
                strokeWidth="1"
                strokeDasharray="3 6"
                opacity="0.5"
              />
            </>
          )}
        </motion.g>

        {/* Active stage marker */}
        <motion.circle
          cx="200"
          cy="200"
          r="145"
          fill="none"
          stroke="#88C5E8"
          strokeWidth="1.5"
          strokeDasharray="2 12"
          animate={
            reducedMotion ? undefined : { rotate: 360 }
          }
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "200px 200px" }}
        />
      </motion.svg>

      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#6B584B]">
            Current focus
          </p>
          <p className="mt-1 font-serif text-2xl tracking-[-0.04em] text-[#35251B]">
            {active.keyword}
          </p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#806C5D]/30 bg-[#F4EFE7]/70">
          <span className="text-sm text-[#35251B]">↗</span>
        </div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = shouldReduceMotion ?? false;

  return (
    <section
      id="process"
      className="border-b border-[#806C5D]/20 bg-[#F4EFE7] py-[clamp(4.5rem,9vw,8rem)]"
    >
      <Container>
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
              <span className="text-[#88C5E8]">03</span>
              <span className="mx-2 text-[#806C5D]/30">·</span>
              Our Process
            </p>
          </div>

          <div>
            <h2 className="max-w-[620px] font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] font-normal leading-[1.2] tracking-[-0.025em] text-[#35251B]">
              How we create{" "}
              <span className="text-[#806C5D]">success.</span>
            </h2>
            <p className="mt-5 max-w-[420px] text-sm leading-6 text-[#6B584B]">
              Thoughtful strategy. Purposeful design. Digital experiences
              built to move your business forward.
            </p>
          </div>
        </div>

        {/* Experimental process layout */}
        <div className="mt-16 block lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          {/* Graphic workspace */}
          <div className="sticky top-20 z-10 self-start bg-[#F4EFE7] pb-5 md:top-24 lg:top-28 lg:pb-0">
            <ProcessGraphic
              activeIndex={activeIndex}
              reducedMotion={reducedMotion}
            />

            <div className="mt-5 flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B584B]">
                From idea to impact
              </p>
              <p className="font-mono text-[10px] text-[#806C5D]">
                {`${String(activeIndex + 1).padStart(2, "0")} — 05`}
              </p>
            </div>
          </div>

          {/* Scroll-responsive process steps */}
          <div className="relative">
            <div className="space-y-4 lg:space-y-0">
              {process.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.article
                    key={item.number}
                    className="relative flex min-h-[34vh] items-center sm:min-h-[30vh] lg:min-h-[70vh] lg:items-center"
                    initial={
                      reducedMotion
                        ? false
                        : { opacity: 0, y: 24 }
                    }
                    whileInView={
                      reducedMotion
                        ? undefined
                        : { opacity: 1, y: 0 }
                    }
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: reducedMotion ? 0 : index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onViewportEnter={() => setActiveIndex(index)}
                  >
                    <motion.button
                      type="button"
                      className="group block w-full cursor-pointer rounded-2xl border border-transparent p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88C5E8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F4EFE7] lg:p-7"
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                      animate={{
                        opacity: isActive ? 1 : 0.5,
                        y: isActive || reducedMotion ? 0 : 10,
                      }}
                      transition={{
                        duration: reducedMotion ? 0 : 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <motion.span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[10px]"
                          animate={{
                            backgroundColor: isActive ? "#88C5E8" : "#F4EFE7",
                            borderColor: isActive ? "#88C5E8" : "rgba(128,108,93,0.3)",
                          }}
                          transition={{ duration: reducedMotion ? 0 : 0.3 }}
                        >
                          {item.number}
                        </motion.span>
                        <h3
                          className={`font-serif text-[clamp(1.45rem,2.5vw,2rem)] tracking-[-0.035em] transition-colors duration-300 ${
                            isActive
                              ? "text-[#35251B]"
                              : "text-[#806C5D]"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <span
                          className={`ml-auto text-[10px] uppercase tracking-[0.18em] transition-opacity duration-300 ${
                            isActive
                              ? "opacity-100 text-[#6B584B]"
                              : "opacity-0 text-[#6B584B] group-hover:opacity-100"
                          }`}
                        >
                          {item.keyword}
                        </span>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 12 : 0,
                        }}
                        transition={{
                          duration: reducedMotion ? 0 : 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[390px] text-[13px] leading-6 text-[#6B584B]">
                          {item.description}
                        </p>
                      </motion.div>

                      <div
                        className={`mt-5 h-px w-full transition-colors duration-300 ${
                          isActive
                            ? "bg-[#88C5E8]"
                            : "bg-[#806C5D]/15"
                        }`}
                      />
                    </motion.button>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
