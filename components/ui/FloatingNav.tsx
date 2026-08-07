"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GlassButton } from "@/components/ui/GlassButton";
import { cn, gradients, radius, shadows } from "@/lib/design-system";
import { useScrollShrink } from "@/hooks/useScrollShrink";
import ConsultationSection from  "../home/ConsultationSection";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#founder" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#consultation" },
  { label: "Reviews", href: "#testimonials"},
  { label: "Contact", href: "#contact" },
];

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const isShrunk = useScrollShrink(40);

  useEffect(() => {
    if (!isOpen) return;

    const lockScroll = () => document.body.classList.add("overflow-hidden");
    const unlockScroll = () =>
      document.body.classList.remove("overflow-hidden");

    lockScroll();
    return unlockScroll;
  }, [isOpen]);

  return (
    <motion.header
      initial={false}
      animate={{
        padding: isShrunk ? "0.75rem 1rem" : "1.25rem 1.5rem",
        backdropFilter: isShrunk ? "blur(24px)" : "blur(0px)",
        backgroundColor: isShrunk
          ? "rgba(255,255,255,0.82)"
          : "rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={cn(
        `fixed top-4 z-50 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-7xl flex items-center justify-between rounded-full px-8 transition-all duration-300 ${
          isShrunk
            ? "border border-white/50 bg-white/70 shadow-[0_18px_60px_rgba(124,92,255,0.10)] backdrop-blur-xl"
            : "border border-transparent bg-transparent shadow-none"
        }`,
        shadows.glow,
        radius.xxl,
      )}
    >
      <a
        href="#top"
        className="text-1xl font-black tracking-[0.18em] text-black transition-colors duration-300"
      >
        LUMORA
      </a>

      <nav className="hidden items-center gap-7 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="relative text-sm font-semibold tracking-wide text-slate-700 transition-all duration-300 hover:text-[#7C5CFF] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#7C5CFF] after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* <div className="hidden items-center gap-3 md:flex">
        <GlassButton
          href="#footer"
          variant="primary"
          className="rounded-full px-6"
        >
          Book a Free Call
        </GlassButton>
      </div> */}

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className={`md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full transition-all ${
          isShrunk
            ? "border border-white/50 bg-white/80 shadow-md"
            : "border border-transparent bg-transparent"
        }`}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-4 top-[calc(100%+0.75rem)] rounded-4xl border border-white/60 bg-white/95 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default FloatingNav;
