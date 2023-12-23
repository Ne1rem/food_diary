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
  Forgot,
  NavToSignInBlock,
  NavToSignInText,
  NavToSignIn,
  InputWrapper,
} from './ForgotForm.styled';
import  LoaderBtn from '../Loader/LoaderBtn'
import { useNavigate } from 'react-router-dom';

import { forgotPassword } from '../../../Redux/Auth/authThunks';
import { useDispatch } from 'react-redux';
import { forgotShema } from '../validationSchemas/validationSchema';
import inputSvg from 'assets/sprite.svg';
import { useState } from 'react';



const ForgotForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validation, setValidation] = useState('');
const [pending, setPending] = useState('')

  const formik =  useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotShema,
  });

  const onClickSubmit = async () => {
    setValidation('validation');

if (formik.values.email !== '' && !formik.errors.email) {
  try {
    setPending('loading')
    await dispatch(forgotPassword(formik.values)).unwrap()
    navigate('/signin');
  } catch (err) {
    console.log(err);
  } finally {
setPending('')
  }
}
  };

  return (
    <Forgot onSubmit={formik.handleSubmit}>
      <Title>Forgot your password</Title>
      <Text>We will send you an email with recovery instructions</Text>
      <InputWrapper>
        <InputBlock>
          <InputStyle
          className={validation === 'validation' ? formik.errors.email || formik.values.email === '' ? "error" : "correct" : ''}
            id="email"
            name="email"
            placeholder="E-mail"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {validation === 'validation' ? (formik.errors.email || formik.values.email === ''  ? <InputSvgStyle><use href={`${inputSvg}#error`} /></InputSvgStyle> :
           <InputSvgStyle><use href={`${inputSvg}#correct`} /></InputSvgStyle>) : null}
          {validation === 'validation' ? (formik.errors.email || formik.values.email === '' ? (<InputError>{formik.errors.email || 'Email required'}</InputError>) :
           (<InputError style={{ color: '#3CBC81' }}>E-mail is valid</InputError>)) : null}
        </InputBlock>
      </InputWrapper>
      <Button
        className="btn-active"
        onClick={() => {
          onClickSubmit();
        }}
     type='button' >
      {pending === 'loading' ? <LoaderBtn/> : 'Send'}
      </Button>
      <NavToSignInBlock>
        <NavToSignInText>Do you already have an account?</NavToSignInText>
        <NavToSignIn to="/signin">Sign in</NavToSignIn>
      </NavToSignInBlock>
    </Forgot>
  );
};

export default ForgotForm;
