import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const genData = (min: number, max: number) =>  Math.floor(Math.random() * (max - min + 1)) + min

const labels = ['sem1', 'sem2', 'sem3', 'sem4', 'sem5', 'sem6', 'sem7', 'sem8'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Arrear',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => genData(1,2)),
    },
    {
      type: 'bar' as const,
      label: 'Cleared',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map(() => genData(1,2)),
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar' as const,
      label: 'Passed',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map(() => genData(1,4)),
    },
  ],
};

export function Hybrid() {
  return <Chart type='bar' data={data} />;
}
