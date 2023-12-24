import styled from 'styled-components';

const AgeGender = styled.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;

const RadioList = styled.ul`
  display: flex;
  gap: 86px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    gap: 52px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`;

const GenderSpan = styled.span`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`;

const FormBlock = styled.div`
  @media screen and (min-width: 834px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
  }
`;

const AgeLabel = styled.label`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`;

const ButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`;

export { AgeGender, RadioList, GenderSpan, FormBlock, ButtonList, AgeLabel };
