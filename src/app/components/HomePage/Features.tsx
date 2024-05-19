'use client'

import { Viaoda_Libre } from "next/font/google";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const lora = Viaoda_Libre(
    {
        subsets: ['cyrillic'],
        weight: ["400"]
    }
);


export default function Features() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.8,
    });

    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        if (inView && !visible) {
            setVisible(true)
        }
    }, [inView])


    const hallmark: { [key: string]: string }[] = [
        {
            title: "Pose Analysis",
            description: "Our AI conducts thorough pose analysis, providing real-time feedback on your alignment and posture. Enhance your practice with personalized guidance tailored to your needs.",
            icon: "graph.gif"
        },
        {
            title: "Total Span Duration Summary",
            description: "Keep track of your progress effortlessly with our total span duration summary. Monitor your practice duration over time, helping you stay consistent and achieve your goals.",
            icon: "clock.gif"
        },
        {
            title: "Real-Time Webcam",
            description: "Utilize our real-time webcam feature for live feedback and alignment corrections as you flow through poses. Experience instant adjustments for a more rewarding yoga practice.",
            icon: "camera.gif"
        }

    ]


    return (
        <>


            <div ref={ref} className="p-8 mx-10">
                <div className={`${lora.className} w-full flex flex-col gap-5 justify-center text-center`}>

                    <span className="xl:text-6xl text-5xl leading-9 tracking-[0.1em] capitalize font-semibold text-slate-900 animate-flip-up">
                        hallmarks
                    </span>

                    <span className="xl:text-2xl text-2xl leading-9 tracking-[0.1em] capitalize font-semibold text-slate-900">
                        Unlock Your Practice Potential
                    </span>

                </div>

            </div>


            {visible &&

                <div className="grid grid-cols-1 xl:grid-cols-3 mx-5">

                    {hallmark.map((item, idx) => (
                        <div key={idx} className={`py-8 px-4 flex flex-col gap-5 ${idx % 2 === 0 ? "animate-fade-up" : "animate-fade-down"} animate-duration-[1.2s]`}>
                            <div className="flex sm:justify-normal justify-center flex-col sm:flex-row">
                                <div className="bg-indigo-200/45 rounded-full w-20 h-20 mx-auto sm:mx-0 flex justify-center items-center text-indigo-500">
                                    <img src={`/homepage/animated/${item.icon}`} alt="graph" className="w-3/4" />
                                </div>
                                <span className="sm:mx-10 uppercase mt-6  text-[#1c243f] font-semibold text-2xl mb-3 w-full sm:w-auto text-center sm:text-left">
                                    {item.title}
                                </span>
                            </div>

                            <span className="font-medium text-xl text-slate-950 mb-3 sm:text-left text-center">
                                {item.description}
                            </span>

                        </div>
                    ))}

                </div>
            }
        </>
    )
}