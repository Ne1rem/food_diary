import styled from 'styled-components';

const InputBlock = styled.div`
position: relative;
width: 300px;

@media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

const InputStyle = styled.input`
  width: 300px;
  display: inline-flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  color: var(--color-primary-grey, #b6b6b6);
  font-weight: 400;
  line-height: 1.4;

  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: var(--color-primary-black-2);

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }


  &.error{
    border: 1px solid #E74A3B;
  }

  &.correct{
    border: 1px solid #3CBC81;
  }
`;


const InputSvgStyle = styled.svg`
position: absolute;
width: 16px;
height: 16px;
top: 10px;
right: 10px;
`;

export { InputStyle, InputBlock, InputSvgStyle };
