"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Preload } from "@react-three/drei";
import { CrystalParticles } from "./CrystalParticles";
import { GradientText } from "@/components/ui/GradientText";
import * as THREE from "three";

interface LoadingScreenProps {
  onComplete: () => void;
  duration?: number;
}

const particleCount = 2800;

function ParticleCanvas({ progress }: { progress: number }) {
  return (
    <Canvas
      className="h-full w-full"
      gl={{
        antialias: true,
        alpha: true,
        precision: "highp",
        powerPreference: "high-performance",
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      dpr={[1, 2]}
      performance={{ min: 0.5, max: 1 }}
    >
      <PerspectiveCamera position={[0, 0, 8]} makeDefault fov={50} />

      {/* Lighting for particles */}
      <ambientLight intensity={0.4} color="#6D5EF9" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6D5EF9" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#64E6D9" />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      <CrystalParticles isAssembling={progress < 1} progress={progress} />

      <Environment preset="studio" />
      <Preload all />
    </Canvas>
  );
}

export function LoadingScreen({ onComplete, duration = 1.8 }: LoadingScreenProps) {
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const totalDuration = duration * 1000;

    const animationFrame = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / totalDuration, 1);

      setProgress(newProgress);

      // Show logo at 40% progress
      if (newProgress >= 0.4) {
        setShowLogo(true);
      }

      // Show tagline at 60% progress
      if (newProgress >= 0.6) {
        setShowTagline(true);
      }

      // Complete animation and fade out
      if (newProgress >= 1) {
        clearInterval(animationFrame);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 400);
        }, 200);
      }
    }, 16);

    return () => clearInterval(animationFrame);
  }, [duration, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-black"
        >
          {/* Particle canvas background */}
          <div className="absolute inset-0">
            <ParticleCanvas progress={progress} />
          </div>

          {/* Logo and text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={showLogo ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="text-center">
                <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
                  <GradientText>Lumora</GradientText>
                </h1>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showTagline ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-lg font-light tracking-wide text-white/80 sm:text-xl md:text-2xl">
                Humanized AI Websites
                <br />
                for Every Business
              </p>
            </motion.div>
          </div>

          {/* Progress indicator (subtle) */}
          <motion.div
            className="absolute bottom-12 h-1 w-32 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <motion.div
              className="h-full w-full origin-left bg-linear-to-r from-[#6D5EF9] to-[#64E6D9]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress }}
              transition={{ duration: 0.05, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
