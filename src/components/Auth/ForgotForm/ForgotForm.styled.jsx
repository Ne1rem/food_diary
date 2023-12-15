import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Forgot = styled.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;

const ForgotTitle = styled.h2`
  margin-bottom: 16px;

  color: var(--color-primary-white);
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

const ForgotText = styled.p`
  margin-bottom: 24px;

  color: var(--color-primary-grey, #b6b6b6);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    display: block;
    width: 444px;
    text-align: center;
    font-size: 22px;
    line-height: 1.4;

    @media screen and (min-width: 1440px) {
      text-align: left;
    }
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
  ForgotTitle,
  ForgotText,
  NavToSignInBlock,
  NavToSignInText,
  NavToSignIn,
  InputWrapper,
};
