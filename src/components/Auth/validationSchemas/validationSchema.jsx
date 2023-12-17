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
  password: Yup.string()
    .min(8)
    .required('Password required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Invalid password. It must contain letters and numbers only.'
    ),
});


 const signInSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email required')
      .email('Invalid email')
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        'Invalid email"'
      ),
    password: Yup.string()
      .min(8)
      .required('Password required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'Invalid password. It must contain letters and numbers only.'
      ),
  });

  export { signUpSchema, signInSchema };