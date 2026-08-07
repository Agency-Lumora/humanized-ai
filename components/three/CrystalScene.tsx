"use client";

import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Preload } from "@react-three/drei";
import { Crystal } from "./Crystal";
import * as THREE from "three";

interface CrystalSceneProps {
  className?: string;
}

function Lights() {
  const lightRef = useRef<THREE.DirectionalLight>(null);

  return (
    <>
      {/* Main directional light */}
      <directionalLight
        ref={lightRef}
        position={[5, 8, 7]}
        intensity={2.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Fill light */}
      <directionalLight position={[-5, 6, -8]} intensity={0.8} />

      {/* Rim light */}
      <directionalLight position={[0, 5, -10]} intensity={1.2} color="#64E6D9" />

      {/* Ambient light with subtle purple tint */}
      <ambientLight intensity={0.6} color="#6D5EF9" />

      {/* Point light for bloom enhancement */}
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#6D5EF9" distance={50} />
      <pointLight position={[8, 8, 8]} intensity={0.4} color="#64E6D9" distance={40} />
    </>
  );
}

function CrystalContent() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <PerspectiveCamera position={[0, 0, 4]} makeDefault fov={45} />
      <Lights />
      <Crystal mouseX={mousePos.x} mouseY={mousePos.y} />
      <Environment preset="studio" />
      <Preload all />
    </>
  );
}

export function CrystalScene({ className = "" }: CrystalSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className={`relative h-full w-full ${className}`}>
      <Canvas
        ref={canvasRef}
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
        <CrystalContent />
      </Canvas>
    </div>
  );
}

export default CrystalScene;
