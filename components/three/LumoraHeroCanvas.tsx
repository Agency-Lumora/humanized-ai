/*"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import  LumoraParticles  from "./LumoraParticles";

export default function LumoraHeroCanvas() {
  return (
    <Canvas
    camera={{ position: [0, 0, 10], fov: 40, }}
>
    <ambientLight intensity={1.3} />

    <directionalLight
        position={[5,5,5]}
        intensity={2}
    />

    <pointLight
        position={[-5,5,5]}
        intensity={2}
        color="#7C5CFF"
    />

    <LumoraParticles />
</Canvas>
  );
} */ 

"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import LumoraParticles from "./LumoraParticles";

export default function LumoraHeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <pointLight
          position={[-5, 5, 5]}
          intensity={5}
          color="#8B5CF6"
        />

        <pointLight
          position={[5, -4, 5]}
          intensity={3}
          color="#64E6D9"
        />

        <Environment preset="city" />

        <LumoraParticles />
      </Canvas>
    </div>
  );
}