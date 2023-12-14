import { useFormik } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';

export const ProfileSettings = () => {
  const fileInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: 'Konstantin',
      photo: '', // URL or path to the photo
      age: 34,
      gender: 'male',
      weight: '',
      height: '',
      activityLevel: 'moderate',
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
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Your name</label>
          <input
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
        </div>

        <div>
          <label>Your photo</label>
          {formik.values.photo ? (
            <img
              src={formik.values.photo}
              alt="User Avatar"
              style={{ width: '50px', height: '50px' }}
            />
          ) : null}
          <button type="button" onClick={handleDownloadNewPhoto}>
            Download new photo
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileInputChange}
          />
        </div>

        <div>
          <label htmlFor="age">Your age</label>
          <input
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
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
          >
            <option value="male">Чоловіча</option>
            <option value="female">Жіноча</option>
          </select>
        </div>

        <div>
          <label htmlFor="weight">Weight</label>
          <input
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
        </div>

        <div>
          <label htmlFor="height">Height</label>
          <input
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
        </div>

        <div>
          <label>Your activity</label>
          <div>
            <label>
              <input
                type="radio"
                name="activityLevel"
                value="sedentary"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activityLevel === 'sedentary'}
              />
              1.2 - if you do not have physical activity and sedentary work
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="activityLevel"
                value="light"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activityLevel === 'light'}
              />
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="activityLevel"
                value="moderate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activityLevel === 'moderate'}
              />
              1.55 - if you play sports with average loads 3-5 times a week
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="activityLevel"
                value="active"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activityLevel === 'active'}
              />
              1.725 - if you train fully 6-7 times a week
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="activityLevel"
                value="veryActive"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.activityLevel === 'veryActive'}
              />
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </label>
          </div>
          {formik.touched.activityLevel && formik.errors.activityLevel ? (
            <div>{formik.errors.activityLevel}</div>
          ) : null}
        </div>

        <div>
          <button type="button" onClick={formik.handleReset}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
