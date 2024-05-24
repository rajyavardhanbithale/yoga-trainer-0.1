'use client'

import { BsLightningCharge } from "react-icons/bs"
import { IoCalendarClearOutline } from "react-icons/io5"
import Calendar from "./Calendar"
import RecentActivity from "./RecentActivity"
import Heading from "./Heading"
import LastTHDays from "./LastTHDays"
import { DashboardPROPS } from "../../../../types"


export default function Dashboard(
    {
        name, todayPoseList, userActiveDays, userRecentActivity }
        : DashboardPROPS
) {

    console.log(userRecentActivity);

    const last30Days = [5, 1, 4, 0, 3, 1, 0, 7, 6, 4, 2, 2, 1, 5, 3, 2, 1, 5, 0, 2, 7, 4, 4, 4, 5, 1, 6, 6, 2, 7]


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
            <div className="grid grid-cols-12 gap-8 m-5 overflow-y-hidden">
                {/* level 0 */}
                <div className="col-span-12 min-h-[5vh] flex flex-col sm:flex-row justify-between items-center rounded-2xl">
                    <span className="text-3xl mx-5 font-medium text-slate-800">
                        Dashboard
                    </span>
                    <div className="flex text-gray-700 font-light">
                        <IoCalendarClearOutline className="mx-3 text-xl" />
                        <span className="text-nowrap">
                            {dateToday()}
                        </span>
                    </div>
                </div>


                {/* level 1 */}

                {/* level 1.1 - user welcome */}
                <div className="col-span-full xl:col-span-4 min-h-[40vh] overflow-hidden rounded-2xl">
                    <div className="h-full anim-blob flex flex-col justify-center ">

                        <div className="w-44 mx-auto">
                            <img
                                src="/dashboard/meditation.gif"
                                alt="yoga"
                            />
                        </div>
                        <div className="flex text-center m-5">
                            <span className="text-2xl p-5 text-white capitalize font-medium">
                                {wishes("Morning", name ?? "User")}
                            </span>
                        </div>
                    </div>
                </div>

                {/* level 1.2 - today list */}
                <div className="col-span-full xl:col-span-5 min-h-[40vh] flex flex-col justify-between rounded-2xl">
                    <Heading
                        title=" Today&apos;s List"
                        description="Complete the following yoga exercises"
                    />

                    <div className="mx-5 my-3 flex flex-col justify-between h-fit">
                        {todayPoseList.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between capitalize m-2 p-2 items-center align-middle rounded-2xl shadow-lg hover:shadow-xl border-2 border-slate-200 duration-500"
                            >
                                <div className="flex items-center">
                                    <div className="w-16">
                                        <img
                                            className="object-scale-down mix-blend-multiply rounded-xl"
                                            src={`/pose/image/webp/${item?.image}`}
                                            alt={item.name}
                                        />
                                    </div>

                                    <span className="text-2xl mx-4 p-1">{item.name} - {item.originalName}</span>
                                </div>

                                <button className="capitalize bg-accent text-xl text-slate-100 rounded-xl px-3 py-3 font-medium h-fit mx-2 shadow-md hover:shadow-indigo-900 duration-300">
                                    perform
                                    <BsLightningCharge className="inline-flex mx-1" />
                                </button>
                            </div>

                        ))}
                    </div>
                </div>

                {/* level 1.3 - calendar */}
                <div className="col-span-full xl:col-span-3 min-h-[40vh] max-h-[40vh] rounded-2xl overflow-hidden">
                    <Heading
                        title="Current Activity"
                        description="All active dates are marked below"
                    />
                    <div className="flex mx-1 justify-center xl:justify-normal items-center -mt-7">
                        <Calendar epochTimes={userActiveDays} />

                    </div>
                </div>


                {/* level 2 */}


                {/* level 2.1 recent activity */}
                <div className="col-span-full xl:col-span-9 min-h-[40vh] rounded-2xl">
                    <Heading
                        title="Recent Activities"
                        description="All your recent activities are displayed below"
                    />
                    <div className="mx-5 my-3 flex flex-col justify-between h-fit">
                        <RecentActivity recentActivities={userRecentActivity} />

                    </div>
                </div>

                {/* level 2.2 last 30 days */}
                <div className="col-span-full xl:col-span-3 min-h-[40vh] max-h-[40vh] rounded-2xl">
                    <Heading
                        title="Last 30 Days"
                        description="Overview of activity trends over the last 30 days."
                    />
                    <div className="my-5 mx-8">
                        <LastTHDays chartData={last30Days} />
                    </div>
                </div>


            </div>
        </>
    )
}


