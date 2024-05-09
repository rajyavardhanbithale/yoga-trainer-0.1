'use client'

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import { YogaPoseAPI, YogaPoseDetailed } from "../interface/CustomInterface"
import MainBar from "../components/MainBar"

import useFetch from "../hooks/useFetch"

export default function Yoga() {
    const [selectedPose, setSelectedPose] = useState<number>(101)
    const [data, setData] = useState<YogaPoseAPI[] | string>('');

    const [passPoseData,setPassPoseData] = useState<any>()

    const url = '/api/pose';
    useEffect(() => {
        const fetchData = async () => {
            const result = await useFetch(url) as YogaPoseAPI[] | string;

            setData(result)
            
        };
        fetchData();
    }, [url]);


    useEffect(() => {
        const filter = typeof data === 'string' ? [] : (data as YogaPoseAPI[]).filter((item: YogaPoseAPI) => item.id === selectedPose);
        setPassPoseData(filter[0])
    }, [selectedPose, data])

    // console.log(passPoseData);
    

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
                    TFData={passPoseData?.TFData}
                    audioData={passPoseData?.audioData}
                ></MainBar>
            </div>

        </>
    )
}