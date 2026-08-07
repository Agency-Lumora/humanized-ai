"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import LumoraHeroCanvas from "@/components/three/LumoraHeroCanvas";

export default function LumoraHeroScene() {
  const { scrollY } = useScroll();

  const agencyOpacity = useTransform(scrollY, [0, 180], [0, 1]);
  const agencyY = useTransform(scrollY, [0, 180], [20, 0]);

  const taglineOpacity = useTransform(scrollY, [120, 320], [0, 1]);
  const taglineY = useTransform(scrollY, [120, 320], [20, 0]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0">
        <LumoraHeroCanvas />
      </div>

      {/* Background Glow */}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="text-6xl font-black tracking-[0.25em] bg-gradient-to-r from-[#6D5EF9] to-[#64E6D9] bg-clip-text text-transparent"></div>
        </motion.div>

        {/* Brand */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="
          select-none
          bg-gradient-to-r
          from-[#7C5CFF]
          via-[#9A7CFF]
          to-[#C7B8FF]
          bg-clip-text
          text-transparent
          text-5xl
          font-black
          tracking-[0.18em]
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
          drop-shadow-[0_0_40px_rgba(124,92,255,0.35)]
            "
        >
          LUMORA
        </motion.h1>

        {/* H2 */}
        <motion.h2
          style={{
            opacity: agencyOpacity,
            y: agencyY,
          }}
          className="
          mt-6
          text-base
          font-semibold
          uppercase
          tracking-[0.55em]
          text-slate-900
          sm:text-lg
          md:text-xl
          "
        >
          Agency
        </motion.h2>

        {/* H3 */}
        <motion.p
          style={{
            opacity: taglineOpacity,
            y: taglineY,
          }}
          className="
      mt-6
      max-w-xl
      text-base
      leading-8
      text-slate-600
      sm:text-lg
      "
        >
          Humanized AI Websites for Every Business.
        </motion.p>
      </div>
    </div>
  );
}
