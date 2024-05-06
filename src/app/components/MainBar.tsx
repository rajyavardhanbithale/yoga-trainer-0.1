import Image from "next/image";
import YogaPose from "../interface/CustomInterface";
import { Sedan } from "next/font/google";

const titleFont = Sedan(
    {
        subsets: ["latin"],
        weight: ["400"]
    }
);

export default function MainBar(props: YogaPose) {
    return (
        <>
            <div className="lg:w-[78%] xl:w-[88%] mt-5 sidebar_scrollable">
                <div className="m-4 mx-4">
                    {/* Title */}
                    <div className="grid grid-cols-1 justify-center place-items-center gap-2">
                        <span className={`text-4xl capitalize font-semibold ${titleFont.className}`}>
                            {props.name} | {props.originalName}
                        </span>
                        <span className={`text-xl capitalize font-semibold ${titleFont.className} text-center`}>
                            "The tree pose, also known as vriksasana, is a yoga pose that helps to improve balance and stretches the body from head to toe"
                        </span>
                    </div>
                </div>

                <div className="grid xl:grid-cols-6 md:grid-cols-1 p-5 gap-10">
                    {/* Source */}
                    <div className="sm:col-span-3 min-h-[500px]">
                        <div className="bg-gray-800 w-full h-full rounded-2xl">
                        </div>
                    </div>

                    {/* Tutorial */}
                    <div className="sm:col-span-3 min-h-[500px]">
                        <div className="w-full">

                            <Image src={"/pose/tutorial/tree.gif"}
                                height={0}
                                width={0}
                                alt={"123"}
                                sizes="100vw"
                                className="w-full object-cover"
                            >

                            </Image>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}