import{s as i,N as r,j as e}from"./index-ea1bd763.js";import{A as o}from"./AuthLayout-7be6657e.js";const l=i.div`
  padding-top: 20px;

  @media screen and (min-width: 1440px) {
padding-top: 0;
  }
`,s=i.h2`
  margin-bottom: 16px;

  color: var(--color-primary-white);
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }
`,a=i.p`
  margin-bottom: 24px;

  color: var(--color-primary-grey, #b6b6b6);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    max-width: 418px;
    text-align: center;
    font-size: 22px;
    line-height: 1.4;
  }

`,c=i.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    margin-bottom: 80px;
  }
`,t=i(r)`
  width: 122px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  gap: 10px;

  border-radius: 12px;
  line-height: 1.4;
  color: var(--color-primary-white);


  @media screen and (min-width: 834px) {
    width: 192px;
  }

  &:hover {
    color: var(--color-primary-black-2);
    background: var(--color-primary-green-lite);
  }
`,d=i.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 834px) {
    width: 444px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }

  li {
    display: flex;
    align-items: center;
  }

  div {
    margin-right: 8px;
    width: 8px;
    height: 8px;
    background-color: var(--color-primary-green-lite);
    border-radius: 50%;
  }
`,n=i.p`
  font-weight: 400;
  line-height: 1.4;
`,x=()=>e.jsxs(l,{children:[e.jsx(s,{children:"Set goals and achieve them"}),e.jsx(a,{children:"The service will help you set goals and follow them."}),e.jsxs(c,{children:[e.jsx(t,{to:"/signin",children:"Sign in"}),e.jsx(t,{to:"/signup",children:"Sign up"})]}),e.jsxs(d,{children:[e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(n,{children:"Set goals"})]}),e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(n,{children:"Watch your calories"})]}),e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(n,{children:"Keep track of your water intake"})]}),e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(n,{children:"Control your weight"})]})]})]}),m=()=>e.jsx(o,{children:e.jsx(x,{})});export{m as default};
