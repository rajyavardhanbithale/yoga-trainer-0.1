'use client'

import Image from "next/image"
import { YogaPose } from "../../../../../types"
import { useState } from "react";
import { ToastContainer, toast, Zoom, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SidebarMobile from "./SidebarDesktop";
import SidebarMediumDevice from "./SidebarMediumDevice";

export default function Sidebar(props: any) {
    const [highlight, setHighlight] = useState<number>(101);
    const [grayedOut, setGrayedOut] = useState<number | null>(null);

    const pose = props?.pose


    function handleSelectYogaPose(selectedPose: YogaPose) {
        setGrayedOut(selectedPose.id)
        setHighlight(selectedPose.id)
        props.setSelectedPose(selectedPose.id)
        // notify()
    }

    // const selectionMessage: Array<string> = ["👍 Great choice! Awesome!", "🌟 Fantastic pick! You're on fire!", "🙌 Amazing selection! Keep it up!", "💪 Superb choice! You're crushing it!", "🔥 Brilliant pick! You're unstoppable!", "🎉 Impressive choice! Keep that momentum!", "🌟 Terrific pick! You're a star!", "🌺 Splendid selection! You're in your element!", "🌟 Marvelous pick! Keep up the magic!"]
    // const notify = () => toast.success(
    //     '  '+selectionMessage[Math.floor(Math.random() * selectionMessage.length)]

    // )



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

            <div className="hidden xl:block lg:w-[22%] xl:w-[12%]">
                <SidebarMobile
                    pose={pose}
                    handleSelectYogaPose={handleSelectYogaPose}
                    highlight={highlight}
                    toggleDarkMode={toggleDarkMode}

                />
            </div>            
            
            <div className="xl:hidden block">
                <SidebarMediumDevice
                    pose={pose}
                    handleSelectYogaPose={handleSelectYogaPose}
                    highlight={highlight}
                    toggleDarkMode={toggleDarkMode}

                />
            </div>


        </>
    )
}