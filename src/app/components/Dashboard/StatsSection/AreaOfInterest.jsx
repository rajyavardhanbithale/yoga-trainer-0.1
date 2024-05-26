// src/PolarChart.js
import React from 'react'
import { PolarArea } from 'react-chartjs-2'
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default function AreaOfInterest() {
    const data = {
        labels: ['Tree pose', 'Warrior II', 'Mountain Pose', 'Goddess Pose'],
        datasets: [
            {
                label: 'I have performed',
                data: [11, 16, 7, 3],
                backgroundColor: [
                    'rgb(58, 97, 253, 0.2)',
                    'rgb(72, 64, 186, 0.3)',
                    'rgb(80, 121, 252, 0.1)',
                    'rgb(30, 48, 97, 0.6)',
                ],
                borderColor: [
                    'rgb(58, 97, 253, 1)',
                    'rgb(72, 64, 186, 1)',
                    'rgb(80, 121, 252, 1)',
                    'rgb(30, 48, 97, 1)'
                ],
                borderWidth: 1,
            },

        ],
    }
    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const dataset = context.dataset.data;
                        const label = context.label;
                        const value = dataset[context.dataIndex];
                        return `I had performed ${label} : ${value} times`;
                    }
                }
            }
        },
        scales: {
            r: {
                pointLabels: {
                    display: true,
                    centerPointLabels: true,
                    font: {
                        size: 18
                    }
                }
            }
        },

        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="xl:h-11/12 xl:w-11/12 h-full w-full">
            <PolarArea data={data} options={options} />
        </div>


    )
}

