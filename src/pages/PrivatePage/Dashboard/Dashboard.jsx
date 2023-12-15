import React from 'react';
import { useParams } from 'react-router-dom';

import MonthSelector from './components/MonthSelector/MonthSelector';
import CaloriesChart from './components/CaloriesChart/CaloriesChart';
import WaterChart from './components/WaterChart/WaterChart';
import WeightChart from './components/WeightChart/WeightChart';

import { Container, Section } from './components/Dashboard.styled';

const Dashboard = () => {
  const { selectedMonth } = useParams();

  return (
    <Section>
      <Container>
        <MonthSelector selectedMonthFromPath={selectedMonth} />
        <CaloriesChart selectedMonth={selectedMonth} />
        <WaterChart />
        <WeightChart />
      </Container>
    </Section>
  );
};

export default Dashboard;