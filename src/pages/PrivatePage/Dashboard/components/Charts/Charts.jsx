import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Select from 'react-select';
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
import {
  caloriesOptions,
  waterOptions,
  chartLineOptions,
} from './chartOptions';
import { getStatistics } from '../../../../../Redux/Statistics/statisticThunks';
import { selectRequiredMonth } from '../../../../../Redux/Statistics/selectors';
import { currentMonth } from '../../../../../Redux/Statistics/utilities/currentMonth';
import { setRequiredMonth } from '../../../../../Redux/Statistics/statisticSlice';
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);
const months = [
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

const Charts = () => {
  const dispatch = useDispatch();
  const requestedMonth = useSelector(selectRequiredMonth);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth());
  const [chartData, setChartData] = useState(null);
  const [waterChartData, setWaterChartData] = useState(null);
  const [weightChartData, setWeightChartData] = useState({
    upperRowValues: [],
    lowerRowValues: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Selected Month before dispatch:', selectedMonth);
        const data = await dispatch(getStatistics({ month: selectedMonth }));
        updateCaloriesChartData(data);
        updateWaterChartData(data);
        updateWeightChartData(data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };
    fetchData();
  }, [selectedMonth]);

  const handleSelectChange = (selectedOption) => {
    setSelectedMonth(selectedOption.label);
    dispatch(setRequiredMonth(selectedOption.label));
    console.log('Selected Month after change:', selectedOption.label);
  };

  const getCurrentDayOfMonth = () => {
    const currentDate = new Date();
    return currentDate.getDate();
  };

  // CALORIES CONFIG

  const updateCaloriesChartData = ({ payload }) => {
    if (!payload || !payload.stats) {
      console.error('Data is missing or does not have the expected format.');
      return;
    }
    const caloriesChartOptions = {
      ...chartLineOptions,
    };
    const dataForSelectedMonth = payload.stats;
    const numberOfDaysInMonth = dataForSelectedMonth.length;
    setChartData((prevData) => ({
      ...prevData,
      labels: Array.from({ length: numberOfDaysInMonth }, (_, i) => `${i + 1}`),
      datasets: [
        {
          label: 'Calories',
          data: dataForSelectedMonth.map((entry) => entry.totalCalories),
          ...caloriesChartOptions,
        },
      ],
    }));
  };

  // WATER CONFIG

  const updateWaterChartData = ({ payload }) => {
    if (!payload || !payload.stats) {
      console.error('Data is missing or does not have the expected format.');
      return;
    }
    const waterChartOptions = {
      ...chartLineOptions,
    };

    const dataForSelectedMonth = payload.stats;
    const numberOfDaysInMonth = dataForSelectedMonth.length;
    setWaterChartData((prevData) => ({
      ...prevData,
      labels: Array.from({ length: numberOfDaysInMonth }, (_, i) => `${i + 1}`),
      datasets: [
        {
          label: 'Water',
          data: dataForSelectedMonth.map((entry) => entry.water),
          ...waterChartOptions,
        },
      ],
    }));
  };

  // WEIGHT CONFIG

  const updateWeightChartData = (data) => {
    if (!data || !data.payload || !data.payload.stats) {
      console.error('Data is missing or does not have the expected format.');
      return;
    }
    const dataForSelectedMonth = data.payload.stats;
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const dayEntries = Array.from({ length: daysInMonth }, (_, i) => {
      const entryDate = new Date(currentYear, currentMonth, i + 1);
      const dayEntry = dataForSelectedMonth.find(
        (entry) =>
          new Date(entry.date.replace(/-/g, '/')).getTime() ===
          entryDate.getTime()
      );
      return dayEntry;
    });
    let lastEnteredValue = null;
    const weightValues = dayEntries.map((entry, index) => {
      if (entry && entry.weight === 0) {
        return lastEnteredValue !== null ? lastEnteredValue : null;
      }
      if (entry && entry.weight !== undefined) {
        lastEnteredValue = entry.weight;
        return entry.weight;
      }
      return null;
    });
    const validWeightValues = weightValues
      .slice(0, daysInMonth)
      .filter((value) => value !== null);
    const sumWeight = validWeightValues.reduce(
      (acc, val) => acc + (val || 0),
      0
    );
    const averageWeight = validWeightValues.length
      ? sumWeight / validWeightValues.length
      : null;
    setWeightChartData({
      upperRowValues: weightValues,
      lowerRowValues: Array.from({ length: daysInMonth }, (_, i) =>
        (i + 1).toString()
      ),
      averageWeight: averageWeight !== null ? averageWeight.toFixed(0) : null,
    });
    console.log('Weight UPDATED:', dayEntries);
  };

  // SELECT CONFIG

  const selectOptions = () => {
    const currentIndex = months.findIndex((month) => month === currentMonth());
    const availableMonths = months
      .slice(Math.max(0, currentIndex - 4), currentIndex + 1)
      .reverse();
    return availableMonths.map((month) => ({
      value: month,
      label: month,
    }));
  };

  return (
    <>
      <ContainerSelect>
        <BackIconContainer>
          {/* Icon back to main */}
          <BackIconLink to="/main">
            <FaArrowLeftLong />
          </BackIconLink>
          {/* SELECT */}
          <label>
            <Select
              value={{ value: selectedMonth, label: 'Month' }}
              onChange={handleSelectChange}
              options={selectOptions()}
              placeholder="Month"
              styles={customSelectStyles}
              isSearchable={false}
              readOnly
            />
          </label>
        </BackIconContainer>
        {/* Current month */}
        {selectedMonth && <Month>{selectedMonth}</Month>}
      </ContainerSelect>

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

          {/* CALORIES Chart */}
          <ContainerChart>
            {chartData && chartData.datasets && (
              <Line data={chartData} options={caloriesOptions} />
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

          {/* WATER Chart */}
          <ContainerChart>
            {waterChartData && waterChartData.datasets && (
              <Line data={waterChartData} options={waterOptions} />
            )}
          </ContainerChart>
        </ChartsWrapper>
      </Wrapper>

      {/* Weight Chart Container */}
      <WeightWrapper>
        <ContainerValue>
          <TitleWeight>Weight</TitleWeight>
          {/* Average value */}
          {weightChartData && weightChartData.averageWeight !== null && (
            <Value>
              <Span>Average value:</Span> {weightChartData.averageWeight} kg
            </Value>
          )}
        </ContainerValue>

        {/* WEIGHT Chart */}
        {weightChartData && (
          <ContainerWeightChart>
            <WeightWrap>
              <Upper>
                {weightChartData.upperRowValues.map((value, index) => (
                  <UpperValue key={index}>
                    {value !== null ? value : ''}
                  </UpperValue>
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
  );
};

export default Charts;
