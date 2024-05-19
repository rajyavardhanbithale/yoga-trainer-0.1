'use client'
import Chart from 'chart.js/auto';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

export default function LineChart() {

    const span = 30
    const data = {
        labels: ['5s', '10s', '15s', '20s', '25s', '30s'],
        datasets: [
            {
                label: 'Accuracy ' + span + 'S',
                borderColor: '#4158a8',
                data: [0,1,0.8,0.9,1,0.95],
                tension:0.1
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    return (
        <>
            <div className="h-[300px]">

                    <Line data={data} options={options} />

            </div>
        </>
    )
}