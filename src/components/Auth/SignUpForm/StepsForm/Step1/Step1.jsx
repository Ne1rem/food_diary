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
import { useState } from 'react';

const Step1 = ({ formik, increment }) => {
  const [error, setError] = useState(false);

  const onClickBtnNext = () => {
    if (
      formik.values.name !== '' &&
      formik.values.email !== '' &&
      formik.values.password !== '' &&
      !formik.errors.name &&
      !formik.errors.email &&
      !formik.errors.password
    ) {
      increment();
    } else {
      setError(true);
    }
  };

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
          {error ? <InputError>{formik.errors.name}</InputError> : null}
          {!formik.errors.name && formik.touched.name ? (
            <InputError style={{ color: 'green' }}>Name is valid</InputError>
          ) : null}
        </li>
        <li>
          <InputStyle
            id="email"
            name="email"
            placeholder="E-mail"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          {error ? <InputError>{formik.errors.email}</InputError> : null}
          {!formik.errors.email && formik.touched.email ? (
            <InputError style={{ color: 'green' }}>Email is valid</InputError>
          ) : null}
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
          {error ? <InputError>{formik.errors.password}</InputError> : null}
          {!formik.errors.password && formik.touched.password ? (
            <InputError style={{ color: 'green' }}>
              Password is secure
            </InputError>
          ) : null}
        </li>
      </InputList>
      <Button
        onClick={() => {
          onClickBtnNext();
        }}
        className="btn-active"
        type="submit"
      >
        Next
      </Button>
      <NavToSignInBlock>
        <NavToSignInText>Do you already have an account?</NavToSignInText>
        <NavToSignIn to="/signin">Sign in</NavToSignIn>
      </NavToSignInBlock>
    </SignUp>
  );
};

export default Step1;
