import {  useSelector } from 'react-redux';
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
  const recommendedCalories = useSelector((state) => state.user.user.recommendedCalories);
  const recommendedCarbs = useSelector((state) => state.user.user.recommendedCarbs);
  const recommendedFat = useSelector((state) => state.user.user.recommendedFat);
  const recommendedProtein = useSelector((state) => state.user.user.recommendedProtein);
  
  const intake = useSelector((state) => state.intake.intake);

  const totalCalories = isNaN(intake?.totalCalories) ? 0 : intake?.totalCalories;
  const totalCarbs = isNaN(intake?.totalCarbs) ? 0 : intake?.totalCarbs;
  const totalFat = isNaN(intake?.totalFat) ? 0 : intake?.totalFat;
  const totalProtein = isNaN(intake?.totalProtein) ? 0 : intake?.totalProtein;


  let caloriesChartBcg = '#45FFBC';

  return (
    <div>
      <FoodInfoCard>
        <CaloriesChart>
          <DoughnutChart
            dailyCalories={recommendedCalories}
            inputValue={totalCalories}
            chartBcg={caloriesChartBcg}
          />
          <ChartInfoWrap>
            <p style={{color:"white"}}>{totalCalories}</p>

            <p>calories</p>
          </ChartInfoWrap>
        </CaloriesChart>
        <InfoWrap>
          <ChartCard
            title={'Carbonohidrates'}
            chartBcg={carbBcg}
            elementGoal={recommendedCarbs}
            elementValue={totalCarbs}
          />
          <ChartCard
            title={'Protein'}
            chartBcg={proteinBcg}
            elementGoal={recommendedProtein}
            elementValue={totalProtein}
          />
          <ChartCard
            title={'Fat'}
            chartBcg={fatBcg}
            elementGoal={recommendedFat}
            elementValue={totalFat}
          />
        </InfoWrap>
      </FoodInfoCard>
    </div>
  );
};
