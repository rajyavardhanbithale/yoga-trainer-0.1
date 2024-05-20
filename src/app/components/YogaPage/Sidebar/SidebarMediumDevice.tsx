import Image from "next/image"
import { YogaPose } from "../../../../../types"
import { useState } from "react"

export default function SidebarMediumDevice(props: any) {
    const [showSideBar, setShowSideBar] = useState<boolean>(false)
    const [exitAnimation, setExitAnimation] = useState<boolean>(false)
    const pose = props?.pose

    function playExitAnimation() {
        setExitAnimation(true)
        setTimeout(() => {
            setExitAnimation(false)
            setShowSideBar(false)
        }, 500)
    }

    return (
        <>
            {!showSideBar &&
                <div
                    onClick={() => setShowSideBar(true)}
                    className="animate-fade-left cursor-pointer w-12 sm:w-16 absolute top-5 left-5 bg-accent rounded-full shadow-xl hover:shadow-blue-800/50 duration-700">
                    <img
                        src="/yogapage/light-med-yoga.gif"
                        alt="select pose"

                    />
                </div>
            }

            {showSideBar &&
                <div className="z-50 absolute lg:w-[22%] xl:w-[12%] bg-white">
                    <div className={` px-4 grid grid-cols-1 gap-4 min-h-[100vh] overflow-y-auto sidebar_scrollable ${exitAnimation ? "sidebar_exit" : "sidebar_entry"}`}>


                        <div className="cursor-pointer flex flex-col my-3 w-full sticky top-3 shadow-lg z-50">

                            <span
                                onClick={props?.toggleDarkMode}
                                className="w-full z-40 text-2xl text-center bg-secondary p-3 rounded-2xl font-semibold text-button-text">
                                Select Pose
                            </span>
                            <span
                                onClick={playExitAnimation}
                                className="mt-2 w-full z-40 text-xl text-center bg-secondary p-1 rounded-2xl font-semibold text-button-text">
                                Close
                            </span>

                        </div>

                        {pose && pose?.map((name: YogaPose, idx: number) => (
                            <div
                                key={idx}
                                onClick={() => {props?.handleSelectYogaPose(name); playExitAnimation()}}
                                // className={`min-h-[100px] rounded-2xl overflow-hidden hover:bg-accent border-[3px] ${highlight === name.id ? "border-accent shadow-xl opacity-100 brightness-100 animate-fade animate-once animate-ease-in animate-duration-300" : "border-gray-600"} ${grayedOut && "opacity-40 brightness-60"}`}>
                                className={`cursor-pointer min-h-[100px] rounded-2xl overflow-hidden hover:bg-accent border-[3px] ${props?.highlight === name.id ? "border-accent shadow-xl opacity-100 brightness-100" : "border-gray-600"}`}>
                                <Image
                                    src={`/pose/image/webp/${name?.image}`}
                                    alt={name?.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full hover:scale-[1.02] object-cover duration-500 hover:brightness-[.88]"
                                    priority
                                >

                                </Image>

                                <span className=" m-1.5 p-1 capitalize tracking-wide flex justify-center text-text text-center font-semibold">
                                    {name?.name}
                                </span>
                            </div>
                        ))}

                        <div className="mb-10 text-center text-xl">&copy; RAGE  2024</div>
                    </div>
                </div>
            }
        </>
    )
}