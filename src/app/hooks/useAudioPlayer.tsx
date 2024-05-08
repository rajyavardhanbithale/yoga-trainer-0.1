'use client'

import { useEffect, useState } from "react"

function useAudioManager() {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const [audioArr, setAudioArr] = useState<Array<string>>()
    const [audioClass, setAudioClass] = useState<string>()

    const play = (audioUrl: (string | Array<string>), audioClass?: string) => {
        let newAudioURL: string

        const playAudio = (newAudioURL:string) => {
            const newAudio = new Audio(newAudioURL)
            newAudio.play()
            setAudio(newAudio)
            setIsPlaying(true)
        }


        if (Array.isArray(audioUrl)) {
            setAudioArr(audioUrl)
            setAudioClass(audioClass)
            newAudioURL = `/audio/${audioClass}/` + audioUrl[Math.floor(Math.random() * audioUrl.length)]
            
            playAudio(newAudioURL)
            console.log(newAudioURL)

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
        if (audio) {
            audio.addEventListener('ended', () => {
                setIsPlaying(false)
                if (Array.isArray(audioArr)){
                    play(audioArr,audioClass)
                    
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