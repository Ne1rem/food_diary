import React from 'react';
import Charts from './components/Charts/Charts';
import { Container, Section } from './components/Dashboard.styled';

const Dashboard = () => {
  return (
    <Section>
      <Container>
        <Charts />
      </Container>
    </Section>
  );
};

export default Dashboard;