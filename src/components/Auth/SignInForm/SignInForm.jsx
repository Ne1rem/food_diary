import { useFormik } from 'formik';
import { InputStyle } from '../AuthStyled/InputStyle/InputStyle.styled';
import { Button, Title, Text, InputError } from "../AuthStyled/GeneralStyles/GeneralStyles";
import {
  SignIn,
  InputList,
  NavToSignUpBlock,
  NavToSignUpText,
  NavToSignUp,
  NavToForgotPass,
} from './SignInForm.styled';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../Redux/Auth/authThunks';
import { signInSchema } from '../validationSchemas/validationSchema';

const SignInForm = () => {
  const dispatch = useDispatch();


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      dispatch(signIn(values));
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
            placeholder="E-mail"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
            {formik.errors.email && formik.touched.email && formik.handleSubmit  ? (<InputError>{formik.errors.email}</InputError>) : null}
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
            {formik.errors.password  && formik.touched.password && formik.handleSubmit ? (<InputError>{formik.errors.password}</InputError>) : null}
            {/* {!formik.errors.password  && formik.touched.email && formik.handleSubmit ? (<InputError>охуенно сделал</InputError>) : null} */}
        </li>
      </InputList>
      <Button  className='btn-active' type='submit'>Sign in</Button>
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
