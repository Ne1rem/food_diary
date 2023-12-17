import styled from 'styled-components';

export const GenderDiv = styled.div`
display: flex;
 flexDirection: row;
`;


export const Button = styled.button`
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
  }`

export const InputStyle = styled.input`
width: 280px;
display: inline-flex;
padding: 8px 10px;
flex-direction: column;
align-items: flex-start;
gap: 10px;

color: var(--color-primary-grey, #b6b6b6);
font-weight: 400;
line-height: 1.4;

outline: none;
border-radius: 12px;
border: 1px solid var(--color-primary-green-lite);
background: var(--color-primary-black-2);

@media screen and (min-width: 834px) {
  width: 360px;
}

@media screen and (min-width: 1440px) {
  width: 192px;
}
`;
