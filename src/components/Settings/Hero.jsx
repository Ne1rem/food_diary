import illustration from 'assets/settings/illustration.svg';
import { ImageStyled } from './Hero.styled';
import { Title } from './Title';

export const Hero = () => {
  return (
    <>
      <Title></Title>
      <ImageStyled
        src={`${illustration}#Illustration`}
        alt={'logo settings page'}
      />
    </>
  );
};
