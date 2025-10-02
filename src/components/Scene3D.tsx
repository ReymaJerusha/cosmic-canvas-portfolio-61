import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#00ffff" intensity={1} />
        <pointLight position={[10, 10, 5]} color="#a855f7" intensity={1} />
        
        <Sphere args={[1, 100, 100]} scale={2}>
          <MeshDistortMaterial
            color="#00ffff"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
