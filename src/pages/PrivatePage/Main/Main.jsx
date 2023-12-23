import { Container } from '../../../components/Container';
import { DailyStatistics } from '../../../components/Main/DailyStatistics';
import { MainHeader, Title } from './Main.styled';

import GoalButtonOnMain from '../../../components/GoalButtonOnMain/GoalButtonOnMain';
// import FoodCharts from '../../../components/FoodCharts/FoodCharts';
import RecommendedFoodOnMain from '../RecommendedFood/RecFoodOnMain/RecFoodOnMain';

const Main = () => {
  return (
    <section>
      <Container>
        <MainHeader>
          <Title>Today</Title>
          <GoalButtonOnMain />
        </MainHeader>
        <DailyStatistics />
        {/* <FoodCharts /> */}
        <RecommendedFoodOnMain />
      </Container>
    </section>
  );
};

export default Main;
