import{s as i,N as r,j as e}from"./index-84c5bfcb.js";import{A as o,I as l}from"./Illustration-9ce93f16.js";const s=i.div`
  padding-top: 20px;

  @media screen and (min-width: 1440px) {
padding-top: 80px;
  }
`,a=i.h2`
  margin-bottom: 16px;

  color: var(--color-primary-white);
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }
`,c=i.p`
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

`,d=i.div`
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
`,x=i.ul`
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
`,p=()=>e.jsxs(s,{children:[e.jsx(a,{children:"Set goals and achieve them"}),e.jsx(c,{children:"The service will help you set goals and follow them."}),e.jsxs(d,{children:[e.jsx(t,{to:"/signin",children:"Sign in"}),e.jsx(t,{to:"/signup",children:"Sign up"})]}),e.jsxs(x,{children:[e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(n,{children:"Set goals"})]}),e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(n,{children:"Watch your calories"})]}),e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(n,{children:"Keep track of your water intake"})]}),e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(n,{children:"Control your weight"})]})]})]}),g=()=>e.jsx(o,{image:l,children:e.jsx(p,{})});export{g as default};
