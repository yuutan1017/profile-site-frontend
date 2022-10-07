import React from "react";
import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ModelApple_blue } from "../../public/ModelApple_blue";

function ThreeScene() {
  return (
    <>
      <ambientLight />
      <pointLight position={[5, 15, 15]} intensity={1} />
      <pointLight position={[-3, -10, 2]} />
      <pointLight color={0xffffff} position={[0, 10, 0]} />
      <Float
        speed={3}
        rotationIntensity={2.7}
        position={[0, 0.7, 0]}
        floatIntensity={5}
      >
        <ModelApple_blue rotation={[0.9, 1, 0.1]}/>
      </Float>
    </>
  );
}

export const ModelApple_Blue = () => {
  return (
    <div className="xl:h-24 xl:w-24 sm:h-16 sm:w-16 h-10 w-10">
      <Canvas flat>
        <ThreeScene />
      </Canvas>
    </div>
  );
};
