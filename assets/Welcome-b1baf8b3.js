import{s as i,N as t,j as e}from"./index-5120c3f9.js";import{T as o,a as s,A as a,i as c}from"./Illustration-5118fce8.js";const l=i.div`
  padding-top: 20px;

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,d=i.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    margin-bottom: 80px;
  }
`,n=i(t)`
  width: 122px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  gap: 10px;

  border-radius: 12px;
  line-height: 1.4;
  
  color: var(--color-primary-white);
  transition: background-color 0.4s cubic-bezier(0, 0, 1, 1),
   color 0.4s cubic-bezier(0, 0, 1, 1),
   transform 0.4s cubic-bezier(0, 0, 1, 1);


  @media screen and (min-width: 834px) {
    width: 192px;
  }

  &:hover {
  color: var(--color-primary-black-2);
  background: var(--color-primary-green-lite);
  transform:  scale(1.03);
}

  &.active {
    background-color: var(--color-primary-green-lite);
    color: var(--color-primary-black-2);
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
`,r=i.p`
  font-weight: 400;
  line-height: 1.4;
`,p=()=>e.jsxs(l,{children:[e.jsx(o,{children:"Set goals and achieve them"}),e.jsx(s,{children:"The service will help you set goals and follow them."}),e.jsxs(d,{children:[e.jsx(n,{className:"active",to:"/signin",children:"Sign in"}),e.jsx(n,{to:"/signup",children:"Sign up"})]}),e.jsxs(x,{children:[e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(r,{children:"Set goals"})]}),e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(r,{children:"Watch your calories"})]}),e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(r,{children:"Keep track of your water intake"})]}),e.jsxs("li",{children:[e.jsx("div",{}),e.jsx(r,{children:"Control your weight"})]})]})]}),g=()=>e.jsx(a,{image:c,children:e.jsx(p,{})});export{g as default};
