import { Title, Text } from '../AuthStyled/GeneralStyles/GeneralStyles';
import { WelcomeStyle, NavBlock, AuthLink, Benefits, BenefitsText } from './WelcomeBlock.styled';


const WelcomeBlock = () => {
  return (
    <WelcomeStyle>
      <Title>Set goals and achieve them</Title>
      <Text>The service will help you set goals and follow them.</Text>
      <NavBlock>
        <AuthLink className={'active'} to="/signin">
          Sign in
        </AuthLink>
        <AuthLink to="/signup">Sign up</AuthLink>
      </NavBlock>
      <Benefits>
        <li>
          <div></div>
          <BenefitsText>Set goals</BenefitsText>
        </li>
        <li>
          <div></div>
          <BenefitsText>Watch your calories</BenefitsText>
        </li>
        <li>
          <div></div>
          <BenefitsText>Keep track of your water intake</BenefitsText>
        </li>
        <li>
          <div></div>
          <BenefitsText>Control your weight</BenefitsText>
        </li>
      </Benefits>
    </WelcomeStyle>
  );
};

export default WelcomeBlock;
