
  import illustration from 'assets/illustration.svg';
import { IconWrapper, TitleStyled, Wrapper } from './Hero.styled';
  
  export const Hero = () => {
  
    return (
      
        <Wrapper>
          <TitleStyled>Profile setting</TitleStyled>
            <IconWrapper>
              <use href={`${illustration}#Illustration`} />
            </IconWrapper>
           
          
          </Wrapper>
       
       );
  };
  