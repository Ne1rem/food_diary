import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SignIn = styled.form`
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
  InputList,
  NavToSignUpBlock,
  NavToSignUpText,
  NavToSignUp,
  NavToForgotPass,
};
