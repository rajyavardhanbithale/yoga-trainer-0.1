'use client'
import { useState } from "react";
import { UserSectionSelection } from "../../../../../../types";
import Benefits from "./UserSection/Benefits";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import LineChart from "./UserSection/Analysis/LineChat";
import Tutorial from "./UserSection/Tutorial";

export default function UserSection(props: any) {
    const [userSelection, setUserSelection] = useState<UserSectionSelection>({ active: "benefits" })
    // props?.setShowTutorial(false)

    return (
        <>
            {/* onClick={() => setUserSelection({ ...userSelection, active: "benefits" })} */}

            <div 
            
            className="w-full flex overflow-x-auto justify-between hide_scrollbar">
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
                    onClick={() => setUserSelection({ ...userSelection, active: "analysis" })}
                    className={`cursor-pointer m-2 px-1 py-1 text-xl font-semibold text-left ${userSelection.active === "analysis" ? "border-b-[3px] border-b-secondary" : "hover-item"}  `}>
                    Analysis
                </span>
                <span
                    onClick={() => setUserSelection({ ...userSelection, active: "accuracy" })}
                    className={`cursor-pointer m-2 px-1 py-1 text-xl font-semibold text-left ${userSelection.active === "accuracy" ? "border-b-[3px] border-b-secondary" : "hover-item"}  `}>
                    Accuracy
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
            
            {userSelection?.active === "analysis" && <LineChart />}
        </>
    )
}