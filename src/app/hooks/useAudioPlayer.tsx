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

    const play = (audioUrl: (string | Array<string>),audioClass: string,playbackSpeed:string) => {
        let newAudioURL: string
        setPlaybackSpeed(playbackSpeed)

        const playAudio = (newAudioURL:string) => {
            const newAudio = new Audio(newAudioURL)
            newAudio.play()
            newAudio.playbackRate = playbackSpeedMap[playbackSpeed]
            setAudio(newAudio)
            setIsPlaying(true)
        }


        if (Array.isArray(audioUrl)) {
            setAudioArr(audioUrl)
            setAudioClass(audioClass)
            newAudioURL = `/audio/${audioClass}/` + audioUrl[Math.floor(Math.random() * audioUrl.length)]
            
            playAudio(newAudioURL)


        } else {
            setAudioClass(audioClass)
            newAudioURL = `/audio/${audioClass}/` + audioUrl
            playAudio(newAudioURL)
        }

    }

    const stop = () => {
        if (audio) {
            audio.pause()
            audio.currentTime = 0
            setIsPlaying(false)
        }
    }



    useEffect(() => {
        if (audio && playbackSpeed && audioClass) {
            audio.addEventListener('ended', () => {
                setIsPlaying(false)
                if (Array.isArray(audioArr)){
                    play(audioArr,audioClass,playbackSpeed)
                    
                }
            })
            return () => {
                audio.removeEventListener('ended', () => {
                    setIsPlaying(false)
                })
            }
        }
    }, [audio])

    return { play, stop, isPlaying }
}


export default useAudioManager