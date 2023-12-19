import ProfileSettings from '../../../components/Settings/Form';
import { Hero } from '../../../components/Settings/Hero';
import { Container, Section, Wrapper } from './Settings.styled';

const Settings = () => {

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

