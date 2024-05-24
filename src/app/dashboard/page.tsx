'use client'

import Calendar from "../components/Dashboard/Calendar";
import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Dashboard/Sidebar";

export default function Page() {
    const Time = [1716202079000, 1716288479000, 1716374879000];
    return (
        <>
            {/* <Calendar epochTimes={Time} /> */}

            <div className="grid grid-cols-9 max-w-[2050px] mx-auto">
                <div className="hidden sm:block xl:col-span-1 sm:col-span-2 h-screen sticky top-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="xl:col-span-8 sm:col-span-7 col-span-full">
                    <Dashboard></Dashboard>
                </div>
            </div>
        </>
    )
}