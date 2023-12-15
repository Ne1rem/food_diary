import styled from "@emotion/styled";

export const Conteiner = styled.div`
text-align: left;
width: 300px;
padding: 16px 10px 16px 10px;
  @media screen and (min-width: 834px) {
   width: 834px;
   padding: 24px 27px 16px 27px;
  }  
   @media screen and (min-width: 1440px) {
   width: 1440px;
   padding: 20px 34px 52px 34px;}`

export const ImgArrow = styled.img`
width: 16px;
height: 16px;
@media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }`

export const Header = styled.h2`
margin-left: 4px;
color: var(--color-primary-white);
font-size: 24px;
font-weight: 500;
line-height: 1.25;
@media screen and (min-width: 834px) {
    margin-left: 12px;
    font-size: 30px;
    line-height: 1.2;
  }`

export const Wrapper = styled.div`
display: flex;
margin-bottom: 16px;
align-items: center;
text-align: left;`

export const ListDiary = styled.ul`
@media screen and (min-width: 1440px) {
   display:flex;
   flex-wrap: wrap;
   gap: 20px;
  }`


