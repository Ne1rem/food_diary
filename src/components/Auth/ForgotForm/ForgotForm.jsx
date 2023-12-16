import { useFormik } from 'formik';
import { InputStyle } from '../AuthStyled/InputStyle/InputStyle.styled';
import { Button, Title, Text } from "../AuthStyled/GeneralStyles/GeneralStyles";
import {
  Forgot,
  NavToSignInBlock,
  NavToSignInText,
  NavToSignIn,
  InputWrapper,
} from './ForgotForm.styled';

const ForgotForm = () => {
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
    <Forgot onSubmit={formik.handleSubmit}>
      <Title>Forgot your password</Title>
      <Text>
        We will send you an email with recovery instructions
      </Text>
      <InputWrapper>
        <InputStyle
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </InputWrapper>
      <Button>Send</Button>
      <NavToSignInBlock>
        <NavToSignInText>Do you already have an account?</NavToSignInText>
        <NavToSignIn to="/signin">Sign in</NavToSignIn>
      </NavToSignInBlock>
    </Forgot>
  );
};

export default ForgotForm;
