import React from "react";
import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ModelApple_pink } from "../../public/ModelApple_pink";

function ThreeScene() {
  return (
    <>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 2]} />
      <pointLight color={0xffffff} position={[0, 0, 10]} />
      <Float
        speed={5}
        rotationIntensity={3.0}
        position={[0, 0.2, 0]}
        floatIntensity={5}
      >
        <ModelApple_pink rotation={[0.4, 1, -0.1]} />
      </Float>
    </>
  );
}

export const Model_Pink = () => {
  return (
    <div className="xl:h-24 xl:w-24 sm:h-16 sm:w-16 h-10 w-10">
      <Canvas flat>
        <ThreeScene />
      </Canvas>
    </div>
  );
};
