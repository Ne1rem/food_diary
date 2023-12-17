import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 0 10px;

  /* з [835px */
  @media only screen and (min-width: 835px) {
    width: 100%;
    min-width: 735px;
    padding: 0 27px;
  }

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
    width: 100%;
    min-width: 1373px;
    padding: 0 34px;
  }
`;

export const Section = styled.section`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;
  width: 100%;
  height: 100%;
  
    background-color: var(--color-primary-black);
    color: var(--color-primary-white);
`;