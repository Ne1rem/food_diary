import illustration from 'assets/illustration.svg';
import { IconWrapper, Wrapper } from './Hero.styled';

export const Hero = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <use href={`${illustration}#Illustration`} />
      </IconWrapper>
    </Wrapper>
  );
};
