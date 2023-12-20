import { ImageStyled, Wrapper } from './Hero.styled';
import heroImg from 'assets/settings/Illustration.png';
import { Title } from './Title';
// import { Audio } from  'react-loader-spinner'

export const Hero = () => {
  return (
    <>
      <Wrapper>
        {/* <Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  /> */}
        <Title></Title>
        <ImageStyled src={heroImg} alt="hero settings page" />
      </Wrapper>
    </>
  );
};
