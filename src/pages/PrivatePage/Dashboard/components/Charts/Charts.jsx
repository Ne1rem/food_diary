import React, { useState, useEffect } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Line } from 'react-chartjs-2';
import Select from 'react-select';
import MediaQuery from 'react-responsive';
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
  BackIconContainer,
  BackIconLink,
  ChartContainer,
  ChartsWrapper,
  TitleWater,
  Wrapper,
  Value,
  Span,
  ContainerWaterValue,
} from './Charts.styled';
import { customSelectStyles } from './Charts.styled';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const Charts = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [months, setMonths] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('');
  const [chartData, setChartData] = useState(null);
  const [waterChartData, setWaterChartData] = useState(null);

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
    updateWaterChartData(currentMonthName);
  }, []);

  const handleSelectChange = (selectedOption) => {
    setSelectedMonth(selectedOption);
    updateChartData(selectedOption.value);
    updateWaterChartData(selectedOption.value);
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

  const updateWaterChartData = (selected) => {
    // Замість randomWaterData() - API
    // fetchDataForMonth(selected).then((data) => setWaterChartData(data));

    // randomWaterData() для прикладу:
    const randomWaterData = () => {
      return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
    };

    setWaterChartData({
      labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      datasets: [
        {
          label: 'Water',
          data: randomWaterData(), // data from backend
          backgroundColor: 'transparent',
          borderColor: 'var(--color-primary-grey)',
          borderWidth: 1,
          pointBorderColor: 'var(--color-primary-black-2)',
          pointBackgroundColor: '#A8E3FF',
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: '#A8E3FF',
          pointHoverBorderColor: 'var(--color-primary-black-2)',
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
          display: true,
          color: 'rgba(41, 41, 40, 1)',
        },
      },
      y: {
        min: 0,
        max: 3000,
        ticks: {
          stepSize: 1000,
          callback: (value) => (value === 0 ? value : value / 1000 + 'k'),
        },
        grid: {
          display: true,
          color: 'rgba(41, 41, 40, 1)',
        },
      },
    },
  };

  const selectOptions = months.map((month) => ({ value: month, label: month }));

  return (
    <>
      <ContainerSelect>
        <BackIconContainer>
          <BackIconLink to="/main">
            <FaArrowLeftLong />
          </BackIconLink>
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
        </BackIconContainer>
        {selectedMonth && <Month>{selectedMonth.label}</Month>}
      </ContainerSelect>

      <Wrapper>
        <ChartsWrapper>
          <ContainerValue>
            <TitleCalories>Calories</TitleCalories>
            {chartData && (
              <Value>
                <Span>Average value: </Span>{' '}
                {Math.round(
                  chartData.datasets[0].data.reduce(
                    (acc, val) => acc + val,
                    0
                  ) / 30
                )}{' '}
                <>calories</>
              </Value>
            )}
          </ContainerValue>

          <ContainerChart>
            {chartData && <Line data={chartData} options={options}></Line>}
          </ContainerChart>
        </ChartsWrapper>

        <ChartsWrapper>
          <ContainerWaterValue>
            <TitleWater>Water</TitleWater>
            {waterChartData && (
              <Value>
                <Span>Average value: </Span>{' '}
                {Math.round(
                  waterChartData.datasets[0].data.reduce(
                    (acc, val) => acc + val,
                    0
                  ) / 30
                )}{' '}
                <>ml</>
              </Value>
            )}
          </ContainerWaterValue>

          <ContainerChart>
            {waterChartData && <Line data={waterChartData} options={options} />}
          </ContainerChart>
        </ChartsWrapper>
      </Wrapper>
    </>
  );
};

export default Charts;
