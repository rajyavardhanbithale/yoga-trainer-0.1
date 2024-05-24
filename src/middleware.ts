import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from "./app/utils/supabase/middleware";


export async function middleware(request: NextRequest) {
    const { supabase, response } = createClient(request);
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const path = request.nextUrl.pathname

    if(user && path==='/login'){
        console.log(user);
        
        return NextResponse.redirect(new URL('/', request.nextUrl));
        
    }
    

}

export const config = {
    matcher: ['/login', '/'],
};