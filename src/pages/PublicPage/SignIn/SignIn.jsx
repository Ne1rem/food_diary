import AuthLayout from 'components/Auth/AuthLayout/AuthLayout';
import { illustration } from 'assets/authImages/index';
import SignInForm from 'components/Auth/SignInForm/SignInForm';

const SignIn = () => {
  return (
    <AuthLayout image={illustration}>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
