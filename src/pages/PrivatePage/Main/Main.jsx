import { FoodInfoGrup } from '../../../components/FoodCharts/FoodInfoGrup/FoodInfoGrup';
import GoalButtonOnMain from '../../../components/GoalButtonOnMain/GoalButtonOnMain';
import RecommendedFoodOnMain from '../RecommendedFood/RecFoodOnMain/RecFoodOnMain';
import PartMainDiary from "../../../components/Diary/PartMainDiary";

const Main = () => {
  return (
    <>
      <div>
        <GoalButtonOnMain/>
        <FoodInfoGrup/>
        <RecommendedFoodOnMain />
        <PartMainDiary />
      </div>
    </>
  );
};

export default Main;

