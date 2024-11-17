import "./App.css"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'

const App = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <Sparkles count={50} size={10} position={[0, 0, 0]} scale={[4, 1.5, 4]} speed={0.3} />
      <color attach="background" args={["#100D08"]} />
      <mesh>
      <boxGeometry />
      <meshNormalMaterial />
      </mesh>
      <OrbitControls />
    </Canvas>
    )
}

export default App