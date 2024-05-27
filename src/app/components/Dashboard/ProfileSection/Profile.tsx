'use client'

import { useEffect, useState } from "react"
import ProfilePicMenu from "./ProfilePicMenu"
import { MdModeEditOutline } from "react-icons/md"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import CryptoJS from 'crypto-js';


const USERDB = process.env.NEXT_PUBLIC_SUPABASE_DATABASE_USER_PROFILE!

interface Avatar {
    name: string | null
    isPopUpClosed: boolean
}

export default function Profile(props: any) {
    const user = props?.user
    const supabase = createClientComponentClient()
    const userID = CryptoJS.MD5(user.id).toString()

    const [avatar, setAvatar] = useState<Avatar>({
        name: null,
        isPopUpClosed: false
    })

    // i know :( :(
    function isValidURL(string: string) {
        const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    }

    const updateAvatar = async (avatarName: string) => {

        const { data, error } = await supabase
            .from(USERDB)
            .update({ 'profile_pic': avatarName })
            .eq('userID', userID)
            .select('*')
            .single()

        // if (error) {
        //     console.error("Update error:", error);
        // } else {
        //     console.log("Update successful:", data);
        // }

    }

    // fetching user profile from  database
    useEffect(() => {
        const fetchDB = async () => {
            const { data, error } = await supabase
                .from(USERDB)
                .select('profile_pic')
                .eq('userID', userID)

            const pic = data && data[0].profile_pic

            if (!isValidURL(pic)) {
                const file = `${pic.split('.')[0].split('-')[0]}/${pic}.webp`
                setAvatar({ ...avatar, name: file })

            } else {
                setAvatar({ ...avatar, name: pic })
            }
        }

        fetchDB()

    }, [avatar.name, setAvatar.name])





    return (
        <>
            <div className="h-screen flex flex-col justify-center align-middle items-center">
                <div className="xl:w-3/4 w-11/12 grid grid-cols-4">
                    <div className="col-span-1 flex flex-col justify-center gap-3">


                        <div className="flex w-fit mx-auto cursor-pointer overflow-hidden rounded-xl shadow-2xl">
                            <img
                                src={`/avatar/${avatar.name}`}
                                alt="avatar"
                                className="w-36 h-36 object-cover object-top rounded-xl shadow-2xl transition-transform  hover:scale-110 duration-700"
                            />
                        </div>


                        <button
                            onClick={() => setAvatar({ ...avatar, isPopUpClosed: true })}
                            className="xl:w-1/2 w-3/4 bg-accent text-white px-2 py-1 font-medium mx-auto rounded-2xl my-2 hover:brightness-90 duration-500">
                            Change
                            <MdModeEditOutline className="inline-flex  justify-start ml-1 mb-0.5" />
                        </button>

                        {avatar.isPopUpClosed &&
                            <ProfilePicMenu
                                avatar={avatar}
                                setAvatar={setAvatar}
                                updateAvatar={updateAvatar}
                            />
                        }
                    </div>

                    {/* <div className="col-span-3">
                            
                    </div> */}
                </div>
            </div>
        </>
    )
} 0