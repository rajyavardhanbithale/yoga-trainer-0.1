'use client'

import { Sedan } from "next/font/google";
import { Montserrat } from "next/font/google";
import { YogaPoseDetailed } from "../interface/CustomInterface";
import { useEffect, useState } from "react";
import useTensorFlow from "../hooks/useTensorFlow";
import useConvertTensorClass from "../hooks/useConvertTensorClass";

const titleFont = Sedan(
    {
        subsets: ["latin"],
        weight: ["400"]
    }
);
const advantagesFont = Montserrat(
    {
        subsets: ["latin"],
    }
);


export default function MainBar(props: YogaPoseDetailed) {
    const [pred, setPred] = useState<string | null>(null)
    const [poseSuccess, setPoseSuccess] = useState<boolean>(false)
    const [poseMessage, setPoseMessage] = useState<string>()

    const excludeObjectContainer: number[] = [104]

    const successMessage: string[] = ["Correct pose!", "Nailed it!", "Great form!", "Well done", "You got it!"]
    const unsuccessMessage: string[] = ["Incorrect pose.", "Try once more.", "Keep practicing.", "Check your posture.", "Try another angle."]


    // Run Tensorflow Model and set class-name/pose 
    async function handleTensordPredict(set: number) {
        const imgElement = document.getElementById('tfImg') as HTMLImageElement | null;
        const TFsrc = imgElement?.src;
        const TFrun = await useTensorFlow(TFsrc, set)
        const TFpred = useConvertTensorClass(TFrun, set)
        console.log(TFpred);
        setPred(TFpred)

    }

    // Generate Random Number
    function randomNumber(len: number) {
        return Math.floor(Math.random() * len)
    }

    // compare predicted and user selected class/pose
    function checkTFPedictionWithUser() {
        if (pred === props?.TFData?.class) {
            setPoseSuccess(true)
            console.log("yes");
            
            setPoseMessage(successMessage[randomNumber(successMessage.length)])
        } else {
            console.log("no");
            setPoseSuccess(false)
            setPoseMessage(unsuccessMessage[randomNumber(unsuccessMessage.length)])
        }
    }

    // executing checkTFPedictionWithUser when prediction available
    useEffect(() => {
        checkTFPedictionWithUser()
    }, [pred,setPred])


    const audioFiles = [
        'audio/tree/seg1.wav',
        'audio/tree/seg2.wav',
        'audio/tree/seg3.wav',
        'audio/tree/seg4.wav',
        'audio/tree/seg5.wav',
    ];

    const [currentAudio, setCurrentAudio] = useState(null);

    useEffect(() => {
        // Function to handle audio ended event
        const handleAudioEnded = () => {
            const nextAudio = getRandomAudio();
            playAudio(nextAudio);
        };

        // Add event listener for audio ended event
        if (currentAudio) {
            currentAudio.addEventListener('ended', handleAudioEnded);
        }

        // Cleanup function to remove event listener
        return () => {
            if (currentAudio) {
                currentAudio.removeEventListener('ended', handleAudioEnded);
            }
        };
    }, [currentAudio]);

    const getRandomAudio = () => {
        const randomIndex = Math.floor(Math.random() * audioFiles.length);
        return audioFiles[randomIndex];
    };

    const playAudio = (audio) => {
        const audioElement = new Audio(audio);
        setCurrentAudio(audioElement);
        audioElement.play();
    };


    return (
        <>
            <div className="lg:w-[78%] xl:w-[88%] mt-5 sidebar_scrollable">
                <div className="m-4 mx-4">
                    {/* Title */}
                    <div className="grid grid-cols-1 justify-center place-items-center gap-2">
                        <div className={`${titleFont.className} flex items-center text-4xl font-semibold capitalize`}>
                            <div>{props.name}</div>
                            <div className="h-1.5 w-1.5 bg-text rounded-full mx-3"></div>
                            <div>{props.originalName}</div>
                        </div>
                        <span className={`${titleFont.className} text-xl capitalize font-semibold  text-center`}>
                            "{props.description}"
                        </span>
                    </div>
                </div>


                <div className="grid xl:grid-cols-2 md:grid-cols-1 p-5 gap-10">
                    {/* Source */}
                    <div className="sm:col-span-1 min-h-[400px]">
                        {/* <div className="bg-gray-800 w-full h-full rounded-2xl"></div> */}
                        <div className="flex justify-center h-full max-h-[400px] border-[3px] rounded-2xl border-text">

                            <img id="tfImg" src="warr.webp"
                                alt={props.name}
                                className={`w-3/4 ${excludeObjectContainer.includes(props.id) ? "object-scale-down" : "object-cover"} down object-center h-auto rounded-2xl`}
                            >
                            </img>
                        </div>
                    </div>

                    {/* Tutorial */}
                    <div className="sm:col-span-1 min-h-[400px]">
                        <div className="flex justify-center h-full max-h-[400px] border-[3px] rounded-2xl border-text">

                            <img src={`/pose/tutorial/${props?.tutorial}`}
                                alt={props.name}
                                className={`w-3/4 ${excludeObjectContainer.includes(props.id) ? "object-scale-down" : "object-cover"} down object-center h-auto rounded-2xl`}
                            >
                            </img>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-7 my-6 p-5 gap-10">
                    <div className="col-span-4">
                        <div className={`flex flex-col ${advantagesFont.className}`}>
                            <span className="text-2xl font-semibold capitalize my-2">
                                benefits of {props.originalName}
                            </span>
                            {props?.benefits?.map((text, idx) => (
                                <div key={idx}>
                                    <span className="text-xl font-semibold">
                                        {text.split(":")[0]} -
                                    </span>
                                    <span className="text-lg">
                                        {text.split(":")[1]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="w-full h-full flex flex-col items-center justify-center border-[3px] border-text rounded-2xl">

                            {/* Status */}
                            <div className="mx-auto text-blue-500 font-semibold text-2xl">
                                Turn on the camera
                            </div>

                            <div
                                onClick={() => handleTensordPredict(props.TFData.set)}
                                className="bg-green-500 cursor-pointer text-white font-semibold rounded-2xl p-2">
                                Run Tensor
                            </div>
                            <button onClick={() => playAudio(getRandomAudio())}>Play Random Audio</button>

                            <div className="mx-auto font-semibold text-2xl">
                                <span className={`${poseSuccess ? "text-green-500" : "text-red-500"}`}>

                                    {poseMessage && poseMessage}
                                </span>
                            </div>


                        </div>
                    </div>

                    {/* <div className="col-span-3">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Fr5kiIygm0c?si=6Vq3zX_dktVZj0I3" title="YouTube video player" frameBorder="0"  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div> */}
                </div>


            </div>
        </>
    )
}