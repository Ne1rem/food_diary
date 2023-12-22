import{c as a,a as e,b as i}from"./index.esm-c4fbf2d5.js";import{s as r}from"./index-4b5b6c61.js";const n=a().shape({name:e().required("Name required").matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,"Invalid name"),email:e().required("Email required").email("Invalid email").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email"'),password:e().min(6).max(15).required("Password required"),age:i().required("Age required").integer(),height:i().required("Height required").min(50).max(230),weight:i().required("Weight required").min(50).max(200),activity:i().min(1.2).max(1.9)}),s=a().shape({email:e().required("Email required").email("Invalid email").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email"'),password:e().required("Password required")}),m=a().shape({email:e().required("Email required").email("Invalid email").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email"')}),o=r.div`
position: relative;
width: 300px;

@media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,l=r.input`
  width: 300px;
  display: inline-flex;
  padding: 8px 30px 8px 10px;
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
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }


  &.error{
    border: 1px solid #E74A3B;
  }

  &.correct{
    border: 1px solid #3CBC81;
  }
`,p=r.svg`
position: absolute;
width: 16px;
height: 16px;
top: 10px;
right: 10px;
`;export{o as I,l as a,p as b,s as c,m as f,n as s};
