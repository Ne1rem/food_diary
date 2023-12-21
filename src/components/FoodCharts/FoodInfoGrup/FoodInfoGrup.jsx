import { ChartCard } from '../ChartCard/ChartCard.jsx';
import { DoughnutChart } from '../DoughnutChart/DoughnutChart.jsx';
import {
  CaloriesChart,
  ChartInfoWrap,
  FoodInfoCard,
  InfoWrap,
} from './FoodInfoGrup.styled.js';

const carbBcg = '#FFC4F7';
const proteinBcg = '#FFF3B7';
const fatBcg = '#B6B6B6';

export const FoodInfoGrup = () => {
  let dailyCalories = 1700;
  let diaryCalories = 1360;
  let proteinSum = 119.5;
  let carbonohidratesSum = 136;
  let fatsSum = 44.8;
  let carbsGoal = 170;
  let protGoal = 135.5;
  let fatsGoal = 56;
  let caloriesChartBcg = '#45FFBC';

  return (
    <div>
      <FoodInfoCard>
        <CaloriesChart>
          <DoughnutChart
            dailyCalories={dailyCalories}
            inputValue={diaryCalories}
            chartBcg={caloriesChartBcg}
          />
          <ChartInfoWrap>
            <p>{diaryCalories}</p>

            <p>calories</p>
          </ChartInfoWrap>
        </CaloriesChart>
        <InfoWrap>
          <ChartCard
            title={'Carbonohidrates'}
            chartBcg={carbBcg}
            elementGoal={carbsGoal}
            elementValue={carbonohidratesSum}
          />
          <ChartCard
            title={'Protein'}
            chartBcg={proteinBcg}
            elementGoal={protGoal}
            elementValue={proteinSum}
          />
          <ChartCard
            title={'Fat'}
            chartBcg={fatBcg}
            elementGoal={fatsGoal}
            elementValue={fatsSum}
          />
        </InfoWrap>
      </FoodInfoCard>
    </div>
  );
};
