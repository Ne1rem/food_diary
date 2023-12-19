import { useFormik } from 'formik';
import { useRef, useEffect } from 'react';
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
  LabelRadioStyled,
  ActivityTextStyled,
  ActivityDiv,
  DownloadButton,
  ButtonDiv,
  TabletDiv,
  ElFormDiv,
  ElFormDivHor,
  LabelStyledGender,
  SvgStyled,
} from './Form.styled';

export const ProfileSettings = () => {
  const fileInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      photo: '',
      age: 0,
      gender: '',
      weight: '',
      height: '',
      activityLevel: '',
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
      activityLevel: Yup.string().required(
        'Оберіть рівень фізичної активності'
      ),
    }),
    onSubmit: (values) => {
      // Your code to save data to the backend here
      console.log('Збережено:', values);
    },
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODBlYWI4NDc4ZDg5YzY3MDA1YTU4ZCIsImlhdCI6MTcwMjk4OTkzOCwiZXhwIjoxNzAzMDc2MzM4fQ.a08gYSrTLH4jaGQFEaIyl9xK1HAE89bFSCFAr9wFbWs';
        const response = await fetch(
          'http://food-diary-backend-kr1b.onrender.com/api/user/current',
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              // Other headers if needed
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
          const userData = await response.json();
          console.log(userData);

          // Set form values based on fetched data
          formik.setValues({
            name: userData.name || '',
            photo: userData.photo || '',
            age: userData.age || 0,
            gender: userData.gender || '',
            weight: userData.weight || '',
            height: userData.height || '',
            activityLevel: userData.activityLevel || '',
          });
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      };

    fetchUserData();
  }, [formik]); // Include formik as a dependency to avoid the eslint warning

  const handleFileInputChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue('photo', URL.createObjectURL(file));
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
              {formik.values.photo ? (
                <img
                  src={formik.values.photo}
                  alt="User Avatar"
                  style={{ width: '36px', height: '36px', borderRadius: '40%' }}
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
              <LabelStyledGender>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === 'male'}
                />
                <Span>Male</Span>
              </LabelStyledGender>
              <LabelStyledGender>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === 'female'}
                />
                <Span>Female</Span>
              </LabelStyledGender>
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
            <LabelRadioStyled>
              <input
                type="radio"
                name="activityLevel"
                value="sedentary"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activityLevel === 'sedentary'}
              />
              <Span>
                1.2 - if you do not have physical activity and sedentary work
              </Span>
            </LabelRadioStyled>
          </div>
          <div>
            <LabelRadioStyled>
              <input
                type="radio"
                name="activityLevel"
                value="light"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activityLevel === 'light'}
              />
              <Span>
                1.375 - if you do short runs or light gymnastics 1-3 times a
                week
              </Span>
            </LabelRadioStyled>
          </div>
          <div>
            <LabelRadioStyled>
              <input
                type="radio"
                name="activityLevel"
                value="moderate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activityLevel === 'moderate'}
              />
              <Span>
                1.55 - if you play sports with average loads 3-5 times a week
              </Span>
            </LabelRadioStyled>
          </div>
          <div>
            <LabelRadioStyled>
              <input
                type="radio"
                name="activityLevel"
                value="active"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activityLevel === 'active'}
              />
              <Span>1.725 - if you train fully 6-7 times a week</Span>
            </LabelRadioStyled>
          </div>
          <div>
            <LabelRadioStyled>
              <input
                type="radio"
                name="activityLevel"
                value="veryActive"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activityLevel === 'veryActive'}
              />
              <Span>
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
              </Span>
            </LabelRadioStyled>
          </div>
          {formik.touched.activityLevel && formik.errors.activityLevel ? (
            <div>{formik.errors.activityLevel}</div>
          ) : null}
        </ActivityDiv>

        <ButtonDiv>
          <Button type="button" onClick={formik.handleReset}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </ButtonDiv>
      </Form>
    </div>
  );
};

export default ProfileSettings;
