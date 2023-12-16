import styled from 'styled-components';

const Activity = styled.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;

const RadioList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`;

const ButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;

export { ButtonList, Activity, RadioList };
