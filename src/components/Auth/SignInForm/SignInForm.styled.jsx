import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SignIn = styled.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;

const SignInTitle = styled.h2`
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

const SignInText = styled.p`
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

const NavToForgotPass = styled(NavLink)`
  display: block;
  margin-top: 14px;

  color: var(--color-primary-grey);
  text-align: center;

  font-weight: 400;
  line-height: 1.4;

  @media screen and (min-width: 834px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

const NavToSignUpBlock = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 54px;

  @media screen and (min-width: 834px) {
    margin-top: 224px;
    margin-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-top: 186px;
  }
`;

const NavToSignUpText = styled.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`;

const NavToSignUp = styled(NavLink)`
  color: var(--color-primary-white);
  line-height: 1.4;
`;

export {
  SignIn,
  SignInTitle,
  SignInText,
  InputList,
  NavToSignUpBlock,
  NavToSignUpText,
  NavToSignUp,
  NavToForgotPass,
};
