'use client'

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import YogaPose, { YogaPoseAPI } from "../interface/CustomInterface"
import MainBar from "../components/MainBar"

import useFetch from "../hooks/useFetch"

export default function Yoga() {
    const [selectedPose, setSelectedPose] = useState<number>(101)
    const [data, setData] = useState<YogaPoseAPI[] | string>('');

    const [passPoseData,setPassPoseData] = useState<YogaPose>()

    const url = '/api/pose';
    useEffect(() => {
        const fetchData = async () => {
            const result = await useFetch(url);
            setData(result)

        };
        fetchData();
    }, [url]);


    useEffect(() => {
        const filter = data && data.filter<YogaPoseAPI>((item: YogaPose) => item.id === selectedPose)
        setPassPoseData(filter[0])
    }, [selectedPose, data])

    console.log(passPoseData);
    

    return (
        <>

            <div className="flex flex-row">

                <Sidebar 
                    setSelectedPose={setSelectedPose}
                    pose = {data}
                    ></Sidebar>
                <MainBar
                    id={passPoseData?.id}
                    name={passPoseData?.name}
                    originalName={passPoseData?.originalName}
                    description={passPoseData?.description}
                    benefits={passPoseData?.benefits}
                    tutorial={passPoseData?.tutorial}
                    image={passPoseData?.image}
                ></MainBar>
            </div>

        </>
    )
}