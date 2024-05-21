import { createClient } from "../../utils/supabase";

export default async function(){
    const supabase = createClient()
    const { data: { user }, } = await supabase.auth.getUser();

    console.log({user});
    
    return(
        <>
        </>
    )
}