import {
  Button,
  Title,
  Text,
} from '../../../AuthStyled/GeneralStyles/GeneralStyles';
import {
  RadioButton,
  RadioCircle,
  RadioLabel,
} from '../../../AuthStyled/RadioButtonStyle/RadioButton.styled';
import { Goals, ButtonList, RadioList } from './Step2.styled';

const Step2 = ({ formik, increment, decrement }) => {
  return (
    <Goals>
      <Title>Your goal</Title>
      <Text>Choose a goal so that we can help you effectively</Text>
      <RadioList>
        <li>
          <RadioButton>
            <input
              onChange={formik.handleChange}
              type="radio"
              name="goal"
              defaultChecked
              value="Lose Fat"
            />
            <RadioCircle></RadioCircle>
            <RadioLabel>Lose Fat</RadioLabel>
          </RadioButton>
        </li>
        <li>
          <RadioButton>
            <input
              onChange={formik.handleChange}
              type="radio"
              name="goal"
              value="Maintain"
            />
            <RadioCircle></RadioCircle>
            <RadioLabel>Maintain</RadioLabel>
          </RadioButton>
        </li>
        <li>
          <RadioButton>
            <input
              onChange={formik.handleChange}
              type="radio"
              name="goal"
              value="Gain Muscle"
            />
            <RadioCircle></RadioCircle>
            <RadioLabel>Gain Muscle</RadioLabel>
          </RadioButton>
        </li>
      </RadioList>

      <ButtonList>
        <li>
          <Button onClick={() => {increment()}} className='btn-active' type="button">Next</Button>
        </li>
        <li>
          <Button onClick={() => {decrement()}} type="button">Back</Button>
        </li>
      </ButtonList>
    </Goals>
  );
};

export default Step2;
