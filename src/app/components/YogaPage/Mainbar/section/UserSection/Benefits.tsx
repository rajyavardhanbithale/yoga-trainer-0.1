'use client'

import { Montserrat } from "next/font/google";
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5"


const advantagesFont = Montserrat(
    {
        subsets: ["latin"],
    }
);


export default function Benefits(props: any) {
    return (
        <>
            <div className="sm:h-[30vh] overflow-y-auto sm:sidebar_scrollable">


                <div className={`flex flex-col ${advantagesFont.className} `}>

                    <div className="sm:text-2xl text-xl font-semibold capitalize my-2">
                        <span>
                            benefits of {props?.originalName}
                        </span>

                        <span onClick={() => props?.playAudio(props?.audioBenefits, "benefits")} className="inline-flex align-middle mx-2 sm:w-12 w-10 rounded-2xl bg-secondary hover:brightness-75 duration-300 cursor-pointer ">
                            {props?.audioState === "benefits" ? (
                                <IoVolumeMediumOutline className="text-3xl font-bold mx-auto py-1 px-1 text-button-text" />

                            ) : (

                                <IoVolumeMuteOutline className="text-3xl mx-auto font-bold  py-1 px-1 text-button-text" />
                            )}

                        </span>
                    </div>

                    <div className="">
                        {props?.benefits?.map((text: string, idx: number) => (
                            <div key={idx} className="sm:mb-1 mb-5 text-justify sm:text-left mx-auto">
                                <span className="sm:text-lg text-base font-semibold">
                                    {text.split(":")[0]} -
                                </span>
                                <span className="sm:text-lg text-base leading-relaxed tracking-wide">
                                    {text.split(":")[1]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}