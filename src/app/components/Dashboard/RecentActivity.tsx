'use client'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";





export default function RecentActivity(props: any) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1285 },
            items: 3
        },
        medium: {
            breakpoint: { max: 1280, min: 900 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Carousel
                swipeable={true}
                responsive={responsive}
                centerMode={true}
            >
                {props?.recentActivities.map((item: any, idx: number) => (
                    <div key={idx} className="flex justify-center items-center p-4">
                        <div className="w-full max-w-xs flex flex-col items-center bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
                            <div className="w-full flex justify-center bg-gray-100 p-4">
                                <img
                                    src={`/pose/image/webp/${item.icon}`}
                                    alt={item.name}
                                    className="h-32 object-contain mix-blend-multiply rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col text-center">
                                <span className="capitalize mt-4 text-lg font-semibold text-slate-800">
                                    {item.name.split('-')[0]}
                                </span>
                                <span className="capitalize mt-2 mb-4 text-lg font-semibold text-slate-800">
                                    {item.name.split('-')[1]}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

        </>
    )
}