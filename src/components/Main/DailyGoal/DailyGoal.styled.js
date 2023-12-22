import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    padding: 24px 40px;
  }
`;

export const GoalItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  & + & {
    margin-top: 20px;
  }

  @media screen and (min-width: 834px) {
    & + & {
      margin-top: 32px;
    }
  }
`;

export const GoalTitle = styled.h3`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const GoalText = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--color-primary-white);
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`;

export const DecorText = styled.span`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;
