import styled from "styled-components";

const Goals = styled.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;

const RadioList = styled.ul`
display: flex;
flex-direction: column;
gap: 24px;
margin-bottom: 24px;

@media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: center;
    gap: 52px;
    }

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
`;

export { Goals, RadioList, ButtonList };