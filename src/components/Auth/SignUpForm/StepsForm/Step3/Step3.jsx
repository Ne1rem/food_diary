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

const Step3 = ({ formik, increment, decrement }) => {
  return (
    <AgeGender>
      <Title>Select gender, Age</Title>
      <Text>Choose a goal so that we can <br/>help you effectively</Text>
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
          type="age"
          placeholder="Enter your age"
          onChange={formik.handleChange}
          value={formik.values.age}
          onBlur={formik.handleBlur}
        />
             {formik.errors.age && formik.touched.age ? (<InputError>{formik.errors.age}</InputError>) : null}
      </FormBlock>
      <ButtonList>
        <li>
          <Button onClick={() => {increment()}}  className='btn-active' type="button">Next</Button>
        </li>
        <li>
          <Button onClick={() => {decrement()}} type="button">Back</Button>
        </li>
      </ButtonList>
    </AgeGender>
  );
};

export default Step3;
