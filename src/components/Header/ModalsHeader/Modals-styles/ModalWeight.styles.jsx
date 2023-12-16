import styled from 'styled-components';

export const ModalChangeWeight = styled.div`
  position: fixed;
  top: 100px;
  right: 36px;
  border: 1px;
  border-radius: 12px;
  box-shadow: 0px 4px 14px 0px #e3ffa833;
  background-color: var(--color-primary-black-2);
  z-index: 2;
`;

export const CloseModalChangeWeight = styled.button`
position: absolute;
top: 20px;
right: 32px;
background-color: transparent;
border-style: none;
`
export const SvgCloseModalChangeWeight = styled.svg`
height: 16px;
width: 16px;
fill:var(--color-primary-white);
`

export const DivPartModalChangeWeight = styled.div`
padding: 20px 24px 40px 24px;
`
export const TextPartModalChangeWeight = styled.div`
display: flex;
flex-direction: column;
font-family: Poppins;
gap: 8px;
`

export const TextPartP1ModalChangeWeight = styled.p`
font-size: 18px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color:var(--color-primary-white);
`

export const TextPartP2ModalChangeWeight = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
`
export const TodayModalChangeWeight = styled.p`
padding: 16px 0px;
`

export const InputPartModalChangeWeight = styled.div`
display: flex;
flex-direction: row;
gap: 12px;
`
export const InputPartInputModalChangeWeight = styled.input`
border-radius: 12px;
width: 146px;
border: 1px solid var(--color-primary-green-lite);
background-color: transparent;
padding: 8px 10px;
color: var(--color-primary-white);
`

export const InputPartButtonModalChangeWeight = styled.button`
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
`