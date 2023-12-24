import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name'
    ),
  email: Yup.string()
    .required('Email required')
    .email('Invalid email')
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Invalid email"'
    ),
  password: Yup.string().min(6).max(15).required('Password required'),
  age: Yup.number().required('Age required').integer(),
  height: Yup.number().required('Height required').min(50).max(230),
  weight: Yup.number().required('Weight required').min(50).max(200),
  activity: Yup.number().min(1.2).max(1.9),
});

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email required')
    .email('Invalid email')
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Invalid email"'
    ),
  password: Yup.string().required('Password required'),
});

const forgotShema = Yup.object().shape({
  email: Yup.string()
    .required('Email required')
    .email('Invalid email')
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Invalid email"'
    ),
});

export { signUpSchema, signInSchema, forgotShema };
