'use client'
import { useState } from "react";
import { UserSectionSelection } from "../../../../../../../types";
import Benefits from "./Benefits";


import Tutorial from "./Tutorial";
import DoughnutChart from "./Analysis/DoughnutChart";
import LineChart from "./Accuracy/LineChat";
import TensorControl from "../TensorControl";
import { BsFillCameraVideoFill, BsFillLightningChargeFill, BsStars } from "react-icons/bs";
import { TbTargetArrow, TbVideo } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import { LuSettings2 } from "react-icons/lu";
import AudioControls from "./AudioControls";

export default function UserSection(props: any) {
    const [userSelection, setUserSelection] = useState<UserSectionSelection>({ active: "benefits" })
    // props?.setShowTutorial(false)


    const options = [
        {
            name: "benefits",
            class: "benefits",
            icon: <BsStars />
        },
        {
            name: "tutorial",
            class: "tutorial",
            icon: <BsFillCameraVideoFill />
        },
        {
            name: "accuracy",
            class: "accuracy",
            icon: <TbTargetArrow />
        },
        {
            name: "analysis",
            class: "analysis",
            icon: <VscGraphLine />
        },
        {
            name: "audio control",
            class: "audio",
            icon: <LuSettings2 />
        },

    ]

    return (
        <>
            {/* onClick={() => setUserSelection({ ...userSelection, active: "benefits" })} */}

            <div
                className="w-full xl:w-3/4 flex row overflow-x-auto justify-between">

                {options?.map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => setUserSelection({ ...userSelection, active: item.class })}
                        className={`flex sm:flex-row flex-col items-center cursor-pointer m-2 px-1 py-1 text-xl font-semibold text-left  ${userSelection.active === item.class ? "border-b-[3px] border-b-secondary" : "hover-item"}`}>

                        <div className="flex items-center">
                            <span className="text-slate-950 mx-2">
                                {item.icon}
                            </span>
                            <span className="capitalize text-nowrap">
                                {item.name}
                            </span>
                        </div>
                    </div>

                ))}




                <div
                    onClick={() => setUserSelection({ ...userSelection, active: "start" })}
                    className={`sm:hidden flex sm:flex-row flex-col cursor-pointer m-2 px-1 py-1 text-xl font-semibold text-nowrap text-left ${userSelection.active === "start" ? "border-b-[3px] border-b-secondary" : "hover-item"}  `}>

                    <BsFillLightningChargeFill className="inline-flex mx-1 my-auto text-slate-950" />
                    <span>
                        Start Yoga

                    </span>
                </div>



            </div>

            {userSelection?.active === "benefits" &&
                <div className="row-span-1 animate-fade-up ">
                    <Benefits
                        originalName={props?.originalName}
                        playAudio={props?.playAudio}
                        audioBenefits={props?.audioBenefits}
                        audioState={props?.audioState}
                        benefits={props?.benefits}
                    />
                </div>
            }

            {userSelection?.active === "tutorial" &&

                <div className="row-span-1 animate-fade-up">
                    <Tutorial
                        tutorialGIF={props?.tutorialGIF}
                        tutorialVideo={props?.tutorialVideo}
                        setShowTutorial={props?.setShowTutorial}
                    />
                </div>
            }

            {userSelection?.active === "accuracy" &&
                <div className="row-span-1 animate-fade-up">
                    <LineChart analysis={props?.analysis} />
                </div>
            }

            {userSelection?.active === "analysis" &&
                <div className="row-span-1 animate-fade-up">
                    {props?.analysis?.correctPose?.length > 2 ? (

                        <DoughnutChart analysis={props?.analysis} />

                    ) : (
                        <div className="flex flex-col h-[300px] w-full justify-center items-center">
                            <span className="text-2xl capitalize text-slate-900">
                                <img
                                    src="/yoga-page/yoga-upside.gif"
                                    alt="start yoga"
                                    className="w-[25%] mx-auto"
                                />

                            </span>
                            <span className="text-2xl leading-relaxed capitalize tracking-wider text-slate-900">
                                Not enough data to perform analysis
                            </span>
                            <span className="text-2xl leading-relaxed capitalize tracking-wider text-slate-900">
                                start performing yoga to see insight
                            </span>
                        </div>

                    )}

                </div>
            }


            {userSelection?.active === "start" &&
                <div className="block sm:hidden row-span-1 animate-fade-up">
                    <div className="w-full h-[300px]">
                        <TensorControl

                            load={props?.load}
                            isModelLoaded={props?.isModelLoaded}
                            runTensor={props?.runTensor}
                            stopTensor={props?.stopTensor}
                            poseMessage={props?.poseMessage}
                        />
                    </div>
                </div>
            }

            {userSelection?.active === "audio" &&
                <div className="row-span-1 animate-fade-up">
                    <AudioControls
                        narratorSegment = {props?.narratorSegment}
                        mainAudio = {props?.mainAudio}
                        audioClass={props?.audioClass}
                    />
                </div>
            }
        </>
    )
}