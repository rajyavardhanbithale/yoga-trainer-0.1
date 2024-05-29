'use client'
import { AchievementsData, achievementsData } from "@/app/api/achievements/achievementsData"
import { createFetch } from "@/app/utils/supabase/cache"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { getName } from "country-list"
import { IoLocationOutline } from "react-icons/io5"
import { Tooltip } from "react-tooltip"


const USERDB = process.env.NEXT_PUBLIC_SUPABASE_DATABASE_USER_PROFILE!

export default async function Page({ params }: any) {

    const searchParam = params.id
    const supabase = createClientComponentClient({
        options: {
            global: {
                fetch: createFetch({
                    cache: "no-store"
                })
            }
        }
    })

    const { data, error } = await supabase
        .from(USERDB).
        select('created_at,name,profile_pic,country,achievements,user_public_id')
        .eq('user_public_id', searchParam)

    const newData = data && data[0]


    // i know :( :(
    function isValidURL(string: string) {
        const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    }

    const details = {
        id: newData?.user_public_id,
        name: newData?.name,
        avatar: !isValidURL(newData?.profile_pic) ? `/avatar/${newData?.profile_pic.split('.')[0].split('-')[0]}/${newData?.profile_pic}.webp` : newData?.profile_pic,
        country: newData?.country,
        achievements: newData?.achievements,
        gender: 'men'
    }

    const joinedTime = () => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const jTime = new Date(data && data[0]?.created_at)
        const date = jTime.getDate()
        const year = jTime.getFullYear()
        const month = jTime.getMonth()
        const monthName = monthNames[month]
        return { date, year, month, monthName }
    }

    const filterAchievements = details.achievements && AchievementsData.filter(item => details.achievements.includes(item.id)) || null


    return (
        <>
            <div className="h-screen flex flex-col justify-center align-middle items-center">
                <div className="xl:w-[40%] w-3/4 grid grid-cols-3  bg-slate-100/75 rounded-2xl p-2 py-5 shadow-2xl">
                    <div className="col-span-1 flex flex-col justify-center gap-3">
                        <div className="flex m-4 w-fit mx-auto cursor-pointer overflow-hidden rounded-xl shadow-2xl">
                            <img
                                src={`${details && details.avatar}`}
                                alt="avatar"
                                className="w-52 h-52 object-cover object-top rounded-xl shadow-2xl transition-transform  hover:scale-110 duration-700"
                            />
                        </div>
                    </div>

                    <div className="col-span-2 flex flex-col xl:justify-start justify-center m-10 gap-4">

                        <div className="flex flex-col cursor-pointer">
                            <span className="text-4xl text-slate-800 font-semibold">
                                {details && details.name}
                            </span>
                            <span className="text-sm text-slate-600">
                                # {details && details.id}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            {details && details?.country ? (
                                <div

                                    className="flex">
                                    <img
                                        className="w-7 mr-2 rounded-md shadow-xl"

                                        src={`https://flagicons.lipis.dev/flags/4x3/${details.country}.svg`} alt={details.country} />
                                    <span className="text-xl text-slate-700 cursor-pointer hover:text-slate-900 duration-500">
                                        {getName(details?.country)}
                                    </span>
                                </div>

                            ) : (
                                <>
                                    <span className="text-xl text-slate-800">
                                        <IoLocationOutline />
                                    </span>
                                    <span
                                        className="text-slate-700 cursor-pointer hover:text-slate-900 duration-500">
                                        UNKNOWN
                                    </span>

                                </>

                            )}

                        </div>
                        <span className=" text-slate-800">
                            Member since  {joinedTime().date} {joinedTime().monthName} {joinedTime().year}
                        </span>

                        {filterAchievements &&
                            <div className="flex flex-wrap mt-8">

                                <span className="flex w-full text-2xl text-slate-800 font-semibold">
                                    Achievements
                                </span>
                                {filterAchievements.map((item: achievementsData, key: number) => (
                                    <div
                                        data-tooltip-id={`tooltip-${key}`}
                                        key={key}
                                        className="w-[4.5rem] h-fit overflow-hidden m-2 span-5 rounded-full cursor-pointer"
                                    >
                                        <img
                                            src={`/achievements/${item.icon}-${details.gender}.jpg`}
                                            alt={item.name}
                                            className="rounded-full object-cover shadow-lg hover:scale-105 hover:brightness-105 hover:shadow-2xl duration-500" />

                                        <Tooltip id={`tooltip-${key}`} className="place-tooltip animate-fade-up">
                                            <div className="flex flex-col m-2 span-2">
                                                <span className="font-bold text-slate-900 text-xl">{item.name}</span>
                                                <span className="text-slate-800 text-lg">{item.description}</span>
                                                <div className="flex flex-col justify-between text-slate-700 mt-2 capitalize">
                                                    <div className="flex gap-2 items-center">
                                                        <span className="font-bold text-lg">
                                                            Level -
                                                        </span>
                                                        <span className="font-semibold text-base">
                                                            {item.level}
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                        <span className="font-bold text-lg">
                                                            Rarity -
                                                        </span>
                                                        <span className="font-semibold text-base">
                                                            {item.rarity}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tooltip>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}