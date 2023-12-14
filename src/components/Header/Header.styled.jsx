import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Headerdiv = styled.header`
  background-color: var(--color-primary-black-2);
  width: 100%;
`;

export const HeaderContainer = styled.div`
  padding: 34px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 38px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  padding: 0px 3px;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: right;
  color: var(--color-primary-white);
`;

export const SlashBetween = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: var(--color-primary-white);
`;

export const NameOfSite = styled(Link)`
  margin: 0;
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

export const HeaderAvatarSvg = styled.svg`
fill: var(--color-primary-white);
width: 28px;
height: 28px;
padding-left: 6px;
`
