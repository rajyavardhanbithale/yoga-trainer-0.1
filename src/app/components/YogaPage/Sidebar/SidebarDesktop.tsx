import Image from "next/image"
import { YogaPose } from "../../../../../types"

export default function SidebarMobile(props:any){
    const pose = props?.pose
    return (
        <>
              <div className="mx-4 grid grid-cols-1 gap-4 overflow-y-auto sidebar_scrollable">
                    <span
                        onClick={props?.toggleDarkMode}
                        className="text-2xl text-center mt-6 bg-secondary p-3 rounded-2xl font-semibold text-button-text sticky top-3 z-50 shadow-lg">
                        Select Pose
                    </span>
                    {pose && pose?.map((name: YogaPose, idx: number) => (
                        <div
                            key={idx}
                            onClick={() => props?.handleSelectYogaPose(name)}
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
        </>
    )
}