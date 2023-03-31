import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Fox(){
  const {nodes, materials, animations, scene} = useGLTF("/static/Fox.glb")
  const [isLoaded, setIsLoaded] = useState(false)
  const movement = useAnimations(animations, scene)

  useEffect(() =>{
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      const walking = movement.actions.Run
      walking.play()
    }
  }, [isLoaded])

  return (
    <group scale={0.05} position-z={-1}>
      {isLoaded && <primitive object={nodes._rootJoint}/>}
      <skinnedMesh
        name="fox"
        geometry={nodes.fox.geometry}
        material={materials.fox_material}
        skeleton={nodes.fox.skeleton}
      />
    </group>
  );
}
useGLTF.preload("/static/Fox.glb");