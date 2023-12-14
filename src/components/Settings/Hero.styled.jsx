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
