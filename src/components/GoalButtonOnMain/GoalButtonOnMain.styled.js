import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IconContainer = styled.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`;

export const IconLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--color-primary-grey);
  transition: all 0.3s ease;

  &:hover {
    ${IconContainer} {
      color: var(--color-primary-green-lite);
    }
  }

  @media only screen and (min-width: 835px) {
    font-size: 16px;
    line-height: 1.37;
  }
`;
