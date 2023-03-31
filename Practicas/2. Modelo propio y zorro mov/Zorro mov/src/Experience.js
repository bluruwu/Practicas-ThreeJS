import { OrbitControls } from '@react-three/drei'
import Fox from './fox'
export default function Experience()
{
    return <>
        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Fox/>
        <mesh position-y={ 0 } rotation-x={ - Math.PI * 0.5 } scale={ 20}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>
}