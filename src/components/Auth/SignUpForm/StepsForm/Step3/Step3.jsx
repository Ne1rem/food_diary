import {InputBlock, InputStyle, InputSvgStyle } from '../../../AuthStyled/InputStyle/InputStyle.styled';
import {
  Button,
  Title,
  Text,
  InputError,
} from '../../../AuthStyled/GeneralStyles/GeneralStyles';
import {
  RadioButton,
  RadioCircle,
  RadioLabel,
} from '../../../AuthStyled/RadioButtonStyle/RadioButton.styled';
import {
  AgeGender,
  RadioList,
  GenderSpan,
  FormBlock,
  ButtonList,
  AgeLabel,
} from './Step3.styled';
import  inputSvg  from 'assets/sprite.svg';
import { useState } from 'react';

const Step3 = ({ formik, increment, decrement }) => {
  const [validation, setValidation] = useState('');

  const onClickBtnNext = () => {
    setValidation('validation');
    if (formik.values.age !== '' && !formik.errors.age) {
      increment();
    }
  };

  return (
    <AgeGender>
      <Title>Select gender, Age</Title>
      <Text>
        Choose a goal so that we can <br />
        help you effectively
      </Text>
      <FormBlock>
        <GenderSpan>Gender</GenderSpan>
        <RadioList>
          <li>
            <RadioButton>
              <input
                onChange={formik.handleChange}
                type="radio"
                name="gender"
                value="male"
                defaultChecked={formik.values.gender === "male"}
              />
              <RadioCircle></RadioCircle>
              <RadioLabel>Male</RadioLabel>
            </RadioButton>
          </li>
          <li>
            <RadioButton>
              <input
                onChange={formik.handleChange}
                type="radio"
                name="gender"
                value="female"
                defaultChecked={formik.values.gender === "female"}
              />
              <RadioCircle></RadioCircle>
              <RadioLabel>Female</RadioLabel>
            </RadioButton>
          </li>
        </RadioList>

        <AgeLabel htmlFor="age">Your age</AgeLabel>
        <InputBlock>
          <InputStyle
          className={validation === 'validation' ? formik.errors.age ? "error" : "correct" : ''}
            id="age"
            name="age"
            placeholder="Enter your age"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          {validation === 'validation' ? (formik.errors.age ? <InputSvgStyle><use href={`${inputSvg}#error`} /></InputSvgStyle> :
           <InputSvgStyle><use href={`${inputSvg}#correct`} /></InputSvgStyle>) : null}
          {validation === 'validation' ? (formik.errors.age ? (<InputError>{formik.errors.age}</InputError>) :
           (<InputError style={{ color: 'green' }}>Age is valid</InputError>)) : null}
        </InputBlock>
      </FormBlock>
      <ButtonList>  
        <li>
          <Button
            onClick={() => {
              onClickBtnNext();
            }}
            className="btn-active"
            type="submit"
          >
            Next
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              decrement();
            }}
            type="button"
          >
            Back
          </Button>
        </li>
      </ButtonList>
    </AgeGender>
  );
};

export default Step3;
