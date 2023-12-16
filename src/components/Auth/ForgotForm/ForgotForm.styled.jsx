import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Forgot = styled.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;

const NavToSignInBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 56px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    margin-left: 32px;
    margin-top: 290px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-top: 253px;
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`;

export {
  Forgot,
  NavToSignInBlock,
  NavToSignInText,
  NavToSignIn,
  InputWrapper,
};
