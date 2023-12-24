import { useDispatch } from 'react-redux';
import { ChartCard } from '../ChartCard/ChartCard.jsx';
import { DoughnutChart } from '../DoughnutChart/DoughnutChart.jsx';
import {
  CaloriesChart,
  ChartInfoWrap,
  FoodInfoCard,
  InfoWrap,
} from './FoodInfoGrup.styled.js';
import { useEffect, useState } from 'react';
import { currentUser } from '../../../Redux/User/userThunks.jsx';

const carbBcg = '#FFC4F7';
const proteinBcg = '#FFF3B7';
const fatBcg = '#B6B6B6';

export const FoodInfoGrup = () => {
  const [recommendedCalories, setRecommendedCalories] = useState();
  const [recommendedCarbs, setRecommendedCarbs] = useState();
  const [recommendedFat, setRecommendedFat] = useState();
  const [recommendedProtein, setRecommendedProtein] = useState();
  const [totalCalories, setTotalCalories] = useState();
  const [totalCarbs, setTotalCarbs] = useState();
  const [totalFat, setTotalFat] = useState();
  const [totalProtein, setTotalProtein] = useState();


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser())
      .then((response) => {
        const {
          recommendedCalories,
          recommendedCarbs,
          recommendedFat,
          recommendedProtein,
          totalCalories,
          totalCarbs,
          totalFat,
          totalProtein,
        } = response.payload;

        setRecommendedCalories(recommendedCalories);
        setRecommendedCarbs(recommendedCarbs);
        setRecommendedFat(recommendedFat);
        setRecommendedProtein(recommendedProtein);
        setTotalCalories(totalCalories);
        setTotalCarbs(totalCarbs);
        setTotalFat(totalFat);
        setTotalProtein(totalProtein);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [dispatch]);

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
