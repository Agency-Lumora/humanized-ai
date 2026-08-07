"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Typography } from "@/components/ui/Typography";
import { CrystalScene } from "@/components/three/CrystalScene";
import { GlowEffect } from "@/components/ui/GlowEffect";
import { Zap, Palette, MonitorSmartphone } from "lucide-react";
import LumoraHeroScene from "@/components/hero/LumoraHeroScene";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pb-24 lg:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(109,94,249,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(100,230,217,0.14),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45),transparent_55%)] opacity-80" />
      <GlowEffect className="left-10 top-12" intensity="lg" />
      <GlowEffect className="right-8 top-40" intensity="md" />
      <GlowEffect className="left-1/2 top-64 -translate-x-1/2" intensity="sm" />

      <Container className="relative grid gap-10 sm:gap-14 lg:gap-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <Badge tone="accent">Humanized AI Websites for Every Business</Badge>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tighter leading-[0.95] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              We Build
              <br />
              <GradientText>Digital Experiences</GradientText>
              <br />
              That Feel Human.
            </h1>
            <Typography
              size="body"
              className="max-w-2xl text-lg text-slate-600 sm:text-xl"
            >
              Humanized AI websites designed to build trust, elevate your brand,
              and turn visitors into customers. Beautifully crafted,
              lightning-fast, and built for growth.
            </Typography>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
            <Button href="#process" variant="primary" className="min-w-44">
              Get Started
            </Button>
            <Button href="#consultation" variant="ghost" className="min-w-44">
              Consult
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/70 bg-white/70 p-4 text-sm text-slate-700 shadow-[0_15px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <Zap className="h-8 w-8 text-[#6D5EF9]" strokeWidth={2.2} />
              <p className="mt-2 font-semibold text-slate-950">Fast Delivery</p>
              <p className="text-sm text-slate-600">
                Launch your website quickly without compromising quality.
              </p>
            </div>

            <div className="rounded-3xl border border-white/70 bg-white/70 p-4 text-sm text-slate-700 shadow-[0_15px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <Palette className="h-8 w-8 text-[#6D5EF9]" strokeWidth={2.2} />
              <p className="mt-2 font-semibold text-slate-950">
                Premium Design
              </p>
              <p className="text-sm text-slate-600">
                Elegant, modern interfaces crafted to impress your audience.
              </p>
            </div>

            <div className="rounded-3xl border border-white/70 bg-white/70 p-4 text-sm text-slate-700 shadow-[0_15px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <MonitorSmartphone
                className="h-8 w-8 text-[#6D5EF9]"
                strokeWidth={2.2}
              />
              <p className="mt-2 font-semibold text-slate-950">
                Fully Responsive
              </p>
              <p className="text-sm text-slate-600">
                Optimized for desktop, tablet, and mobile devices.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative h-[360px] sm:h-[500px] lg:h-[760px] w-full">
          <LumoraHeroScene />
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
