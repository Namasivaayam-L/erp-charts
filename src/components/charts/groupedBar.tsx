import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};


const genData = (min: number, max: number) =>  Math.floor(Math.random() * (max - min + 1)) + min

const labels = ['sem1','sem2','sem3','sem4','sem5','sem6','sem7','sem8'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Arrear',
      data: labels.map(() => genData(1,2)),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',

    },
    {
      label: 'Reappeared',
      data: labels.map(() => genData(1,2)),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',

    },
    {
      label: 'Passed',
      data: labels.map(() => genData(1,4)),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 1',

    },
  ],
};

export function GrpBar() {
  console.log(data.datasets)
  return <Bar options={options} data={data} />;
}
