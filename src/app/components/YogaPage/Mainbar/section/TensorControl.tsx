'use client'
import { useState } from "react"
import Typewriter from "typewriter-effect"

export default function TensorControl(props: any) {
    const [buttonState, setButtonState] = useState()

   

    return (
        <>
            <div className="flex justify-center items-center h-full my-auto mx-auto rounded-2xl">
                <div className="w-3/4 h-3/4 mt-[5vh] bg-slate-200 flex rounded-2xl justify-center items-center shadow-xl hover:shadow-lg duration-500">
                    {(props?.load && !props?.isModelLoaded) &&
                        <div className="flex flex-col items-center gap-4">
                            <div className="loader"> </div>
                            <span className="text-[2.5vh] text-text font-semibold text-center p-2"> Hang on Loading Assets</span>
                        </div>
                    }
                    {!props?.load &&
                        <>

                            <button
                                onClick={props?.runTensor}
                                className="bg-primary text-slate-50 font-semibold text-2xl h-fit 
                    py-2 px-6 rounded-tl-2xl rounded-br-2xl 
                    hover:rounded-tr-2xl hover:rounded-bl-2xl duration-500
                    hover:rounded-tl-none hover:rounded-br-none
                    shadow-xl hover:shadow-blue-800/50
                    ">
                                Start
                            </button>
                        </>
                    }




                    {(props?.load && props?.isModelLoaded) &&
                        <div className="flex flex-col-reverse gap-5">

                            <button
                                onClick={props?.stopTensor}
                                className="mx-auto bg-primary w-fit text-slate-50 font-semibold text-2xl h-fit 
                    py-2 px-6 rounded-tl-2xl rounded-br-2xl 
                    hover:rounded-tr-2xl hover:rounded-bl-2xl duration-500
                    hover:rounded-tl-none hover:rounded-br-none
                    shadow-xl hover:shadow-blue-800/50
                    ">
                                Stop
                            </button>

                            {props?.poseMessage?.poseMessage &&
                                <div className={`${!props?.poseMessage.isSuccess ? "text-red-600" : "text-emerald-600"} text-[3.5vh] font-semibold tracking-wider text-center p-2`}>
                                    <Typewriter
                                        options={{
                                            strings: [props?.poseMessage?.poseMessage],
                                            autoStart: true,
                                            delay: 40,
                                            deleteSpeed: 999999
                                        }}
                                    />
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </>
    )
}