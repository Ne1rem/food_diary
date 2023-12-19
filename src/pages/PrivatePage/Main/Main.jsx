import { Container } from '../../../components/Container';
import { DailyStatistics } from '../../../components/Main/DailyStatistics';
import { MainHeader, StyledLink, Title } from './Main.styled';

import iconsSprite from '../../../assets/sprite.svg';

const Main = () => {
  return (
    <section>
      <Container>
        <MainHeader>
          <Title>Today</Title>
          <StyledLink to="/dashboard">
            On the way to the goal
            <svg width={16} height={16}>
              <use href={`${iconsSprite}#icon-arrow-right`}></use>
            </svg>
          </StyledLink>
        </MainHeader>
        <DailyStatistics />
      </Container>
    </section>
  );
};

export default Main;
