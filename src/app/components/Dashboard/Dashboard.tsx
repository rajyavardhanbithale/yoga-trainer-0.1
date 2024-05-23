'use client'

import { BsLightningCharge } from "react-icons/bs"
import { IoCalendarClearOutline } from "react-icons/io5"

export default function Dashboard() {
    const todayPose = [
        {
            name: "tree pose - vṛkṣāsana",
            icon: "tree.webp",
        },
        {
            name: "warrior I - Vīrabhadrāsana I",
            icon: "warrior1.webp",
        },
        {
            name: "mountain pose - Tāḍāsana",
            icon: "mountain.webp",
        },


    ]



    const dateToday = () => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const timestamp = Date.now()
        const epochDate = new Date(timestamp)
        const month = epochDate.getMonth()
        const date = epochDate.getDate()
        const year = epochDate.getFullYear()

        const dayIndex = epochDate.getDay()

        return `${dayNames[dayIndex]}, ${date} ${monthNames[month]} ${year}`
    }

    const wishes = (time: string, name: string) => {
        switch (time) {
            case "Morning":
                return `Good morning, ${name}! Rise and shine for your yoga session.`
            case "Midday":
                return `Hey ${name}, it's time for your midday yoga break. Take a moment to recharge.`
            case "Evening":
                return `Good evening, ${name}! Unwind and release tension with some calming yoga.`
            case "Afternoon":
                return `Hello, ${name}! Take a break from your day and enjoy a refreshing yoga session.`
            case "Night":
                return `Hey ${name}, wind down your day with some relaxing yoga before bed.`
            default:
                return `Hello, ${name}! Enjoy your yoga session.`
        }

    }



    return (
        <>
            <div className="grid grid-cols-12 gap-8 m-5">
                {/* level 0 */}
                <div className="col-span-12 min-h-[5vh] flex justify-between items-center rounded-2xl">
                    <span className="text-3xl mx-5 font-medium text-slate-800">
                        Dashboard
                    </span>
                    <div className="flex text-gray-700 font-light">
                        <IoCalendarClearOutline className="mx-3 text-xl" />
                        <span className="">
                            {dateToday()}
                        </span>
                    </div>
                </div>


                {/* level 1 */}
                <div className="col-span-7 xl:col-span-4 min-h-[40vh]  flex flex-col justify-center rounded-2xl anim-blob">
                    <div className="w-44 mx-auto">
                        <img
                            src="/dashboard/meditation.gif"
                            alt="yoga"
                        />
                    </div>
                    <div className="flex text-center m-5">
                        <span className="text-2xl p-5 text-white capitalize font-medium">
                            {wishes("Morning", "jane")}
                        </span>
                    </div>
                </div>


                <div className="col-span-5 xl:col-span-5 min-h-[40vh] flex flex-col justify-between rounded-2xl">
                    <div className="flex flex-col mx-5">
                        <span className="text-3xl p-5 text-slate-900 capitalize font-semibold">
                            Today&apos;s List
                        </span>
                        <span className="text-xl px-5 text-slate-700 capitalize font-normal">
                            Complete the following yoga exercises
                        </span>
                    </div>

                    <div className="mx-5 my-5 flex flex-col justify-between h-fit">
                        {todayPose.map((item, idx) => (
                            <>
                                <div
                                    key={idx}
                                    className="flex justify-between capitalize m-2 p-2 items-center align-middle rounded-2xl shadow-lg hover:shadow-xl border-2 border-slate-200 duration-500"
                                >
                                    <div className="flex items-center">
                                        <div className="w-16">
                                            <img
                                                className="object-scale-down mix-blend-multiply rounded-xl"
                                                src={`/pose/image/webp/${item.icon}`}
                                                alt={item.name}
                                            />
                                        </div>

                                        <span className="text-2xl m-5 p-1">{item.name}</span>
                                    </div>

                                    <button className="capitalize bg-accent text-xl text-slate-100 rounded-xl px-3 py-3 font-medium h-fit mx-2 shadow-md hover:shadow-indigo-900 duration-300">
                                        perform
                                        <BsLightningCharge className="inline-flex mx-1" />
                                    </button>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

                <div className="col-span-full xl:col-span-3 min-h-[40vh] bg-teal-400 rounded-2xl">

                </div>


                {/* level 2 */}
                <div className="col-span-full xl:col-span-9 min-h-[40vh] bg-teal-400 rounded-2xl"></div>
                <div className="col-span-full xl:col-span-3 min-h-[40vh] bg-teal-400 rounded-2xl"></div>


            </div>
        </>
    )
}