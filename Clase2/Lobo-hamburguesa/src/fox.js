import { useGLTF } from "@react-three/drei";

export default function Fox(){
    const {nodes, materials} = useGLTF("/static/Fox.glb")
    console.log(nodes);
    return (
        <group scale={0.05} position-z={-4}>
          <primitive object={nodes._rootJoint} />
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
