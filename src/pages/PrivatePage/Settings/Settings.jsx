import {useSelector} from "react-redux";
import {selectUserInfo} from "src/Redux/Auth/selectors.js"
import ProfileSettings from '../../../components/Settings/Form';
import { Hero } from '../../../components/Settings/Hero';
import { Container, Section, Wrapper } from './Settings.styled';

const Settings = () => {
  const userInfo = useSelector(selectUserInfo);
console.log(userInfo);

  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Hero></Hero>
            <ProfileSettings></ProfileSettings>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default Settings;

