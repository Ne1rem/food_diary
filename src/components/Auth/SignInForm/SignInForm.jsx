import { useFormik } from 'formik';
import { InputStyle } from '../AuthStyled/InputStyle/InputStyle.styled';
import { Button, Title, Text } from "../AuthStyled/GeneralStyles/GeneralStyles";
import {
  SignIn,
  InputList,
  NavToSignUpBlock,
  NavToSignUpText,
  NavToSignUp,
  NavToForgotPass,
} from './SignInForm.styled';

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <SignIn onSubmit={formik.handleSubmit}>
      <Title>Sign in</Title>
      <Text>You need to login to use the service</Text>
      <InputList>
        <li>
          <InputStyle
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </li>
        <li>
          <InputStyle
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </li>
      </InputList>
      <Button>Sign in</Button>
      <NavToForgotPass to="/forgot-password">
        Forgot your password?
      </NavToForgotPass>
      <NavToSignUpBlock>
        <NavToSignUpText>Do you already have an account?</NavToSignUpText>
        <NavToSignUp to="/signup">Sign up</NavToSignUp>
      </NavToSignUpBlock>
    </SignIn>
  );
};

export default SignInForm;
