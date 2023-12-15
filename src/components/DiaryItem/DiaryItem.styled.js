import styled from "@emotion/styled";

export const WrapperItemDiary = styled.div`
@media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 40px) / 2);
  }`

export const WrapperListHeader = styled.div`
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   margin-bottom:6px;
   align-items: center;
  }`

export const Wrapper = styled.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
  }`

export const Title = styled.h3`
margin-left: 12px;
color: var(--color-primary-white);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`

export const ListNutrients = styled.ul`
display: flex;
color: var(--color-primary-white);
font-size: 14px;
font-weight: 400;
line-height: 1.42;
@media screen and (max-width: 834px) {
    flex-wrap: wrap;
    gap: 12px;
    width: 180px;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 834px) {
padding-right: 74px;
  }
  @media screen and (min-width: 1440px) {
padding-right: 40px;
  }`
  
export const ItemNutrients = styled.li`
padding-left: 20px;`

export const ListToComplete = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: var(--color-primary-black-2);
border-radius: 12px;
padding: 16px 12px;
height: 232px;
width: 100%;
@media screen and (min-width: 834px) {
    height: 240px;
    width: 780px;
    padding: 32px 14px;
  }
  @media screen and (max-width: 1440px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 676px;
  }`
  
export const ItemToComplete = styled.li`
font-size: 14px;
color: var(--color-primary-white);
font-weight: 600;
line-height: 1.42;
width: 100%;`

export const ModalLink = styled.a`
margin-left: 16px;
color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
line-height: 1.42;`