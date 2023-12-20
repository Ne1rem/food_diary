

import { ChartCard } from '../../../components/FoodCharts/ChartCard/ChartCard';
import RecommendedFoodOnMain from '../RecommendedFood/RecFoodOnMain/RecFoodOnMain';
import PartMainDiary from "../../../components/Diary/PartMainDiary";

const Main = () => {
  return (
    <>
      <div>
        <ChartCard />
        <RecommendedFoodOnMain />
        <PartMainDiary />
      </div>
    </>
  );
};

export default Main;

