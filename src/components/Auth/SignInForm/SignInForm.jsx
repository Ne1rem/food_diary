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
import { signInSchema } from '../validationSchemas/validationSchema';

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
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
            {formik.errors.email && formik.touched.email  ? (<div>{formik.errors.email}</div>) : null}
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
            {formik.errors.password && formik.touched.password ? (<div>{formik.errors.password}</div>) : null}
        </li>
      </InputList>
      <Button type='submit'>Sign in</Button>
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
