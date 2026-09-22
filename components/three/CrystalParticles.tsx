"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CrystalParticlesProps {
  isAssembling: boolean;
  progress: number; // 0 to 1
}

export function CrystalParticles({ isAssembling, progress }: CrystalParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  // Reduce particle count on mobile for better performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? 900 : 1800;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();

    // Initial random positions (scattered around)
    const positions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);

    // Generate crystal-like icosahedron positions
    const icosahedronGeo = new THREE.IcosahedronGeometry(1.5, 3);
    const icosaPositions = icosahedronGeo.attributes.position.array;

    for (let i = 0; i < particleCount; i++) {
      // Target positions: distributed on crystal surface
      const idx = (i % (icosaPositions.length / 3)) * 3;
      targetPositions[i * 3] = (icosaPositions[idx] || 0) * (0.8 + Math.random() * 0.4);
      targetPositions[i * 3 + 1] = (icosaPositions[idx + 1] || 0) * (0.8 + Math.random() * 0.4);
      targetPositions[i * 3 + 2] = (icosaPositions[idx + 2] || 0) * (0.8 + Math.random() * 0.4);

      // Initial scattered positions
      const angle = Math.random() * Math.PI * 2;
      const radius = 4 + Math.random() * 6;
      const height = (Math.random() - 0.5) * 10;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("targetPosition", new THREE.BufferAttribute(targetPositions, 3));

    // Colors: Lumora's powder blue, pale blue, cream, and taupe palette
    const colors = new Float32Array(particleCount * 3);
    const palette = ["#AFC4CE", "#DCE7EA", "#F4EFE7", "#806C5D"];
    for (let i = 0; i < particleCount; i++) {
      const color = new THREE.Color(palette[Math.floor(Math.random() * palette.length)]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    return geo;
  }, []);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.08,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 1,
    
    });
  }, []);

  useFrame(() => {
    if (!pointsRef.current || !geometry) return;

    const positions = geometry.attributes.position.array as Float32Array;
    const targetPositions = geometry.attributes.targetPosition.array as Float32Array;

    // Interpolate positions based on assembly progress
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] += (targetPositions[idx] - positions[idx]) * progress * 0.08;
      positions[idx + 1] += (targetPositions[idx + 1] - positions[idx + 1]) * progress * 0.08;
      positions[idx + 2] += (targetPositions[idx + 2] - positions[idx + 2]) * progress * 0.08;
    }

    geometry.attributes.position.needsUpdate = true;

    // Rotate particles as they assemble
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0004;
      pointsRef.current.rotation.y += 0.0006;
      pointsRef.current.rotation.z += 0.0002;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}
