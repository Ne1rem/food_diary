import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  padding: 24px 10px 40px 10px;

  @media screen and (min-width: 834px) {
    max-width: 834px;
    padding: 40px 26px 60px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    width: 1440px;
    padding: 40px 150px 0px 150px;
    align-items: unset;
    flex-direction: row;
    justify-content: space-between;
  }
`;
(props) => console.log(props.align);

const Images = styled.img`
  width: 300px;
  height: 296px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-bottom: 0;
  }
`;

export { Container, Images };
