import{s as i,N as t,j as e}from"./index-0fa52512.js";import{T as s,a as l,A as o,I as a}from"./Illustration-613dc882.js";const d=i.div`
  padding-top: 20px;

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,c=i.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    margin-bottom: 80px;
  }
`,r=i(t)`
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
`,p=()=>e.jsxs(d,{children:[e.jsx(s,{children:"Set goals and achieve them"}),e.jsx(l,{children:"The service will help you set goals and follow them."}),e.jsxs(c,{children:[e.jsx(r,{to:"/signin",children:"Sign in"}),e.jsx(r,{to:"/signup",children:"Sign up"})]}),e.jsxs(x,{children:[e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(n,{children:"Set goals"})]}),e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(n,{children:"Watch your calories"})]}),e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(n,{children:"Keep track of your water intake"})]}),e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(n,{children:"Control your weight"})]})]})]}),g=()=>e.jsx(o,{image:a,children:e.jsx(p,{})});export{g as default};
