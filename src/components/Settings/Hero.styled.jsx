import styled from 'styled-components';

export const ImageStyled = styled.img`
  width: 300px;
  height: 296px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 374px;
   
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 528px;
    margin-bottom: 0;
  }
`;

