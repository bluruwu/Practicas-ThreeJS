import { useTexture } from "@react-three/drei";

export default function Covid() {
    const PATH = "/static/textures/covid/"
    const props = useTexture({
        map: PATH + "color.jpg",
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ambientOcclusion.jpg',
    })
    return (
        <mesh castShadow scale={0.05} rotation-y={Math.PI / 12}>
            <sphereGeometry args={[15,10,10]} />
            <meshStandardMaterial {...props}/>
        </mesh>
    )
}