import { OrbitControls, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import { DirectionalLightHelper } from 'three'
import Door from './Door'
import Floor from './floor'

export default function Experience() {
    const directionalLighRef = useRef()

    useHelper(directionalLighRef, DirectionalLightHelper, 1)
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight ref={directionalLighRef} castShadow position={[0, 10, -6]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Door/>
        <Floor/>
    </>
}