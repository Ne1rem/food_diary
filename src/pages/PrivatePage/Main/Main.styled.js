import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainHeader = styled.div`
  margin-top: 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 834px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
    margin-top: 16px;
  }
`;

export const Title = styled.h1`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;

  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.37;
  }
`;

export const ContainerBottom = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`
