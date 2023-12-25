import { Container } from '../../../components/Container';
import { DailyStatistics } from '../../../components/Main/DailyStatistics';
import { MainHeader, Title } from './Main.styled';

import GoalButtonOnMain from '../../../components/GoalButtonOnMain/GoalButtonOnMain';
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
        <div style={{display:"flex"}}>
        <PartMainDiary />
        <RecommendedFoodOnMain />
        </div>
      </Container>
    </section>
  );
};

export default Main;

