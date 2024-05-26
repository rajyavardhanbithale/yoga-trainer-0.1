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
                    '#3a61fd',
                    '#7ba3fb',
                    '#5079fc',
                    '#668ffc',
                    '#668ffc',
                ],
                borderColor: [
                    '#5079fc',
                    '#668ffc',
                    '#668ffc',
                    '#7ba3fb',
                    '#3a61fd',
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
                        return `I had performed ${label} : ${value} times` ;
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


