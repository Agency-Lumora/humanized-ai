"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Container } from "@/components/ui/Container";

const process = [
  {
    number: "01",
    title: "Understand",
    category: "Discovery",
    description: "We listen, research, and understand your vision.",
    illustration: "/process/step-01-discover.svg",
  },
  {
    number: "02",
    title: "Strategize",
    category: "Strategy",
    description: "We map the path from insight to impact.",
    illustration: "/process/step-02-strategize.svg",
  },
  {
    number: "03",
    title: "Create",
    category: "Design",
    description: "We craft every pixel with purpose and taste.",
    illustration: "/process/step-03-create.svg",
  },
  {
    number: "04",
    title: "Build",
    category: "Development",
    description:
      "We build fast, responsive, future-ready digital products.",
    illustration: "/process/step-04-build.svg",
  },
  {
    number: "05",
    title: "Launch & Grow",
    category: "Growth",
    description:
      "We launch, measure, and optimize for lasting growth.",
    illustration: "/process/step-05-launch-grow.svg",
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
    <div className="relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-[1.5rem] border border-[#806C5D]/15 bg-gradient-to-br from-[#DCE7EA] to-[#F4EFE7] sm:max-w-[280px] lg:mx-0 lg:max-w-[340px] lg:rounded-[2rem]">
      <img
        src="/process/decorative-curves.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[6%] top-[8%] w-[46%] opacity-60"
      />

      <img
        src="/process/shape-elements.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[6%] right-[6%] w-[30%] opacity-50"
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={active.illustration}
          src={active.illustration}
          alt={`Abstract illustration representing ${active.title}`}
          className="absolute inset-0 m-auto h-[70%] w-[70%] object-contain"
          initial={
            reducedMotion
              ? false
              : { opacity: 0, scale: 0.96, y: 8 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={
            reducedMotion
              ? undefined
              : { opacity: 0, scale: 0.96, y: -8 }
          }
          transition={{
            duration: reducedMotion ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </AnimatePresence>
    </div>
  );
}

type ProcessTimelineProps = {
  activeIndex: number;
  onSelect: (index: number) => void;
};

function ProcessTimeline({
  activeIndex,
  onSelect,
}: ProcessTimelineProps) {
  const count = process.length;
  const markerCenter = (index: number) =>
    ((index + 0.5) / count) * 100;

  const lineLeft = markerCenter(0);
  const lineSpan = markerCenter(count - 1) - lineLeft;
  const activeSpan = (activeIndex / (count - 1)) * lineSpan;

  return (
    <nav
      aria-label="Process steps"
      className="relative shrink-0"
    >
      {/* Timeline track */}
      <div
        className="absolute top-[7px] h-px bg-[#806C5D]/20"
        style={{
          left: `${lineLeft}%`,
          width: `${lineSpan}%`,
        }}
      />

      {/* Active progress */}
      <motion.div
        className="absolute top-[7px] h-px bg-[#88C5E8]"
        style={{ left: `${lineLeft}%` }}
        animate={{ width: `${activeSpan}%` }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <div className="relative grid grid-cols-5">
        {process.map((step, index) => {
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;

          return (
            <button
              key={step.number}
              type="button"
              onClick={() => onSelect(index)}
              aria-current={isActive ? "step" : undefined}
              aria-label={`Step ${step.number}: ${step.title}`}
              className="group flex min-w-0 flex-col items-center gap-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88C5E8] focus-visible:ring-offset-4"
            >
              <span
                className={`relative z-10 block h-[15px] w-[15px] shrink-0 rounded-full border-2 transition-colors duration-300 ${
                  isActive
                    ? "border-[#88C5E8] bg-[#88C5E8]"
                    : isPast
                      ? "border-[#88C5E8]/70 bg-[#88C5E8]/70"
                      : "border-[#806C5D]/35 bg-[#F4EFE7]"
                }`}
              />

              <span className="flex min-w-0 flex-col items-center gap-0.5 text-center">
                <span
                  className={`font-mono text-[9px] transition-colors sm:text-[10px] ${
                    isActive
                      ? "text-[#35251B]"
                      : "text-[#806C5D]/60"
                  }`}
                >
                  {step.number}
                </span>

                <span
                  className={`max-w-full text-[9px] leading-tight transition-colors sm:text-[12px] lg:text-[13px] ${
                    isActive
                      ? "font-semibold text-[#35251B]"
                      : "text-[#6B584B]/75"
                  }`}
                >
                  {step.title}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = shouldReduceMotion ?? false;
  const stepsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextIndex = Math.min(
      process.length - 1,
      Math.max(
        0,
        Math.round(progress * (process.length - 1))
      )
    );

    setActiveIndex((current) =>
      current === nextIndex ? current : nextIndex
    );
  });

  const scrollToStep = (index: number) => {
    const element = stepsRef.current;

    if (!element) return;

    const scrollableHeight =
      element.offsetHeight - window.innerHeight;

    if (scrollableHeight <= 0) return;

    const targetProgress = index / (process.length - 1);

    const targetY =
      window.scrollY +
      element.getBoundingClientRect().top +
      targetProgress * scrollableHeight;

    window.scrollTo({
      top: targetY,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const activeStep = process[activeIndex];

  return (
    <section
      id="process"
      className="overflow-clip border-b border-[#806C5D]/20 bg-[#F4EFE7]"
    >
      <Container>
        {/*
          ONE COMPOSITION

          Introduction, timeline, active step and illustration all
          live inside the same sticky panel.

          The outer track provides the scroll distance needed to
          advance through the five steps. It does not create five
          separate viewport-height sections.
        */}
        <div
          ref={stepsRef}
          className="relative h-[190svh] sm:h-[195svh] lg:h-[200svh]"
        >
          <div className="sticky top-16 flex min-h-[calc(100svh-4rem)] flex-col justify-center gap-5 bg-[#F4EFE7] py-5 sm:top-20 sm:min-h-[calc(100svh-5rem)] sm:gap-6 sm:py-6 lg:top-20 lg:min-h-[calc(100svh-5rem)] lg:gap-7">
            {/* 1. Introduction */}
            <header className="shrink-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#6B584B] sm:text-[10px]">
                <span className="text-[#88C5E8]">03</span>
                <span className="mx-2 text-[#806C5D]/30">
                  ·
                </span>
                Our Process
              </p>

              <h2 className="mt-2 font-serif text-[clamp(1.9rem,3.4vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.035em] text-[#35251B]">
                How we create success.
              </h2>

              <p className="mt-2 max-w-[460px] text-[12px] leading-5 text-[#6B584B] sm:text-sm sm:leading-6">
                Thoughtful strategy. Purposeful design. Digital
                experiences built to move your business forward.
              </p>
            </header>

            {/* 2. Five-step timeline */}
            <div className="shrink-0 border-b border-[#806C5D]/15 pb-5 sm:pb-6">
              <ProcessTimeline
                activeIndex={activeIndex}
                onSelect={scrollToStep}
              />
            </div>

            {/* 3. Active step: text and illustration */}
            <div className="grid min-h-0 grid-cols-1 items-center gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
              {/* Step content */}
              <div className="relative min-w-0">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeStep.number}
                    initial={
                      reducedMotion
                        ? false
                        : { opacity: 0, y: 12 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      reducedMotion
                        ? undefined
                        : { opacity: 0, y: -12 }
                    }
                    transition={{
                      duration: reducedMotion ? 0 : 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#6B584B] sm:text-[10px]">
                      Lumora / Method
                    </p>

                    <div className="mt-2 flex items-baseline gap-3 sm:mt-3 sm:gap-4">
                      <span className="font-serif text-[clamp(2.6rem,5vw,4rem)] leading-none tracking-[-0.04em] text-[#88C5E8]">
                        {activeStep.number}
                      </span>

                      <h3 className="font-serif text-[clamp(1.65rem,3vw,2.6rem)] leading-[1.1] tracking-[-0.035em] text-[#35251B]">
                        {activeStep.title}
                      </h3>
                    </div>

                    <span className="mt-3 inline-block rounded-full bg-[#88C5E8]/20 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#35251B] sm:mt-4 sm:text-[10px]">
                      {activeStep.category}
                    </span>

                    <p className="mt-3 max-w-[420px] text-[12px] leading-5 text-[#6B584B] sm:mt-4 sm:text-[13px] sm:leading-6 lg:text-[15px] lg:leading-7">
                      {activeStep.description}
                    </p>

                    <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[#806C5D] sm:mt-5 sm:text-[10px]">
                      Step {activeStep.number} of 05
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Matching illustration */}
              <div className="w-full min-w-0">
                <ProcessGraphic
                  activeIndex={activeIndex}
                  reducedMotion={reducedMotion}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Subtle transition into the next website section */}
      <div
        className="relative h-12 overflow-hidden sm:h-16 lg:h-20"
        aria-hidden="true"
      >
        <img
          src="/process/section-wave-bottom.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    </section>
  );
}

export default ProcessSection;
