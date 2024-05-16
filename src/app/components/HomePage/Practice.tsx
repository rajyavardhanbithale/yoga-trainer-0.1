import { Viaoda_Libre } from "next/font/google";
import Link from "next/link";
import { BsLightningChargeFill } from "react-icons/bs";

const lora = Viaoda_Libre(
    {
        subsets: ['cyrillic'],
        weight: ["400"]
    }
);
export default function Practice() {
    return (
        <>
            <div className="w-full">
                <div className={`${lora.className} w-full flex flex-col gap-5 justify-center text-center`}>

                    <span className="xl:text-6xl text-5xl leading-9 tracking-[0.1em] capitalize font-semibold text-slate-900">
                        Begin Your Yoga Journey
                    </span>

                    <span className="xl:text-2xl text-2xl leading-9 tracking-[0.1em] capitalize font-semibold text-slate-900">
                        Embark on Your Yoga Adventure
                    </span>

                </div>

                <div className="grid grid-cols-3">
                    <div className="col-span-1 ">
                        <img
                            src="/homepage/lotus-pose-bg-removed.gif"
                            alt="women meditation"
                            className="w-3/4 mx-auto"
                        />
                    </div>
                    <div className="col-span-2 flex flex-col gap-5 w-3/4 mx-auto justify-center">
                        <span className="text-2xl tracking-wider font-medium ">
                            Embark on a transformative experience with our immersive platform. Whether you&apos;re new to yoga or a seasoned practitioner, our AI-powered features are tailored to support your growth. Start today and unlock the full potential of your practice.
                        </span>

                        <Link href={'/yoga'}>

                            <span className="text-2xl  tracking-wider font-medium mt-5 bg-slate-200 w-fit px-5 py-2 rounded-2xl cursor-pointer hover:scale-105 shadow-lg duration-700  hover:shadow-white">
                                Start Now
                                <BsLightningChargeFill className="inline-flex p-0.5 mx-2" />

                            </span>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}