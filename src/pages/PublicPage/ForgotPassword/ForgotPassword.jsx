import AuthLayout from 'components/Auth/AuthLayout/AuthLayout';
import { illustration } from 'assets/authImages/index';
import ForgotForm from '../../../components/Auth/ForgotForm/ForgotForm';

const ForgotPassword = () => {
  return (
    <AuthLayout image={illustration}>
      <ForgotForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
