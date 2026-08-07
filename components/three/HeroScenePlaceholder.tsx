"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export function HeroScenePlaceholder() {
  return (
    <GlassCard className="relative overflow-hidden p-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-full min-h-105 overflow-hidden rounded-4xl bg-slate-950/80"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(109,94,249,0.22),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(100,230,217,0.18),transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_60%)]" />

        <div className="absolute left-6 top-6 flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl">
          <span className="font-semibold text-white/90">React Three Fiber</span>
          <p className="max-w-xs text-sm text-slate-300">Interactive 3D placeholder for hero visuals and immersive motion.</p>
        </div>

        <div className="absolute inset-x-8 top-1/2 flex -translate-y-1/2 items-center justify-between gap-4">
          <div className="h-28 w-28 rounded-3xl border border-white/15 bg-white/5 shadow-[0_20px_40px_rgba(109,94,249,0.15)]" />
          <div className="h-40 w-40 rounded-4xl border border-white/15 bg-white/5 shadow-[0_30px_80px_rgba(100,230,217,0.12)]" />
          <div className="h-24 w-24 rounded-3xl border border-white/15 bg-white/5 shadow-[0_20px_40px_rgba(59,130,246,0.12)]" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-10 top-10 h-16 w-16 rounded-full bg-[#6D5EF9]/20 blur-2xl" />
          <div className="absolute right-12 top-24 h-24 w-24 rounded-full bg-[#64E6D9]/20 blur-3xl" />
          <div className="absolute left-1/2 bottom-14 h-12 w-12 -translate-x-1/2 rounded-full bg-[#A78BFA]/20 blur-2xl" />
        </div>
      </motion.div>
    </GlassCard>
  );
}

export default HeroScenePlaceholder;
