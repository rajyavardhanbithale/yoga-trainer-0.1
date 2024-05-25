'use client'

import { useEffect, useState } from "react";

import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import { createClientComponentClient, User } from "@supabase/auth-helpers-nextjs";
import useFetch from "../hooks/useFetch";
import { APIYogaDataMinimal } from "../../../types";

interface IFResponse1 {
    todayPoseList: any
    userActiveDays: any
    userRecentActivity: any
    userLastNDaysActivity: any
}

export default function Page() {
    const [user, setUser] = useState<User | null>()
    const [response1, setResponse1] = useState<IFResponse1>()
    const [poseToday, setPoseToday] = useState<APIYogaDataMinimal[]>()
    const [userRecentActivity, setUserRecentActivity] = useState<APIYogaDataMinimal[]>()

    const { fetchAPI } = useFetch()

    useEffect(() => {
        const handleUserGET = async () => {
            const supabase = createClientComponentClient()
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)

        }

        const fetchUserDetails = async () => {
            // today pose, user activity, user recent activity
            const response1: any = await fetchAPI('/api/db/dashboard')
            setResponse1(response1?.responseData)

            // pose information according to response1
            const response2: any = await fetchAPI(`/api/pose?poseID=${response1?.responseData?.todayPoseList.toString()}`)
            setPoseToday(response2.poseDataList)

            // user recent activity
            const response3: any = await fetchAPI(`/api/pose?poseID=${response1?.responseData?.userRecentActivity.toString()}`)
            setUserRecentActivity(response3.poseDataList)
        }


        handleUserGET()
        fetchUserDetails()


    }, [])



    return (
        <>
            {/* <Calendar epochTimes={Time} /> */}

            <div className="grid grid-cols-9 max-w-[2200px] mx-auto">
                <div className="hidden sm:block xl:col-span-1 sm:col-span-2 h-screen sticky top-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="xl:col-span-8 sm:col-span-7 col-span-full">
                    {(userRecentActivity && poseToday) &&
                        <Dashboard
                            name={user?.user_metadata.name}
                            todayPoseList={poseToday}
                            userActiveDays={response1?.userActiveDays}
                            userRecentActivity={userRecentActivity}
                            userLastNDaysActivity={response1?.userLastNDaysActivity}
                            
                        />
                    }
                </div>
            </div>
        </>
    )
}