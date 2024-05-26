'use client'
import { useEffect, useState } from "react"
import Link from "next/link";
import { deleteCookie, hasCookie, setCookie } from "cookies-next";

import { toast, ToastContainer, Zoom } from "react-toastify"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import 'react-toastify/dist/ReactToastify.css';

import { PiFlowerLotusLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {

    const [isLogged, setLogged] = useState<boolean>(false)

    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const notify = (username: string) => toast.success(
        `${username} you are now logged in`
    )

    const supabase = createClientComponentClient()

    const handleReadCookie = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
            const username = user?.user_metadata?.name || user?.user_metadata?.full_name || ''
            setLogged(true)
            if (!hasCookie('showToast')) {
                notify(username)
            }
            setCookie('showToast', false, {
                expires: new Date(Date.now() + 60 * 60 * 1000),
            });
        }
    }

    useEffect(() => {
        handleReadCookie()
    }, [])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Zoom}
            />
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


                    <div className="flex justify-center items-center">
                        {isLogged ? (
                            <Link href={'/dashboard'}>
                                <div
                                    className="hidden sm:flex justify-center items-center mx-5">
                                    <span className="text-lg px-5 text-text font-semibold bg-slate-100 p-2 rounded-2xl">
                                        Dashboard
                                    </span>

                                </div>
                            </Link>

                        ) : (
                            <Link href={'/login'}>
                                <div
                                    onClick={() => deleteCookie('showToast')}
                                    className="hidden sm:flex justify-center items-center mx-5">
                                    <span className="text-lg px-5 text-text font-semibold bg-slate-100 p-2 rounded-2xl">
                                        Login
                                    </span>

                                </div>
                            </Link>
                        )}
                    </div>


                </div>


            </div>
        </>
    )
}