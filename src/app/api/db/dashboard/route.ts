

import { createClient } from "@/app/utils/supabase/middleware";
import { NextRequest, NextResponse } from "next/server";
import { poseInfo } from "../../pose/poseApiData";
import { YogaPoseAPI, DBFetchSupabase } from "../../../../../types";

const poseAnalysis = process.env.NEXT_PUBLIC_SUPABASE_DATABASE_POSE_ANALYSIS!



export async function GET(request: NextRequest) {

    const { supabase, response } = createClient(request);

    // stage 1 - extract user information
    const userInfo = await supabase.auth.getUser()
    const userID = userInfo?.data?.user?.id


    // stage 2 - query from database
    const { data, error } = await supabase
        .from(poseAnalysis)
        .select('poseID, correctPose, startTime')
        .eq('userID', '7e7d762bceda0727840cefb7781ebea0')



    // stage A. today pose list
    const generateTodayPoseList = (nPose: number): number[] => {

        // extracting available pose id from poseInfo
        const poseData: YogaPoseAPI[] = poseInfo
        const poseIDList = poseData.map(item => item?.id)

        // picking random n pose from the poseIDList
        const shuffled = poseIDList.sort(() => 0.5 - Math.random())

        // check overflow condition
        nPose = shuffled.length >= nPose ? nPose : shuffled.length

        // return the final list of pose id
        const randomPoseIDList = shuffled.slice(0, nPose)
        return randomPoseIDList
    }

    // stage B. user active days
    const generateUserActiveDays = () => {
        const epochTimeList = data
        const epochTimeExtracted = epochTimeList?.map(time => time?.startTime)


        return epochTimeExtracted
    }

    // stage C. user recent activity
    const generateUserRecentActivity = (nActivity: number): number[] => {
        // extracting available start time as epoch time from data
        const userActivity = data as DBFetchSupabase[]
        const userActivityEpochList = userActivity.map(item => item?.poseID)

        // check overflow condition
        nActivity = userActivityEpochList.length >= nActivity ? nActivity : userActivityEpochList.length

        // return the final list of pose id according to sorted epoch time
        const recentActivity = userActivityEpochList.slice(0,nActivity)
        
        return recentActivity

    }

    
    const responseData: {[key:string]: any} = {
        todayPoseList: generateTodayPoseList(3),
        userActiveDays: generateUserActiveDays(),
        userRecentActivity: generateUserRecentActivity(5),
    }
    



    // // stage - 4 (optional) handle error
    // if (error) {
    //     console.log(error);

    //     return NextResponse.json({
    //         message: "error in fetching data to database"
    //     }, {
    //         status: 400
    //     })
    // }


    // stage - 4 sending data to client
    return NextResponse.json({
        responseData
    }, {
        status: 200
    })
}
