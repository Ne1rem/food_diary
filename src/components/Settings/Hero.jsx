import illustration from 'assets/settings/illustration.png';
import { ImageStyled, Wrapper } from './Hero.styled';
import { Title } from './Title';

export const Hero = () => {
  return (
    <>
    <Wrapper>
      <Title></Title>
      <ImageStyled
        src={`${illustration}`}
        alt={'logo settings page'}
      />
      </Wrapper>
    </>
  );
};
