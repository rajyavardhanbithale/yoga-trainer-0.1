'use client'

import Image from "next/image"
import { YogaPose } from "../interface/CustomInterface"
import { useEffect, useState } from "react";
import { ToastContainer, toast, Zoom, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Sidebar(props: any) {
    const [highlight, setHighlight] = useState<number>(101);
    const [grayedOut, setGrayedOut] = useState<number | null>(null);

    const pose = props?.pose


    function handleSelectYogaPose(selectedPose: YogaPose) {
        setGrayedOut(selectedPose.id)
        setHighlight(selectedPose.id)
        props.setSelectedPose(selectedPose.id)
    }

    const selectionMessage: Array<string> = ["👍 Great choice! Awesome!", "🌟 Fantastic pick! You're on fire!", "🙌 Amazing selection! Keep it up!", "💪 Superb choice! You're crushing it!", "🔥 Brilliant pick! You're unstoppable!", "🎉 Impressive choice! Keep that momentum!", "🌟 Terrific pick! You're a star!", "🌺 Splendid selection! You're in your element!", "🌟 Marvelous pick! Keep up the magic!"]
    const notify = () => toast(
        selectionMessage[Math.floor(Math.random() * selectionMessage.length)],
        { progressStyle: { color: "green" } }
    )

    useEffect(() => {
        notify()
    }, [highlight])

    function toggleDarkMode() {
        console.log("prsd");
        const body = document.querySelector('body') as HTMLElement
        const dataTheme = body.getAttribute('data-theme')

        if (dataTheme === 'dark') {
            body.setAttribute('data-theme', 'light')
        } else {
            body.setAttribute('data-theme', 'dark')
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Zoom}
            />

            <div className="lg:w-[22%] xl:w-[12%]">
                <div className="mx-4  grid grid-cols-1 gap-4 overflow-y-auto  sidebar_scrollable">
                    <span
                        onClick={toggleDarkMode}
                        className="text-2xl text-center mt-6 bg-secondary p-3 rounded-2xl font-semibold text-button-text sticky top-3 z-50 shadow-lg">
                        Select Pose
                    </span>
                    {pose && pose?.map((name: YogaPose, idx: number) => (

                        <div
                            key={idx}
                            onClick={() => handleSelectYogaPose(name)}
                            className={`min-h-[100px] rounded-2xl overflow-hidden hover:bg-accent border-[3px] ${highlight === name.id ? "border-accent shadow-xl opacity-100 brightness-100 animate-fade animate-once animate-ease-in animate-duration-300" : "border-gray-600"} ${grayedOut && "opacity-40 brightness-60"}`}>
                            <Image
                                src={`/pose/image/webp/${name?.image}`}
                                alt={name?.name}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full hover:scale-105 object-cover duration-500 hover:brightness-[.80]"
                            >

                            </Image>

                            <span className="m-1.5 p-1 capitalize tracking-wide flex justify-center text-text text-center font-semibold">
                                {name?.name}
                            </span>
                        </div>
                    ))}

                    <div className="mb-10 text-center text-xl">&copy; RAGE  2024</div>


                </div>
            </div>
        </>
    )
}