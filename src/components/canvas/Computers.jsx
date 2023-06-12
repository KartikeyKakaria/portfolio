import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import Stars from './Stars'

const Computers = ({ isMobile }) => {
  const computer = useGLTF(
    isMobile ? "./planet/scene.gltf" : "./desktop_pc/scene.gltf"
  );
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 15, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        scale={isMobile ? 0.5 : 0.6}
        position={[0, -3.25, -1.5]}
        object={computer.scene}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:630px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaqueryChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaqueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaqueryChange);
    };
  });
  if(isMobile) return (
    <div className="w-[80%] h-[50%] relative mt-[310px] w-max-[100px] h-max-[120px] p-4 rounded-2xl">
      <img src="/lander.PNG" alt="lander image" className="absolute inset-12 rounded-2xl object-fit" />
    </div>
  )
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
