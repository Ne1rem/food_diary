import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../Redux/Auth/authThunks';
import { selectIsLoading } from '../../../Redux/Auth/selectors';
import { signInSchema } from '../validationSchemas/validationSchema';

import inputSvg from 'assets/sprite.svg';
import LoaderBtn from '../Loader/LoaderBtn';

import { Button, Title, Text, InputError } from '../AuthStyled/GeneralStyles/GeneralStyles';
import { InputBlock, InputStyle, InputSvgStyle } from '../AuthStyled/InputStyle/InputStyle.styled';
import { SignIn, InputList, NavToSignUpBlock, NavToSignUpText, NavToSignUp, NavToForgotPass } from './SignInForm.styled';


const SignInForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const [validation, setValidation] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    isValidating: false,
    onSubmit: (values) => {
      dispatch(signIn(values));
    },
  });

  const onClickSubmit = () => {
    setValidation('validation');
  };

  const onClickPasswordHidden = () => {
    setPasswordHidden((prev) => !prev);
  };

  return (
    <SignIn onSubmit={formik.handleSubmit}>
      <Title>Sign in</Title>
      <Text>You need to login to use the service</Text>
      <InputList>
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
        className="btn-active"
        disabled={loading}
        onClick={() => {
          onClickSubmit();
        }}
        type="submit"
      >
        {loading ? <LoaderBtn /> : 'Sign in'}
      </Button>
      <NavToForgotPass to="/forgot-password">
        Forgot your password?
      </NavToForgotPass>
      <NavToSignUpBlock>
        <NavToSignUpText>If you don't have an account yet</NavToSignUpText>
        <NavToSignUp to="/signup">Sign up</NavToSignUp>
      </NavToSignUpBlock>
    </SignIn>
  );
};

export default SignInForm;
