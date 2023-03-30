import { useThree, extend } from '@react-three/fiber'
import {OrbitControls, Html } from '@react-three/drei'
import {useRef} from 'react'
import {Text} from '@react-three/drei'
import { Float } from '@react-three/drei'
import { MeshReflectorMaterial } from '@react-three/drei'
export default function Experience()
{
    const sphereRef = useRef()
    const cubeRef = useRef();
    const { camera, gl } = useThree()

    return <>
        <OrbitControls makeDefault/>
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh ref={sphereRef} position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html 
                Center
                distanceFactor={8}
                occlude={[sphereRef, cubeRef]}
                wrapperClass='label'
                position={[1,1,0]}>
                <h1>
                That's a sphere
                </h1>
            </Html>
        </mesh>
        
        <Float>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={1}
                color="salmon"
                position-y={2.5}
                maxWidth={8}
                textAlign="center"
            >
                I LOVE PROYECTO INTEGRADOR I
            </Text>
        </Float>

        <mesh position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <MeshReflectorMaterial
                resolution={ 512 }
                blur={ [ 1000, 1000 ] }
                mixBlur={ 2 }
                mirror={ 0.5 }
                color="red"
            />
        </mesh>

    </>
}