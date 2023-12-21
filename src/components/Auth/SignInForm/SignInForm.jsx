import { useFormik } from 'formik';
import {
  InputBlock,
  InputStyle,
  InputSvgStyle,
} from '../AuthStyled/InputStyle/InputStyle.styled';
import {
  Button,
  Title,
  Text,
  InputError,
} from '../AuthStyled/GeneralStyles/GeneralStyles';
import {
  SignIn,
  InputList,
  NavToSignUpBlock,
  NavToSignUpText,
  NavToSignUp,
  NavToForgotPass,
} from './SignInForm.styled';
import inputSvg from 'assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../Redux/Auth/authThunks';
import { signInSchema } from '../validationSchemas/validationSchema';
import { useState } from 'react';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [validation, setValidation] = useState('');


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

  return (
    <SignIn onSubmit={formik.handleSubmit}>
      <Title>Sign in</Title>
      <Text>You need to login to use the service</Text>
      <InputList>
        <li>
        <InputBlock>
          <InputStyle
          className={validation === 'validation' ? formik.errors.email ? "error" : "correct" : ''}
            id="email"
            name="email"
            placeholder="E-mail"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {validation === 'validation' ? (formik.errors.email ? <InputSvgStyle><use href={`${inputSvg}#error`} /></InputSvgStyle> :
           <InputSvgStyle><use href={`${inputSvg}#correct`} /></InputSvgStyle>) : null}
          {validation === 'validation' ? (formik.errors.email ? (<InputError>{formik.errors.email}</InputError>) :
           (<InputError style={{ color: 'green' }}>E-mail is valid</InputError>)) : null}
        </InputBlock>
        </li>
        <li>
        <InputBlock>
          <InputStyle
          className={validation === 'validation' ? formik.errors.password ? "error" : "correct" : ''}
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {validation === 'validation' ? (formik.errors.password ? <InputSvgStyle><use href={`${inputSvg}#error`} /></InputSvgStyle> :
           <InputSvgStyle><use href={`${inputSvg}#correct`} /></InputSvgStyle>) : null}
          {validation === 'validation' ? (formik.errors.password ? (<InputError>{formik.errors.password}</InputError>) :
           (<InputError style={{ color: 'green' }}>Password is valid</InputError>)) : null}
        </InputBlock>
        </li>
      </InputList>
      <Button className="btn-active"  onClick={() => {
          onClickSubmit();
        }} type="submit">
        Sign in
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
