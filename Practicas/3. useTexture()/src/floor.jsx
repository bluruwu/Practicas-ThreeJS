export default function Floor(){
    return(
        <mesh receiveShadow position-y={-0.8} rotation-x={ -Math.PI * 0.5}>
            <planeGeometry args={[10,10]}/>
            <meshStandardMaterial color="rgb(84,106,131)"/>
        </mesh>
    )
}