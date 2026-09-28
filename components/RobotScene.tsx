"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Grid,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function ResearchRobot() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.12;

    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.035;
  });

  return (
    <group ref={group} position={[0, -1.1, 0]}>
      {/* Main torso */}
      <mesh position={[0, 1.75, 0]}>
        <boxGeometry args={[1.55, 1.9, .75]} />
        <meshStandardMaterial
          color="#101c31"
          metalness={0.85}
          roughness={0.22}
        />
      </mesh>

      {/* Chest core */}
      <mesh position={[0, 1.78, .405]}>
        <boxGeometry args={[.72, .75, .04]} />
        <meshStandardMaterial
          color="#1976d2"
          emissive="#1976d2"
          emissiveIntensity={1.4}
          metalness={0.5}
        />
      </mesh>

      {/* Head */}
      <mesh position={[0, 3.05, 0]}>
        <boxGeometry args={[1.25, .9, .85]} />
        <meshStandardMaterial
          color="#17253c"
          metalness={0.9}
          roughness={0.18}
        />
      </mesh>

      {/* Sensor visor */}
      <mesh position={[0, 3.08, .44]}>
        <boxGeometry args={[.88, .27, .035]} />
        <meshStandardMaterial
          color="#07152f"
          emissive="#1976d2"
          emissiveIntensity={1.8}
        />
      </mesh>

      {/* Head sensor */}
      <mesh position={[0, 3.5, 0]}>
        <cylinderGeometry args={[.12, .12, .18, 24]} />
        <meshStandardMaterial
          color="#d4af37"
          emissive="#d4af37"
          emissiveIntensity={.5}
          metalness={.9}
        />
      </mesh>

      {/* Left arm */}
      <mesh position={[-1.05, 1.55, 0]}>
        <boxGeometry args={[.35, 1.65, .42]} />
        <meshStandardMaterial
          color="#14233b"
          metalness={.9}
          roughness={.2}
        />
      </mesh>

      {/* Right arm */}
      <mesh position={[1.05, 1.55, 0]}>
        <boxGeometry args={[.35, 1.65, .42]} />
        <meshStandardMaterial
          color="#14233b"
          metalness={.9}
          roughness={.2}
        />
      </mesh>

      {/* Shoulder joints */}
      <mesh position={[-1.05, 2.35, 0]}>
        <sphereGeometry args={[.24, 24, 24]} />
        <meshStandardMaterial
          color="#f47b20"
          metalness={.8}
          roughness={.2}
        />
      </mesh>

      <mesh position={[1.05, 2.35, 0]}>
        <sphereGeometry args={[.24, 24, 24]} />
        <meshStandardMaterial
          color="#f47b20"
          metalness={.8}
          roughness={.2}
        />
      </mesh>

      {/* Left leg */}
      <mesh position={[-.45, .25, 0]}>
        <boxGeometry args={[.48, 1.45, .52]} />
        <meshStandardMaterial
          color="#111e33"
          metalness={.9}
          roughness={.23}
        />
      </mesh>

      {/* Right leg */}
      <mesh position={[.45, .25, 0]}>
        <boxGeometry args={[.48, 1.45, .52]} />
        <meshStandardMaterial
          color="#111e33"
          metalness={.9}
          roughness={.23}
        />
      </mesh>

      {/* Feet */}
      <mesh position={[-.45, -.52, .13]}>
        <boxGeometry args={[.7, .25, 1]} />
        <meshStandardMaterial
          color="#0a1425"
          metalness={.95}
          roughness={.2}
        />
      </mesh>

      <mesh position={[.45, -.52, .13]}>
        <boxGeometry args={[.7, .25, 1]} />
        <meshStandardMaterial
          color="#0a1425"
          metalness={.95}
          roughness={.2}
        />
      </mesh>

      {/* AI halo */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 1.9, 0]}>
        <torusGeometry args={[1.9, .015, 16, 120]} />
        <meshBasicMaterial
          color="#1976d2"
          transparent
          opacity={.65}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2.1, 8]} />

      <ambientLight intensity={1.1} />

      <directionalLight
        position={[4, 7, 5]}
        intensity={4}
        color="#ffffff"
      />

      <pointLight
        position={[3, 3, 3]}
        intensity={8}
        color="#1976d2"
      />

      <pointLight
        position={[-3, 2, 2]}
        intensity={5}
        color="#f47b20"
      />

      <ResearchRobot />

      <Grid
        position={[0, -.68, 0]}
        args={[12, 12]}
        cellSize={.45}
        cellThickness={.5}
        cellColor="#123c8c"
        sectionSize={2}
        sectionThickness={1}
        sectionColor="#1976d2"
        fadeDistance={10}
        fadeStrength={1}
        infiniteGrid
      />

      <Sparkles
        count={80}
        scale={[7, 5, 5]}
        size={1.5}
        speed={.25}
        color="#8ecfff"
      />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 1.7}
      />
    </>
  );
}

export default function RobotScene() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 560,
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <Float
          speed={1}
          rotationIntensity={0.08}
          floatIntensity={0.25}
        >
          <Scene />
        </Float>
      </Canvas>
    </div>
  );
}
