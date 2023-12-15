import { useFormik } from 'formik';
import AuthLayout from '../AuthLayout/AuthLayout';
import { Illustration } from 'assets/authImages/index';
import { Step1 } from './StepsForm/index';

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      goal: '',
      gender: '',
      age: '',
      height: '',
      weight: '',
      activity: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <AuthLayout image={Illustration}>
      <form onSubmit={formik.handleSubmit}>
        <Step1 formik={formik} />
      </form>
    </AuthLayout>
  );
};

export default SignUpForm;
