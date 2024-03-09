import { useAnimations, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { type BeeModelParams } from "../../types";
gsap.registerPlugin(ScrollTrigger);

const BeeModel = ({ position, rotation }: BeeModelParams) => {
    const { scene, animations } = useGLTF("models/scene.gltf");
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        if (actions?.hover !== null) {
            actions?.hover.play();
        }
    });

    useEffect(() => {
        ScrollTrigger.refresh();
    }, []);

    return (
        <mesh rotation={rotation} position={position} scale={1}>
            <primitive object={scene} />
        </mesh>
    );
};

export default BeeModel;
