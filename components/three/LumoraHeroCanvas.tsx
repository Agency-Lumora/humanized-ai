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

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import LumoraParticles from "./LumoraParticles";

export default function LumoraHeroCanvas() {
  // Defer mounting the WebGL canvas (and its Environment HDRI network
  // fetch) until the browser is idle / done with the initial load, so it
  // doesn't compete with the intro's canvas and script execution on a
  // cold cache first visit.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Simplified: just wait a short moment to let the intro finish
    const timer = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {!ready && (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-50 to-cyan-50">
          <div className="h-24 w-24 animate-pulse rounded-full bg-gradient-to-r from-[#6D5EF9] to-[#64E6D9] opacity-50" />
        </div>
      )}
      {ready && (
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

          {/* Procedurally generated environment map (rendered locally, no
              network fetch) so the crystals' glass transmission has
              something to refract/reflect. */}
          <Environment resolution={256}>
            <Lightformer
              intensity={4}
              color="#ffffff"
              position={[0, 4, 4]}
              scale={[8, 8, 1]}
              form="rect"
            />
            <Lightformer
              intensity={3}
              color="#7C5CFF"
              position={[-4, -2, 3]}
              scale={[6, 6, 1]}
              form="rect"
            />
            <Lightformer
              intensity={3}
              color="#64E6D9"
              position={[4, -2, -3]}
              scale={[6, 6, 1]}
              form="rect"
            />
          </Environment>

          <LumoraParticles />
        </Canvas>
      )}
    </div>
  );
}