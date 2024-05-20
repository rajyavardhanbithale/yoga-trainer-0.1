'use client'

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, ArcElement, Legend, Tooltip } from 'chart.js';
import { LuClock8, LuTarget } from "react-icons/lu";
import { IoIosCheckmarkCircleOutline, IoMdCloseCircleOutline, IoMdShareAlt } from "react-icons/io";
import { SiRemark } from "react-icons/si";

ChartJS.register(Title, ArcElement, Legend, Tooltip);

export default function DoughnutChart(props: any) {

    const analysis = props?.analysis

    const epochToSecond = (startTime: number, endTime: number): (number | null) => {
        if (!startTime || !endTime) {
            return 0;
        }
        return parseInt(((endTime - startTime) / 1000).toFixed(1))
    }




    function handleData(array: number[]): { zeros: number, ones: number } {
        return array.reduce((counts, currentValue) => {
            if (currentValue === 0) {
                counts.zeros++;
            } else if (currentValue === 1) {
                counts.ones++;
            }
            return counts;
        }, { zeros: 0, ones: 0 });
    }



    const counts =  handleData(analysis.correctPose);

    const data = {
        labels: ['Correct', 'Incorrect'],
        datasets: [
            {
                label: 'You have performed',
                data: [counts.ones, counts.zeros],
                backgroundColor: ['#4158a8', '#a0b2f8'],
                hoverOffset: 4,
            },
        ],
    };

    const accuracy: number = parseInt((((counts.ones - counts.zeros) / counts.ones) * 100).toFixed(1))

    const grading: { [key: number]: string } = {
        100: "Excellent",
        90: "Excellent",
        80: "Very Good",
        70: "Good",
        60: "Fair",
        50: "Needs Improvement",
        40: "Poor",
        30: "Very Poor",
        20: "Very Poor",
        10: "Unacceptable",
        0: "Unacceptable"
    }

    function getGrade(accuracy: number): string {
        const keys = Object.keys(grading).map(key => parseInt(key)).sort((a, b) => b - a);
        for (const key of keys) {
            if (accuracy >= key) {
                return grading[key];
            }
        }
        return "Unacceptable";
    }


    return (
        <>
            <div className="flex">

                <div className="h-[30vh]">
                    <Doughnut data={data} />
                </div>


                <div className="h-[30vh] flex flex-col w-full m-2 p-2 rounded-lg shadow-md">
                    <div className="w-full capitalize text-center font-semibold text-2xl align-middle items-center justify-center">

                        Pose Analysis
                    </div>


                    <div className="grid grid-cols-2 gap-10 p-5">
                        <div className="grid grid-cols-1  justify-around items-center gap-5">
                            <div className="col-span-1 flex items-center gap-2 p-4 bg-blue-100 rounded-lg shadow">
                                <LuClock8 className="text-blue-800 text-xl font-semibold" />

                                <span className="text-xl">
                                    Duration: {epochToSecond(analysis?.startTime, analysis?.endTime)} s
                                </span>
                            </div>

                            <div className="col-span-1 flex items-center gap-2 p-4 bg-green-100 rounded-lg shadow">
                                <IoIosCheckmarkCircleOutline className="text-green-800 text-xl font-semibold" />

                                <span className="text-xl">
                                    Correct: {counts.ones}
                                </span>
                            </div>

                            <div className="col-span-1 flex items-center gap-2 p-4 bg-red-100 rounded-lg shadow">
                                <IoMdCloseCircleOutline className="text-red-800 text-xl font-semibold" />

                                <span className="text-xl">
                                    Incorrect: {counts.zeros}
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1  justify-around items-center gap-5">
                            <div className="col-span-1 flex items-center gap-2 p-4 bg-blue-100 rounded-lg shadow">
                                <LuTarget className="text-blue-800 text-xl font-semibold" />

                                <span className="text-xl">
                                    Accuracy: {accuracy >= 0 ? accuracy  : 0} %
                                </span>
                            </div>
                            <div className="col-span-1 flex items-center gap-2 p-4 bg-blue-100 rounded-lg shadow">
                                <SiRemark className="text-blue-800 text-xl font-semibold" />

                                <span className="text-xl">
                                    Remark: {getGrade(accuracy)}
                                </span>
                            </div>
                            <div className="col-span-1 flex items-center gap-2 p-4 bg-blue-100 rounded-lg shadow">
                                <IoMdShareAlt className="text-blue-800 text-xl font-semibold" />

                                <span className="text-xl">
                                    Share on Socials
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// poseID
// poseName
// repTime
// accuracy
// correctPose
// endTime