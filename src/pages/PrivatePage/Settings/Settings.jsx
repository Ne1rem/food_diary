import ProfileSettings from '../../../components/Settings/Form';
import { Hero } from '../../../components/Settings/Hero';
// import { Title } from '../../../components/Settings/Title';
import { Container, Section } from './Settings.styled';

const Settings = () => {
  return (
    <>
      <Section>
        <Container>
          <Hero></Hero>
          <ProfileSettings></ProfileSettings>
        </Container>
      </Section>
    </>
  );
};

export default Settings;
