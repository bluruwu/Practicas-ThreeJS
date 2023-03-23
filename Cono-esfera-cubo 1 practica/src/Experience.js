 /**
  * Hooks Reactjs: https://legacy.reactjs.org/docs/hooks-intro.html
  * React Three Fiber: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
  * Hooks de R3F: https://docs.pmnd.rs/react-three-fiber/api/hooks
  * React three drei: https://github.com/pmndrs/drei
  * Three.js: https://threejs.org/docs/
  * 
*/

import { Center, OrbitControls, PointerLockControls, PresentationControls } from "@react-three/drei";
import { useFrame, useThree} from "@react-three/fiber"
import { useRef } from "react";

export function Experience(){
    const boxRef = useRef()
    const circleRef = useRef()
    const coneRef= useRef()
   
    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 1 * delta;
        coneRef.current.rotation.z +=1* delta;
        circleRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
    })
    
    return <>
        <OrbitControls
            makeDefault
            enablePan={false}
            minDistance={5}
            maxDistance={10}
        />
        <ambientLight intensity={0.5}/>
        <directionalLight position={[10, 4, 13]} intensity={1.5} />
        <Center >
            <mesh ref={boxRef}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={"yellow"}/>
            </mesh>
            <mesh ref={circleRef} position-z = {-3} position-y={0} >
                <sphereGeometry args={[1, 32, 64]}/>
                <meshStandardMaterial color={"blue"}/>
            </mesh>
            <mesh ref={coneRef} position-z = {-6} >
                <coneGeometry args={[1,1,10]}/>
                <meshStandardMaterial color={"red"}/>
            </mesh>
            <mesh position-z = {-3} position-y={-1.2} rotation-x={- Math.PI *0.5} scale={10}>
                <planeGeometry/>
                <meshStandardMaterial color="rgb(210,143,83)"/>
            </mesh>
        </Center>
    </>
}