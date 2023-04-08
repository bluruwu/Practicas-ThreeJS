import { OrbitControls, useHelper} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Covid from './covid'
import Floor from './floor'
import { useRef } from 'react'
import { HemisphereLightHelper, PointLightHelper, SpotLightHelper} from 'three'
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
export default function Experience() {
    // const rectAreaLightRef=useRef()
    // useHelper(rectAreaLightRef, RectAreaLightHelper,1)
    // const spotLightRef = useRef()
    // useHelper(spotLightRef, SpotLightHelper,1)
    const pointLightRef=useRef()
    useHelper(pointLightRef,PointLightHelper,1)
    // const hemisphereLightRef=useRef()
    // useHelper(hemisphereLightRef, HemisphereLightHelper,1)
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        {/* Estas luces NO pueden dar sombras */}
        {/* <hemisphereLight ref={hemisphereLightRef} args={[0xffffff, 0x0000ff, 1]} position={[5,5,0]}/> */}
        {/* <rectAreaLight ref={rectAreaLightRef} args={["#e32b2b", 3, 7,6]} position={[-0.1,1,3]}/> */}
        {/* Estas luces pueden dar sombras */}
        <pointLight castShadow ref={pointLightRef} args={["#e32b2b", 1, 100]} position={[5,6,1]} intensity={1.5}/>
        {/* <spotLight castShadow ref={spotLightRef} args={["#e32b2b"]} position={[5,4,5]}/>   */}
        <ambientLight intensity={0.5} />
        <Covid/>
        <Floor/>
    </>
}