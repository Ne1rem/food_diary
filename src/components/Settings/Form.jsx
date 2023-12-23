import { useFormik } from 'formik';
import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../Redux/User/selectors';

import { currentUser, updateUser } from '../../Redux/User/userThunks';

import * as Yup from 'yup';
import inboxSvg from '/src/assets/settings/symbol-defs.svg';
import {
  AvatarDiv,
  Button,
  Form,
  GenderDiv,
  Span,
  IconDiv,
  InputStyle,
  LabelStyled,
  ActivityTextStyled,
  ActivityDiv,
  DownloadButton,
  ButtonDiv,
  TabletDiv,
  ElFormDivHor,
  SvgStyled,
  RadioCircle,
  RadioButtonGender,
  InputIconStyle,
  InputErrorStyled,
} from './Form.styled';
import { RadioButton } from './Form.styled';
import { RadioLabel } from './Form.styled';
import { InputBlock } from '../Auth/AuthStyled/InputStyle/InputStyle.styled';
import inputSvg from 'assets/sprite.svg';

export const ProfileSettings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const userInfo = useSelector(selectUser);

  const fileInputRef = useRef(null);

  const [validation, setValidation] = useState('');

  const onClickBtnSave = () => {
    setValidation('validation');
    if (formik.values.age !== '' && !formik.errors.age) {
      formik.handleSubmit;
    }
  };

  const formik = useFormik({
    initialValues: {
      name: userInfo.name || '',
      avatarURL:
        userInfo.avatarURL ||
        'https://cdn-icons-png.flaticon.com/256/805/805439.png',
      age: userInfo.age || 0,
      gender: userInfo.gender || '',
      weight: userInfo.weight || '',
      height: userInfo.height || '',
      activity: userInfo.activity || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name ir required'),
      age: Yup.number()
        .positive('Age has to be positive number')
        .required('Age is required'),
      weight: Yup.number()
        .positive('Weight has to be positive number')
        .required('Weight is required'),
      height: Yup.number()
        .positive('Height has to be positive number')
        .required('Height is required'),
      activity: Yup.string().required('Choose activity level'),
    }),
    onSubmit: (values) => {
      dispatch(updateUser(values));
    },
  });

  useEffect(() => {
    formik.setValues({
      name: userInfo.name || '',
      avatarURL:
        userInfo.avatarURL ||
        'https://cdn-icons-png.flaticon.com/256/805/805439.png',
      age: userInfo.age || 0,
      gender: userInfo.gender || '',
      weight: userInfo.weight || '',
      height: userInfo.height || '',
      activity: userInfo.activity || '',
    });
  }, [userInfo]);

  const handleFileInputChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue('avatarURL', URL.createObjectURL(file));
  };

  const handleDownloadNewPhoto = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <TabletDiv>
          <InputBlock>
            <LabelStyled htmlFor="name">Your name</LabelStyled>
            <InputStyle
              className={
                validation === 'validation'
                  ? formik.errors.name
                    ? 'error'
                    : 'correct'
                  : ''
              }
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {validation === 'validation' ? (
              formik.errors.name ? (
                <InputIconStyle>
                  <use href={`${inputSvg}#error`} />
                </InputIconStyle>
              ) : (
                <InputIconStyle>
                  <use href={`${inputSvg}#correct`} />
                </InputIconStyle>
              )
            ) : null}
            {validation === 'validation' ? (
              formik.errors.name ? (
                <InputErrorStyled>{formik.errors.name}</InputErrorStyled>
              ) : (
                <InputErrorStyled style={{ color: '#3CBC81' }}>
                  Name is valid
                </InputErrorStyled>
              )
            ) : null}
          </InputBlock>

          <AvatarDiv>
            <ActivityTextStyled>Your photo</ActivityTextStyled>
            <ElFormDivHor>
              {formik.values.avatarURL ? (
                <img
                  src={formik.values.avatarURL}
                  alt="User Avatar"
                  style={{ width: '36px', height: '36px', borderRadius: '50%' }}
                />
              ) : null}
              <IconDiv>
                <DownloadButton type="button" onClick={handleDownloadNewPhoto}>
                  <InputStyle
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange}
                  />

                  <SvgStyled width="16" height="16">
                    <use href={`${inboxSvg}#icon-inbox`} />
                  </SvgStyled>

                  <Span>Download new photo</Span>
                </DownloadButton>
              </IconDiv>
            </ElFormDivHor>
          </AvatarDiv>
        </TabletDiv>
        <TabletDiv>
          <InputBlock>
            <LabelStyled htmlFor="age">Your age</LabelStyled>
            <InputStyle
              className={
                validation === 'validation'
                  ? formik.errors.age
                    ? 'error'
                    : 'correct'
                  : ''
              }
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
            />
            {validation === 'validation' ? (
              formik.errors.age ? (
                <InputIconStyle>
                  <use href={`${inputSvg}#error`} />
                </InputIconStyle>
              ) : (
                <InputIconStyle>
                  <use href={`${inputSvg}#correct`} />
                </InputIconStyle>
              )
            ) : null}
            {validation === 'validation' ? (
              formik.errors.age ? (
                <InputErrorStyled>{formik.errors.age}</InputErrorStyled>
              ) : (
                <InputErrorStyled style={{ color: '#3CBC81' }}>
                  Age is valid
                </InputErrorStyled>
              )
            ) : null}
          </InputBlock>
          <div>
            <LabelStyled>Gender</LabelStyled>
            <GenderDiv>
              <RadioButtonGender>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === 'male'}
                />
                <RadioCircle></RadioCircle>
                <Span>Male</Span>
              </RadioButtonGender>
              <RadioButtonGender>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === 'female'}
                />
                <RadioCircle></RadioCircle>
                <Span>Female</Span>
              </RadioButtonGender>
            </GenderDiv>
            {formik.touched.gender && formik.errors.gender ? (
              <div>{formik.errors.gender}</div>
            ) : null}
          </div>
        </TabletDiv>
        <TabletDiv>
          {/* <ElFormDiv> */}
          <InputBlock>
            <LabelStyled htmlFor="weight">Weight</LabelStyled>
            <InputStyle
              className={
                validation === 'validation'
                  ? formik.errors.weight
                    ? 'error'
                    : 'correct'
                  : ''
              }
              type="number"
              id="weight"
              name="weight"
              placeholder="Enter your weight"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.weight}
            />
            {validation === 'validation' ? (
              formik.errors.weight ? (
                <InputIconStyle>
                  <use href={`${inputSvg}#error`} />
                </InputIconStyle>
              ) : (
                <InputIconStyle>
                  <use href={`${inputSvg}#correct`} />
                </InputIconStyle>
              )
            ) : null}
            {validation === 'validation' ? (
              formik.errors.weight ? (
                <InputErrorStyled>{formik.errors.weight}</InputErrorStyled>
              ) : (
                <InputErrorStyled style={{ color: '#3CBC81' }}>
                  Weight is valid
                </InputErrorStyled>
              )
            ) : null}
          </InputBlock>

          <InputBlock>
            <LabelStyled htmlFor="height">Height</LabelStyled>
            <InputStyle
              className={
                validation === 'validation'
                  ? formik.errors.height
                    ? 'error'
                    : 'correct'
                  : ''
              }
              type="number"
              id="height"
              name="height"
              placeholder="Enter your height"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.height}
            />
            {validation === 'validation' ? (
              formik.errors.height ? (
                <InputIconStyle>
                  <use href={`${inputSvg}#error`} />
                </InputIconStyle>
              ) : (
                <InputIconStyle>
                  <use href={`${inputSvg}#correct`} />
                </InputIconStyle>
              )
            ) : null}
            {validation === 'validation' ? (
              formik.errors.height ? (
                <InputErrorStyled>{formik.errors.height}</InputErrorStyled>
              ) : (
                <InputErrorStyled style={{ color: '#3CBC81' }}>
                  Height is valid
                </InputErrorStyled>
              )
            ) : null}
          </InputBlock>
        </TabletDiv>
        <ActivityDiv>
          <ActivityTextStyled>Your activity</ActivityTextStyled>

          <RadioButton>
            <input
              type="radio"
              name="activity"
              value="1.2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={
                formik.values.activity === 1.2 ||
                formik.values.activity === '1.2'
              }
            />
            <RadioCircle></RadioCircle>
            <RadioLabel>
              1.2 - if you do not have physical activity and sedentary work
            </RadioLabel>
          </RadioButton>

          <RadioButton>
            <input
              type="radio"
              name="activity"
              value="1.375"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={
                formik.values.activity === 1.375 ||
                formik.values.activity === '1.375'
              }
            />
            <RadioCircle></RadioCircle>
            <RadioLabel>
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </RadioLabel>
          </RadioButton>

          <RadioButton>
            <input
              type="radio"
              name="activity"
              value="1.55"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={
                formik.values.activity === 1.55 ||
                formik.values.activity === '1.55'
              }
            />
            <RadioCircle></RadioCircle>
            <RadioLabel>
              1.55 - if you play sports with average loads 3-5 times a week
            </RadioLabel>
          </RadioButton>

          <RadioButton>
            <input
              type="radio"
              name="activity"
              value="1.725"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={
                formik.values.activity === 1.725 ||
                formik.values.activity === '1.725'
              }
            />
            <RadioCircle></RadioCircle>
            <Span>1.725 - if you train fully 6-7 times a week</Span>
          </RadioButton>

          <RadioButton>
            <input
              type="radio"
              name="activity"
              value="1.9"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={
                formik.values.activity === 1.9 ||
                formik.values.activity === '1.9'
              }
            />
            <RadioCircle></RadioCircle>
            <RadioLabel>
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </RadioLabel>
          </RadioButton>

          {formik.touched.activityLevel && formik.errors.activity ? (
            <div>{formik.errors.activity}</div>
          ) : null}
        </ActivityDiv>

        <ButtonDiv>
          <Button
            type="button"
            onClick={() => formik.resetForm({ values: userInfo })}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={() => {
              onClickBtnSave();
            }}
          >
            Save
          </Button>
        </ButtonDiv>
      </Form>
    </div>
  );
};

export default ProfileSettings;
