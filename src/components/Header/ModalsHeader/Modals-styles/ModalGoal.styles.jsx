import styled from 'styled-components';

export const DivModalGoal = styled.div`
  position: fixed;
  width: 392px;
  height: 352px;
  top: 100px;
  right: 248px;
  border: 1px;
  border-radius: 12px;
  box-shadow: 0px 4px 14px 0px #E3FFA833;
  background-color: var(--color-primary-black-2);
  z-index: 1;

  @media only screen and (max-width: 650px) {
width: auto;
inset: 0;
top: 60px;
height: auto;
  }
`;

export const ButtonCloseModalGoal = styled.button`
  position: absolute;
  background-color: transparent;
  border-style: none;
  top: 20px;
  right: 32px;
  @media only screen and (max-width: 650px) {
display: none;

  }
`;

export const DivButtonCancellGoal = styled.button`
font-family: Poppins;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
border-style: none;
background-color: transparent;
color: var(--color-primary-grey);
padding-top: 24px;
display: flex;
margin: 0 auto;
  @media only screen and (min-width: 650px) {
display: none;
  }
`

export const SvgCloseModalGoal = styled.svg`
  fill: var(--color-primary-white);
  width: 16px;
  height: 16px;
`;

export const DivModalGoalTextPart = styled.div`
  display: flex;
  width: 284px;
  height: 292px;
  gap: 16px;
  flex-direction: column;
  padding: 20px 24px 40px 24px;
  @media screen and (max-width: 650px){
  padding: 24px 10px 40px 10px;
  height: auto;
  }
`;
export const DivModalGoalTextPart1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: Poppins;
`;
export const DivModalGoalTextPartP1 = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--color-primary-white);
`;

export const DivModalGoalTextPartP2 = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
export const DivChooseModalGoal = styled.div``;

export const UlModalGoal = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const UlButtonModalGoal = styled.button`
  background-color: transparent;
  border-style: none;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const UlImgButtonModalGoal = styled.img`
  width: 20px;
  height: 20px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--secondary-color-grey-1);
`;

export const UlPButtonModalGoal = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  padding-left: 16px;
`;
export const ConfirmModalGoal = styled.button`      
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border-style: none;
  letter-spacing: 0em;
  width: 166px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: var(--color-primary-green-lite);

  @media screen and (max-width: 650px){
    width: auto;
  }
`;
