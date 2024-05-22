

import { createClient } from "@/app/utils/supabase/middleware";
import { NextRequest, NextResponse } from "next/server";

const poseAnalysis = process.env.NEXT_PUBLIC_SUPABASE_DATABASE_POSE_ANALYSIS!

export async function POST(request: NextRequest) {
    const body = await request.json()
    console.log(body);
    
    
    const { supabase, response } = createClient(request);


    const { error } = await supabase
        .from(poseAnalysis)
        .insert(body)
 

    if (error){
        console.log(error);
        
    }

    return NextResponse.json({ response: "op" });
}
