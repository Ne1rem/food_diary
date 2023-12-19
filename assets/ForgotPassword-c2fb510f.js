import{s as a,N as s,c as l,u as m,j as i,f as c}from"./index-3a797bbe.js";import{T as d,a as p,I as n,B as h,A as u,i as x}from"./Illustration-ab433149.js";import{u as g}from"./index.esm-f5ed5dc7.js";import{I as f,f as v}from"./InputStyle.styled-9e3e8007.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const j=a.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,y=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 56px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    margin-left: 32px;
    margin-top: 290px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-top: 253px;
  }
`,w=a.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,S=a(s)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,I=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,b=()=>{const o=l(),r=m(),e=g({initialValues:{email:""},onSubmit:t=>{r(c(t)),o("/signin")},validationSchema:v});return i.jsxs(j,{onSubmit:e.handleSubmit,children:[i.jsx(d,{children:"Forgot your password"}),i.jsx(p,{children:"We will send you an email with recovery instructions"}),i.jsxs(I,{children:[i.jsx(f,{id:"email",name:"email",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email}),e.errors.email&&e.touched.email&&e.handleSubmit?i.jsx(n,{children:e.errors.email}):null,!e.errors.email&&e.touched.email?i.jsx(n,{style:{color:"green"},children:"E-mail is valid"}):null]}),i.jsx(h,{className:"btn-active",type:"submit",children:"Send"}),i.jsxs(y,{children:[i.jsx(w,{children:"Do you already have an account?"}),i.jsx(S,{to:"/signin",children:"Sign in"})]})]})},B=()=>i.jsx(u,{image:x,children:i.jsx(b,{})});export{B as default};
