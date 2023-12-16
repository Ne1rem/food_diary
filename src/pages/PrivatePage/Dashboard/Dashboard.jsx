import React from 'react';

import CaloriesChart from './components/CaloriesChart/CaloriesChart';
import WaterChart from './components/WaterChart/WaterChart';
import WeightChart from './components/WeightChart/WeightChart';

import { Container, Section } from './components/Dashboard.styled';

const Dashboard = () => {
  return (
    <Section>
      <Container>
        <CaloriesChart />
        <WaterChart />
        <WeightChart />
      </Container>
    </Section>
  );
};

export default Dashboard;