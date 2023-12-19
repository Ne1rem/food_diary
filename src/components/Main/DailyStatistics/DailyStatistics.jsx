import { useEffect, useState } from 'react';

import { DailyGoal } from '../DailyGoal';
import { WaterStatistic } from '../WaterStatistic';
import { FoodStatistic } from '../FoodStatistic';

import {
  StatisticBlock,
  StatisticSection,
  StatisticTitle,
  Wrapper,
} from './DailyStatistics.styled';

export const DailyStatistics = () => {
  const [dailyWater, setDailyWater] = useState(null);
  const [dailyCalories, setDailyCalories] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        //fetch
        setDailyWater(1500);
        setDailyCalories(1700);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <Wrapper>
      <StatisticSection>
        <StatisticTitle>Daily goal</StatisticTitle>
        <StatisticBlock>
          <DailyGoal calories={dailyCalories} water={dailyWater} />
        </StatisticBlock>
      </StatisticSection>

      <StatisticSection>
        <StatisticTitle>Water</StatisticTitle>
        <StatisticBlock>
          <WaterStatistic dailyWater={dailyWater} />
        </StatisticBlock>
      </StatisticSection>

      <StatisticSection>
        <StatisticTitle>Food</StatisticTitle>
        <StatisticBlock>
          <FoodStatistic />
        </StatisticBlock>
      </StatisticSection>
    </Wrapper>
  );
};
