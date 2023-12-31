import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 0 10px;

  /* з [834px */
  @media only screen and (min-width: 834px) {
    min-width: 780px;
    padding: 0 27px;
  }

  /* з [1440px */
  @media only screen and (min-width: 1440px) {
    min-width: 1372px;
    padding: 0 34px;
  }
`;

export const Section = styled.section`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  width: 100%;
  height: 100%;
  
    background-color: var(--color-primary-black);
    color: var(--color-primary-white);
`;