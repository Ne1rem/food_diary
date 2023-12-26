import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, 'Min 2 symbols')
    .max(30, 'Max 30 symbols')
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
  age: Yup.number().typeError("Only numbers").required('Age required').integer().min(5, "Min 5 age").max(150, "Max 150 age"),
  height: Yup.number().typeError("Only numbers").required('Height required').min(50, "Min height 50").max(230, "Max height 230"),
  weight: Yup.number().typeError("Only numbers").required('Weight required').min(40, "Min weight 40").max(200, "Max weight 200"),
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
