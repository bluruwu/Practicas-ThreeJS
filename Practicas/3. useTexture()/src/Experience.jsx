import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Covid from './covid'

export default function Experience() {
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight position={[0, 2, -10]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Covid/>
    </>
}