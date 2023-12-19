import { InputStyle } from '../../../AuthStyled/InputStyle/InputStyle.styled';
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
import { useState } from 'react';

const Step3 = ({ formik, increment, decrement }) => {
  const [error, setError] = useState(false);

  const onClickBtnNext = () => {
    if (formik.values.age !== '' && !formik.errors.age) {
      increment();
    } else {
      setError(true);
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
                defaultChecked
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
              />
              <RadioCircle></RadioCircle>
              <RadioLabel>Female</RadioLabel>
            </RadioButton>
          </li>
        </RadioList>

        <AgeLabel htmlFor="age">Your age</AgeLabel>
        <InputStyle
          id="age"
          name="age"
          // type="age"
          placeholder="Enter your age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        {error ? <InputError>{formik.errors.age}</InputError> : null}
        { !formik.errors.age && formik.touched.age ? (
          <InputError style={{ color: 'green' }}>Age is valid</InputError>
        ) : null}
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
