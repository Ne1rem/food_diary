import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../Redux/Auth/authThunks';
import { signInSchema } from '../validationSchemas/validationSchema';

import inputSvg from 'assets/sprite.svg';
import LoaderBtn from '../Loader/LoaderBtn';

import {
  Button,
  Title,
  Text,
  InputError,
} from '../AuthStyled/GeneralStyles/GeneralStyles';
import {
  InputBlock,
  InputStyle,
  InputSvgStyle,
} from '../AuthStyled/InputStyle/InputStyle.styled';
import {
  SignIn,
  InputList,
  NavToSignUpBlock,
  NavToSignUpText,
  NavToSignUp,
  NavToForgotPass,
} from './SignInForm.styled';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [pending, setPending] = useState('');
  const [validation, setValidation] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    isValidating: false,
  });

  const onClickSubmit = async () => {
    setValidation('validation');
    if (
      formik.values.email !== '' &&
      !formik.errors.email &&
      formik.values.password !== '' &&
      !formik.errors.password
    ) {
      try {
        setPending('loading');
        await dispatch(signIn(formik.values)).unwrap();
      } catch (e) {
        return;
      } finally {
        setPending('');
      }
    }
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
                  ? formik.errors.email || formik.values.email === '' 
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
              formik.errors.email || formik.values.email === '' ? (
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
              formik.errors.email || formik.values.password === '' ? (
                <InputError>{formik.errors.email || 'Email required'}</InputError>
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
                  ? formik.errors.password || formik.values.password === '' 
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
              formik.errors.password || formik.values.password === ''  ? (
                <InputSvgStyle
                  onClick={() => {
                    onClickPasswordHidden();
                  }}
                >
                  <use href={`${inputSvg}#error`} />
                </InputSvgStyle>
              ) : (
                <InputSvgStyle
                  onClick={() => {
                    onClickPasswordHidden();
                  }}
                >
                  <use href={`${inputSvg}#correct`} />
                </InputSvgStyle>
              )
            ) : null}
            {passwordHidden && validation === 'validation' ? (
              formik.errors.password || formik.values.password === ''  ? (
                <InputError>{formik.errors.password || 'Password required'}</InputError>
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
        disabled={pending === 'loading'}
        onClick={() => {
          onClickSubmit();
        }}
        type="button"
      >
        {pending === 'loading' ? <LoaderBtn /> : 'Sign in'}
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
