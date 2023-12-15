import AuthLayout from 'components/Auth/AuthLayout/AuthLayout';
import WelcomeBlock from 'components/Auth/WelcomeBlock/WelcomeBlock';
import { Illustration } from 'assets/authImages/index';

const Welcome = () => {
  return (
    <AuthLayout image={Illustration}>
      <WelcomeBlock />
    </AuthLayout>
  );
};

export default Welcome;
