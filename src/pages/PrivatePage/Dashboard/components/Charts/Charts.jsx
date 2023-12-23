import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { FaArrowLeftLong } from 'react-icons/fa6';
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
  Upper,
  WeightWrap,
  LowerWrap,
  UpperValue,
  LowerValue,
} from './Charts.styled';
import { customSelectStyles } from './Charts.styled';
import { caloriesOptions, waterOptions } from './chartOptions';
import {
  selectCaloriesData,
  selectWaterData,
  selectWeightData,
} from '../../../../../Redux/User/selectors';
import { userStatistics } from '../../../../../Redux/User/userThunks';
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
  const dispatch = useDispatch();
  const caloriesData = useSelector(selectCaloriesData);
  const waterData = useSelector(selectWaterData);
  const weightData = useSelector(selectWeightData);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [months, setMonths] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('');
  const [chartData, setChartData] = useState(null);
  const [waterChartData, setWaterChartData] = useState(null);
  const [weightChartData, setWeightChartData] = useState(null);

  // Chart options
  const caloriesChartOptions = {
    ...caloriesOptions,
  };
  const waterChartOptions = {
    ...waterOptions,
  };

  // Function to initialize chart data
  const initializeChartData = (selectedMonth) => {
    dispatch(userStatistics(selectedMonth)).then((data) => {
      console.log('Data from userStatistics:', data);
      updateCaloriesChartData(data);
      updateWaterChartData(data);
      updateWeightChartData(data);
    });
  };

  // Initial setup on component mount
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
    initializeChartData(currentMonthName);
  }, []);

  // Handle select change
  const handleSelectChange = (selectedOption) => {
    setSelectedMonth(selectedOption);
    initializeChartData(selectedOption.value);
  };

  // Function to update calories chart data
  const updateCaloriesChartData = (data) => {
    console.log('Data for calories:', data);

    if (!data || !data.payload || !data.payload.stats) {
      console.error('Data is missing or does not have the expected format.');
      return;
    }

    const dataForSelectedMonth = data.payload.stats;

    setChartData((prevData) => ({
      ...prevData,
      labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      datasets: [
        {
          label: 'Calories',
          data: dataForSelectedMonth.map((entry) => entry.totalCalories),
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
          fill: false,
          tension: 0.5,
        },
      ],
    }));

    console.log('Updating calories chart data:', dataForSelectedMonth);
  };

  // Function to update water chart data
  const updateWaterChartData = (data) => {
    console.log('Data for water:', data);

    if (!data || !data.payload || !data.payload.stats) {
      console.error('Data is missing or does not have the expected format.');
      return;
    }

    const dataForSelectedMonth = data.payload.stats;

    setWaterChartData((prevData) => ({
      ...prevData,
      labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      datasets: [
        {
          label: 'Water',
          data: dataForSelectedMonth.map((entry) => entry.water),
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
    }));

    console.log('Updating water chart data:', dataForSelectedMonth);
  };

  // Function to update weight chart data
  const updateWeightChartData = (data) => {
    console.log('Data for weight:', data);

    if (!data || !data.payload || !data.payload.stats) {
      console.error('Data is missing or does not have the expected format.');
      return;
    }

    const dataForSelectedMonth = data.payload.stats;

    setWeightChartData((prevData) => ({
      ...prevData,
      upperRowValues: dataForSelectedMonth.map((entry) => entry.weight),
      lowerRowValues: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
    }));

    console.log('Updating weight chart data:', dataForSelectedMonth);
  };

  // Generate select options
  const selectOptions = months.map((month) => ({
    value: month,
    label: month,
  }));

  return (
    <>
      <ContainerSelect>
        <BackIconContainer>
          {/* Icon back to main */}
          <BackIconLink to="/main">
            <FaArrowLeftLong />
          </BackIconLink>
          {/* Select */}
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
        {/* Current month */}
        {selectedMonth && <Month>{selectedMonth.label}</Month>}
      </ContainerSelect>

      <>
        <Wrapper>
          {/* Calories Chart Container */}
          <ChartsWrapper>
            <ContainerValue>
              <TitleCalories>Calories</TitleCalories>
              {/* Average value */}
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
            {/* Calories Chart */}
            <ContainerChart>
              {chartData && (
                <Line data={chartData} options={caloriesChartOptions} />
              )}
            </ContainerChart>
          </ChartsWrapper>

          {/* Water Chart Container */}
          <ChartsWrapper>
            <ContainerValue>
              <TitleWater>Water</TitleWater>
              {/* Average value */}
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
            {/* Water Chart */}
            <ContainerChart>
              {waterChartData && (
                <Line data={waterChartData} options={waterChartOptions} />
              )}
            </ContainerChart>
          </ChartsWrapper>
        </Wrapper>

        {/* Weight Chart Container */}
        <WeightWrapper>
          <ContainerValue>
            <TitleWeight>Weight</TitleWeight>
            {/* Average value */}
            {weightChartData && (
              <Value>
                <Span>Average value:</Span>{' '}
                {Math.round(
                  weightChartData.upperRowValues.reduce(
                    (acc, val) => acc + val,
                    0
                  ) / 30
                )}{' '}
                kg
              </Value>
            )}
          </ContainerValue>

          {/* Weight Chart */}
          {weightChartData && (
            <ContainerWeightChart>
              <WeightWrap>
                <Upper>
                  {weightChartData.upperRowValues.map((value, index) => (
                    <UpperValue key={index}>{value}</UpperValue>
                  ))}
                </Upper>
                <LowerWrap>
                  {weightChartData.lowerRowValues.map((value, index) => (
                    <LowerValue key={index}>{value}</LowerValue>
                  ))}
                </LowerWrap>
              </WeightWrap>
            </ContainerWeightChart>
          )}
        </WeightWrapper>
      </>
    </>
  );
};

export default Charts;
