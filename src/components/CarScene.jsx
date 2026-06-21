import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, Float } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useScroll, useTransform } from 'framer-motion';

function AnimatedCar() {
  // If you don't have a car.glb yet, this will fail. Comment out the useGLTF line and return a <mesh> cube until you download one.
  const { scene } = useGLTF('/car.glb'); 
  const { scrollYProgress } = useScroll();

  const carZ = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const carRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, Math.PI / 4, Math.PI / 2]);

  return (
    <motion.group position-z={carZ} rotation-y={carRotateY} position={[0, -1, 0]}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        <primitive object={scene} scale={1.5} />
        <ContactShadows position={[0, 0, 0]} opacity={0.8} scale={10} blur={2} />
      </Float>
    </motion.group>
  );
}

export default function CarScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} color="#FF007F" intensity={2} />
        <spotLight position={[-10, 10, -10]} color="#00E5FF" intensity={2} />
        <Environment preset="night" />
        {/* Uncomment AnimatedCar once you have your car.glb in the public folder */}
        {/* <AnimatedCar /> */}
      </Canvas>
    </div>
  );
}