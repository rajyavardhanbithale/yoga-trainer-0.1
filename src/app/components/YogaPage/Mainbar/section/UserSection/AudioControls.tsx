'use client'

import useAudioManager from "@/app/hooks/useAudioPlayer";
import { AudioState } from "../../../../../../../types";
import { useEffect, useState } from "react";
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5";
import DropdownSelect from "./helper/DropdownSelect";
import { IoIosArrowDown } from "react-icons/io";
import MusicSelection from "./helper/MusicSelection";

export default function AudioControls(props: any) {
    const [audioState, setAudioState] = useState<AudioState>({ status: true, state: "", playbackSpeed: "fine" })
    const [dropdown, setDropdown] = useState<boolean>(false)


    const { playNarratorAudio, playUserAudio, stopAudio } = useAudioManager();


    function playAudio(source: (string | Array<string>), state: (string)) {
        stopAudio()
        if (audioState.status) {
            playNarratorAudio(source, props?.audioClass, audioState?.playbackSpeed)
            setAudioState(prevState => ({ ...prevState, state: state }))
        } else {
            setAudioState(prevState => ({ ...prevState, state: "" }))
        }
        setAudioState(prevState => ({ ...prevState, status: !audioState.status }))
    }
    useEffect(() => {
        stopAudio()
    }, [audioState.playbackSpeed])

    return (
        <>  
        

            <div className="sm:h-[30vh] w-full grid grid-cols-2 p-5 place-content-center text-center gap-8 mt-auto">
                <div className="col-span-1 flex flex-col  text-center">
                    <span className="text-xl">Narrator</span>
                    <span
                        onClick={() => playAudio(props?.mainAudio, "narrator")}
                        className="text-button-text inline-flex justify-center w-16 mx-auto rounded-2xl bg-secondary hover:brightness-75 duration-300 cursor-pointer">
                        {audioState.state === "narrator" ? (
                            <IoVolumeMediumOutline className="text-4xl p-1" />
                        ) : (
                            <IoVolumeMuteOutline className="text-4xl p-1" />
                        )}
                    </span>
                </div>

                <div className="col-span-1 flex flex-col  text-center">
                    <span className="text-xl">Narrator Speed</span>
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


                <div className="col-span-1 flex flex-col  text-center">
                    <span className="text-xl">Tips</span>
                    <span
                        onClick={() => playAudio(props?.narratorSegment, "tips")}
                        className="text-button-text inline-flex justify-center w-16 mx-auto rounded-2xl bg-secondary hover:brightness-75 duration-300 cursor-pointer">
                        {audioState.state === "tips" ? (
                            <IoVolumeMediumOutline className="text-4xl p-1" />
                        ) : (
                            <IoVolumeMuteOutline className="text-4xl p-1" />
                        )}
                    </span>
                </div>

                <div className="col-span-1 flex flex-col ] text-center">
                    <span className="text-xl">Relax Music</span>
                    <span>
                        <MusicSelection></MusicSelection>
                    </span>
                </div>
            </div>

        </>
    )
}
