'use client'

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import { YogaPoseAPI, YogaPoseDetailed } from "../../../types"
import MainBar from "../components/Mainbar"

import useFetch from "../hooks/useFetch"
import SidebarSkeleton from "../components/skeleton/SidebarSkeleton"
import MainbarSkeleton from "../components/skeleton/MainbarSkeleton"

export default function Yoga() {
    const [selectedPose, setSelectedPose] = useState<number>(101)
    const [data, setData] = useState<YogaPoseAPI[] | string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const [passPoseData, setPassPoseData] = useState<any>()
    const { fetchAPI } = useFetch()

    const url = '/api/pose';
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const response = await fetchAPI(url) as YogaPoseAPI[] | string

            if (response) {
                setData(response)
                setLoading(false)
            }


        };
        fetchData();
    }, [url]);


    useEffect(() => {
        const filter = typeof data === 'string' ? [] : (data as YogaPoseAPI[]).filter((item: YogaPoseAPI) => item.id === selectedPose);
        setPassPoseData(filter[0])
    }, [selectedPose, data])


    return (
        <>

            <div className='flex flex-row'>



                {loading ? (
                    <>
                        <SidebarSkeleton />
                        <MainbarSkeleton />
                    </>
                ) : (
                    <>
                        <Sidebar
                            setSelectedPose={setSelectedPose}
                            pose={data}
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
                    </>
                )}
            </div>

        </>
    )
}