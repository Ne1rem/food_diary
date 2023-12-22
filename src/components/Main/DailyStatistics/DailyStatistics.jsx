import { useSelector } from 'react-redux';

import { DailyGoal } from '../DailyGoal';
import { WaterStatistic } from '../WaterStatistic';
import { FoodStatistic } from '../FoodStatistic';
import {
  StatisticBlock,
  StatisticSection,
  StatisticTitle,
  Wrapper,
} from './DailyStatistics.styled';

import { selectUserInfo } from '../../../Redux/Auth/selectors';

export const DailyStatistics = () => {
  const user = useSelector(selectUserInfo);
  const { recommendedCalories, recommendedWater } = user;

  return (
    <Wrapper>
      <StatisticSection>
        <StatisticTitle>Daily goal</StatisticTitle>
        <StatisticBlock>
          <DailyGoal
            calories={recommendedCalories}
            water={recommendedWater * 1000}
          />
        </StatisticBlock>
      </StatisticSection>

      <StatisticSection>
        <StatisticTitle>Water</StatisticTitle>
        <StatisticBlock>
          <WaterStatistic dailyWater={recommendedWater * 1000} />
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
