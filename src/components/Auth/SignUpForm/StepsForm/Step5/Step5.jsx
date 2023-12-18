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
import { Activity, RadioList, ButtonList } from './Step5.styled';

const Step5 = ({ formik, decrement }) => {
  return (
    <Activity>
      <Title>Your Activity</Title>
      <Text>
        To correctly calculate calorie <br />
        and water intake
      </Text>
      <RadioList>
        <li>
          <RadioButton>
            <input
              onChange={formik.handleChange}
              type="radio"
              name="activity"
              defaultChecked
              value="1.2"
            />
            <RadioCircle></RadioCircle>
            <RadioLabel>
              1.2 - if you do not have physical activity and sedentary work
            </RadioLabel>
          </RadioButton>
        </li>
        <li>
          <RadioButton>
            <input
              onChange={formik.handleChange}
              type="radio"
              name="activity"
              value="1.375"
            />
            <RadioCircle></RadioCircle>
            <RadioLabel>
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </RadioLabel>
          </RadioButton>
        </li>
        <li>
          <RadioButton>
            <input
              onChange={formik.handleChange}
              type="radio"
              name="activity"
              value="1.55"
            />
            <RadioCircle></RadioCircle>
            <RadioLabel>
              1.55 - if you play sports with average loads 3-5 times a week
            </RadioLabel>
          </RadioButton>
        </li>
        <li>
          <RadioButton>
            <input
              onChange={formik.handleChange}
              type="radio"
              name="activity"
              value="1.725"
            />
            <RadioCircle></RadioCircle>
            <RadioLabel>1.725 - if you train fully 6-7 times a week</RadioLabel>
          </RadioButton>
        </li>
        <li>
          <RadioButton>
            <input
              onChange={formik.handleChange}
              type="radio"
              name="activity"
              value="1.9"
            />
            <RadioCircle></RadioCircle>
            <RadioLabel>
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </RadioLabel>
          </RadioButton>
        </li>
      </RadioList>
      <ButtonList>
        <Button type="submit">Sign Up</Button>
        <Button onClick={() => {decrement()}} type="button">Back</Button>
      </ButtonList>
    </Activity>
  );
};

export default Step5;
