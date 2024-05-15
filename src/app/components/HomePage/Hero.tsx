
import { Raleway, Viaoda_Libre } from "next/font/google";
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
            <div className="w-full h-[90vh]">
                <div className="flex h-full w-[90%] mx-auto">
                    <div className={`w-[55%] h-[65%] flex flex-col gap-12 ${lora.className} my-auto`}>

                        <div className="flex w-full flex-row gap-5 px-10">
                            <span className="text-6xl leading-9 tracking-[0.1em] capitalize font-semibold text-slate-100">
                                the
                            </span>

                            <span className="text-6xl leading-9 tracking-[0em] capitalize font-semibold text-slate-100">
                                best
                            </span>

                            <span className="text-6xl leading-9 tracking-[0.1em] capitalize font-semibold text-slate-100">
                                way
                            </span>
                        </div>

                        <div className="flex w-full justify-center px-10">

                            <span className="text-6xl leading-9 tracking-[0.08em] capitalize font-semibold text-slate-100">
                                to get healthy
                            </span>
                        </div>


                        <div className={`${raleway.className} flex flex-col w-[100%] px-10 mt-10`}>
                            

                            <span className={`text-xl leading-9 tracking-[0.08em] capitalize font-semibold text-slate-100 text-wrap`}>
                                Namaste! Welcome to RAGE InnerBalance, your ultimate destination for yoga training and pose verification. Whether you're a beginner or an experienced yogi, we're here to guide you every step of the way.
                            </span>

                            <div className="mt-8 bg-white text-xl w-fit py-2 px-5 rounded-2xl font-semibold tracking-widest">
                                Explore
                                <PiRocketLaunch className="inline-flex text-2xl mx-2" />
                               

                            </div>
                        </div>




                    </div>


                    <div className=" w-[45%] flex flex-col  align-middle items-center animate-jump-in">

                        <img src="homepage/yoga.png" className="w-[100%] hover:scale-105 duration-700 ease-in-out" alt="" />
                    </div>

                </div>
            </div>

        </>
    )
}