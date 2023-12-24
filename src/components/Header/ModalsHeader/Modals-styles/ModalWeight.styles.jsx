import styled from 'styled-components';

export const ModalChangeWeight = styled.div`
  position: absolute;
  top: 100px;
  right: 36px;
  border: 1px;
  border-radius: 12px;
  box-shadow: 0px 4px 14px 0px #e3ffa833;
  background-color: var(--color-primary-black-2);
  z-index: 2;
  @media only screen and (max-width: 700px) {
width: auto;
inset: 0;
top: 60px;
height: auto;
  }

`;

export const CloseModalChangeWeight = styled.button`
position: absolute;
top: 20px;
right: 32px;
background-color: transparent;
border-style: none;

@media only screen and (max-width: 700px) {
display: none;

  }

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

@media only screen and (max-width: 700px) {

  padding: 20px 0px;
}
`

export const InputPartModalChangeWeight = styled.div`
display: flex;
flex-direction: row;
gap: 12px;
@media only screen and (max-width: 700px) {

  flex-direction: column;
  }
`
export const InputPartInputModalChangeWeight = styled.input`
border-radius: 12px;
width: 146px;
border: 1px solid var(--color-primary-green-lite);
background-color: transparent;
padding: 8px 10px;
color: var(--color-primary-white);
@media only screen and (max-width: 700px) {
width: auto;
}
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
  @media only screen and (max-width: 700px) {
width: auto;
}

`

export const DivButtonCancellWeight = styled.button`
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
  @media only screen and (min-width: 700px) {
display: none;
  }
`
  