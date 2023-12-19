import { useFormik } from 'formik';
import { InputStyle } from '../AuthStyled/InputStyle/InputStyle.styled';
import {
  Button,
  Title,
  Text,
  InputError,
} from '../AuthStyled/GeneralStyles/GeneralStyles';
import {
  Forgot,
  NavToSignInBlock,
  NavToSignInText,
  NavToSignIn,
  InputWrapper,
} from './ForgotForm.styled';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../../Redux/Auth/authThunks';
import { useDispatch } from 'react-redux';
import { forgotShema } from '../validationSchemas/validationSchema';

const ForgotForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
      navigate('/signin');
    },
    validationSchema: forgotShema,
  });

  return (
    <Forgot onSubmit={formik.handleSubmit}>
      <Title>Forgot your password</Title>
      <Text>We will send you an email with recovery instructions</Text>
      <InputWrapper>
        <InputStyle
          id="email"
          name="email"
          placeholder="E-mail"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && formik.handleSubmit ? (
          <InputError>{formik.errors.email}</InputError>
        ) : null}
      </InputWrapper>
      <Button className="btn-active" type="submit">
        Send
      </Button>
      <NavToSignInBlock>
        <NavToSignInText>Do you already have an account?</NavToSignInText>
        <NavToSignIn to="/signin">Sign in</NavToSignIn>
      </NavToSignInBlock>
    </Forgot>
  );
};

export default ForgotForm;
