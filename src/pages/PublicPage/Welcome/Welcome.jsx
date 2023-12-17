import AuthLayout from 'components/Auth/AuthLayout/AuthLayout';
import WelcomeBlock from 'components/Auth/WelcomeBlock/WelcomeBlock';
import { illustration } from 'assets/authImages/index';

const Welcome = () => {
  return (
    <AuthLayout image={illustration}>
      <WelcomeBlock />
    </AuthLayout>
  );
};

export default Welcome;
