import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { ErrorToast } from '../../../../../Redux/User/toast';
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
  WeightValueContainer,
  WeightWrap,
  DateContainer,
  WeightValue,
  DateValue,
  customSelectStyles,
  FlexContainer,
} from './Charts.styled';
import { chartLineOptions } from './chartOptions';
import { monthCurrent } from '../../../../../utilities/monthCurrent';
import { monthValue } from '../../../../../utilities/monthValue';
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
const numberOfDaysInMonth = (selectedMonth) => {
  const year = new Date().getFullYear();
  return new Date(year, monthValue(selectedMonth), 0).getDate();
};

const Charts = () => {
  const dispatch = useDispatch();
  const [selectedMonth, setSelectedMonth] = useState(monthCurrent());
  const [chartData, setChartData] = useState(null);
  const [waterChartData, setWaterChartData] = useState(null);
  const [weightChartData, setWeightChartData] = useState({
    weightValues: [],
    dateValues: [],
    averageWeight: null,
  });
  const [caloriesOptions, setCaloriesOptions] = useState(null);
  const [waterOptions, setWaterOptions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(userStatistics({ month: selectedMonth }));
        updateCaloriesChartData(data);
        updateWaterChartData(data);
        updateWeightChartData(data);

        // CALORIES chart config

        const caloriesOptions = {
          responsive: true,
          plugins: {
            legend: false,
            tooltip: {
              callbacks: {
                label: (context) => {
                  const value = context.parsed.y;
                  const unit = 'cal';
                  return `${value} ${unit}`;
                },
              },
              backgroundColor: '#0F0F0F',
              borderColor: 'rgba(227, 255, 168, 0.2)',
              borderWidth: 1,
              titleColor: '#B6B6B6',
              bodyColor: '#FFF',
              displayColors: false,
              titleFont: {
                size: 14,
                weight: '400',
                lineHeight: 1.42,
              },
              bodyFont: {
                size: 20,
                weight: '500',
                lineHeight: 1.18,
              },
              displayColors: false,
              caretSize: 0,
              cornerRadius: 8,
            },
          },
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              min: 1,
              max: numberOfDaysInMonth(selectedMonth),
              ticks: {
                stepSize: 1,
              },
              grid: {
                display: true,
                color: 'rgba(41, 41, 40, 1)',
                borderWidth: 0.5,
              },
            },
            y: {
              type: 'linear',
              position: 'left',
              min: 0,
              max: 3000,
              ticks: {
                stepSize: 1000,
                callback: (value) => (value === 0 ? value : value / 1000 + 'k'),
              },
              grid: {
                display: true,
                color: 'rgba(41, 41, 40, 1)',
                borderWidth: 0.5,
              },
              onClick: function (e) {
                //
              },
            },
          },
          maintainAspectRatio: false,
        };

        // WATER chart config

        const waterOptions = {
          responsive: true,
          plugins: {
            legend: false,
            tooltip: {
              callbacks: {
                label: (context) => {
                  const value = context.parsed.y;
                  const unit = 'ml';
                  return `${value} ${unit}`;
                },
              },
              backgroundColor: '#0F0F0F',
              borderColor: 'rgba(227, 255, 168, 0.2)',
              borderWidth: 1,
              titleColor: '#B6B6B6',
              bodyColor: '#FFF',
              displayColors: false,
              titleFont: {
                size: 14,
                weight: '400',
                lineHeight: 1.42,
              },
              bodyFont: {
                size: 20,
                weight: '500',
                lineHeight: 1.18,
              },
              displayColors: false,
              caretSize: 0,
              cornerRadius: 8,
            },
          },
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              min: 1,
              max: numberOfDaysInMonth(selectedMonth),
              ticks: {
                stepSize: 1,
              },
              grid: {
                display: true,
                color: 'rgba(41, 41, 40, 1)',
                borderWidth: 0.5,
              },
            },
            y: {
              type: 'linear',
              position: 'left',
              min: 0,
              max: 3000,
              ticks: {
                stepSize: 1000,
                callback: (value) => (value === 0 ? value : value / 1000 + 'L'),
              },
              grid: {
                display: true,
                color: 'rgba(41, 41, 40, 1)',
                borderWidth: 0.5,
              },
            },
          },
          maintainAspectRatio: false,
        };

        function TooltipUnit(label) {
          if (label === 'Calories') {
            return 'calories';
          } else if (label === 'Water') {
            return 'milliliters';
          }
          return '';
        }

        setCaloriesOptions(caloriesOptions);
        setWaterOptions(waterOptions);
      } catch (error) {
        console.error('Error fetching statistics:', error);
        toast.error(<ErrorToast message="Error fetching statistics." />);
      }
    };
    fetchData();
  }, [dispatch, selectedMonth]);

  const handleSelectChange = (selectedOption) => {
    try {
      setSelectedMonth(selectedOption.label);
    } catch (error) {
      console.error('Error handling select change:', error);
      toast.error(<ErrorToast message="Error handling select change." />);
    }
  };

  const getCurrentDayOfMonth = () => {
    const currentDate = new Date();
    return currentDate.getDate();
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const date = `${year}-${month}-${day}`;

  // CALORIES CONFIG

  const updateCaloriesChartData = ({ payload }) => {
    if (!payload || !payload.stats) {
      console.error('Data is missing or does not have the expected format.');
      toast.error(
        <ErrorToast message="Data is missing or has an unexpected format." />
      );
      return;
    }

    const dataForSelectedMonth = payload.stats;
    const numberOfDays = numberOfDaysInMonth(selectedMonth);
    const monthEntries = dataForSelectedMonth.filter(
      (entry) =>
        new Date(entry.date).getMonth() === monthValue(selectedMonth) - 1
    );

    const filledCaloriesData = Array.from({ length: numberOfDays }, (_, i) => {
      const entry = monthEntries.find(
        (e) => new Date(e.date).getDate() === i + 1
      );
      return entry ? Math.round(entry.totalCalories) : null;
    });

    const nonZeroCaloriesData = filledCaloriesData.filter(
      (value) => value !== null && value !== 0
    );
    const averageCalories =
      nonZeroCaloriesData.length > 0
        ? nonZeroCaloriesData.reduce((acc, val) => acc + val, 0) /
          nonZeroCaloriesData.length
        : 0;

    for (let i = 0; i < numberOfDays; i++) {
      if (filledCaloriesData[i] === null || filledCaloriesData[i] === 0) {
        filledCaloriesData[i] = Math.round(averageCalories);
      }
    }

    setChartData({
      labels: Array.from({ length: numberOfDays }, (_, i) => i + 1),
      datasets: [
        {
          label: selectedMonth,
          data: filledCaloriesData,
          ...chartLineOptions,
        },
      ],
    });
  };

  // WATER CONFIG

  const updateWaterChartData = ({ payload }) => {
    if (!payload || !payload.stats) {
      console.error('Data is missing or does not have the expected format.');
      toast.error(
        <ErrorToast message="Data is missing or has an unexpected format." />
      );
      return;
    }

    const dataForSelectedMonth = payload.stats;
    const numberOfDays = numberOfDaysInMonth(selectedMonth);
    const monthEntries = dataForSelectedMonth.filter(
      (entry) =>
        new Date(entry.date).getMonth() === monthValue(selectedMonth) - 1
    );

    const filledWaterData = Array.from({ length: numberOfDays }, (_, i) => {
      const entry = monthEntries.find(
        (e) => new Date(e.date).getDate() === i + 1
      );
      return entry ? Math.round(entry.water) : null;
    });

    const nonZeroWaterData = filledWaterData.filter(
      (value) => value !== null && value !== 0
    );
    const averageWater =
      nonZeroWaterData.length > 0
        ? nonZeroWaterData.reduce((acc, val) => acc + val, 0) /
          nonZeroWaterData.length
        : 0;

    for (let i = 0; i < numberOfDays; i++) {
      if (filledWaterData[i] === null || filledWaterData[i] === 0) {
        // Use Math.round() to round the values to the nearest integer
        filledWaterData[i] = Math.round(averageWater);
      }
    }

    setWaterChartData({
      labels: Array.from({ length: numberOfDays }, (_, i) => `${i + 1}`),
      datasets: [
        {
          label: selectedMonth,
          data: filledWaterData,
          ...chartLineOptions,
        },
      ],
    });
  };

  const findLastNonZeroIndex = (array, end) => {
    for (let i = end - 1; i >= 0; i--) {
      if (array[i] !== null) {
        return i;
      }
    }
    return -1;
  };

  // WEIGHT CONFIG

  const updateWeightChartData = (data) => {
    if (!data || !data.payload || !data.payload.stats) {
      console.error('Data is missing or does not have the expected format.');
      toast.error(
        <ErrorToast message="Data is missing or has an unexpected format." />
      );
      return;
    }
    const dataForSelectedMonth = data.payload.stats;
    const daysInMonth = new Date(year, monthValue(selectedMonth), 0).getDate();
    const dayEntries = Array.from({ length: daysInMonth }, (_, i) => {
      const entryDate = new Date(year, monthValue(selectedMonth) - 1, i + 1);
      const dayEntry = dataForSelectedMonth.find(
        (entry) =>
          new Date(entry.date.replace(/-/g, '/')).getTime() ===
          entryDate.getTime()
      );
      return dayEntry;
    });
    let lastEnteredValue = null;
    const weightValues = dayEntries.map((entry, index) => {
      if (entry && entry.weight !== undefined) {
        lastEnteredValue = entry.weight;
        return entry.weight;
      } else if (entry && index + 1 === getCurrentDayOfMonth()) {
        return lastEnteredValue !== null ? lastEnteredValue : undefined;
      } else {
        return null;
      }
    });
    const futureDaysIndex = getCurrentDayOfMonth();
    const lastNonZeroValueIndex = findLastNonZeroIndex(
      weightValues,
      futureDaysIndex
    );
    const lastNonZeroValue =
      lastNonZeroValueIndex !== -1 ? weightValues[lastNonZeroValueIndex] : null;
    weightValues.forEach((value, index) => {
      if (value === 0 && index + 1 < getCurrentDayOfMonth()) {
        weightValues[index] = lastEnteredValue;
      }
    });
    const startOfFutureDaysIndex = futureDaysIndex - 1;
    for (let i = startOfFutureDaysIndex; i >= 0; i--) {
      if (weightValues[i] === null) {
        weightValues[i] = 0;
      } else {
        break;
      }
    }
    const filledWeightValues = weightValues.map((value, index) => {
      if (value === null && index + 1 <= futureDaysIndex) {
        return lastNonZeroValue !== null ? lastNonZeroValue : undefined;
      }
      return value;
    });
    const validWeightValues = filledWeightValues.filter(
      (value) => value !== null && value !== undefined
    );
    const sumWeight = validWeightValues.reduce((acc, val) => acc + val, 0);
    const averageWeight =
      validWeightValues.length > 0
        ? sumWeight / validWeightValues.length
        : null;
    setWeightChartData({
      weightValues: filledWeightValues,
      dateValues: Array.from({ length: daysInMonth }, (_, i) =>
        (i + 1).toString()
      ),
      averageWeight: averageWeight !== null ? averageWeight.toFixed(0) : null,
    });
  };

  // SELECT CONFIG

  const selectOptions = () => {
    const currentIndex = months.findIndex((month) => month === monthCurrent());
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

      <FlexContainer>
        <Wrapper>
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
                  <>cal</>
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
              {' '}
              {waterChartData && waterChartData.datasets && (
                <Line data={waterChartData} options={waterOptions} />
              )}
            </ContainerChart>
          </ChartsWrapper>
        </Wrapper>

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
                <WeightValueContainer>
                  {weightChartData.weightValues.map((value, index) => (
                    <WeightValue key={index}>
                      {value !== null ? value : ''}
                    </WeightValue>
                  ))}
                </WeightValueContainer>
                <DateContainer>
                  {weightChartData.dateValues.map((value, index) => (
                    <DateValue key={index}>{value}</DateValue>
                  ))}
                </DateContainer>
              </WeightWrap>
            </ContainerWeightChart>
          )}
        </WeightWrapper>
      </FlexContainer>
    </>
  );
};

export default Charts;
