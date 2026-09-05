"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/lib/design-system";
import { useScrollShrink } from "@/hooks/useScrollShrink";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#portfolio" },
  { label: "Reviews", href: "#testimonials" },
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
        padding: isShrunk ? "0.625rem 1rem" : "0.875rem 1.25rem",
        backdropFilter: isShrunk ? "blur(24px)" : "blur(0px)",
        backgroundColor: isShrunk
          ? "rgba(244,239,231,0.94)"
          : "rgba(244,239,231,0)",
      }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={cn(
        `fixed top-3 z-50 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-[80rem] flex items-center justify-between px-4 sm:px-6 transition-all duration-300 ${
          isShrunk
            ? "border border-[#806C5D]/25 bg-[#F4EFE7]/95 shadow-[0_12px_35px_rgba(42,33,29,0.10)] backdrop-blur-xl"
            : "border border-transparent bg-transparent shadow-none"
        }`,
      )}
    >
      <a
        href="#top"
        className="text-base font-black tracking-[0.18em] text-black transition-colors duration-300"
      >
        LUMORA
      </a>

      <nav className="hidden items-center gap-[clamp(1rem,2vw,1.75rem)] min-[850px]:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="relative text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2A211D]/70 transition-all duration-300 hover:text-[#2A211D] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#2A211D] after:transition-all after:duration-300 hover:after:w-full"
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
        className={`min-[850px]:hidden inline-flex h-11 w-11 items-center justify-center rounded-full transition-all ${
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
            className="absolute inset-x-0 top-[calc(100%+0.75rem)] border border-[#806C5D]/25 bg-[#F4EFE7]/98 p-6 shadow-[0_25px_80px_rgba(42,33,29,0.16)] backdrop-blur-xl min-[850px]:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-[#806C5D]/20 px-2 py-3 text-sm font-medium uppercase tracking-[0.12em] text-[#2A211D] transition hover:bg-[#DCE7EA]"
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
