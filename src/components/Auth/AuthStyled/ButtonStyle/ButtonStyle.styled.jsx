import styled from 'styled-components';

const Button = styled.button`
  width: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  gap: 10px;

  border: none;
  border-radius: 12px;
  line-height: 1.4;
  background: var(--color-primary-green-lite);
  color: var(--color-primary-black-2);

  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }

  /* &:hover {
  color: var(--color-primary-black-2);
  background: var(--color-primary-green-lite);
} */
`;

export { Button };
