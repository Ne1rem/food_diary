import styled from "@emotion/styled";
import { ErrorMessage } from "formik";
import { Field } from "formik";

export const ContainerInputs = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
margin-bottom: 20px;
@media only screen and (min-width: 834px){
  flex-direction: row; 
  gap: 12px;
  }
`

// export const InputProductStyle = styled.input`
//   min-width: 255px;
//   padding: 8px;
//   color: var(--color-primary-grey);
//   font-size: 14px; 
//   font-weight: 400;
//   line-height: 1.42;
//   outline: none;
//   border-radius: 12px;
//   border: 1px solid var(--color-primary-green-lite);
//   background: transparent;
//   &.error {
//     border: 1px solid #e74a3b;
//   }`

export const InputStyle = styled(Field)`
  /* min-width: 61px; */
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;
  
  &.error {
    border: 1px solid #e74a3b;
  }

  &.correct {
    border: 1px solid var(--color-primary-green-lite);
  }
  `

export const DivWrapper = styled.div`
display: flex;
gap: 8px;
@media only screen and (min-width: 834px){
  width: 185px;
  gap: 12px;
}`

export const TrashSvg = styled.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`

export const ButtonSvg = styled.button`
background-color: transparent;
border: none;
padding: 0;
`;

export const InputNameProduct = styled(InputStyle)`
width: 276px;

@media screen and (min-width: 834px) {
   max-width: 255px;
  }
`;

export const InputCarbonah= styled(InputStyle)`
width: 276px;


@media screen and (min-width: 834px) {
   max-width: 100px;
  }
`;

export const InputProtein = styled(InputStyle)`
width: 276px;

@media screen and (min-width: 834px) {
   max-width: 86px;
  }
`;

export const InputFat = styled(InputStyle)`
max-width: 120px;

@media screen and (min-width: 834px) {
   max-width: 61px;
  }
`;

export const InputCaloties = styled(InputStyle)`
max-width: 120px;

@media screen and (min-width: 834px) {
   max-width: 78px;
  }
`;

export const InputWrapper = styled.div`
position: relative;
`;  

export const StyledError = styled(ErrorMessage)`
margin-top: 2px;
margin-left: 10px;
position: absolute;
color: #E74A3B;
text-align: center;
font-size: 12px;
font-weight: 400;
line-height: 14px;

@media screen and (min-width: 834px) {
  margin-top: 4px;
  }

`

export const InputError = styled.div`
  position: absolute;
  top: 40px;
  left: 10px;
  color: #E74A3B;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
`;

