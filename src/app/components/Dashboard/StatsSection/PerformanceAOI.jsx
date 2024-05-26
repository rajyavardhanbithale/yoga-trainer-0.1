'use client'
import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Filler);

export default function RadarChart() {

    const backgroundColor = [
        'rgb(58, 97, 253, 0.2)',
        'rgb(72, 64, 186, 0.3)',
        'rgb(80, 121, 252, 0.1)',
        'rgb(30, 48, 97, 0.6)',
    ]

    const borderColor = [
        'rgb(58, 97, 253, 1)',
        'rgb(72, 64, 186, 1)',
        'rgb(80, 121, 252, 01)',
        'rgb(30, 48, 97, 1)',
    ]

    const accuracy = [66, 49, 34, 95]

    const inaccurate = accuracy.map(item => 100 - item)



    const data = {
        labels: ['Tree pose', 'Warrior II', 'Mountain Pose', 'Goddess Pose'],
        datasets: [
            {
                label: 'Accuracy',
                data: accuracy,
                backgroundColor: backgroundColor[0],
                borderColor: borderColor[0],
                borderWidth: 1,
                fill: true, // Enable background filling for dataset 1
            },
            {
                label: 'Inaccuracy',
                data: inaccurate,
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Background color for dataset 2
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: true, // Enable background filling for dataset 2
            },
        ],
    };

    const options = {
        scale: {
            angleLines: {
                display: true
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <>
            <div className="xl:h-11/12 xl:w-11/12 h-full w-full">
                <Radar data={data} options={options} />
            </div>
        </>
    );
}
