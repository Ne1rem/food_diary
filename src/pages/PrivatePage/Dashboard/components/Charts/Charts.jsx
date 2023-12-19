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
  ChartsWrapper,
  Wrapper,
  Value,
  Span,
  ContainerWeightChart,
  WeightWrapper,
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

  const initializeChartData = (selected) => {
    // Викликати функції для ініціалізації даних графіка на підставі обраного місяця
    updateCaloriesChartData(selected);
    updateWaterChartData(selected);
    updateWeightChartData(selected);
  };

  // --- Month selet setings ---
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

    updateCaloriesChartData(currentMonthName);
    updateWaterChartData(currentMonthName);
    updateWeightChartData(currentMonthName);
    initializeChartData(currentMonthName);
  }, []);

  const handleSelectChange = (selectedOption) => {
    setSelectedMonth(selectedOption);
    updateCaloriesChartData(selectedOption.value);
    updateWaterChartData(selectedOption.value);
    updateWeightChartData(selectedOption.value);
    initializeChartData(selectedOption.value);
  };
  // --- /Month selet setings ---

  // --- Calories setings ---
  const updateCaloriesChartData = (selected) => {
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

  const caloriesOptions = {
    responsive: true,
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
  // --- /Calories setings ---

  // --- Water setings ---
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

  const waterOptions = {
    responsive: true,
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
  // --- /Water setings ---

  // --- Weight setings ---
  const updateWeightChartData = (selected) => {
    const randomWeightData = () => {
      return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
    };

    setWeightChartData({
      labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      datasets: [
        {
          label: 'Weight',
          data: randomWeightData(),
          backgroundColor: 'transparent',
          borderColor: '#E3FFA8',
          borderWidth: 0,
          pointRadius: 0,
          pointHoverRadius: 0,
          pointHoverBackgroundColor: '#E3FFA8',
          pointBorderColor: '#transparent',
          pointBorderWidth: 30,
          fill: false,
          tension: 0,
        },
      ],
    });
  };

  const weightOptions = {
    plugins: {
      legend: false,
      annotation: {
        annotations: Array.from({ length: 30 }, (_, i) => ({
          type: 'text',
          position: 'top',
          content: 'randomWeightData()', // backend
          x: i + 1,
          y: 0,
          font: {
            size: 10,
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
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };
  // --- /Weight setings ---

  const selectOptions = months.map((month) => ({ value: month, label: month }));

  return (
    <>
      <ContainerSelect>
        <BackIconContainer>
          {/* --Icon back to main-- */}
          <BackIconLink to="/main">
            <FaArrowLeftLong />
          </BackIconLink>
          {/* ---Select--- */}
          <label>
            <Select
              value={{ value: selectedMonth?.value, label: 'Month' }}
              onChange={handleSelectChange}
              options={selectOptions}
              placeholder="Month"
              styles={customSelectStyles}
              isSearchable={false}
              readOnly
            />
          </label>
        </BackIconContainer>
        {/* --Сurrent month-- */}
        {selectedMonth && <Month>{selectedMonth.label}</Month>}
      </ContainerSelect>

      <Wrapper>
        {/* ---Calories Chart Container--- */}
        <ChartsWrapper>
          <ContainerValue>
            <TitleCalories>Calories</TitleCalories>
            {/* --Average value-- */}
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
          {/* --Calories Chart-- */}
          <ContainerChart>
            {chartData && (
              <Line data={chartData} options={caloriesOptions}></Line>
            )}
          </ContainerChart>
        </ChartsWrapper>

        {/* ---Water Chart Container--- */}
        <ChartsWrapper>
          <ContainerValue>
            <TitleWater>Water</TitleWater>
            {/* --Average value-- */}
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
          </ContainerValue>
          {/* --Water Chart-- */}
          <ContainerChart>
            {waterChartData && (
              <Line data={waterChartData} options={waterOptions} />
            )}
          </ContainerChart>
        </ChartsWrapper>
      </Wrapper>

      {/* ---Weight Chart Container--- */}
      <WeightWrapper>
        <ContainerValue>
          <TitleWeight>Weight</TitleWeight>
          {/* --Average value-- */}
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
        </ContainerValue>

        {/* --Weight Chart-- */}
        <ContainerWeightChart>
          {weightChartData && (
            <Line data={weightChartData} options={weightOptions} />
          )}
        </ContainerWeightChart>
      </WeightWrapper>
    </>
  );
};

export default Charts;