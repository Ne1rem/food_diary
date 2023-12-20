import{c as i,a as e,b as a}from"./index.esm-2d8bb993.js";import{s as r}from"./index-2434b60e.js";const n=i().shape({name:e().required("Name required").matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,"Invalid name"),email:e().required("Email required").email("Invalid email").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email"'),password:e().min(6).max(15).required("Password required"),age:a().required("Age required").integer(),height:a().required("Height required").min(50).max(230),weight:a().required("Weight required").min(50).max(200),activity:a().min(1.2).max(1.9)}),t=i().shape({email:e().required("Email required").email("Invalid email").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email"'),password:e().required("Password required")}),l=i().shape({email:e().required("Email required").email("Invalid email").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email"')}),s=r.input`
  width: 300px;
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
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;export{s as I,t as a,l as f,n as s};
