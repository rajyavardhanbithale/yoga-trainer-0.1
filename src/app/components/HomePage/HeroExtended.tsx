import { Raleway, Viaoda_Libre } from "next/font/google";

const lora = Viaoda_Libre(
    {
        subsets: ['cyrillic'],
        weight: ["400"]
    }
);

const raleway = Raleway(
    {
        subsets: ['latin'],
        weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
    }
)
export default function HeroExtended() {
    return (
        <>
            <div className="w-full bg-gradient-to-b from-[rgb(132,157,252)] to-[#486df2]">
                <div className="sm:grid sm:grid-cols-12 px-5 py-5 sm:py-10 xl:py-16 flex flex-col">
                    <div className={`${lora.className} col-span-4 text-center my-auto animate-fade-left`}>
                        <span className="text-3xl text-white font-bold tracking-wider">
                            Meet Your Personal AI Yoga Trainer.
                        </span>
                    </div>

                    <div className="col-span-1">
                        <div className="sm:hidden w-3/4 my-4 h-0.5 rounded-full bg-white mx-auto"></div>
                        <div className="w-0.5 my-auto h-full rounded-full bg-white mx-auto"></div>
                    </div>
                    <div className="col-span-7 xl:col-span-5 text-justify my-auto animate-fade-up">
                        <span className="text-xl text-white font-medium tracking-wider">
                            Introducing Meet Your Personal AI Yoga Trainer. With advanced AI,
                            get tailored guidance from pose analysis to alignment tips.
                            Elevate your practice today with our innovative digital companion!
                        </span>
                    </div>

                    <div className="col-span-1 w-[80%] mx-8">
                        <img src="homepage/pics/light-med-yoga.gif" alt="warrior2 pose" className="xl:block hidden" />
                    </div>
                </div>
            </div>

        </>
    )
}