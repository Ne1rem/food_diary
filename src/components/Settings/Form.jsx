import { useFormik } from 'formik';
import { useRef, useEffect } from 'react';
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
  ElFormDiv,
  ElFormDivHor,
  SvgStyled,
  RadioCircle,
  RadioButtonGender,
} from './Form.styled';
import { RadioButton } from './Form.styled';
import { RadioLabel } from './Form.styled';

export const ProfileSettings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const userInfo = useSelector(selectUser);

  const fileInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: userInfo.name || '',
      avatarURL: userInfo.avatarURL || 'https://cdn-icons-png.flaticon.com/256/805/805439.png',
      age: userInfo.age || 0,
      gender: userInfo.gender || '',
      weight: userInfo.weight || '',
      height: userInfo.height || '',
      activity: userInfo.activity || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Поле ім'я є обов'язковим"),
      age: Yup.number()
        .positive('Вік повинен бути додатнім числом')
        .required("Поле вік є обов'язковим"),
      weight: Yup.number()
        .positive('Вага повинна бути додатнім числом')
        .required("Поле вага є обов'язковим"),
      height: Yup.number()
        .positive('Зріст повинен бути додатнім числом')
        .required("Поле зріст є обов'язковим"),
      activity: Yup.string().required('Оберіть рівень фізичної активності'),
    }),
    onSubmit: (values) => {
      dispatch(updateUser(values));
    },
  });

  useEffect(() => {
    formik.setValues({
      name: userInfo.name || '',
      avatarURL: userInfo.avatarURL || 'https://cdn-icons-png.flaticon.com/256/805/805439.png',
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
          <ElFormDiv>
            <LabelStyled htmlFor="name">Your name</LabelStyled>
            <InputStyle
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </ElFormDiv>

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
          <ElFormDiv>
            <LabelStyled htmlFor="age">Your age</LabelStyled>
            <InputStyle
              type="number"
              id="age"
              name="age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
            />
            {formik.touched.age && formik.errors.age ? (
              <div>{formik.errors.age}</div>
            ) : null}
          </ElFormDiv>

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
          <ElFormDiv>
            <LabelStyled htmlFor="weight">Weight</LabelStyled>
            <InputStyle
              type="number"
              id="weight"
              name="weight"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.weight}
            />
            {formik.touched.weight && formik.errors.weight ? (
              <div>{formik.errors.weight}</div>
            ) : null}
          </ElFormDiv>

          <ElFormDiv>
            <LabelStyled htmlFor="height">Height</LabelStyled>
            <InputStyle
              type="number"
              id="height"
              name="height"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.height}
            />
            {formik.touched.height && formik.errors.height ? (
              <div>{formik.errors.height}</div>
            ) : null}
          </ElFormDiv>
        </TabletDiv>
        <ActivityDiv>
          <ActivityTextStyled>Your activity</ActivityTextStyled>
          <div>
            <RadioButton>
              <input
                type="radio"
                name="activity"
                value="1.2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activity === 1.2}
              />
              <RadioCircle></RadioCircle>
              <RadioLabel>
                1.2 - if you do not have physical activity and sedentary work
              </RadioLabel>
            </RadioButton>
          </div>
          <div>
            <RadioButton>
              <input
                type="radio"
                name="activity"
                value="1.375"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activity === 1.375}
              />
              <RadioCircle></RadioCircle>
              <RadioLabel>
                1.375 - if you do short runs or light gymnastics 1-3 times a
                week
              </RadioLabel>
            </RadioButton>
          </div>
          <div>
            <RadioButton>
              <input
                type="radio"
                name="activity"
                value="1.55"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activity === 1.55}
              />
              <RadioCircle></RadioCircle>
              <RadioLabel>
                1.55 - if you play sports with average loads 3-5 times a week
              </RadioLabel>
            </RadioButton>
          </div>
          <div>
            <RadioButton>
              <input
                type="radio"
                name="activity"
                value="1.725"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activity === 1.725}
              />
              <RadioCircle></RadioCircle>
              <Span>1.725 - if you train fully 6-7 times a week</Span>
            </RadioButton>
          </div>
          <div>
            <RadioButton>
              <input
                type="radio"
                name="activity"
                value="1.9"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activity === 1.9}
              />
              <RadioCircle></RadioCircle>
              <RadioLabel>
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
              </RadioLabel>
            </RadioButton>
          </div>
          {formik.touched.activityLevel && formik.errors.activity ? (
            <div>{formik.errors.activity}</div>
          ) : null}
        </ActivityDiv>

        <ButtonDiv>
        <Button type="button" onClick={() => formik.resetForm({ values: userInfo })}>
  Cancel
</Button>
          <Button type="submit">Save</Button>
        </ButtonDiv>
      </Form>
    </div>
  );
};

export default ProfileSettings;
