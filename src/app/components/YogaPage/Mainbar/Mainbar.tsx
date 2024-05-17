'use client'

import { useEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect';
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import useAudioManager from "../../../hooks/useAudioPlayer";
import useConvertTensorClass from "../../../hooks/useConvertTensorClass";
import useTensorFlow from "@/app/hooks/useTensorFlow";

import DropdownSelect from "./helper/DropdownSelect";
import MusicSelection from "./helper/MusicSelection";

import { successMessageList, unsuccessMessageList } from "../UserMessage/UserMessage";
import { AudioState, PoseMessage, YogaPoseDetailed } from "../../../../../types";
import Title from "./page/Title";
import UserSelection from "./helper/UserSelection";
import { useSearchParams } from "next/navigation";
import VideoSection from "./page/VideoSection";


export default function MainBar(props: YogaPoseDetailed) {
    const param = useSearchParams();

    const [poseMessage, setPoseMessage] = useState<PoseMessage>()
    // const [audioState, setAudioState] = useState<AudioState>({ status: true, state: "", playbackSpeed: "fine" })
    // const [dropdown, setDropdown] = useState<boolean>(false)
    // const [capturedFrame, setCapturedFrame] = useState<string | null>(null);
    // const [predAssumption, setPredAssumption] = useState<string | null>()
    // const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
    // const [load, setLoad] = useState<boolean>(false) // Load Assets Button


    // const videoRef = useRef(null)
    // const excludeObjectContainer: Array<number> = [104]


    // const { playNarratorAudio, playUserAudio, stopAudio } = useAudioManager();
    // const { runModel, stopModel, isModelLoaded } = useTensorFlow()
    // const { getPredictionClass } = useConvertTensorClass(0.80)



    // // manages playback for audio narration 
    // // toggle function, stops the playback and the play audio according to source and state
    // // when playback speed changes the audio source will be terminated ('useEffect')
    // function playAudio(source: (string | Array<string>), state: (string)) {
    //     stopAudio()
    //     if (audioState.status) {
    //         playNarratorAudio(source, props?.TFData?.class, audioState?.playbackSpeed)
    //         setAudioState(prevState => ({ ...prevState, state: state }))
    //     } else {
    //         setAudioState(prevState => ({ ...prevState, state: "" }))
    //     }
    //     setAudioState(prevState => ({ ...prevState, status: !audioState.status }))
    // }
    // useEffect(() => {
    //     stopAudio()
    // }, [audioState.playbackSpeed])


    // // capturing frames from input video source
    // // creating a canvas and then attaching video reference height, width
    // // using 'useRef' hook to get the input source features
    // // feeding the canvas content (Base64 encoded image) to tensor for predict ('predictTensor' function)
    // const handleCaptureFrame = () => {
    //     const video: (any | null) = videoRef.current;
    //     const canvas = document.createElement('canvas');
    //     const ctx = canvas.getContext('2d');

    //     canvas.width = 250;
    //     canvas.height = 250
    //     ctx?.drawImage(video, 0, 0, 250, 250);
    //     const imageData = canvas.toDataURL();
    //     setCapturedFrame(imageData);
    //     runModel(imageData, setPredAssumption, props?.TFData?.set)

    // }

    // // in the below function get 'getPredctionClass' output the yoga pose class based on tensor prediction values
    // // when the prediction class is available, if the pose matches the provided pose if output success else output an unsuccess
    // // while setting the user (success - unsuccess) message, it picks the random value form the custom defined array of messages 
    // const handleInteractTensor = () => {
    //     const random = (length: number) => {
    //         return Math.floor(Math.random() * length)
    //     }
    //     console.log("handleinteract", predAssumption);

    //     if (predAssumption) {

    //         const predClass = getPredictionClass(predAssumption, props?.TFData?.set)


    //         if (props?.TFData?.class === predClass) {
    //             const randomIndex: number = random(successMessageList.length)
    //             playUserAudio(`seg${randomIndex}.mp3`, 'user/pose/valid', 'slow')
    //             setPoseMessage({ isSuccess: true, poseMessage: successMessageList[randomIndex] });
    //             console.log(successMessageList[randomIndex], randomIndex);

    //         } else {
    //             const randomIndex: number = random(successMessageList.length)
    //             playUserAudio(`seg${randomIndex}.mp3`, 'user/pose/invalid', 'slow')
    //             setPoseMessage({ isSuccess: false, poseMessage: unsuccessMessageList[randomIndex] });
    //         }
    //     }
    // }

    // // 'handleInteractTensor' function will be executed when the 'predAssumption' value is available
    // useEffect(() => {
    //     handleInteractTensor()
    // }, [predAssumption])



    // const runTensor = () => {
    //     console.log('Stated');
    //     setLoad(true)
    //     const id = setInterval(async () => {
    //         setPredAssumption(null)
    //         console.log('STG')
    //         handleCaptureFrame()

    //     }, 3000);
    //     setIntervalId(id);
    // }

    // const stopTensor = () => {
    //     if (intervalId) {
    //         clearInterval(intervalId)
    //     }
    //     setLoad(false)
    // }




    return (
        <>
            <div className="flex w-full flex-col items-center">


                <div className="mt-20 sm:mt-10 w-11/12 mx-auto xl:mx-0  flex flex-col">
                    <Title
                        name={props?.name}
                        originalName={props?.originalName}
                        description={props?.description}
                    />
                </div>


                <div className="-z-50 mt-5 sm:mt-10 w-11/12 mx-auto xl:mx-0  flex flex-col">
                    <VideoSection 
                        tutorial = {props?.tutorial}
                        name = {props?.name}
                    />
                </div>                
                
                <div className="-z-50 mt-5 sm:mt-10 w-11/12 mx-auto xl:mx-0  flex flex-col">
                    <UserSelection 
                       
                    />
                </div>
            </div>


        </>
    )
}