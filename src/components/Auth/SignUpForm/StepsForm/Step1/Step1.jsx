import { InputStyle } from '../../../AuthStyled/InputStyle/InputStyle.styled';
import {
  Button,
  Title,
  Text,
  InputError,
} from '../../../AuthStyled/GeneralStyles/GeneralStyles';
import {
  SignUp,
  InputList,
  NavToSignInBlock,
  NavToSignInText,
  NavToSignIn,
} from './Step1.styled';

const Step1 = ({ formik, increment }) => {


const onClickBtnNext = () => {
increment()
} 

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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
             {formik.errors.name && formik.touched.name ? (<InputError>{formik.errors.name}</InputError>) : null}
        </li>
        <li>
          <InputStyle
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
            {formik.errors.email && formik.touched.email ? (<InputError>{formik.errors.email}</InputError>) : null}
        </li>
        <li>
          <InputStyle
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
             {formik.errors.password && formik.touched.password ? (<InputError>{formik.errors.password}</InputError>) : null}
        </li>
      </InputList>
      <Button onClick={() => {onClickBtnNext()}} type="button">Next</Button>
      <NavToSignInBlock>
        <NavToSignInText>Do you already have an account?</NavToSignInText>
        <NavToSignIn to="/signin">Sign in</NavToSignIn>
      </NavToSignInBlock>
    </SignUp>
  );
};

export default Step1;