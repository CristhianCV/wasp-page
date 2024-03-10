import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo, useRef, useState } from "react";
import { Euler, Vector3 } from "three";
import leaf from "../../assets/leaf.png";
import pinkFlower from "../../assets/pink-flower.png";
import redFlower from "../../assets/red-flower.png";
import ModelContainer from "../model-container";
gsap.registerPlugin(ScrollTrigger);

const Body = () => {
    const containerRef = useRef(null);
    const modelRef = useRef(null);

    const [position] = useState(new Vector3(0, 0, 0));
    const [rotation, setRotation] = useState(new Euler(0, -1.5, 0));

    const points = useMemo(() => {
        const points = [];
        const baseRotation = -1.5;

        points.push({
            rotationStart: baseRotation,
            rotationDiff: 0,
        });

        points.push({
            rotationStart: points[0].rotationStart + points[0].rotationDiff,
            rotationDiff: 0.6,
        });

        points.push({
            rotationStart: points[1].rotationStart + points[1].rotationDiff,
            rotationDiff: 1.9,
        });

        points.push({
            rotationStart: points[2].rotationStart + points[2].rotationDiff,
            rotationDiff: -0.4,
        });

        return points;
    }, []);

    const updateRotation = (index: number, progress: number) => {
        const diffRotation = points[index].rotationStart + progress * points[index].rotationDiff;
        setRotation(new Euler(0, diffRotation, 0));
    };

    useGSAP(
        () => {
            const numbers: Element[] = gsap.utils.toArray(".section-number");

            if (numbers.length > 0) {
                for (let index = 0; index < numbers.length; index++) {
                    const element = numbers[index];
                    gsap.from(element, {
                        scrollTrigger: {
                            start: "top 70%",
                            end: "top 30%",
                            trigger: element,
                            scrub: true,
                        },
                        opacity: 0,
                        ease: "none",
                    });
                }
            }

            gsap.fromTo(
                modelRef.current,
                {
                    xPercent: 0,
                    yPercent: -5,
                },
                {
                    scrollTrigger: {
                        start: "50% 50%",
                        end: "90% bottom",
                        trigger: ".introduction",
                        endTrigger: ".section-01",
                        scrub: true,
                        onUpdate: (self) => {
                            updateRotation(1, self.progress);
                        },
                    },
                    xPercent: -17,
                    yPercent: 0,
                    ease: "power1.inOut",
                }
            );

            gsap.fromTo(
                modelRef.current,
                {
                    xPercent: -17,
                },
                {
                    scrollTrigger: {
                        start: "10% bottom",
                        end: "90% bottom",
                        trigger: ".section-02",
                        scrub: true,
                        onUpdate: (self) => {
                            updateRotation(2, self.progress);
                        },
                    },
                    xPercent: 25,
                    ease: "power1.inOut",
                }
            );

            gsap.fromTo(
                modelRef.current,
                {
                    xPercent: 25,
                },
                {
                    scrollTrigger: {
                        start: "10% bottom",
                        end: "100% bottom",
                        trigger: ".section-03",
                        scrub: true,
                        onUpdate: (self) => {
                            updateRotation(3, self.progress);
                        },
                    },
                    xPercent: -20,
                    ease: "power1.inOut",
                }
            );

            gsap.set(modelRef.current, { xPercent: 0 });
        },
        { scope: containerRef }
    );

    return (
        <div className="relative w-full pt-20 text-dark-green z-[2]" ref={containerRef}>
            <ModelContainer position={position} rotation={rotation} ref={modelRef}></ModelContainer>
            <h1 className="relative w-full font-bold text-center text-yellow text-[7rem] z-20 leading-none select-none sm:text-[10rem] md:text-[13rem] lg:text-[17rem]">
                Wasp
            </h1>
            <div className="introduction w-full flex align-start justify-between mt-10 pb-48">
                <div className="relative w-1/2 max-w-[35rem] flex items-center after:absolute after:w-full after:h-full after:content-[''] after:bg-yellow/[0.6] after:blur-3xl after:rounded-full">
                    <img className="w-full -translate-x-[4%] z-[3]" src={pinkFlower} alt="Pink flower" />
                </div>
                <div className="w-2/5 flex flex-col justify-center px-2 md:w-1/4 lg:text-lg">
                    <span>
                        We all know that wasps can sting repeadtedly, but here are some facts about wasps you may not
                        knowz
                    </span>
                    <div className="mt-7 font-semibold">
                        <span className="pr-3">
                            <FontAwesomeIcon icon={faComputerMouse} />
                        </span>
                        <span>Learn more</span>
                    </div>
                </div>
            </div>
            <div className="section-01 w-full flex pb-48">
                <span className="section-number w-1/2 px-2 text-9xl leading-none text-yellow font-bold lg:text-[17rem]">
                    01
                </span>
                <div className="w-1/2 flex flex-col gap-8 mt-10 px-2 lg:mt-16">
                    <span className="w-full text-xl font-bold lg:w-4/5 lg:text-5xl">
                        Wasp venom contains a pheromone that causes other wasps to become more aggressive.
                    </span>
                    <span className="w-full lg:w-3/5 lg:text-lg">
                        The sting of a wasp should wear off within 24 hours, but for a small minority of people, the
                        venom in their sting causes anaphylactic shock which can be fatal.
                    </span>
                </div>
            </div>
            <div className="section-02 relative w-full flex mb-24 text-yellow bg-[url('leaves-background.jpg')] z-0">
                <div className="w-1/2 flex flex-col gap-8 px-2 z-[2]">
                    <span className="section-number text-9xl leading-none text-yellow font-semibold lg:text-[17rem]">
                        02
                    </span>
                    <span className="w-full text-xl font-bold lg:text-5xl">
                        Most wasps are capable of stinging numerous times
                    </span>
                    <span className="w-full pb-48 lg:w-4/5 lg:text-lg">
                        Unlike many bee species, most wasps are capable of stinging numerous times because their stinger
                        is not barbed.
                    </span>
                </div>
                <div className="w-1/2 flex items-end justify-end translate-y-28 z-[2]">
                    <img className="w-full max-w-[22rem]" src={leaf} alt="Leaf" />
                </div>
                <div className="absolute top-0 w-full h-full backdrop-blur-2xl z-1"></div>
            </div>
            <div className="section-03 w-full flex pb-48">
                <div className="w-1/2">
                    <img className="w-full max-w-[32rem] -translate-x-[15%]" src={redFlower} alt="Red flower" />
                </div>
                <div className="w-1/2 flex flex-col gap-8 px-2">
                    <span className="section-number text-9xl leading-none text-yellow font-semibold lg:text-[17rem]">
                        03
                    </span>
                    <span className="w-full text-xl font-bold lg:w-4/5 lg:text-5xl">
                        Though wasp stings hurt, symptoms normally improve after a few hours
                    </span>
                    <span className="w-full lg:w-3/5 lg:text-lg">
                        Though wasp sting hurt, symportms normally improve after a few hours but you may still feel
                        irritation and swelling for a few days.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Body;
