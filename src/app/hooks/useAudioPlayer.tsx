'use client'

import { useEffect, useState } from "react";

function useAudioManager() {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const play = (audioUrl: string) => {
        const newAudioURL = '/audio/tree/' + audioUrl
        const newAudio = new Audio(newAudioURL);
        newAudio.play();
        setAudio(newAudio);
        setIsPlaying(true);
    };

    const stop = () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        if (audio) {
            audio.addEventListener('ended', () => {
                setIsPlaying(false);
            });
            return () => {
                audio.removeEventListener('ended', () => {
                    setIsPlaying(false);
                });
            };
        }
    }, [audio]);

    return { play, stop, isPlaying };
}


export default useAudioManager