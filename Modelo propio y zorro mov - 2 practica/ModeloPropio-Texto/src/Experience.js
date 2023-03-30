import {OrbitControls, Html } from '@react-three/drei'
import {Text} from '@react-three/drei'
import { Float } from '@react-three/drei'
import Elephant from './elephantobeliske'
export default function Experience()
{
    return <>
        <OrbitControls makeDefault/>
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Float speed={2}>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={0.5}
                color="salmon"
                position-y={3.5}
                maxWidth={8}
                textAlign="center"
            >
                Elephant and Obelisk
                - Gian Lorenzo Bernini (1667)
            </Text>
        </Float>

        <Elephant/>
        <mesh position-y={ -0.1 } rotation-x={ - Math.PI * 0.5 } scale={ 5 }>
            <planeGeometry />
            <meshStandardMaterial color = "white"/>
        </mesh>

    </>
}