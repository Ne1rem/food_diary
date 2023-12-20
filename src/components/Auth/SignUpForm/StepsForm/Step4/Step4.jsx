import { InputStyle } from '../../../AuthStyled/InputStyle/InputStyle.styled';
import { BodyForm, InputList, Label, ButtonList } from './Step4.styled';
import {
  Button,
  Title,
  Text,
  InputError,
} from '../../../AuthStyled/GeneralStyles/GeneralStyles';
import { useState } from 'react';

const Step4 = ({ formik, increment, decrement }) => {
  const [error, setError] = useState(false);

  const onClickBtnNext = () => {
    if (
      formik.values.height !== '' &&
      !formik.errors.height &&
      formik.values.weight !== '' &&
      !formik.errors.weight
    ) {
      increment();
    } else {
      setError(true);
    }
  };

  return (
    <BodyForm>
      <Title>Body parameters</Title>
      <Text>Enter your parameters for correct performance tracking</Text>
      <InputList>
        <li>
          <Label htmlFor="height">Height</Label>
          <InputStyle
            id="height"
            name="height"
            type="height"
            placeholder="Enter your height"
            onChange={formik.handleChange}
            value={formik.values.height}
          />
          {error ? <InputError>{formik.errors.height}</InputError> : null}
          {!formik.errors.height && formik.touched.height ? (
            <InputError style={{ color: 'green' }}>Height is valid</InputError>
          ) : null}
        </li>
        <li>
          <Label htmlFor="weight">Weight</Label>
          <InputStyle
            id="weight"
            name="weight"
            type="weight"
            placeholder="Enter your weight"
            onChange={formik.handleChange}
            value={formik.values.weight}
          />
          {error ? <InputError>{formik.errors.weight}</InputError> : null}
          {!formik.errors.weight && formik.touched.weight ? (
            <InputError style={{ color: 'green' }}>Weight is valid</InputError>
          ) : null}
        </li>
      </InputList>
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
    </BodyForm>
  );
};

export default Step4;
