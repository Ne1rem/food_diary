import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Select from 'react-select';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from 'chart.js';
import {
  ContainerChart,
  ContainerSelect,
  ContainerValue,
  Month,
  TitleCalories,
} from './CaloriesChart.styled';
import { customSelectStyles } from './CaloriesChart.styled';

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
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [months, setMonths] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('');
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentMonthName = monthNames[currentMonthIndex];

    setCurrentMonth(currentMonthName);
    setMonths(
      Array.from(
        { length: 5 },
        (_, i) => monthNames[(currentMonthIndex - i + 12) % 12]
      )
    );

    setSelectedMonth({ value: currentMonthName, label: currentMonthName });

    updateChartData(currentMonthName);
  }, []);

  const handleSelectChange = (selectedOption) => {
    setSelectedMonth(selectedOption);
    updateChartData(selectedOption.value);
  };

  const updateChartData = (selected) => {
    // Замість randomData() - API
    // fetchDataForMonth(selected).then((data) => setChartData(data));

    // randomData() для прикладу:
    const randomData = () => {
      return Array.from({ length: 30 }, () => Math.floor(Math.random() * 3000));
    };

    setChartData({
      labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      datasets: [
        {
          label: 'Calories',
          data: randomData(), // data from backend
          backgroundColor: 'transparent',
          borderColor: '#E3FFA8',
          borderWidth: 1,
          pointBorderColor: '#0F0F0F',
          pointBackgroundColor: '#E3FFA8',
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: '#E3FFA8',
          pointHoverBorderColor: '#0F0F0F',
          pointHoverBorderWidth: 1,
          pointRadius: 2,
          pointHitRadius: 20,
          fill: true,
          tension: 0.5,
        },
      ],
    });
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
        max: 3000,
        ticks: {
          stepSize: 1000,
          callback: (value) => (value === 0 ? value : value / 1000 + 'k'),
        },
      },
    },
  };

  const selectOptions = months.map((month) => ({ value: month, label: month }));

  return (
    <>
      <ContainerSelect>
        <label>
          <Select
            value={selectedMonth}
            onChange={handleSelectChange}
            options={selectOptions}
            placeholder="Month"
            styles={customSelectStyles}
            isSearchable={false}
            readOnly
          />
        </label>
        {selectedMonth && <Month>{selectedMonth.label}</Month>}
      </ContainerSelect>

      <ContainerValue>
        <TitleCalories>Calories</TitleCalories>
        {chartData && (
          <p>
            Average value:{' '}
            {Math.round(
              chartData.datasets[0].data.reduce((acc, val) => acc + val, 0) / 30
            )}{' '}
            calories
          </p>
        )}
      </ContainerValue>

      <ContainerChart>
        {chartData && <Line data={chartData} options={options}></Line>}
      </ContainerChart>
    </>
  );
};

export default CaloriesChart;
