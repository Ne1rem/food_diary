import { Container } from '../../../components/Container';
import { DailyStatistics } from '../../../components/Main/DailyStatistics';
import { MainHeader, Title, ContainerBottom } from './Main.styled';
import GoalButtonOnMain from '../../../components/GoalButtonOnMain/GoalButtonOnMain';
import RecommendedFoodOnMain from '../RecommendedFood/RecFoodOnMain/RecFoodOnMain';
import PartMainDiary from '../../../components/Main/Diary/PartMainDiary';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from '../../../Redux/Auth/authThunks';

const Main = () => {
  const dispatch = useDispatch();
  const needGetCurrent = useSelector((state) => state.auth.needGetCurrentUser);

  useEffect(() => {
    if (needGetCurrent) {
      dispatch(refresh());
    }
  }, [dispatch, needGetCurrent]);

  return (
    <section>
      <Container>
        <MainHeader>
          <Title>Today</Title>
          <GoalButtonOnMain />
        </MainHeader>
        <DailyStatistics />
        <ContainerBottom>
          <PartMainDiary />
          <RecommendedFoodOnMain />
        </ContainerBottom>
      </Container>
    </section>
  );
};

export default Main;
