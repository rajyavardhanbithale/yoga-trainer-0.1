'use client'

import { Plus_Jakarta_Sans, Viaoda_Libre } from 'next/font/google';
import { useEffect, useState } from "react";

import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

const lora = Viaoda_Libre(
    {
        subsets: ['cyrillic'],
        weight: ["400"]
    }
);
const numeric = Plus_Jakarta_Sans(
    {
        subsets: ['cyrillic-ext'],
        weight: ["200", "300", "400", "500", "600", "700", "800"]
    }
);


export default function Stats() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.8,
    });

    const [visible,setVisible] = useState<boolean>(false)



    const linearData = [
        {
            count: 6,
            title: "yoga pose",
        }, {
            count: 3000,
            title: "input data",
        }, {
            count: 50,
            title: "yoga pose",
        }
    ]

    useEffect(()=>{
        if(inView && !visible){
            setVisible(true)
        }
    },[inView])

    

    return (
        <>
            {/* <CountUp
                end={6}
                duration={2}
                prefix='' /> */}


            <div ref={ref} className="w-full">
                <div className="flex flex-col">

                    <div className={`flex flex-col gap-5 mx-auto ${lora.className}`}>
                        <span className="sm:text-6xl text-5xl tracking-[0.1em] capitalize font-semibold text-slate-900 text-center">
                            Advanced Pose Recognition
                        </span>
                        <span className="xl:text-2xl text-2xl text-center leading-9 tracking-[0.1em] capitalize font-semibold text-slate-900">
                            Our cutting-edge AI model has been trained on over

                        </span>

                    </div>

                    {visible &&
                        <>
                            <div className="mt-10">
                                <div className={`grid sm:grid-cols-3`}>
                                    {linearData.map((item, idx) => (
                                        <div key={idx} className="col-span-1 py-3 flex flex-col place-items-center gap-2 animate-jump-in animate-duration-[2000ms] animate-delay-[200ms]">
                                            <CountUp
                                                end={item.count}
                                                duration={2}
                                                prefix=""
                                                suffix="+"
                                                className={`${numeric.className} text-5xl text-slate-900`}
                                            />
                                            <span className="text-2xl capitalize">{item.title}</span>
                                        </div>
                                    ))}


                                </div>
                            </div>

                            <div className={`flex flex-col gap-5 mt-10 mx-auto ${lora.className}`}>

                                <span className="xl:text-2xl text-xl text-center leading-9 tracking-[0.1em] capitalize font-semibold text-slate-900">
                                    And the numbers are still increasing
                                </span>
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    )
}