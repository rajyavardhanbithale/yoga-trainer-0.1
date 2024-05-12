'use client'

import { Sedan } from "next/font/google";
import Typewriter from 'typewriter-effect';
import { YogaPoseDetailed } from "../../../types";
import { useEffect, useRef, useState } from "react";
import useTensorFlow from "../hooks/useTensorFlow";
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5";
import useAudioManager from "../hooks/useAudioPlayer";
import DropdownSelect from "./helper/DropdownSelect";
import useConvertTensorClass from "../hooks/useConvertTensorClass";
import Benefits from "./helper/Benefits";
import { IoIosArrowDown } from "react-icons/io";
import MusicSelection from "./helper/MusicSelection";

const titleFont = Sedan(
    {
        subsets: ["latin"],
        weight: ["400"]
    }
);

export default function MainBar(props: YogaPoseDetailed) {
    const [poseSuccess, setPoseSuccess] = useState<boolean>(false)
    const [poseMessage, setPoseMessage] = useState<string>()
    const [audioStatus, setAudioStatus] = useState<boolean>(true)
    const [audioState, setAudioState] = useState<string>()
    const [playbackSpeed, setPlaybackSpeed] = useState<string>("fine")
    const [dropdown, setDropdown] = useState<boolean>(false)
    const videoRef = useRef(null)
    const [capturedFrame, setCapturedFrame] = useState<string | null>(null);
    const [predAssumption, setPredAssumption] = useState<Array<string> | null>()
    const [predFinal, setPredFinal] = useState<string>()
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
    const [load, setLoad] = useState<boolean>(false) // Load Assets Button

    const { playNarratorAudio, playUserAudio, stopAudio } = useAudioManager();
    const { loadTensorModel, predictTensor, finishTensor, isModelLoaded } = useTensorFlow();
    const { getPredctionClass } = useConvertTensorClass(0.80)

    const excludeObjectContainer: Array<number> = [104]
    const successMessageList: Array<string> = ["Correct pose!", "Nailed it!", "Great form!", "Well done", "You got it!"]
    const unsuccessMessageList: Array<string> = ["Incorrect pose.", "Try once more.", "Keep practicing.", "Check your posture.", "Try another angle."]

    // manages playback for audio narration 
    // toggle function, stops the playback and the play audio according to source and state
    // when playback speed changes the audio source will be terminated ('useEffect')
    function playAudio(source: (string | Array<string>), state: (string)) {
        stopAudio()
        if (audioStatus) {
            playNarratorAudio(source, props?.TFData?.class, playbackSpeed)
            setAudioState(state)
        } else {
            setAudioState("")
        }
        setAudioStatus(!audioStatus)
    }
    useEffect(() => {
        stopAudio()
    }, [playbackSpeed, setPlaybackSpeed])


    // capturing frames from input video source
    // creating a canvas and then attaching video reference height, width
    // using 'useRef' hook to get the input source features
    // feeding the canvas content (Base64 encoded image) to tensor for predict ('predictTensor' function)
    const handleCaptureFrame = async () => {
        setLoad(false)
        setPredAssumption(null)

        const video: (any | null) = videoRef.current
        const canvas = document.createElement('canvas')
        const ctx: (CanvasRenderingContext2D | null) = canvas.getContext('2d')

        canvas.height = video.videoHeight
        canvas.width = video.videoWidth

        ctx?.drawImage(video, 0, 0)
        const image = canvas.toDataURL()

        setCapturedFrame(image);
        const runTensor: Array<string> = [await predictTensor(image), '' + Math.random() * 3]
        setPredAssumption(runTensor)

    }

    // in the below function get 'getPredctionClass' output the yoga pose class based on tensor prediction values
    // when the prediction class is available, if the pose matches the provided pose if output success else output an unsuccess
    // while setting the user (success - unsuccess) message, it picks the random value form the custom defined array of messages 
    const handleInteractTensor = () => {

        const random = (length: number) => {
            return Math.floor(Math.random() * length)
        }

        if (predAssumption) {

            const predClass = getPredctionClass(predAssumption[0], props?.TFData?.set)
            setPredFinal(predClass)

            if (props?.TFData?.class === predClass) {
                const randomIndex: number = random(successMessageList.length)
                playUserAudio(`seg${randomIndex}.mp3`, 'user/pose/valid', 'slow')
                setPoseSuccess(true)
                setPoseMessage(successMessageList[randomIndex])
                console.log(successMessageList[randomIndex], randomIndex);

            } else {
                const randomIndex: number = random(successMessageList.length)
                playUserAudio(`seg${randomIndex}.mp3`, 'user/pose/invalid', 'slow')
                setPoseSuccess(false)
                setPoseMessage(unsuccessMessageList[randomIndex])
            }
        }
    }

    // 'handleInteractTensor' function will be executed when the 'predAssumption' value is available
    useEffect(() => {
        handleInteractTensor()
    }, [predAssumption])


    // when the asynchronous 'runTensor' function is called, it execute the 'handleCaptureFrame'
    // the function itself run in every n second
    const runTensor = () => {
        console.log('Stated');
        setLoad(true)
        const id = setInterval(async () => {
            setPredAssumption(null)
            console.log('STG')
            await handleCaptureFrame()
            setLoad(false)
        }, 2000);
        setIntervalId(id);
    }

    // 'stopTensor' will clear the interval id and stop the 'runTensor' function
    const stopTensor = () => {
        if (intervalId) {
            clearInterval(intervalId)
        }
        // finishTensor()
        setPredAssumption(null)
    }

    // below function load the dl model to client side
    // with loading animation
    const loadAssetsTensor = async () => {
        setLoad(true)
        const ltm = await loadTensorModel(props?.TFData?.set)
        if (ltm) {
            setLoad(false)
        }
    }


    return (
        <>
            <div className="lg:w-[78%] xl:w-[88%] mt-5 sidebar_scrollable text-text">
                <div className="m-4 mx-4">
                    {/* Title */}
                    <div className="grid grid-cols-1 justify-center place-items-center gap-2">
                        <div className={`${titleFont.className} flex flex-col xl:flex-row items-center text-4xl font-semibold capitalize gap-1`}>
                            <div>{props?.name}</div>
                            <div className="h-1.5 w-1.5 bg-text rounded-full mx-3"></div>
                            <div>{props?.originalName}</div>
                        </div>
                        <span className={`${titleFont.className} text-xl capitalize font-semibold  text-center`}>
                            &quot;{props?.description}&quot;
                        </span>
                    </div>
                </div>


                <div className="grid xl:grid-cols-11 md:grid-cols-2 p-5 gap-10">
                    {/* Source */}
                    <div className="sm:col-span-5 min-h-[400px]">
                        <div className="flex justify-center h-full max-h-[400px] ">
                            <video
                                ref={videoRef}
                                src="test/tree.mp4"
                                controls
                                height={1280}
                                width={720}

                            />
                        </div>
                    </div>

                    {/* Controller */}
                    <div className="xl:col-span-1 col-span-5  xl:min-h-[400px] max-w-full">
                        <div className="w-full h-full flex xl:flex-col justify-center items-center align-middle text-center gap-8 mt-auto">

                            <div>
                                <span className="text-xl">Narrator</span>
                                <span
                                    onClick={() => playAudio(props?.audioData?.mainAudio, "narrator")}
                                    className="text-button-text inline-flex justify-center w-1/2  align-middle  rounded-2xl bg-secondary hover:brightness-75 duration-300 cursor-pointer ">
                                    {audioState === "narrator" ? (
                                        <IoVolumeMediumOutline className="text-4xl font-bold p-1" />

                                    ) : (

                                        <IoVolumeMuteOutline className="text-4xl font-bold p-1" />
                                    )}

                                </span>
                            </div>

                            <div className="flex flex-col xl:w-full w-[25%]">
                                <span className="text-xl">Tips</span>
                                <span
                                    onClick={() => playAudio(props?.audioData?.narratorSegment, "tips")}
                                    className="text-button-text inline-flex justify-center w-1/2 mx-auto align-middle  rounded-2xl bg-secondary hover:brightness-75 duration-300 cursor-pointer ">
                                    {audioState === "tips" ? (
                                        <IoVolumeMediumOutline className="text-4xl font-bold p-1" />

                                    ) : (

                                        <IoVolumeMuteOutline className="text-4xl font-bold p-1" />
                                    )}

                                </span>
                            </div>

                            <div>
                                <span className="text-xl">Voice Speed</span>
                                <div className="relative">
                                    <div
                                        onClick={() => setDropdown(!dropdown)}
                                        className="text-button-text bg-secondary hover:brightness-75 rounded-xl  font-medium px-5 py-1.5 text-center inline-flex items-center capitalize">

                                        {playbackSpeed}
                                        <IoIosArrowDown className="ml-2" />
                                    </div>


                                    {dropdown &&
                                        <DropdownSelect playbackSpeed={setPlaybackSpeed} dropdown={setDropdown} />

                                    }
                                </div>
                            </div>

                            <div>
                                <span className="text-xl mb-1">Relax Music</span>
                                <MusicSelection></MusicSelection>
                            </div>

                        </div>
                    </div>

                    {/* Tutorial */}
                    <div className="sm:col-span-5 min-h-[400px]">
                        <div className="flex justify-center h-full max-h-[400px] ">

                            <img src={`/pose/tutorial/${props?.tutorial}`}
                                alt={props?.name}
                                className={`w-3/4 ${excludeObjectContainer.includes(props?.id) ? "object-scale-down" : "object-cover"} down object-center h-auto rounded-2xl`}
                            >
                            </img>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-7 my-6 p-5 gap-10">
                    <Benefits
                        originalName={props?.originalName}
                        playAudio={playAudio}
                        audioClass={props?.audioData?.benefits}
                        audioState={audioState}
                        benefits={props?.benefits}
                    />

                    <div className="col-span-3">
                        <div className="w-full h-full flex flex-col items-center justify-center border-[3px] border-text rounded-2xl">

                            {load ? (
                                <>
                                    <div className="animate-jump-in animate-ease-out duration-500">
                                        <div className="loader"></div>
                                    </div>

                                </>
                            ) : (
                                !load && !isModelLoaded ? (
                                    <>
                                        <div
                                            onClick={loadAssetsTensor}
                                            className="px-5 py-3 text-xl text-button-text font-semibold bg-primary rounded-tr-xl rounded-bl-xl  hover:rounded-tl-2xl hover:rounded-br-2xl hover:rounded-tr-none hover:rounded-bl-none shadow-xl hover:shadow-xl duration-500 cursor-pointer">
                                            Load Assets
                                        </div>



                                    </>
                                ) : (
                                    predAssumption ? (
                                        <>
                                            <div className="flex flex-col-reverse h-auto justify-evenly  items-center gap-5">

                                                <div
                                                    onClick={stopTensor}
                                                    className="w-fit px-5 py-3 text-xl text-button-text font-semibold bg-accent rounded-tr-xl rounded-bl-xl  hover:rounded-tl-2xl hover:rounded-br-2xl hover:rounded-tr-none hover:rounded-bl-none shadow-xl hover:shadow-xl duration-500 cursor-pointer">
                                                    Stop
                                                </div>

                                                {poseMessage &&
                                                    <div className={`${!poseSuccess ? "text-[#ea1537]" : "text-[#00b499]"} text-3xl font-semibold tracking-wider`}>
                                                        <Typewriter
                                                            options={{
                                                                strings: [poseMessage],
                                                                autoStart: true,
                                                                delay: 40,
                                                                deleteSpeed: 999999
                                                            }}
                                                        />
                                                    </div>
                                                }
                                            </div>


                                        </>
                                    ) : (
                                        <div
                                            onClick={runTensor}
                                            className="px-5 py-3 text-xl text-button-text font-semibold bg-accent rounded-tr-xl rounded-bl-xl  hover:rounded-tl-2xl hover:rounded-br-2xl hover:rounded-tr-none hover:rounded-bl-none shadow-xl hover:shadow-xl duration-500 cursor-pointer">
                                            Start
                                        </div>
                                    )
                                )



                            )}

                        </div>
                    </div>
                </div>

                {capturedFrame &&
                    <div>
                        <img src={capturedFrame} alt="cap frm" className="hidden" height={500} width={500} />
                    </div>
                }
            </div>


        </>
    )
}