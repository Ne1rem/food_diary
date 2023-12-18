import React, { useState, useEffect } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
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
  TitleWater,
  TitleWeight,
  BackIconContainer,
  BackIconLink,
  ChartContainer,
  ChartsWrapper,
  Wrapper,
  Value,
  Span,
  ContainerWaterValue,
  ContainerWeightValue,
  ContainerWeightChart,
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
  const [weightChartData, setWeightChartData] = useState(null);

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
    updateWeightChartData(currentMonthName);
  }, []);

  const handleSelectChange = (selectedOption) => {
    setSelectedMonth(selectedOption);
    updateChartData(selectedOption.value);
    updateWaterChartData(selectedOption.value);
    updateWeightChartData(selectedOption.value);
  };

  const updateChartData = (selected) => {
    const randomData = () => {
      return Array.from({ length: 30 }, () => Math.floor(Math.random() * 3000));
    };

    setChartData({
      labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      datasets: [
        {
          label: 'Calories',
          data: randomData(),
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
    const randomWaterData = () => {
      return Array.from({ length: 30 }, () => Math.floor(Math.random() * 3000));
    };

    setWaterChartData({
      labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      datasets: [
        {
          label: 'Water',
          data: randomWaterData(),
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

  const updateWeightChartData = (selected) => {
    // BackEnnd API:
    //   const weights = [];

    // const dataWithLabels = weights.map((weight, index) => ({
    //   x: index + 1,
    //   y: 0,
    //   weight: weight,
    // }));

    const randomWeightData = () => {
      return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
    };

    setWeightChartData({
      labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      datasets: [
        {
          label: 'Weight',
          data: randomWeightData(), // з backend
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 1,
          pointRadius: 10,
          pointHoverRadius: 10,
          pointBackgroundColor: '#E3FFA8',
          pointBorderColor: '#0F0F0F',
          pointBorderWidth: 1,
          fill: false,
          tension: 0,
        },
      ],
    });
  };

  const caloriesOptions = {
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
        onClick: function (e) {
          // Дії при кліці на анотацію
        },
      },
    },
    maintainAspectRatio: false,
  };

  const waterOptions = {
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
          callback: (value) => (value === 0 ? value : value / 1000 + 'L'),
        },
        grid: {
          display: true,
          color: 'rgba(41, 41, 40, 1)',
        },
        onClick: function (e) {
          // Дії при кліці на анотацію
        },
      },
    },
    maintainAspectRatio: false,
  };

  const weightOptions = {
  plugins: {
    legend: false,
    annotation: {
      annotations: Array.from({ length: 30 }, (_, i) => ({
        type: 'text',
        position: 'top',
        content: 'Weight', // backend
        x: i + 1,
        y: 0,
        font: {
          size: 12,
        },
        onClick: function (e) {
          // Дії при кліці на анотацію
        },
      })),
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: 'rgba(41, 41, 40, 1)',
      },
    },
    y: {
      display: false,
      grid: {
          color: 'rgba(41, 41, 40, 1)',
        },
    },
    
  },
  maintainAspectRatio: false,
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
                <Span>Average value:</Span>{' '}
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
            {chartData && (
              <Line data={chartData} options={caloriesOptions}></Line>
            )}
          </ContainerChart>
          </ChartsWrapper>

        <ChartsWrapper>
          <ContainerWaterValue>
            <TitleWater>Water</TitleWater>
            {waterChartData && (
              <Value>
                <Span>Average value:</Span>{' '}
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
            {waterChartData && (
              <Line data={waterChartData} options={waterOptions} />
            )}
          </ContainerChart>
        </ChartsWrapper>
      </Wrapper>

      <ChartsWrapper>
        <ContainerWeightValue>
          <TitleWeight>Weight</TitleWeight>
          {weightChartData && (
            <Value>
              <Span>Average value:</Span>{' '}
              {Math.round(
                weightChartData.datasets[0].data.reduce(
                  (acc, val) => acc + val,
                  0
                ) / 30
              )}{' '}
              kg
            </Value>
          )}
        </ContainerWeightValue>

        <ContainerWeightChart>
          {weightChartData && (
            <Line data={weightChartData} options={weightOptions} />
          )}
        </ContainerWeightChart>
      </ChartsWrapper>
    </>
  );
};

export default Charts;
