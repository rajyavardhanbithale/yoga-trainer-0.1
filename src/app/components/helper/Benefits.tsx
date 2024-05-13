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

            <div className={`flex flex-col ${advantagesFont.className}`}>

                <div className="text-2xl font-semibold capitalize my-2">
                    <span>
                        benefits of {props?.originalName}
                    </span>

                    <span onClick={() => props?.playAudio(props?.audioClass, "benefits")} className="inline-flex align-middle mx-2 w-12  rounded-2xl bg-secondary hover:brightness-75 duration-300 cursor-pointer ">
                        {props?.audioState === "benefits" ? (
                            <IoVolumeMediumOutline className="text-3xl font-bold mx-auto py-1 px-1 text-button-text" />

                        ) : (

                            <IoVolumeMuteOutline className="text-3xl mx-auto font-bold  py-1 px-1 text-button-text" />
                        )}

                    </span>
                </div>

                {props?.benefits?.map((text: string, idx: number) => (
                    <div key={idx} className="mb-1">
                        <span className="text-lg font-semibold">
                            {text.split(":")[0]} -
                        </span>
                        <span className="text-lg leading-relaxed tracking-wide">
                            {text.split(":")[1]}
                        </span>
                    </div>
                ))}
            </div>

        </>
    )
}