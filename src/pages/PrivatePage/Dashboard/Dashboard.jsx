import React from 'react';
import { useParams } from 'react-router-dom';

import MonthSelector from './MonthSelector';
import CaloriesChart from './CaloriesChart';
import WaterChart from './WaterChart';
import WeightChart from './WeightChart';

const Dashboard = () => {
  const { selectedMonth } = useParams();

  return (
    <>
      <MonthSelector selectedMonthFromPath={selectedMonth} />
      <CaloriesChart selectedMonth={selectedMonth} />
      <WaterChart />
      <WeightChart />
    </>
  );
};

export default Dashboard;