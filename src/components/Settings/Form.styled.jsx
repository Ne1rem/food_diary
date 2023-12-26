import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 834px) {
    width: 50%;
    margin-left: 25%;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 72px;
    margin-left: 160px;
  }
`;

export const GenderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-top: 12px;

  @media screen and (min-width: 834px) {
    justify-content: start;
  }
`;

export const Span = styled.span`
  margin-left: 6px;
  font-weight: 400;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
    gap: 12px;
  }
`;


export const AvatarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DownloadButton = styled.button`
  min-width: 171px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  line-height: 1.4;
  font-weight: 400;
  color: #ffffff;
  background: transparent;

  @media screen and (min-width: 834px) {
    margin-right: auto;
    min-width: 171px;
    height: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
    justify-content: flex-start;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SvgStyled = styled.svg`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  fill: #e3ffa8;
`;

export const LabelStyled = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: #ffffff;

  @media screen and (min-width: 834px) {
    width: 212px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`;

export const InputStyle = styled.input`
  width: 300px;
  height: 36px;

  display: inline-flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin-top: 12px;
  margin-bottom: 40px;

  color: var(--color-primary-grey, #b6b6b6);
  font-weight: 400;
  line-height: 1.4;

  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: var(--color-primary-black-2);

  @media screen and (min-width: 834px) {
    width: 212px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }

  &.error {
    border: 1px solid #e74a3b;
  }

  &.correct {
    border: 1px solid #3cbc81;
  }
`;

export const ActivityTextStyled = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`;

export const LabelRadioStyled = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;
  & label:last-child {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ActivityDiv = styled.div`
  min-width: 300px;

  @media screen and (min-width: 834px) {
    min-width: 464px;
  }
`;

export const TabletDiv = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    grid-gap: 40px;
  }
`;

export const ElFormDiv = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ElFormDivHor = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const LabelStyledGender = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const RadioButton = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + :before {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const RadioButtonGender = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + :before {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const RadioCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  border: 1px solid var(--color-primary-grey);
  background: var(--color-primary-black-2);
  position: relative;
  margin-right: 8px;

  &:before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--color-primary-green-lite);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s ease-in-out;
  }

  input[type='radio']:checked + :before {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const RadioLabel = styled.span`
  color: var(--color-primary-white);
  margin-left: 6px;
  max-width: 260px;
  font-weight: 400;
  line-height: 1.2;
  font-size: 14px;

  @media screen and (min-width: 834px) {
    max-width: 420px;
  }
`;

export const InputIconStyle = styled.svg`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 39px;
  right: 10px;
`;

export const InputErrorStyled = styled.div`
  position: absolute;
  top: 68px;
  left: 2px;
  color: #e74a3b;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
`;



export const Button = styled.button`
  width: 300px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;

  border: none;
  border-radius: 12px;
  line-height: 1.4;
  color: var(--color-primary-grey);
  background: transparent;

  transition:
    background-color 0.4s cubic-bezier(0, 0, 1, 1),
    color 0.4s cubic-bezier(0, 0, 1, 1);

  &:hover {
    background: var(--color-primary-green-lite);
    color: var(--color-primary-black-2);
  }

  &.btn-active {
    color: var(--color-primary-black-2);
    background: var(--color-primary-green-lite);
  }

  &.cancel-btn:hover + .save-btn {
  color: var(--color-primary-grey);
  background: transparent;
  pointer-events: none; 
}

  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }
`;

