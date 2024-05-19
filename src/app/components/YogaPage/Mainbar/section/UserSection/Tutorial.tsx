'use client'
import { useState } from "react";

export default function Tutorial(props: any) {
    const [active, setActive] = useState<string>('animated');

    function handleSelection(source: string) {
        setActive(source)
        props?.setShowTutorial(source === "animated" ? false : true)
    }
    return (
        <>
            <div className="grid grid-cols-2">

                <div className="col-span-1 h-[300px] flex ">
                    <div
                        onClick={() => handleSelection("animated")}
                        className={`sm:h-[70%] h-[50%] sm:w-[70%] w-[80%] flex flex-col my-auto mx-auto text-center
                        ring-[3px] xl:rounded-t-2xl rounded-2xl ring-accent ${active === 'animated' ? "" : "brightness-[0.3]"}  duration-700`}>

                        <img
                            src={`/pose/tutorial/${props?.tutorialGIF}`}
                            alt={props?.name}
                            className="w-full h-full object-contain bg-slate-200 rounded-t-2xl mx-auto" />

                        <span className={`sm:text-xl text-base py-1 font-semibold  w-full 
                        text-slate-50 rounded-b-2xl ring-[3px] ring-accent bg-accent duration-700`}>
                            Animated
                        </span>
                    </div>
                </div>

                <div className="col-span-1 h-[300px] flex ">
                    <div
                        onClick={() => handleSelection("video")}
                        className={`sm:h-[70%] h-[50%] sm:w-[70%] w-[80%] flex flex-col my-auto mx-auto text-center
                        ring-[3px] xl:rounded-t-2xl rounded-2xl ring-accent ${active === 'video' ? "" : "brightness-[0.3]"}  duration-700`}>

                        <img
                            src={`https://img.youtube.com/vi/${props?.tutorialVideo?.split('/')[4]}/0.jpg`}
                            alt={props?.name}
                            className="w-full h-full object-cover bg-slate-200 rounded-t-2xl mx-auto" />

                        <span className={`sm:text-xl text-base py-1 font-semibold  w-full 
                        text-slate-50 rounded-b-2xl ring-[3px] ring-accent bg-accent duration-700`}>
                            Video Tutorial
                        </span>
                    </div>
                </div>


            </div>
        </>
    )
}

