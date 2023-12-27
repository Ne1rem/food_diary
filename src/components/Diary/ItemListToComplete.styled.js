import styled from "@emotion/styled";

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;`

export const Title = styled.div`
width: 170px;
margin-left: 16px;
margin-bottom: 6px;
text-transform: capitalize;
@media screen and (min-width: 834px) {
    width: 210px;
    font-size: 14px;
    line-height: 1.42;
  }`

export const WrapperNutritients = styled.ul`
display: flex;
justify-content: space-between;
font-size: 12px;
font-weight: 400;
line-height: 1.5;
width: 210px;
color: var(--color-primary-grey);
margin-left: 16px;
@media screen and (min-width: 834px) {
  justify-content: space-around;
  width: 350px;
    font-size: 14px;
    line-height: 1.42;
    color: var(--color-primary-white);
  }`
