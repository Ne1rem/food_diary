import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const WelcomeStyle = styled.div`
  padding-top: 20px;

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;

const NavBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    margin-bottom: 80px;
  }
`;

const AuthLink = styled(NavLink)`
  width: 122px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  gap: 10px;

  border-radius: 12px;
  line-height: 1.4;
  color: var(--color-primary-white);

  @media screen and (min-width: 834px) {
    width: 192px;
  }

  &:hover {
    color: var(--color-primary-black-2);
    background: var(--color-primary-green-lite);
  }

  &.active {
    background-color: var(--color-primary-green-lite);
    color: var(--color-primary-black-2);
  }
`;

const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 834px) {
    width: 444px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }

  li {
    display: flex;
    align-items: center;
  }

  div {
    margin-right: 8px;
    width: 8px;
    height: 8px;
    background-color: var(--color-primary-green-lite);
    border-radius: 50%;
  }
`;

const BenefitsText = styled.p`
  font-weight: 400;
  line-height: 1.4;
`;

export { WelcomeStyle, NavBlock, AuthLink, Benefits, BenefitsText };
