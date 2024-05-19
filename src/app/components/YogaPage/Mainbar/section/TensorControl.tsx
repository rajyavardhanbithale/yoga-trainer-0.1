'use client'
import { useState } from "react"
import Typewriter from "typewriter-effect"

export default function TensorControl(props: any) {
    const [buttonState, setButtonState] = useState()
    return (
        <>
            <div className="flex justify-center items-center bg-slate-200 shadow-lg text-white w-3/4 h-full mx-auto rounded-2xl">

                {(props?.load && !props?.isModelLoaded) &&
                    <div className="flex flex-col items-center gap-8">
                        <div className="loader"> </div>
                        <span className="text-2xl text-text font-semibold"> Hang on Loading Assets ...</span>
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
                            <div className={`${!props?.poseMessage.isSuccess ? "text-red-600" : "text-emerald-600"} text-3xl font-semibold tracking-wider`}>
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
        </>
    )
}