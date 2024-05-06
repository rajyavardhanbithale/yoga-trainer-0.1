'use client'

import Image from "next/image"
import YogaPose from "../interface/CustomInterface"
import { useState } from "react";


export default function Sidebar(props: any) {
    const [highlight,setHighlight] = useState<number>(101);

    const pose: YogaPose[] = [
        {
            id: 101,
            name: "tree pose",
            originalName: "vṛkṣāsana",
            image: "tree.png"
        },
        {
            id: 102,
            name: "warrior 1",
            originalName: "Virabhadrasana I",
            image: "warrior1.png"
        },
        {
            id: 103,
            name: "downward dog",
            originalName: "Adho Mukha Svanasana",
            image: "downdog.png"
        },
        {
            id: 104,
            name: "Goddess",
            originalName: "Utkata Konasana",
            image: "goddess.png"
        },
        {
            id: 104,
            name: "Goddess",
            originalName: "Utkata Konasana",
            image: "goddess.png"
        }
    ];

    console.log(highlight);
    
    function handleSelectYogaPose(selectedPose: YogaPose) {
        setHighlight(selectedPose.id)
        props.setSelectedPose(selectedPose)
    }

    return (
        <>
            <div className="lg:w-[22%] xl:w-[12%]">
                <div className="m-4 mx-4  grid grid-cols-1 gap-4 overflow-y-auto  sidebar_scrollable">
                    {pose.map((name: YogaPose, idx: number) => (

                        <div
                            key={idx}
                            onClick={() => handleSelectYogaPose(name)}
                            className={`min-h-[100px] rounded-2xl overflow-hidden hover:bg-gray-200 border-[3px] ${highlight === name.id ? "border-blue-500 shadow-2xl" : "border-gray-600"}`}>
                            <Image
                                src={`/pose/image/${name?.image}`}
                                alt={name.name}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full hover:scale-105 object-cover duration-500 hover:brightness-[.80]"
                            >

                            </Image>

                            <span className="m-1.5 p-1 capitalize tracking-wide flex justify-center">
                                {name.name}
                            </span>
                        </div>

                    ))}

                </div>
            </div>
        </>
    )
}