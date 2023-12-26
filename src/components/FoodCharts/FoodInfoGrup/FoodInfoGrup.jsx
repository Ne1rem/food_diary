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
  const totalCalories = useSelector((state) => state.user.user.totalCalories);
  const totalCarbs = useSelector((state) => state.user.user.totalCarbs);
  const totalFat = useSelector((state) => state.user.user.totalFat);
  const totalProtein = useSelector((state) => state.user.user.totalProtein);

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
