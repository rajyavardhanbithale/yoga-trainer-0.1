'use client'

import { useState } from "react"
import Sidebar from "../components/Sidebar"
import YogaPose from "../interface/CustomInterface"
import MainBar from "../components/MainBar"

export default function Yoga() {
    const [selectedPose, setSelectedPose] = useState<YogaPose>({
        id: 101,
        name: "tree pose",
        originalName: "vṛkṣāsana",
        image: "tree.png"
    })


    console.log(selectedPose);

    return (
        <>

            <div className="flex flex-row">

                <Sidebar setSelectedPose={setSelectedPose}></Sidebar>
                <MainBar
                    id={selectedPose.id}
                    name={selectedPose.name}
                    originalName={selectedPose.originalName}
                    image={selectedPose.image}
                ></MainBar>
            </div>

        </>
    )
}