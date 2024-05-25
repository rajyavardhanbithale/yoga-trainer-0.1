import Chart from 'chart.js/auto';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

export default function Accuracy() {

    const accuracy = [39,90,87,54,79,57,69,42,67,56,74,33,48,94,97,65,85,41,75,30,72,52,53,45,99,58,96,78,46,70,81,60,36,88,66,49,34,95,61,35,76,59,31,100,40,83,37,44,32,91,63,62,68,84,86,77,64,50,73,38]

    const inaccurate = accuracy.map(item => 100 - item)


    const data = {
        labels: Array.from({ length: accuracy.length }, (_, i) => {
            return i + 1
        }),
        datasets: [
            {
                label: "Accurate",
                data: accuracy,
                borderColor: "#3a61fd",
                fill: false
            },
            {
                label: "Inaccurate",
                data: inaccurate,
                borderColor: "#7ba3fb",
                fill: false
            }
        ]
    }

    const totalDuration = data.labels.length * 5
    const delayBetweenPoints = totalDuration / data.labels.length;

    const delayFunction = (ctx) => {
        if (ctx.type !== 'data' || ctx.xStarted) {
            return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
    };
    const animation = {
        x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN,
            delay: delayFunction
        },
        y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: 'start',
            delay: delayFunction
        }
    };

    const options = {
        animation: animation,
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                display: true,
                ticks: {
                    display: true,
                }
            },
            y: {

                beginAtZero: true,
                grid: {
                    display: false,
                },
                display: true,
                ticks: {
                    display: true,
                }
            }
        },
        plugins: {

        },

        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <>
        <div className="h-[40vh]">
            <Line data={data} options={options} />

        </div>
        </>
    )
};

