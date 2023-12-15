import AuthLayout from 'components/Auth/AuthLayout/AuthLayout';
import { Illustration } from 'assets/authImages/index';
import SignInForm from 'components/Auth/SignInForm/SignInForm';

const SignIn = () => {
  return (
    <AuthLayout image={Illustration}>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
