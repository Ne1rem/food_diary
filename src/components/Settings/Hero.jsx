import { ImageStyled, Wrapper } from './Hero.styled';
import heroImg  from 'assets/settings/Illustration.png'
import { Title } from './Title';

export const Hero = () => {
  return (
    <>
    <Wrapper>
      <Title></Title>
      <ImageStyled
        src={heroImg}
        alt='hero settings page'
      />
      </Wrapper>
    </>
  );
};
