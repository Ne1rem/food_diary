import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SuccessToast, ErrorToast } from '../../../../../Redux/User/toast';
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

const getCurrentDayOfMonth = () => {
  const currentDate = new Date();
  return currentDate.getDate();
};

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
  const caloriesChartOptions = {
    ...caloriesOptions,
  };
  const waterChartOptions = {
    ...waterOptions,
  };

    const initializeChartData = (selectedMonth) => {
    dispatch(userStatistics(selectedMonth))
      .then((data) => {
        console.log('Data from userStatistics:', data);
        updateCaloriesChartData(data);
        updateWaterChartData(data);
        updateWeightChartData(data);
      })
      .catch((e) => {
        console.error('Error fetching user statistics:', e);
        toast.error(e.response?.statusText || 'An error occurred', ErrorToast);
      });
  };

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

  const handleSelectChange = (selectedOption) => {
    setSelectedMonth(selectedOption);
    initializeChartData(selectedOption.value);
  };

  const updateCaloriesChartData = (data) => {
    if (!data || !data.payload || !data.payload.stats) {
      console.error('Data is missing or does not have the expected format.');
      return;
    }

    const dataForSelectedMonth = data.payload.stats;
    const numberOfDaysInMonth = dataForSelectedMonth.length;
    setChartData((prevData) => ({
      ...prevData,
      labels: Array.from({ length: numberOfDaysInMonth }, (_, i) => `${i + 1}`),
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
  };

  const updateWaterChartData = (data) => {
    if (!data || !data.payload || !data.payload.stats) {
      console.error('Data is missing or does not have the expected format.');
      return;
    }

    const dataForSelectedMonth = data.payload.stats;
    const numberOfDaysInMonth = dataForSelectedMonth.length;
    setWaterChartData((prevData) => ({
      ...prevData,
      labels: Array.from({ length: numberOfDaysInMonth }, (_, i) => `${i + 1}`),
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
  };

  const updateWeightChartData = (data) => {
    console.log('Data for weight:', data);

    if (!data || !data.payload || !data.payload.stats) {
      console.error('Data is missing or does not have the expected format.');
      return;
    }

    const dataForSelectedMonth = data.payload.stats;

    // Filter data only for the current month
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const filteredData = dataForSelectedMonth.filter((entry) => {
      const entryDate = new Date(entry.date);
      return (
        entryDate.getMonth() === currentMonth &&
        entryDate.getFullYear() === currentYear
      );
    });

    setWeightChartData((prevData) => ({
      ...prevData,
      upperRowValues: Array.from({ length: daysInMonth }, (_, i) => {
        const dayEntry = filteredData.find(
          (entry) => new Date(entry.date).getDate() === i + 1
        );
        return dayEntry ? dayEntry.weight : 0;
      }),
      lowerRowValues: Array.from({ length: daysInMonth }, (_, i) => `${i + 1}`),
    }));

    console.log('Weight chart data updated:', filteredData);
  };

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
                    ) / getCurrentDayOfMonth()
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
                    ) / getCurrentDayOfMonth()
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
                  ) / getCurrentDayOfMonth()
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
