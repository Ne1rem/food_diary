import illustration from 'assets/settings/illustration.svg';
import { ImageStyled, Wrapper } from './Hero.styled';
import { Title } from './Title';

export const Hero = () => {
  return (
    <>
    <Wrapper>
      <Title></Title>
      <ImageStyled
        src={`${illustration}#Illustration`}
        alt={'logo settings page'}
      />
      </Wrapper>
    </>
  );
};
