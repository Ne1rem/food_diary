import { useFormik } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';
import inbox from 'assets/settings/inbox.svg';
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
} from './Form.styled';

export const ProfileSettings = () => {
  const fileInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: 'Alfi',
      photo: '', // URL or path to the photo
      age: 34,
      gender: 'male',
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
        {/* div for tablet for flex */}
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
            {formik.values.photo ? (
              <img
                src={formik.values.photo}
                alt="User Avatar"
                style={{ width: '50px', height: '50px' }}
              />
            ) : null}
            {/* <IconDiv>
            <svg width="16" height="16">
              <use xlinkHref={`${inbox}#direct-inbox`} />
            </svg>
          </IconDiv> */}
          <ElFormDivHor>
            <DownloadButton type="button" onClick={handleDownloadNewPhoto}>
              <IconDiv>
                <svg width="16" height="16">
                  <use href={`${inbox}#inbox`} />
                </svg>

                <Span>Download new photo</Span>
              </IconDiv>
            </DownloadButton>
            <InputStyle
              type="file"
              ref={fileInputRef}
              style={{ display: 'none', radius: '15px' }}
              onChange={handleFileInputChange}
            />
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
