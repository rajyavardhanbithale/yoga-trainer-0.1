import { IoCalendarClearOutline } from "react-icons/io5"
import WeekActivity from "./WeekActivity";
import DaySpent from "./DaysSpent";
import Accuracy from "./Accuracy";
import Heading from "../DashboardSection/Heading";

export default function StatsDashboard() {

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

                <div className="col-span-full xl:col-span-6 min-h-[50vh] flex flex-col justify-between rounded-2xl">
                    <Heading
                        title="Weekly Activity"
                        description="Overview of your activity throughout the week"
                    />
                    <WeekActivity />
                </div>
                <div className="col-span-full xl:col-span-6 min-h-[50vh] flex flex-col justify-between rounded-2xl">
                    <Heading
                        title="Last 30 Days Activity"
                        description="Summary of your recent activity."
                    />
                    <div className="flex h-full w-full justify-center items-center">
                        <DaySpent />

                    </div>
                </div>


                <div className="col-span-full xl:col-span-full min-h-[50vh] flex flex-col justify-between rounded-2xl">
                    <Heading
                        title="Last 30 Days Activity"
                        description="Summary of your recent activity."
                    />
                    
                        <Accuracy />

                    
                </div>

              


                {/* <div className="bg-slate-300 animate-pulse col-span-full xl:col-span-6 min-h-[50vh] flex flex-col justify-between rounded-2xl"></div> */}




            </div >

        </>
    )
}