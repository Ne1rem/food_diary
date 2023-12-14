// temporarily written on state, need to change to redux

import React, { useEffect, useState } from 'react';
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

function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function CaloriesChart({ selectedMonth }) {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    let selectedDate;

    if (selectedMonth) {
      selectedDate = new Date(selectedMonth);
    } else {
      selectedDate = new Date();
    }

    const daysInMonth = getDaysInMonth(selectedDate.getMonth(), selectedDate.getFullYear());

    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    // console.log('Days:', days);
    setLabels(days);
  }, [selectedMonth]);

// console.log('Labels:', labels);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Calories',
        data: [1, 1.2, 1, 1.2, 1, 1, 1.5, 1.4, 1, 1, 1.2, 1.2, 1.6, 1.4, 1.5, 1.6, 1.8], // temporarily
        backgroundColor: 'transparent',
        borderColor: 'red',
        pointBorderColor: 'transparent',
        pointBorderWidth: 5,
        fill: true,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
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
          callback: (value) => value + 'k',
        },
      },
    },
  };

  return (
    <div style={{ width: '1176px', height: '382px', padding: '34px' }}>
      <h1>Calories</h1>
      {selectedMonth && <p>{selectedMonth}</p>}
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default CaloriesChart;
