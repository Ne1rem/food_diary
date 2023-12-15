import AuthLayout from 'components/Auth/AuthLayout/AuthLayout';
import { Illustration } from 'assets/authImages/index';
import ForgotForm from '../../../components/Auth/ForgotForm/ForgotForm';

const ForgotPassword = () => {
  return (
    <AuthLayout image={Illustration}>
      <ForgotForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
