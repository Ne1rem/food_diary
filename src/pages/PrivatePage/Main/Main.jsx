import { Container } from '../../../components/Container';
import { DailyStatistics } from '../../../components/Main/DailyStatistics';
import { MainHeader, Title, ContainerBottom } from './Main.styled';

import GoalButtonOnMain from '../../../components/GoalButtonOnMain/GoalButtonOnMain';
// import FoodCharts from '../../../components/FoodCharts/FoodCharts';
import RecommendedFoodOnMain from '../RecommendedFood/RecFoodOnMain/RecFoodOnMain';
import PartMainDiary from '../../../components/Main/Diary/PartMainDiary';

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
        <ContainerBottom>
        <PartMainDiary />
        <RecommendedFoodOnMain />
        </ContainerBottom>
      </Container>
    </section>
  );
};

export default Main;

