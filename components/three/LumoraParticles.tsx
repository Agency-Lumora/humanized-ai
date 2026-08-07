/*"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Crystal({
  position,
  rotation,
  scale,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.x += 0.001 * scale;
    ref.current.rotation.y += 0.0018 * scale;
    ref.current.rotation.z += 0.0008 * scale;

    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.08;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />

      <meshPhysicalMaterial
        color="#7C5CFF"
        transmission={1}
        roughness={0.02}
        metalness={0}
        thickness={3}
        ior={2}
        clearcoat={1}
        clearcoatRoughness={0}
        reflectivity={1}
        envMapIntensity={3}
        transparent
        opacity={0.96}
      />
    </mesh>
  );
}

export default function LumoraParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 130 }, () => ({
      position: [
        THREE.MathUtils.randFloatSpread(18),
        THREE.MathUtils.randFloatSpread(12),
        THREE.MathUtils.randFloatSpread(15),
      ] as [number, number, number],

      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],

      scale: THREE.MathUtils.randFloat(0.03, 0.22),
    }));
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <Crystal
          key={i}
          position={p.position}
          rotation={p.rotation}
          scale={p.scale}
        />
      ))}

      {particles.slice(0, 25).map((p, i) => (
        <mesh key={`glow-${i}`} position={p.position} scale={p.scale * 2.5}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshBasicMaterial color="#8B5CF6" transparent opacity={0.05} />
        </mesh>
      ))}
    </>
  );
} */

"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Crystal({
  position,
  scale,
}: {
  position: [number, number, number];
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  const speed = useMemo(() => Math.random() * 0.5 + 0.2, []);
  const rotX = useMemo(() => Math.random() * 0.02, []);
  const rotY = useMemo(() => Math.random() * 0.02, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.x += rotX;
    ref.current.rotation.y += rotY;

    ref.current.position.y =
      position[1] + Math.sin(clock.elapsedTime * speed + position[0]) * 0.18;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {/* Crystal */}
      <octahedronGeometry args={[1, 0]} />

      <meshPhysicalMaterial
        color="#8B5CF6"
        transmission={1}
        thickness={1.8}
        roughness={0}
        metalness={0}
        ior={1.45}
        clearcoat={1}
        clearcoatRoughness={0}
        transparent
        opacity={0.95}
        reflectivity={1}
      />
    </mesh>
  );
}

export default function LumoraParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 120 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 3,
      ] as [number, number, number],
      scale: Math.random() * 0.12 + 0.05,
    }));
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <Crystal
          key={i}
          position={p.position}
          scale={p.scale}
        />
      ))}
    </>
  );
}