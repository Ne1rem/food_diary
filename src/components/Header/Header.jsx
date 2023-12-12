import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from 'assets/sprite.svg';

export const Header = () => {

  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/signup">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          signup
        </StyledLink>
        <StyledLink to="/signin">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          signin
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
