import { Viaoda_Libre } from "next/font/google";

const lora = Viaoda_Libre(
    {
        subsets: ['cyrillic'],
        weight: ["400"]
    }
);


export default function Features() {

    return (
        <>
            <div className="p-8 mx-10">
                <div className={`${lora.className} w-full flex flex-col gap-5 justify-center text-center`}>

                    <span className="xl:text-6xl text-5xl leading-9 tracking-[0.1em] capitalize font-semibold text-slate-900">
                        hallmarks
                    </span>

                    <span className="xl:text-2xl text-2xl leading-9 tracking-[0.1em] capitalize font-semibold text-slate-900">
                       Unlock Your Practice Potential
                    </span>

                </div>

            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 mx-5">
                <div className="p-8 flex flex-col gap-5">
                    <div className="flex xl:justify-normal justify-center">
                        <div className="bg-indigo-200/45 rounded-full w-20 h-20 flex justify-center items-center text-indigo-500">
                            <img src="/homepage/graph.gif" alt="graph" className="w-3/4" />
                        </div>
                        <span className="mx-10 uppercase mt-6  text-[#1c243f] font-semibold text-2xl mb-3">
                            Pose Analysis
                        </span>
                    </div>

                    <span className="font-medium text-xl  text-gray-500 mb-3">
                        Our AI conducts thorough pose analysis, providing real-time feedback on your alignment and posture. Enhance your practice with personalized guidance tailored to your needs.
                    </span>

                </div>

                <div className="p-8 flex flex-col gap-5">
                    <div className="flex xl:justify-normal justify-center">
                        <div className="bg-indigo-200/45 rounded-full w-20 h-20 flex justify-center items-center text-indigo-500">
                            <img src="/homepage/clock.gif" alt="clock" className="w-3/4" />
                        </div>
                        <span className="mx-10 uppercase mt-6 text-[#1c243f] font-semibold text-2xl mb-3">
                            Total Span Duration Summary
                        </span>
                    </div>

                    <span className="font-medium text-xl text-gray-500 mb-3">
                        Keep track of your progress effortlessly with our total span duration summary. Monitor your practice duration over time, helping you stay consistent and achieve your goals.
                    </span>

                </div>

                <div className="p-8 flex flex-col gap-5">
                    <div className="flex xl:justify-normal justify-center">
                        <div className="bg-indigo-200/45 rounded-full w-20 h-20 flex justify-center items-center text-indigo-500">
                            <img src="/homepage/camera.gif" alt="graph" className="w-3/4" />
                        </div>
                        <span className="mx-10 uppercase mt-6 text-[#1c243f] font-semibold text-2xl mb-3">
                            Real-Time Webcam
                        </span>
                    </div>

                    <span className="font-medium text-xl text-gray-500 mb-3">
                        Utilize our real-time webcam feature for live feedback and alignment corrections as you flow through poses. Experience instant adjustments for a more rewarding yoga practice.
                    </span>

                </div>


            </div>
        </>
    )
}