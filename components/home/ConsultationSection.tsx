"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="group relative inline-block"
    >
      <motion.div
        className="relative z-10 overflow-hidden bg-[#AFC4CE] px-10 py-6"
        animate={{
          backgroundColor: isHovered ? "#DCE7EA" : "#AFC4CE",
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative z-10 flex items-center gap-4">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#2A211D]">
            {children}
          </span>
          <motion.span
            className="text-xl text-[#2A211D]"
            animate={{
              x: isHovered ? 5 : 0,
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </div>

        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-[#2A211D]"
          initial={{ x: "-100%", y: "-100%" }}
          animate={{
            x: isHovered ? "0%" : "-100%",
            y: isHovered ? "0%" : "-100%",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* Shadow effect */}
      <motion.div
        className="absolute inset-0 -z-10 bg-[#806C5D]"
        animate={{
          x: isHovered ? 8 : 4,
          y: isHovered ? 8 : 4,
        }}
        transition={{ duration: 0.3 }}
      />
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
              YOUR NEXT
            </h2>
            <h2 className="mx-auto max-w-5xl font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-[#AFC4CE]">
              DIGITAL MOVE?
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
            Let&apos;s create something people remember.
            <br />
            Tell us about your vision, and we&apos;ll help bring it to life.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <MagneticButton href="https://wa.me/917383172979?text=Hi%20Lumora,%20I'd%20like%20to%20discuss%20a%20project.">
              Start a project
            </MagneticButton>
          </motion.div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-8 text-xs text-[#F4EFE7]/50"
          >
            <span>Free consultation included</span>
            <span className="h-1 w-1 rounded-full bg-[#F4EFE7]/30" />
            <span>Response within 24 hours</span>
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
