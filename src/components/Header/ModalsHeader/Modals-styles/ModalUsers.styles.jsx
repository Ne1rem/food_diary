import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ModalSettigns = styled.div`
  position: fixed;
  top: 80px;
  right: 34px;
  width: 158px;
  height: 104px;
  border: 1px;
  border-radius: 12px;
  box-shadow: 0px 4px 14px 0px #e3ffa833;
  background-color: var(--color-primary-black-2);
  z-index: 5;
  @media only screen and (max-width: 700px) {
    top: 54px;
    right: 10px;
  }
`;

export const ModalPartButtonSettigns = styled.div`
font-family: Poppins;
display: flex;
flex-direction: column;
padding: 24px;
gap: 16px;
`

export const ModalButtonSettigns = styled(Link)`
display: flex;
flex-direction: row;
background-color: transparent;
border-style: none;
width: 110px;
height: 20px;
`;

export const ModalSvgSettigns = styled.svg`
width: 16px;
height: 16px;
fill: var(--color-primary-white);
`

export const ModalTextSettigns = styled.p`
color: var(--color-primary-white);
padding-left: 8px;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
`