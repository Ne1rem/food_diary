import { ChartCard } from '../ChartCard/ChartCard';
import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
import {
  CaloriesChartContainer,
  InfContainer,
  Container,
  ChartsContainer,
  Title,
} from './FoodInfo.styled';

// color:
const carb = '#FFC4F7';
const protein = '#FFF3B7';
const fat = '#B6B6B6';

export const FoodInfo = () => {
  // BackEnd in feature:
  let dailyCalories = 1700;
  let diaryCalories = 1360;
  let proteinSum = 119.5;
  let carbonohidratesSum = 136;
  let fatsSum = 44.8;
  let carbsGoal = 170;
  let protGoal = 135.5;
  let fatsGoal = 56;

  let сharts = '#45FFBC';

  return (
    <>
      <Title>Food</Title>

      <Container>
        {/* Calories: */}
        <CaloriesChartContainer>
          <DoughnutChart
            dailyCalories={dailyCalories}
            inputValue={diaryCalories}
            chartBcg={сharts}
          />

          <InfContainer>
            <p>{diaryCalories}</p>
            <p>calories</p>
          </InfContainer>
        </CaloriesChartContainer>

        <ChartsContainer>
          {/* Carbonohidrates: */}
          <ChartCard
            title={'Carbonohidrates'}
            chartBcg={carb}
            elementGoal={carbsGoal}
            elementValue={carbonohidratesSum}
          />

          {/* Protein: */}
          <ChartCard
            title={'Protein'}
            chartBcg={protein}
            elementGoal={protGoal}
            elementValue={proteinSum}
          />

          {/* Fat: */}
          <ChartCard
            title={'Fat'}
            chartBcg={fat}
            elementGoal={fatsGoal}
            elementValue={fatsSum}
          />
        </ChartsContainer>
      </Container>
    </>
  );
};
