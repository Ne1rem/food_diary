import {
  HeaderContainer,
  NameOfSite,
  Navigation,
  SlashBetween,
  StyledLink,
  Headerdiv,
  HeaderAvatarSvg,
} from './Header.styled';
import avatar from '../../assets/avatar-sign-in.svg'

export const Header = () => {
  return (
    <Headerdiv>
    <HeaderContainer>
      <NameOfSite>HealthyHub</NameOfSite>
      <Navigation>
        <StyledLink to="/signin">Sign in</StyledLink>
        <SlashBetween> / </SlashBetween>
        <StyledLink to="/signup">Sign up</StyledLink>
        <HeaderAvatarSvg><use href={`${avatar}#avatar-sign-in`} /></HeaderAvatarSvg>
      </Navigation>
    </HeaderContainer>
    </Headerdiv>
  );
};
