'use client'

import { useEffect, useState } from "react"

const playbackSpeedMap:{[key:string]:number} = {
    slower: 0.5,
    slow: 0.75,
    fine: 1,
    fast: 1.25,
    fastest: 1.5,
}


function useAudioManager() {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const [audioArr, setAudioArr] = useState<Array<string>>()
    const [audioClass, setAudioClass] = useState<string>()
    const [playbackSpeed, setPlaybackSpeed] = useState<string>()

    const playNarratorAudio = (source: (string | Array<string>),audioClass: string,playbackSpeed:string) => {
        let newAudioURL: string
        setPlaybackSpeed(playbackSpeed)

        const playAudio = (newAudioURL:string) => {
            const newAudio = new Audio(newAudioURL)
            newAudio.play()
            newAudio.volume = 0.8
            newAudio.playbackRate = playbackSpeedMap[playbackSpeed]
            setAudio(newAudio)
            setIsPlaying(true)
        }


        if (Array.isArray(source)) {
            setAudioArr(source)
            setAudioClass(audioClass)
            newAudioURL = `/audio/${audioClass}/` + source[Math.floor(Math.random() * source.length)]
            
            playAudio(newAudioURL)


        } else {
            setAudioClass(audioClass)
            newAudioURL = `/audio/${audioClass}/` + source
            playAudio(newAudioURL)
        }

    }

    const stopAudio = () => {
        if (audio) {
            audio.pause()
            audio.currentTime = 0
            setIsPlaying(false)
        }
    }

    const playUserAudio = (source: (string | Array<string>),audioClass: string,playbackSpeed:string) => {
        let newAudioURL: string
        setPlaybackSpeed(playbackSpeed)

        const playAudio = (newAudioURL:string) => {
            const newAudio = new Audio(newAudioURL)
            newAudio.play()
            newAudio.volume = 1
            newAudio.playbackRate = playbackSpeedMap[playbackSpeed]
        }
        setAudioClass(audioClass)
        newAudioURL = `/audio/${audioClass}/` + source
        playAudio(newAudioURL)
    }



    useEffect(() => {
        if (audio && playbackSpeed && audioClass) {
            audio.addEventListener('ended', () => {
                setIsPlaying(false)
                if (Array.isArray(audioArr)){

                    playNarratorAudio(audioArr,audioClass,playbackSpeed)
                    
                }
   
            })
            return () => {
                audio.removeEventListener('ended', () => {

                })
            }
        }
    }, [audio])

    return { playNarratorAudio, playUserAudio, stopAudio, isPlaying }
}


export default useAudioManager