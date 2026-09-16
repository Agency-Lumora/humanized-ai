"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function NextToNowWord() {
  const wordRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(wordRef, { once: true, amount: 0.8 });
  const [isStruck, setIsStruck] = useState(false);
  const [typedNow, setTypedNow] = useState("");

  useEffect(() => {
    if (!isInView) return;

    const strikeTimer = window.setTimeout(() => setIsStruck(true), 650);
    const typeTimer = window.setTimeout(() => {
      let characterIndex = 0;
      const interval = window.setInterval(() => {
        characterIndex += 1;
        setTypedNow("NOW".slice(0, characterIndex));

        if (characterIndex === 3) window.clearInterval(interval);
      }, 170);

      return () => window.clearInterval(interval);
    }, 1250);

    return () => {
      window.clearTimeout(strikeTimer);
      window.clearTimeout(typeTimer);
    };
  }, [isInView]);

  return (
    <span ref={wordRef} className="inline-block">
      <span className="relative inline-block min-w-[3.2ch]">
        <span className={typedNow ? "text-[#F4EFE7]/45" : undefined}>NEXT</span>
        <motion.span
          aria-hidden="true"
          className="absolute left-0 top-1/2 h-[0.07em] w-full origin-left bg-[#AFC4CE]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isStruck ? 1 : 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />
      </span>
      ? <span className="text-[#AFC4CE]">{typedNow}</span>
      {typedNow && typedNow.length < 3 ? (
        <span className="ml-0.5 inline-block h-[0.8em] w-px bg-[#AFC4CE] align-baseline opacity-80" />
      ) : null}
    </span>
  );
}

function CTAButton({ children, href }: { children: React.ReactNode; href: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();
  const transition = { duration: reducedMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="group relative inline-block w-full sm:w-auto"
    >
      <motion.div
        className="relative z-10 flex min-h-[68px] w-full min-w-0 items-center justify-center gap-5 border border-transparent px-7 py-4 text-[#2A211D] sm:min-w-[340px] sm:px-9"
        animate={{
          backgroundColor: isHovered ? "#F4EFE7" : "#AFC4CE",
          borderColor: isHovered ? "rgba(128, 108, 93, 0.5)" : "rgba(128, 108, 93, 0)",
        }}
        transition={transition}
      >
        <span className="text-[13px] font-bold uppercase tracking-[0.16em]">
          {children}
        </span>
        <motion.div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg"
          animate={{
            scale: isHovered ? 1 : 0.8,
            backgroundColor: isHovered ? "#AFC4CE" : "rgba(175, 196, 206, 0)",
          }}
          transition={transition}
        >
          <motion.span
            animate={{ x: 0, rotate: 0 }}
            transition={transition}
            aria-hidden="true"
          >
            →
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.a>
  );
}

export default function ConsultationSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="consultation"
      ref={containerRef}
      className="relative overflow-hidden bg-[#2A211D] py-[clamp(4rem,8vw,6rem)]"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-[#AFC4CE]/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[15%] h-56 w-56 rounded-full bg-[#DCE7EA]/10 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#AFC4CE]">
              Ready to start?
            </p>
            <h2 className="mx-auto mt-4 max-w-5xl font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-[#F4EFE7]">
              WHAT SHOULD WE
            </h2>
            <h2 className="mx-auto max-w-5xl font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-[#AFC4CE]">
              BUILD <NextToNowWord />
            </h2>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#F4EFE7]/70"
          >
            Your competitors aren&apos;t waiting. You shouldn&apos;t either.
            
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <CTAButton href="https://wa.me/917383172979?text=Hi%20Lumora,%20I'd%20like%20to%20discuss%20a%20project.">
              Now or Never
            </CTAButton>
          </motion.div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-8 text-xs text-[#F4EFE7]/50"
          >
            <span>Systems built for businesses that don&apos;t have time to stay small.</span>
          </motion.div>
        </div>
      </div>

      {/* Decorative line animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#AFC4CE] to-transparent"
        initial={{ width: "0%", left: "50%" }}
        whileInView={{ width: "100%", left: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </section>
  );
}
