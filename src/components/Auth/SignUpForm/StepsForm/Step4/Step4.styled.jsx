import styled from 'styled-components';

const BodyForm = styled.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;

const InputList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 834px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
  }
`;

const Label = styled.label`
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

export { BodyForm, InputList, Label, ButtonList };
