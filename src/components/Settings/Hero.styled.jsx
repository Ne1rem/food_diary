import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: #050505;

`


export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '536px'};
  height: ${(props) => props.size || '528px'};
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-right: 5px;
  top: 180px;
  left: 150px;
`;

export const TitleStyled = styled.h1`
  width: 206px;
  height: 36px;
  top: 120px;
  left: 34px;

  font-size: 30px;
  line-height: 36px;
  weight: 500;
  color: #FFFFFF;
`;
