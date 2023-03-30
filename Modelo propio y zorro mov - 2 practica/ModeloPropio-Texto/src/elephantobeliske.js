import { useGLTF } from "@react-three/drei";

export default function Elephant(){
    const {nodes,materials} = useGLTF('/static/elephant.glb')
    return (
        <group scale={0.07} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["Material.001"]}
        />
      </group>
    );
}
useGLTF.preload("/static/elephant.glb")