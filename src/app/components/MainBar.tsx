import Image from "next/image";

import { Sedan } from "next/font/google";
import { Montserrat } from "next/font/google";
import { YogaPoseDetailed } from "../interface/CustomInterface";

const titleFont = Sedan(
    {
        subsets: ["latin"],
        weight: ["400"]
    }
);
const advantagesFont = Montserrat(
    {
        subsets: ["latin"],
    }
);


export default function MainBar(props: YogaPoseDetailed) {
    console.log(props);

    const adv = [
        "Balance Enhancement: Tree pose strengthens stabilizing muscles, improving equilibrium and stability for better posture and reduced risk of falls in daily activities.",
        "Leg Strength: Engaging quadriceps, hamstrings, and calves, tree pose builds lower body strength, enhancing functional abilities like walking and standing.",
        "Concentration: Requires focused attention on body alignment and breath, cultivating mindfulness that extends beyond the mat into daily tasks.",
        "Hip Flexibility: By stretching inner thighs and groin, tree pose promotes greater mobility in the hips, easing tension from sedentary lifestyles.",
        "Posture Alignment: Tree pose encourages spinal elongation and shoulder opening, fostering healthy posture habits for improved spinal alignment and reduced discomfort."
    ]


    return (
        <>
            <div className="lg:w-[78%] xl:w-[88%] mt-5 sidebar_scrollable">
                <div className="m-4 mx-4">
                    {/* Title */}
                    <div className="grid grid-cols-1 justify-center place-items-center gap-2">
                        <div className={`${titleFont.className} flex items-center text-4xl font-semibold capitalize`}>
                            <div>{props.name}</div>
                            <div className="h-1.5 w-1.5 bg-text rounded-full mx-3"></div>
                            <div>{props.originalName}</div>
                        </div>
                        <span className={`${titleFont.className} text-xl capitalize font-semibold  text-center`}>
                            "{props.description}"
                        </span>
                    </div>
                </div>


                <div className="grid xl:grid-cols-2 md:grid-cols-1 p-5 gap-10">
                    {/* Source */}
                    <div className="sm:col-span-1 min-h-[400px]">
                        <div className="bg-gray-800 w-full h-full rounded-2xl">
                        </div>
                    </div>

                    {/* Tutorial */}
                    <div className="sm:col-span-1 min-h-[400px]">
                        <div className="flex justify-center h-full">

                            <Image src={`/pose/tutorial/${props.tutorial}`}
                                height={0}
                                width={0}
                                alt={"123"}
                                sizes="100vw"
                                className="w-3/4 object-cover rounded-2xl"
                            >
                            </Image>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-6 my-6 p-5">
                    <div className="col-span-3">
                        <div className={`flex flex-col ${advantagesFont.className}`}>
                            <span className="text-2xl font-semibold capitalize my-2">benefits of {props.originalName}</span>
                            {adv.map((text, idx) => (
                                <div key={idx}>
                                    <span className="text-xl font-semibold">
                                        {text.split(":")[0]} -
                                    </span>
                                    <span className="text-lg">
                                        {text.split(":")[1]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="w-full h-full flex  justify-start items-center">

                                {/* Status */}
                                <div className="mx-auto text-blue-500 font-semibold text-2xl">
                                    Turn on the camera
                                </div>
                        </div>
                    </div>                    
                    
                    {/* <div className="col-span-3">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Fr5kiIygm0c?si=6Vq3zX_dktVZj0I3" title="YouTube video player" frameBorder="0"  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div> */}
                </div>


            </div>
        </>
    )
}