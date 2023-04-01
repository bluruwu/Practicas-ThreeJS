import { useTexture } from "@react-three/drei";

export default function Covid() {
    const PATH = "/static/textures/covid/"
    const props = useTexture({
        map: PATH + "color.jpg",
        displacementMap: PATH + 'displacement.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ambientOcclusion.jpg',
    })
    return (
        <mesh rotation-y={Math.PI / 12}>
            <sphereGeometry args={[15,60,40]} />
            <meshStandardMaterial {...props}/>
        </mesh>
    )
}