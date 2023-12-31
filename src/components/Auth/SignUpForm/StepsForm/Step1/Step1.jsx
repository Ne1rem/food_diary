import { useState } from 'react';

import inputSvg from 'assets/sprite.svg';

import { Button, Title, Text, InputError } from '../../../AuthStyled/GeneralStyles/GeneralStyles';
import { SignUp, InputList, NavToSignInBlock, NavToSignInText, NavToSignIn } from './Step1.styled';
import { InputBlock, InputStyle, InputSvgStyle } from '../../../AuthStyled/InputStyle/InputStyle.styled';



const Step1 = ({ formik, increment }) => {
  const [validation, setValidation] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(false);

  const onClickBtnNext = () => {
    setValidation('validation');
    if (
      formik.values.name !== '' &&
      formik.values.email !== '' &&
      formik.values.password !== '' &&
      !formik.errors.name &&
      !formik.errors.email &&
      !formik.errors.password
    ) {
      increment();
    }
  };

  const onClickPasswordHidden = () => {
    setPasswordHidden((prev) => !prev);
  };

  return (
    <SignUp>
      <Title>Sign up</Title>
      <Text>You need to register to use the service</Text>
      <InputList>
        <li>
          <InputBlock>
            <InputStyle
              className={
                validation === 'validation'
                  ? formik.errors.name
                    ? 'error'
                    : 'correct'
                  : ''
              }
              id="name"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {validation === 'validation' ? (
              formik.errors.name ? (
                <InputSvgStyle>
                  <use href={`${inputSvg}#error`} />
                </InputSvgStyle>
              ) : (
                <InputSvgStyle>
                  <use href={`${inputSvg}#correct`} />
                </InputSvgStyle>
              )
            ) : null}
            {validation === 'validation' ? (
              formik.errors.name ? (
                <InputError>{formik.errors.name}</InputError>
              ) : (
                <InputError style={{ color: '#3CBC81' }}>
                  Name is valid
                </InputError>
              )
            ) : null}
          </InputBlock>
        </li>
        <li>
          <InputBlock>
            <InputStyle
              className={
                validation === 'validation'
                  ? formik.errors.email
                    ? 'error'
                    : 'correct'
                  : ''
              }
              id="email"
              name="email"
              placeholder="E-mail"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {validation === 'validation' ? (
              formik.errors.email ? (
                <InputSvgStyle>
                  <use href={`${inputSvg}#error`} />
                </InputSvgStyle>
              ) : (
                <InputSvgStyle>
                  <use href={`${inputSvg}#correct`} />
                </InputSvgStyle>
              )
            ) : null}
            {validation === 'validation' ? (
              formik.errors.email ? (
                <InputError>{formik.errors.email}</InputError>
              ) : (
                <InputError style={{ color: '#3CBC81' }}>
                  E-mail is valid
                </InputError>
              )
            ) : null}
          </InputBlock>
        </li>
        <li>
          <InputBlock>
            <InputStyle
              className={
                validation === 'validation'
                  ? formik.errors.password
                    ? 'error'
                    : 'correct'
                  : ''
              }
              id="password"
              name="password"
              placeholder="Password"
              type={!passwordHidden ? 'password' : 'text'}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {!passwordHidden ? (
              <InputSvgStyle
                onClick={() => {
                  onClickPasswordHidden();
                }}
              >
                <use href={`${inputSvg}#eye-off`} />
              </InputSvgStyle>
            ) : (
              validation !== 'validation' && (
                <InputSvgStyle
                  onClick={() => {
                    onClickPasswordHidden();
                  }}
                >
                  <use href={`${inputSvg}#eye`} />
                </InputSvgStyle>
              )
            )}

            {passwordHidden && validation === 'validation' ? (
              formik.errors.password ? (
                <InputSvgStyle onClick={() => {
                  onClickPasswordHidden();
                }}>
                  <use href={`${inputSvg}#error`} />
                </InputSvgStyle>
              ) : (
                <InputSvgStyle onClick={() => {
                  onClickPasswordHidden();
                }}>
                  <use href={`${inputSvg}#correct`} />
                </InputSvgStyle>
              )
            ) : null}
            {passwordHidden && validation === 'validation' ? (
              formik.errors.password ? (
                <InputError>{formik.errors.password}</InputError>
              ) : (
                <InputError style={{ color: '#3CBC81' }}>
                  Password is valid
                </InputError>
              )
            ) : null}
          </InputBlock>
        </li>
      </InputList>
      <Button
        onClick={() => {onClickBtnNext()}}
        className="btn-active"
        type="submit">
          Next
      </Button>
      <NavToSignInBlock>
        <NavToSignInText>Do you already have an account?</NavToSignInText>
        <NavToSignIn to="/signin">Sign in</NavToSignIn>
      </NavToSignInBlock>
    </SignUp>
  );
};

export default Step1;
