'use client'

import Calendar from "../components/Dashboard/Calendar";
import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Dashboard/Sidebar";

export default function Page() {
    const Time = [1716202079000, 1716288479000, 1716374879000];
    return (
        <>
            {/* <Calendar epochTimes={Time} /> */}

            <div className="grid grid-cols-9">
                <div className="xl:col-span-1 col-span-2 h-screen sticky top-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="xl:col-span-8 col-span-7">
                    <Dashboard></Dashboard>
                </div>
            </div>
        </>
    )
}