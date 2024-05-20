'use client'

import { useEffect, useRef, useState } from "react";


import useAudioManager from "../../../hooks/useAudioPlayer";
import useConvertTensorClass from "../../../hooks/useConvertTensorClass";
import useTensorFlow from "@/app/hooks/useTensorFlow";


import { successMessageList, unsuccessMessageList } from "../UserMessage/UserMessage";
import { AudioState, PoseMessage, YogaPoseDetailed, YogaPosePerformanceData } from "../../../../../types";
import Title from "./section/Title";
import { useSearchParams } from "next/navigation";
import VideoSection from "./section/VideoSection";
import UserSection from "./section/UserSection/UserSection";
import TensorControl from "./section/TensorControl";


export default function MainBar(props: YogaPoseDetailed) {
    const param = useSearchParams();
    const repTime: number = parseInt(param.get('repTime') || '5', 10) * 1000
    const source: string = param.get('source') || 'tree.mp4'


    const [poseMessage, setPoseMessage] = useState<PoseMessage>()
    const [audioState, setAudioState] = useState<AudioState>({ status: true, state: "", playbackSpeed: "fine" })
    const [showTutorial, setShowTutorial] = useState<boolean>(false)
    const [capturedFrame, setCapturedFrame] = useState<string | null>(null);
    const [predAssumption, setPredAssumption] = useState<string | null>()
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
    const [load, setLoad] = useState<boolean>(false) // Load Assets Button

    const [analysis, setAnalysis] = useState<YogaPosePerformanceData>()


    const videoRef = useRef(null)

    const { playNarratorAudio, playUserAudio, stopAudio } = useAudioManager();
    // const { runModel, stopModel, isModelLoaded } = useTensorFlow()
    const { getPredictionClass } = useConvertTensorClass(0.80)


    // // manages playback for audio narration 
    // // toggle function, stops the playback and the play audio according to source and state
    // // when playback speed changes the audio source will be terminated ('useEffect')
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

        if (predAssumption) {

            const predClass = getPredictionClass(predAssumption, props?.TFData?.set)

            if (props?.TFData?.class === predClass) {
                const randomIndex: number = random(successMessageList.length)
                playUserAudio(`seg${randomIndex}.mp3`, 'user/pose/valid', 'slow')
                setPoseMessage({ isSuccess: true, poseMessage: successMessageList[randomIndex] });
                // console.log(successMessageList[randomIndex], randomIndex);

                setAnalysis(prevAnalysis => ({
                    ...prevAnalysis!,
                    accuracy: [...prevAnalysis!.accuracy, 1],
                    correctPose: [...prevAnalysis!.correctPose, 1]
                }));


            } else {
                const randomIndex: number = random(successMessageList.length)
                playUserAudio(`seg${randomIndex}.mp3`, 'user/pose/invalid', 'slow')
                setPoseMessage({ isSuccess: false, poseMessage: unsuccessMessageList[randomIndex] });

                setAnalysis(prevAnalysis => ({
                    ...prevAnalysis!,
                    accuracy: [...prevAnalysis!.accuracy, 0],
                    correctPose: [...prevAnalysis!.correctPose, 0]
                }))

            }
        }

        setAnalysis((prevAnalysis) => ({
            ...prevAnalysis!,
            endTime: Date.now(),
        }))
    }

    // 'handleInteractTensor' function will be executed when the 'predAssumption' value is available
    // useEffect(() => {

    //     if (isModelLoaded && !analysis?.startTime) {
    //         setAnalysis((prevAnalysis) => ({
    //             ...prevAnalysis!,
    //             poseID: props?.id || 0,
    //             poseName: props?.name || "",
    //             repTime: repTime,
    //             startTime: Date.now(),
    //             accuracy: [],
    //             correctPose: [],
    //             endTime: 0
    //         }));
    //     }

    //     handleInteractTensor()
    // }, [predAssumption])



    const runTensor = () => {
        console.log('Stated');
        setLoad(true)

        setAnalysis((prevAnalysis) => ({
            ...prevAnalysis!,
            startTime: 0,

        }));

        const id = setInterval(async () => {
            setPredAssumption(null)
            console.log('STG')
            handleCaptureFrame()

        }, repTime);
        setIntervalId(id);
    }

    const stopTensor = () => {
        if (intervalId) {
            clearInterval(intervalId)
        }
        setLoad(false)

        setAnalysis((prevAnalysis) => ({
            ...prevAnalysis!,
            endTime: Date.now(),
        }))
    }



    console.log(analysis);
    
    return (
        <>
            <div className="flex w-full flex-col items-center">


                <div className="mt-10 sm:mt-10 w-11/12 mx-auto xl:mx-0  flex flex-col">
                    <Title
                        name={props?.name}
                        originalName={props?.originalName}
                        description={props?.description}
                    />
                </div>


                <div className="-z-50 mt-5 sm:mt-5 w-11/12 mx-auto xl:mx-0  flex flex-col">
                    <VideoSection
                        tutorial={props?.tutorial}
                        name={props?.name}

                        showTutorial={showTutorial}
                        tutorialVideo={props?.videoData?.tutorialIFRAME}

                        videoRef={videoRef}
                        source={source}
                    />
                </div>

                <div className="mt-5 sm:mt-5 my-5 sm:w-11/12 w-[85%] mx-auto xl:mx-0 flex flex-row">
                    <div className="sm:w-[70%] w-[100%]">
                        <UserSection
                            originalName={props?.originalName}
                            playAudio={playAudio}
                            audioBenefits={props?.audioData?.benefits}
                            audioState={audioState?.state}
                            benefits={props?.benefits}

                            name={props?.name}
                            setShowTutorial={setShowTutorial}
                            tutorialGIF={props?.tutorial}
                            tutorialVideo={props?.videoData?.tutorialIFRAME}


                            analysis={analysis}

                            load={load}
                            // isModelLoaded={isModelLoaded}
                            runTensor={runTensor}
                            stopTensor={stopTensor}
                            poseMessage={poseMessage}

                        />
                    </div>

                    <div className="w-[30%] hidden sm:block">
                        <TensorControl
                            load={load}
                            // isModelLoaded={isModelLoaded}
                            runTensor={runTensor}
                            stopTensor={stopTensor}
                            poseMessage={poseMessage}
                        />
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