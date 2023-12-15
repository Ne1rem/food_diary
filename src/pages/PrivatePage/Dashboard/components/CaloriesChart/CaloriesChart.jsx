import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
  Title,
} from 'chart.js';
import { ContainerChart, ContainerSelect, ContainerValue, Month, TitleCalories } from './CaloriesChart.styled';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const CaloriesChart = () => {
  const [selectedMonth, setSelectedMonth] = useState('current');

  const randomData = () => {
    return Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000));
  };

  const data = {
    labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
    datasets: [
      {
        label: 'Calories',
        data: randomData(),
        backgroundColor: 'transparent',
        borderColor: 'var(--color-primary-green-lite)',
        pointBorderColor: 'transparent',
        pointBorderWidth: 5,
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 3,
        ticks: {
          stepSize: 1,
          callback: (value) => (value !== 0 ? value + 'k' : value),
        },
      },
    },
  };

  return (
    <>
      <ContainerSelect>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="current">Month</option>
          <option value="previous">prev 6month...</option>
        </select>
        {selectedMonth && <Month>{selectedMonth}</Month>}
      </ContainerSelect>

      <ContainerValue>
        <TitleCalories>Calories</TitleCalories>
        <p>
          Average value:{' '}
          {Math.round(
            data.datasets[0].data.reduce((acc, val) => acc + val, 0) / 30
          )}{' '}
          calories
        </p>
      </ContainerValue>

      <ContainerChart>
        <Line data={data} options={options}></Line>
      </ContainerChart>
    </>
  );
};

export default CaloriesChart;
