import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Model from './model'
import Fox from './fox'
export default function Experience()
{
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Model/>
        <Fox/>
        <mesh position-y={ 0 } rotation-x={ - Math.PI * 0.5 } scale={ 20}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>
}