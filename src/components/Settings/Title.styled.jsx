import styled from 'styled-components';

export const TitleStyled = styled.h1`
  width: 165px;
  height: 30px;
  margin-top: 16px;
  margin-left: 10px;
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  color: #ffffff;

  /* з [835px */
  @media only screen and (min-width: 835px) {
    min-width: 206px;
    height: 36px;
    margin-top: 24px;
    margin-left: 27px;
    margin-bottom: 20px;
    font-size: 30px;
  }

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
    margin-top: 20px;
    margin-left: 0;
    margin-bottom: 24px;
  }
`;
