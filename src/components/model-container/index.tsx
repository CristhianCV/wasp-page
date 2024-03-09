import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, forwardRef } from "react";
import { type BeeModelParams } from "../../types";
import BeeModel from "../bee-model";

const ModelContainer = forwardRef<HTMLDivElement, BeeModelParams>(function ModelContainer(
    { position, rotation }: BeeModelParams,
    ref
) {
    return (
        <div className="fixed w-full h-screen top-0 left-0 right-0 flex items-center justify-center z-10" ref={ref}>
            <div className="w-1/2 max-w-[32rem] aspect-square">
                <Suspense fallback={null}>
                    <Canvas>
                        <ambientLight intensity={2.0} />
                        {/* <OrthographicCamera makeDefault zoom={200} position={[0, 0, 200]} /> */}
                        <PerspectiveCamera makeDefault zoom={1} position={[0, 1, 4]} />
                        <BeeModel position={position} rotation={rotation}></BeeModel>
                    </Canvas>
                </Suspense>
            </div>
        </div>
    );
});

export default ModelContainer;
