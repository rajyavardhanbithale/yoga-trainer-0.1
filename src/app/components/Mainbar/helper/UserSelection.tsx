'use client'
import { useState } from "react";
import { UserSectionSelection } from "../../../../../types";
import Benefits from "./Benefits";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export default function UserSelection(props: any) {
    const [userSelection, setUserSelection] = useState<UserSectionSelection>({active:"benefits"})
    return (
        <>

            {userSelection?.active !== "video" &&
                <div className="grid grid-cols-3 xl:grid-cols-5 row-span-1 max-h-[200px] p-2 text-base xl:text-xl font-semibold">
                    <div
                        onClick={() => setUserSelection({ ...userSelection, active: "benefits" })}
                        className={`col-span-1 hover_border text-nowrap py-2 cursor-pointer brightness-95 text-start rounded-t-xl  ${userSelection?.active === "benefits" ? "w-[80%]" : "w-0"}`}>
                        Benefits
                    </div>
                    <div
                        onClick={() => setUserSelection({ ...userSelection, active: "video" })}
                        className={`col-span-1 hover_border text-nowrap py-2 cursor-pointer brightness-95 text-start rounded-t-xl  ${userSelection?.active === "video" ? "w-[80%]" : "w-0"}`}>
                        Tutorial Video
                    </div>
                    <div
                        onClick={() => setUserSelection({ ...userSelection, active: "read" })}
                        className={`col-span-1 hover_border text-nowrap py-2 cursor-pointer brightness-95 text-start rounded-t-xl  ${userSelection?.active === "read" ? "w-[80%]" : "w-0"}`}>
                        RAGE AI Chat
                    </div>

                </div>
            }

            {userSelection?.active === "benefits" &&
                <div className="row-span-1 animate-fade-up">
                    <Benefits
                        originalName={props?.originalName}
                        playAudio={props?.playAudio}
                        audioClass={props?.audioClass}
                        audioState={props?.audioState}
                        benefits={props?.benefits}
                    />
                </div>
            }

            {userSelection?.active === "video" &&
                <>
               
                    <div
                        onClick={() => setUserSelection({ ...userSelection, active: "benefits" })}
                        className="z-50 absolute w-8 h-8 bg-secondary m-5 rounded-xl animate-pulse hover:animate-none ">
                        <IoChevronBackCircleOutline className="text-2xl text-white font-semibold m-1 cursor-pointer" />

                    </div>
                    <div className="relative row-span-1 animate-fade-down p-1">
                        <div className="flex justify-center -z-50">
                            <div className="absolute w-3/4  h-[25rem] mx-auto bg-slate-400 rounded-2xl -z-50 animate-pulse"></div>
                        </div>
                        <iframe className="w-[80%] h-[25rem] mx-auto z-40 rounded-2xl" src={props?.videoData?.tutorialIFRAME} title="YouTube video player" allow="encrypted-media; picture-in-picture;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </>

            }

        </>
    )
}