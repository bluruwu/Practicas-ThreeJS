import { OrbitControls, useTexture} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useRef, useState } from 'react'
import { DoubleSide, LinearFilter, VideoTexture} from 'three'
import imagenUno from './images/first_image.jpg'
import imagenDos from './images/second_image.jpg'
export default function Experience() {
    // Video
    const video = document.getElementById('video')
    const texturamp4 = new VideoTexture(video)
    texturamp4.minFilter = LinearFilter
    texturamp4.magFilter = LinearFilter
    const onhandleSecondWall = (e) => {
        video.play()
    }
    //Imagen
    const [imagenPared, setimagenPared] = useState(true)
    const firstWall = useRef()
    const secondWall = useRef()
    const cambioTextura = useTexture(imagenDos) //useTexture es un hook, por lo que se crea afuera
    const imgOriginal = useTexture(imagenUno)
    const onhandleFirstWall = (e) => {
        if (imagenPared) {
            firstWall.current.material.map = cambioTextura
            setimagenPared(false);
        }else{ 
            firstWall.current.material.map = imgOriginal
            setimagenPared(true)
        }
    }
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow shadow-normalBias={ 0.04 } position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <mesh ref={firstWall} position-x={-3} scale={3} onPointerOver={onhandleFirstWall}>
            <planeGeometry/>
            <meshBasicMaterial map={imgOriginal} side={DoubleSide}/>
        </mesh>
        <mesh frustumCulled={false} ref={secondWall} position-y={3} scale={3} onClick={onhandleSecondWall}>
            <planeGeometry/>
            <meshBasicMaterial side={DoubleSide} map={texturamp4} color={0xEDE9DB}/>
        </mesh>
        <mesh position-y={ -1.5 } position-x={-1.6}rotation-x={ - Math.PI * 0.5 } scale={ 10}>
            <planeGeometry />
            <meshStandardMaterial color={0x1DB9E8}/>
        </mesh>
    </>
}