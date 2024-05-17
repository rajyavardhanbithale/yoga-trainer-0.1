
import { Raleway, Viaoda_Libre } from "next/font/google";
import Link from "next/link";
import { IoCompassOutline } from "react-icons/io5";
import { PiRocketLaunch } from "react-icons/pi";


const lora = Viaoda_Libre(
    {
        subsets: ['cyrillic'],
        weight: ["400"]
    }
);

const raleway = Raleway({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
}
)

export default async function Hero() {
    return (
        <>
            <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-10 mt-5 md:mt-10 xl:mt-0 place-items-center">

                    <div className={`${lora.className} col-span-6 flex flex-col gap-5 sm:w-full sm:gap-10`}>
                        <span className="text-white text-4xl font-semibold capitalize xl:text-6xl md:text-5xl">
                            the best way
                        </span>
                        <span className="text-white text-4xl font-semibold capitalize xl:text-6xl md:text-5xl xl:w-[60%] md:w-[80%] sm:text-end">
                            to get healthy
                        </span>

                        <div className={`hidden sm:block ${raleway.className} mt-5 text-justify flex flex-col gap-8 w-11/12`}>
                            <span className="text-white text-base font-semibold capitalize xl:text-2xl md:text-xl">
                                Namaste! Welcome to RAGE InnerBalance, your ultimate
                                destination for yoga training and pose verification.
                                Whether you&apos;re a beginner or an experienced yogi,
                                we&apos;re here to guide you every step of the way.
                            </span>

                            <button className="py-1.5 xl:py-2 bg-slate-100 xl:text-xl rounded-xl w-1/4 hover:shadow-[0_0_0px_#fff,inset_0_0_0px_#fff,0_0_0px_#fff,0_0_5px_#fff,0_0_13px_#fff] duration-500">
                                Explore
                                <IoCompassOutline className="inline-flex text-xl mx-2 my-auto mb-0.5" />

                            </button>
                        </div>
                    </div>

                    <div className="col-span-4">
                        <img src="homepage/pics/yoga.png" alt="rage inner balance" className="w-11/12 md:w-[100%] mx-auto" />
                    </div>

                    <br />

                    {/* for mobile */}
                    <div className="sm:hidden mt-5 col-span-4 text-justify flex flex-col items-center gap-4">
                        <span className="text-white text-base font-semibold capitalize xl:text-6xl md:text-xl">
                            Namaste! Welcome to RAGE InnerBalance, your ultimate
                            destination for yoga training and pose verification.
                            Whether you&apos;re a beginner or an experienced yogi,
                            we&apos;re here to guide you every step of the way.
                        </span>

                        <button className="py-1.5 bg-slate-100 rounded-xl w-3/4 hover:shadow-[0_0_0px_#fff,inset_0_0_0px_#fff,0_0_0px_#fff,0_0_5px_#fff,0_0_13px_#fff] duration-500">
                            Explore
                            <IoCompassOutline className="inline-flex text-xl mx-2 my-auto mb-0.5" />

                        </button>
                    </div>


                </div>
            </div>

            {/* <div className="w-full xl:h-[30vh]">
                <div className="h-full bg-gradient-to-b from-[#849dfc] to-[#486df2]">
                    <div className="xl:py-0 py-14 h-3/4  w-[90%] mx-auto grid grid-cols-12 
                    place-items-center ">

                        <div className="xl:col-span-3 col-span-4 mt-auto">
                            <div className={` ${lora.className} animate-fade-right`}>
                                <span className="xl:text-5xl text-4xl leading-[4rem] tracking-[0.08em] capitalize font-semibold text-slate-100">
                                    Meet Your Personal AI Yoga Trainer.
                                </span>
                            </div>

                        </div>
                        <div className="col-span-1 px-5 h-[100%]  xl:mt-auto">
                            <div className="flex justify-center xl:items-end items-center h-full">
                                <div className="xl:h-1/2 h-3/4 w-1 rounded-full bg-slate-50"></div>
                            </div>
                        </div>

                        <div className="xl:col-span-7 col-span-7 xl:mt-auto">
                            <div className={` ${raleway.className} xl:mt-10  animate-fade-left`}>
                                <span className=" text-xl leading-relaxed tracking-wide capitalize font-semibold text-slate-100">
                                    Introducing Meet Your Personal AI Yoga Trainer. With advanced AI,
                                    get tailored guidance from pose analysis to alignment tips.
                                    Elevate your practice today with our innovative digital companion!
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </div> */}

        </>
    )
}