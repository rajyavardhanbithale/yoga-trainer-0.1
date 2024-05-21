

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase";


export default function Page() {
    const handleSignIn = async () => {
        'use server'
        console.log("sign in request");

        const supabase = createClient()
        const origin = headers().get('origin')

        const { error, data } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${origin}/auth/callback`,
            }
        })

        if (error) {
            console.log(error);

        } else {
            return redirect(data.url);
        }


    }

    return (
        <>

            <form action={handleSignIn}>
                <button>sign in googlr</button>
            </form>

        </>
    )
}
