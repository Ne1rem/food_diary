import styled from "styled-components";


const Title = styled.h2`
  margin-bottom: 16px;

  color: var(--color-primary-white);
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

const Text = styled.p`
  margin-bottom: 24px;

  color: var(--color-primary-grey, #b6b6b6);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    display: block;
    width: 444px;
    text-align: center;
    font-size: 22px;
    line-height: 1.4;

    @media screen and (min-width: 1440px) {
      text-align: left;
    }
  }
`;


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

const InputError = styled.div`
  color: #E74A3B;

text-align: center;
font-size: 12px;
font-weight: 400;
line-height: 1.1
`



export { Button, Title, Text, InputError };