'use client'
import { useState } from "react";
import { UserSectionSelection } from "../../../../../../../types";
import Benefits from "./Benefits";


import Tutorial from "./Tutorial";
import DoughnutChart from "./Analysis/DoughnutChart";
import LineChart from "./Accuracy/LineChat";
import TensorControl from "../TensorControl";

export default function UserSection(props: any) {
    const [userSelection, setUserSelection] = useState<UserSectionSelection>({ active: "benefits" })
    // props?.setShowTutorial(false)
    // const analysis = {
    //     "endTime": 1716210665578,
    //     "startTime": 1716210644683,
    //     "poseID": 101,
    //     "poseName": "tree pose",
    //     "repTime": 5000,
    //     "accuracy": [
    //         1,
    //         1,
    //         1,
    //         1,
    //         1
    //     ],
    //     "correctPose": [
    //         1,
    //         1,
    //         1,
    //         1,
    //         1
    //     ]
    // }
    return (
        <>
            {/* onClick={() => setUserSelection({ ...userSelection, active: "benefits" })} */}

            <div
                className="w-full xl:w-1/2 flex overflow-x-auto justify-between hide_scrollbar">
                <span
                    onClick={() => setUserSelection({ ...userSelection, active: "benefits" })}
                    className={`cursor-pointer m-2 px-1 py-1 text-xl font-semibold text-left  ${userSelection.active === "benefits" ? "border-b-[3px] border-b-secondary" : "hover-item"} `}>
                    Benefits
                </span>
                <span
                    onClick={() => setUserSelection({ ...userSelection, active: "tutorial" })}
                    className={`cursor-pointer m-2 px-1 py-1 text-xl font-semibold text-left ${userSelection.active === "tutorial" ? "border-b-[3px] border-b-secondary" : "hover-item"}  `}>
                    Tutorial
                </span>
                <span
                    onClick={() => setUserSelection({ ...userSelection, active: "accuracy" })}
                    className={`cursor-pointer m-2 px-1 py-1 text-xl font-semibold text-left ${userSelection.active === "accuracy" ? "border-b-[3px] border-b-secondary" : "hover-item"}  `}>
                    Accuracy
                </span>
                <span
                    onClick={() => setUserSelection({ ...userSelection, active: "analysis" })}
                    className={`cursor-pointer m-2 px-1 py-1 text-xl font-semibold text-left ${userSelection.active === "analysis" ? "border-b-[3px] border-b-secondary" : "hover-item"}  `}>
                    Analysis
                </span>


                <span
                    onClick={() => setUserSelection({ ...userSelection, active: "start" })}
                    className={`sm:hidden block cursor-pointer m-2 px-1 py-1 text-xl font-semibold text-nowrap text-left ${userSelection.active === "start" ? "border-b-[3px] border-b-secondary" : "hover-item"}  `}>
                    Start Yoga
                </span>



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
                                    src="/yogapage/yoga-upside.gif"
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
        </>
    )
}