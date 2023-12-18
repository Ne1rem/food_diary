import { InputStyle } from '../../../AuthStyled/InputStyle/InputStyle.styled';
import { BodyForm, InputList, Label, ButtonList } from './Step4.styled';
import {
  Button,
  Title,
  Text,
  InputError
} from '../../../AuthStyled/GeneralStyles/GeneralStyles';

const Step4 = ({ formik, increment, decrement }) => {
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
            onBlur={formik.handleBlur}
          />
             {formik.errors.height && formik.touched.height ? (<InputError>{formik.errors.height}</InputError>) : null}
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
            onBlur={formik.handleBlur}
          />
             {formik.errors.weight && formik.touched.weight ? (<InputError>{formik.errors.weight}</InputError>) : null}
        </li>
        </InputList>
        <ButtonList>
        <li>
          <Button onClick={() => {increment()}}  className='btn-active' type="button">Next</Button>
        </li>
        <li>
          <Button onClick={() => {decrement()}} type="button">Back</Button>
        </li>
      </ButtonList>
    </BodyForm>
  );
};

export default Step4;
