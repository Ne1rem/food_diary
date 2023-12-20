import { FoodInfoGrup } from '../../../components/FoodCharts/FoodInfoGrup/FoodInfoGrup';
import GoalButtonOnMain from '../../../components/GoalButtonOnMain/GoalButtonOnMain';
import RecommendedFoodOnMain from '../RecommendedFood/RecFoodOnMain/RecFoodOnMain';

const Main = () => {
  return (
    <>
      <div>
        <GoalButtonOnMain/>
        <FoodInfoGrup/>
        <RecommendedFoodOnMain />
      </div>
    </>
  );
};

export default Main;
