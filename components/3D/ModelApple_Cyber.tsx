import React from "react";
import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ModelApple_cyber } from "../../public/ModelApple_cyber";

function ThreeScene() {
  return (
    <>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 2]} />
      <Float
        speed={2}
        rotationIntensity={5.0}
        position={[0, 0.4, 0]}
        floatIntensity={5}
      >
        <ModelApple_cyber rotation={[0.6, 1, 0.1]} />
      </Float>
    </>
  );
}

export const ModelApple_Cyber = () => {
  return (
    <div className="xl:h-24 xl:w-24 sm:h-16 sm:w-16 h-10 w-10">
      <Canvas>
        <ThreeScene />
      </Canvas>
    </div>
  );
};
