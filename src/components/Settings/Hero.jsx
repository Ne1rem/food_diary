// import illustration from '../../assets/settings/Illustration.png';
import { ImageStyled, Wrapper } from './Hero.styled';
import { Title } from './Title';

export const Hero = () => {
  return (
    <>
    <Wrapper>
      <Title></Title>
      <ImageStyled
        // src={`${illustration}`}
        src="../../assets/settings/Illustration.png"
        alt='hero settings page'
      />
      </Wrapper>
    </>
  );
};
