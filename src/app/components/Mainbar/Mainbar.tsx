'use client'

import {  useEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect';
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import useAudioManager from "../../hooks/useAudioPlayer";
import useConvertTensorClass from "../../hooks/useConvertTensorClass";
import useTensorFlow from "@/app/hooks/useTensorFlow";

import DropdownSelect from "./helper/DropdownSelect";
import MusicSelection from "./helper/MusicSelection";

import { successMessageList, unsuccessMessageList } from "../UserMessage/UserMessage";
import { AudioState, PoseMessage, YogaPoseDetailed } from "../../../../types";
import Title from "./helper/Title";
import UserSelection from "./helper/UserSelection";
import { useSearchParams } from "next/navigation";


export default function MainBar(props: YogaPoseDetailed) {
    const param = useSearchParams();

    const [poseMessage, setPoseMessage] = useState<PoseMessage>()
    const [audioState, setAudioState] = useState<AudioState>({ status: true, state: "", playbackSpeed: "fine" })
    const [dropdown, setDropdown] = useState<boolean>(false)
    const [capturedFrame, setCapturedFrame] = useState<string | null>(null);
    const [predAssumption, setPredAssumption] = useState<string | null>()
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
    const [load, setLoad] = useState<boolean>(false) // Load Assets Button


    const videoRef = useRef(null)
    const excludeObjectContainer: Array<number> = [104]


    const { playNarratorAudio, playUserAudio, stopAudio } = useAudioManager();
    const { runModel, stopModel, isModelLoaded } = useTensorFlow()
    const { getPredctionClass } = useConvertTensorClass(0.80)



    // manages playback for audio narration 
    // toggle function, stops the playback and the play audio according to source and state
    // when playback speed changes the audio source will be terminated ('useEffect')
    function playAudio(source: (string | Array<string>), state: (string)) {
        stopAudio()
        if (audioState.status) {
            playNarratorAudio(source, props?.TFData?.class, audioState?.playbackSpeed)
            setAudioState(prevState => ({ ...prevState, state: state }))
        } else {
            setAudioState(prevState => ({ ...prevState, state: "" }))
        }
        setAudioState(prevState => ({ ...prevState, status: !audioState.status }))
    }
    useEffect(() => {
        stopAudio()
    }, [audioState.playbackSpeed])


    // capturing frames from input video source
    // creating a canvas and then attaching video reference height, width
    // using 'useRef' hook to get the input source features
    // feeding the canvas content (Base64 encoded image) to tensor for predict ('predictTensor' function)
    const handleCaptureFrame = () => {
        const video: (any | null) = videoRef.current;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = 250;
        canvas.height = 250
        ctx?.drawImage(video, 0, 0, 250, 250);
        const imageData = canvas.toDataURL();
        setCapturedFrame(imageData);
        runModel(imageData, setPredAssumption, props?.TFData?.set)

    }

    // in the below function get 'getPredctionClass' output the yoga pose class based on tensor prediction values
    // when the prediction class is available, if the pose matches the provided pose if output success else output an unsuccess
    // while setting the user (success - unsuccess) message, it picks the random value form the custom defined array of messages 
    const handleInteractTensor = () => {
        const random = (length: number) => {
            return Math.floor(Math.random() * length)
        }
        console.log("handleinteract", predAssumption);

        if (predAssumption) {

            const predClass = getPredctionClass(predAssumption, props?.TFData?.set)
            if (props?.TFData?.class === predClass) {
                const randomIndex: number = random(successMessageList.length)
                playUserAudio(`seg${randomIndex}.mp3`, 'user/pose/valid', 'slow')
                setPoseMessage({ isSuccess: true, poseMessage: successMessageList[randomIndex] });
                console.log(successMessageList[randomIndex], randomIndex);

            } else {
                const randomIndex: number = random(successMessageList.length)
                playUserAudio(`seg${randomIndex}.mp3`, 'user/pose/invalid', 'slow')
                setPoseMessage({ isSuccess: false, poseMessage: unsuccessMessageList[randomIndex] });
            }
        }
    }

    // 'handleInteractTensor' function will be executed when the 'predAssumption' value is available
    useEffect(() => {
        handleInteractTensor()
    }, [predAssumption])



    const runTensor = () => {
        console.log('Stated');
        setLoad(true)
        const id = setInterval(async () => {
            setPredAssumption(null)
            console.log('STG')
            handleCaptureFrame()
           
        }, 2000);
        setIntervalId(id);
    }

    const stopTensor = () => {
        if (intervalId) {
            clearInterval(intervalId)
        }
        setLoad(true)
    }

    


    return (
        <>
            <div className="lg:w-[78%] xl:w-[88%] mt-5 sidebar_scrollable text-text">
                <div className="m-4 mt-2 mx-2">
                    <Title name={props?.name} originalName={props?.originalName} description={props.description} />
                </div>

                <div className="grid xl:grid-cols-11 md:grid-cols-2 p-5 gap-10">
                    {/* Source */}
                    <div className="sm:col-span-5 min-h-[400px]">
                        <div className="flex justify-center h-full max-h-[400px] ">
                            <video
                                ref={videoRef}
                                src={`test/${param.get('source') || 'tree.mp4'}`}
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
                                    {audioState?.state === "narrator" ? (
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
                                    {audioState?.state === "tips" ? (
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

                                        {audioState?.playbackSpeed}
                                        <IoIosArrowDown className="ml-2" />
                                    </div>


                                    {dropdown &&
                                        <DropdownSelect setAudioState={setAudioState} dropdown={setDropdown} />

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


                <div className="grid grid-cols-7 my-3 p-5 gap-10">
                    <div className="col-span-4 grid-row-2 h-[400px]">
                        <UserSelection
                            originalName={props?.originalName}
                            playAudio={playAudio}
                            audioClass={props?.audioData?.benefits}
                            audioState={audioState?.state}
                            benefits={props?.benefits}

                            videoData={props?.videoData}

                        />
                    </div>

                    <div className="col-span-3">
                        <div className="w-full h-full flex flex-col items-center justify-center border-[3px] border-text rounded-2xl">

                            {(load && !isModelLoaded) &&
                                < div className="loader"></div>
                            }

                            {!load &&
                                <div
                                    onClick={runTensor}
                                    className="px-5 py-3 text-xl text-button-text font-semibold bg-primary rounded-tr-xl rounded-bl-xl  hover:rounded-tl-2xl hover:rounded-br-2xl hover:rounded-tr-none hover:rounded-bl-none shadow-xl hover:shadow-xl duration-500 cursor-pointer">
                                    Start
                                </div>
                            }


                            {(load && isModelLoaded) &&
                                <div className="flex flex-col-reverse gap-5">

                                    <div
                                        onClick={stopTensor}
                                        className="mx-auto w-fit px-5 py-3 text-xl text-button-text font-semibold bg-primary rounded-tr-xl rounded-bl-xl  hover:rounded-tl-2xl hover:rounded-br-2xl hover:rounded-tr-none hover:rounded-bl-none shadow-xl hover:shadow-xl duration-500 cursor-pointer">
                                        Stop
                                    </div>

                                    {poseMessage?.poseMessage &&
                                        <div className={`${!poseMessage.isSuccess ? "text-[#ea1537]" : "text-[#00b499]"} text-3xl font-semibold tracking-wider`}>
                                            <Typewriter
                                                options={{
                                                    strings: [poseMessage?.poseMessage],
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
                </div>

                {capturedFrame &&
                    <div>
                        <img src={capturedFrame} alt="cap frm" className="hidden" height={500} width={500} />
                    </div>
                }
            </div >


        </>
    )
}