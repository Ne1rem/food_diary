import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SignUp = styled.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;

const InputList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`;

const NavToSignInBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 48px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    margin-left: 32px;
    margin-top: 206px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-top: 168px;
  }
`;

const NavToSignInText = styled.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`;

const NavToSignIn = styled(NavLink)`
  color: var(--color-primary-white);
  line-height: 1.4;
`;

export { SignUp, InputList, NavToSignInBlock, NavToSignInText, NavToSignIn };
