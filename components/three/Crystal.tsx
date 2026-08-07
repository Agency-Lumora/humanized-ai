"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import * as THREE from "three";

interface CrystalProps {
  mouseX?: number;
  mouseY?: number;
}

export function Crystal({ mouseX = 0, mouseY = 0 }: CrystalProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollY } = useScroll();

  // Create icosahedron geometry for crystal-like shape
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.5, 4);
    geo.computeVertexNormals();
    return geo;
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (groupRef.current) {
        groupRef.current.rotation.z += latest * 0.001;
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  useFrame(() => {
    if (!groupRef.current || !meshRef.current) return;

    // Floating animation
    groupRef.current.position.y = Math.sin(Date.now() * 0.0006) * 0.3;

    // Mouse interaction
    groupRef.current.rotation.x +=
      (mouseY * 0.05 - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y +=
      (mouseX * 0.05 - groupRef.current.rotation.y) * 0.05;

    // Gentle rotation
    groupRef.current.rotation.z += 0.0003;

    // Scale breathing effect
    const scale = 1 + Math.sin(Date.now() * 0.0004) * 0.03;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          /*color="#6D5EF9"
          metalness={0.05}
          roughness={0.08}
          transmission={1}
          thickness={2.5}
          ior={1.6}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
          envMapIntensity={2}*/
          color="#111111"
          metalness={0.9}
          roughness={0.03}
          transmission={0}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={2.5}
        />
      </mesh>

      {/* Outer glow sphere for bloom effect */}
      <mesh scale={1.2}>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshStandardMaterial
          //color={new THREE.Color(0.42, 0.36, 0.98)}
          color="6D5EF9"
          emissive={new THREE.Color(0.27, 0.22, 0.62)}
          emissiveIntensity={0.25}
          transparent
          //opacity={0.1}
          opacity={0.06}
          wireframe={false}
        />
      </mesh>

      {/* Inner wireframe for luxury detail */}
      <mesh>
        <icosahedronGeometry args={[1.45, 4]} />
        <meshStandardMaterial
          //color={new THREE.Color(0.42, 0.36, 0.98)}
          color= "#1f1f1f"
          wireframe
          //emissive={new THREE.Color(0.42, 0.36, 0.98)}
          emissive="#6D5EF9"
          //emissiveIntensity={0.4}
          emissiveIntensity={0.12}
          transparent
          //opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
