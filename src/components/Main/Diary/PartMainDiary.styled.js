import { Link } from 'react-router-dom';
import styled from "@emotion/styled";

export const ConteinerDiary = styled.div`
max-width: 320px;
text-align: left;
@media screen and (min-width: 834px) {
    max-width: 558px;
  }
/* width: 558px; */
`

export const Header = styled.h2`
margin-bottom: 16px;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.33;
@media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }`

export const LinkStyled = styled(Link)`
margin-left: 16px;
color: var(--color-primary-grey);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
&:hover{color: var(--color-primary-green-lite);}
`

export const ListDiary = styled.ul`
   display:flex;
   flex-direction: column;
   gap: 28px;
  `