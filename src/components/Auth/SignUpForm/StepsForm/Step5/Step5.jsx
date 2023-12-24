import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../../../../Redux/Auth/authThunks';

import LoaderBtn from '../../../Loader/LoaderBtn';
import { Activity, RadioList, ButtonList } from './Step5.styled';
import { Button, Title, Text } from '../../../AuthStyled/GeneralStyles/GeneralStyles';
import { RadioButton, RadioCircle, RadioLabel } from '../../../AuthStyled/RadioButtonStyle/RadioButton.styled';


const Step5 = ({ formik, decrement, currentStep }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pending, setPending] = useState('');

  const onClickBtnSignUp = async () => {
    try {
      setPending('loading');
      await dispatch(signUp(formik.values)).unwrap();
      navigate('/signin');
    } catch (err) {
      currentStep(1);
      return err;
    } finally {
      setPending('');
    }
  };

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
              defaultChecked={formik.values.activity === '1.2'}
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
              defaultChecked={formik.values.activity === '1.375'}
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
              defaultChecked={formik.values.activity === '1.55'}
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
              defaultChecked={formik.values.activity === '1.725'}
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
              defaultChecked={formik.values.activity === '1.9'}
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
        <Button
          className="btn-active"
          onClick={() => {onClickBtnSignUp()}}
          type="button">
          {pending === 'loading' ? <LoaderBtn /> : 'Sign Up'}
        </Button>
        <Button
          onClick={() => {decrement()}}
          type="button">
          Back
        </Button>
      </ButtonList>
    </Activity>
  );
};

export default Step5;
