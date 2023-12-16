import { InputStyle } from '../../../AuthStyled/InputStyle/InputStyle.styled';
import {
  Button,
  Title,
  Text,
} from '../../../AuthStyled/GeneralStyles/GeneralStyles';
import {
  SignUp,
  InputList,
  NavToSignInBlock,
  NavToSignInText,
  NavToSignIn,
} from './Step1.styled';

const Step1 = ({ formik }) => {
  return (
    <SignUp>
      <Title>Sign up</Title>
      <Text>You need to register to use the service</Text>
      <InputList>
        <li>
          <InputStyle
            id="name"
            name="name"
            type="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </li>
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
      <Button type="button">Next</Button>
      <NavToSignInBlock>
        <NavToSignInText>Do you already have an account?</NavToSignInText>
        <NavToSignIn to="/signin">Sign in</NavToSignIn>
      </NavToSignInBlock>
    </SignUp>
  );
};

export default Step1;