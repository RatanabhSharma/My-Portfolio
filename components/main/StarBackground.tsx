"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(2000), { radius: 1.0 })
  );

  useFrame((state, delta) => {
    if (document.hidden) return; // Pause animation when the tab is not visible
    ref.current.rotation.x -= delta / 5;
    ref.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={2} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-screen fixed inset-0 z-[-1] pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
