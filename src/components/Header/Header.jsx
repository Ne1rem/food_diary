import {
  HeaderContainer,
  NameOfSite,
  Navigation,
  SlashBetween,
  StyledLink,
  Headerdiv,
  HeaderAvatarSvg,
} from './Header.styled';
import HeaderSvg from '/src/assets/header/headerSvg.svg';
import UserMenu from './userMenu';
import { ButtonOpenMobileModals, SvgOpenMobileModals } from './userMenu.styled';
import { useState } from 'react';
import { useLocation } from 'react-router';

export const isLoggedIn = true;

export const Header = () => {
  const currentPath = useLocation().pathname;
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  return (
    <Headerdiv>
      <HeaderContainer>
        <NameOfSite to="/" className={currentPath === '/' ? 'active' : ''}>HealthyHub</NameOfSite>
        {isLoggedIn && (
          <ButtonOpenMobileModals
            onClick={() => {
              setIsMobileModalOpen(true);
            }}
          >
            <SvgOpenMobileModals>
              <use href={`${HeaderSvg}#open-menu`} />
            </SvgOpenMobileModals>
          </ButtonOpenMobileModals>
        )}
        {isLoggedIn ? (
          <UserMenu
            isMobileModalOpen={isMobileModalOpen}
            setIsMobileModalOpen={setIsMobileModalOpen}
          />
        ) : (
          <Navigation>
            <StyledLink
              to="/signin"
              className={currentPath === '/signin' ? 'active' : ''}
            >
              Sign in
            </StyledLink>
            <SlashBetween> / </SlashBetween>
            <StyledLink
              to="/signup"
              className={currentPath === '/signup' ? 'active' : ''}
            >
              Sign up
            </StyledLink>

            <HeaderAvatarSvg>
              <use href={`${HeaderSvg}#avatar-sign-in`} />
            </HeaderAvatarSvg>
          </Navigation>
        )}
      </HeaderContainer>
    </Headerdiv>
  );
};
