'use client'
import { PiFlowerLotusLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

export default async function Navbar() {
    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="w-full  border-b-2 border-b-blue-900 z-50">
                <div className="flex justify-between sm:p-3 py-4 px-3">
                    <div className="w-full flex justify-between items-center sm:mx-5 sm:w-fit sm:justify-center">
                        <span>
                            <PiFlowerLotusLight className="sm:text-6xl text-4xl text-white" />
                        </span>

                        <span className="text-2xl px-5 text-white font-semibold">
                            InnerBalance
                        </span>

                        <span className="sm:hidden text-3xl text-white glass">
                            <RxHamburgerMenu />
                        </span>
                    </div>

                    <div className="hidden sm:flex justify-center xl:-ml-32 items-center mx-5  cursor-pointer">
                        <span
                            onClick={() => handleClickScroll("hallmark")}
                            className="text-xl px-5 text-white font-semibold">
                            Hallmarks
                        </span>
                        <span
                            onClick={() => handleClickScroll("stats")}
                            className="text-xl px-5 text-white font-semibold">
                            Stats
                        </span>
                        <span className="text-xl px-5 text-white font-semibold">
                            Practice
                        </span>
                    </div>

                    <div className="hidden sm:flex justify-center items-center mx-5">
                        <span className="text-xl px-5 text-text font-semibold bg-slate-100 p-2 rounded-2xl">
                            Login
                        </span>

                    </div>

                </div>


            </div>
        </>
    )
}