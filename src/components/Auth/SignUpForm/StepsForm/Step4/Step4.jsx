import { InputStyle } from '../../../AuthStyled/InputStyle/InputStyle.styled';
import { BodyForm, InputList, Label, ButtonList } from './Step4.styled';
import {
  Button,
  Title,
  Text,
} from '../../../AuthStyled/GeneralStyles/GeneralStyles';

const Step4 = ({ formik }) => {
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
        </li>
        </InputList>
        <ButtonList>
        <li>
          <Button type="button">Next</Button>
        </li>
        <li>
          <Button type="button">Back</Button>
        </li>
      </ButtonList>
    </BodyForm>
  );
};

export default Step4;
