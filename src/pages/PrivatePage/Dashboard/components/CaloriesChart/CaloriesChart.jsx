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
  Filler
} from 'chart.js';

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
        borderColor: '#E3FFA8',
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
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        <option value="current">Month</option>
        <option value="previous">prev 6month...</option>
      </select>

      <div style={{ width: '676px', height: '382px', padding: '6px' }}>
        <h1>Calories</h1>
        {selectedMonth && <p>{selectedMonth}</p>}
        <Line data={data} options={options}></Line>
        <p>
          Average value:{' '}
          {Math.round(
            data.datasets[0].data.reduce((acc, val) => acc + val, 0) / 30
          )}{' '}
          calories
        </p>
      </div>
    </>
  );
}

export default CaloriesChart;

