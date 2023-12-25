import { useSelector } from 'react-redux';
import { ChartCard } from '../ChartCard/ChartCard.jsx';
import { DoughnutChart } from '../DoughnutChart/DoughnutChart.jsx';
import {
  CaloriesChart,
  ChartInfoWrap,
  FoodInfoCard,
  InfoWrap,
} from './FoodInfoGrup.styled.js';
import { useEffect, useState } from 'react';


const carbBcg = '#FFC4F7';
const proteinBcg = '#FFF3B7';
const fatBcg = '#B6B6B6';

export const FoodInfoGrup = () => {
  const user = useSelector((state) => state.user.user);
  const [recommendedCalories, setRecommendedCalories] = useState(user.recommendedCalories);
  const [recommendedCarbs, setRecommendedCarbs] = useState(user.recommendedCarbs);
  const [recommendedFat, setRecommendedFat] = useState(user.recommendedFat);
  const [recommendedProtein, setRecommendedProtein] = useState(user.recommendedProtein);
  const [totalCalories, setTotalCalories] = useState(user.totalCalories);
  const [totalCarbs, setTotalCarbs] = useState(user.totalCarbs);
  const [totalFat, setTotalFat] = useState(user.totalFat);
  const [totalProtein, setTotalProtein] = useState(user.totalProtein);

  let caloriesChartBcg = '#45FFBC';

  useEffect(() => {
    // Fetch user data from Redux when the component mounts or user state updates
    setRecommendedCalories(user.recommendedCalories);
    setRecommendedCarbs(user.recommendedCarbs);
    setRecommendedFat(user.recommendedFat);
    setRecommendedProtein(user.recommendedProtein);
    setTotalCalories(user.totalCalories);
    setTotalCarbs(user.totalCarbs);
    setTotalFat(user.totalFat);
    setTotalProtein(user.totalProtein);
  }, [user]);

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
            <p>{totalCalories}</p>
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
