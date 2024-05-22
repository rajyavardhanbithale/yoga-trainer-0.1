'use client'
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { FcGoogle } from "react-icons/fc";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { SignUp } from "../../../types";
import Link from "next/link";
import { RiLoader3Line } from "react-icons/ri";


const montserrat = Montserrat(
    {
        subsets: ["latin"],
        weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
    }
)

export default function Page() {
    const [userInfo, setUserInfo] = useState<SignUp>({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState<string | null>(null)

    const supabase = createClientComponentClient()
    const handleSignInOAuth = async () => {
        const { error, data } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            }
        })

        if (error) {
            console.log(error);
        }

    }

    const handleUserLogin = async () => {
        const { error, data } = await supabase.auth.signUp({
            email: userInfo.email,
            password: userInfo.email,
            options: {
                emailRedirectTo: location.origin
            }

        })

        if (error) {
            console.log(error);

        }
        console.log(data);


    }

    return (
        <>



            <div className="flex my-2 min-h-screen justify-center items-center">
                <div className={`h-[50%] xl:w-[50%] w-[90%] flex flex-row ${montserrat.className}`}>
                    <div className="flex flex-1 items-center justify-center bg-white p-8 rounded-l-2xl shadow-xl">
                        <div className="max-w-md w-full space-y-8 px-10">
                            <div className="text-center">
                                <img className="mx-auto h-12 w-auto" src="/login-page/logo.svg" alt="Logo" />
                                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                                    Create Account!
                                </h2>
                                <p className="mt-2 text-sm text-gray-600">
                                    Login to explore more
                                </p>
                            </div>

                            {/* 
                            <form className="mt-8 space-y-6" action={handleUserLogin}>
                                <input type="hidden" name="remember" value="true" />

                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div className="my-6">
                                        <label htmlFor="email-address" className="text-lg ml-0.5">
                                            Email
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
                                            autoComplete="email"
                                            required
                                            className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Email address" />
                                    </div>

                                    <div className="my-2">
                                        <label htmlFor="password" className="text-lg">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            onChange={e => setUserInfo({ ...userInfo, password: e.target.value })}
                                            autoComplete="current-password"
                                            required
                                            className="mt-2 mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Password" />
                                    </div>
                                    <div className="my-2">
                                        <label htmlFor="confirm-password" className="text-lg">
                                            Confirm password
                                        </label>
                                        <input
                                            id="confirm-password"
                                            name="confirm-password"
                                            type="password"
                                            onChange={e => setUserInfo({ ...userInfo, confirmPassword: e.target.value })}
                                            autoComplete="current-password"
                                            required
                                            className="mt-2 mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Confirm password" />
                                    </div>


                                </div>


                                <div className="w-full flex flex-col gap-2 text-center">
                                    <div className="text-rose-500 font-semibold">
                                        {userInfo.password !== userInfo.confirmPassword &&
                                            <>
                                                <span className="mb-1">Passwords must match. Check again.</span>

                                                <span

                                                    className="cursor-not-allowed order-none group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 ">
                                                    Sign Up
                                                </span>
                                            </>
                                        }
                                        {userInfo.password === userInfo.confirmPassword &&
                                            <>
                                                <button
                                                    type="submit"
                                                    className="border-none group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 duration-500">
                                                    {

                                                    Sign Up
                                                </button>
                                            </>
                                        }
                                    </div>


                                </div>


                                <div className="flex items-center justify-center mt-4">
                                    <span className="text-sm text-gray-600">Or sign up with</span>
                                </div>

                                
                            </form> 
                            */}

                            <div className="flex justify-center mt-2">
                                <button
                                    onClick={handleSignInOAuth}
                                    type="button"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 duration-500">
                                    <FcGoogle className="mt-[2px] text-xl" />

                                    <span className="ml-2">Sign up with Google</span>
                                </button>
                            </div>
                            <div className="text-center mt-4">
                                <span className="text-sm text-gray-600">
                                    Already have an account?
                                    <Link href={'/login'}>
                                        <span className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Login in here
                                        </span>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:flex-1 bg-indigo-600 max-h-max overflow-hidden rounded-r-2xl shadow-xl">
                        <Image
                            src={"/login-page/login1.jpg"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="man in front of temple"
                            className="w-full h-full object-cover object-center hover:scale-110 duration-1000" />
                    </div>
                </div>
            </div>


        </>
    )
}


