import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from "./app/utils/supabase/middleware";
import CryptoJS from 'crypto-js';

const INSERTION_CHECK_TIME = 120 // in seconds
const USERDB = process.env.NEXT_PUBLIC_SUPABASE_DATABASE_USER_PROFILE!

export async function middleware(request: NextRequest) {
    const { supabase, response } = createClient(request);
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const path = request.nextUrl.pathname


    function secondsToEpoch(seconds: number) {
        const milliseconds = seconds * 1000;
        const date = new Date(milliseconds);
        return date.getTime();
    }


    const updateUserDatabase = async () => {
        const userID = user && CryptoJS.MD5(user.id).toString()
        const userPublicID = () => {
            const userIDThreshold = 3
            const publicHash = userID &&  userID.slice(0, userIDThreshold)
                + userID.slice(userID.length - userIDThreshold, userID.length)
            return publicHash
        }
        const dataUser = user && {
            "userID": userID,
            "name": user.user_metadata.name,
            "profile_pic": user.user_metadata.avatar_url,
            "user_public_id": userPublicID()
        }

        const { data, error } = await supabase
            .from(USERDB)
            .insert(dataUser);

    }

    if (user && path === '/login') {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }


    if (user && path === '/') {
        const timeCreation = new Date(user.created_at)
        const timeAdded = new Date(timeCreation.getTime() + INSERTION_CHECK_TIME * 1000);

        const timeDiff = timeAdded.getTime() - timeCreation.getTime() 

        if (secondsToEpoch(INSERTION_CHECK_TIME)>=timeDiff){
            updateUserDatabase()
        }

    }
}

export const config = {
    matcher: ['/login', '/'],
};