import{s as e,N as r,c as s,u as l,j as i,f as m}from"./index-e83846e7.js";import{T as c,a as d,I as p,B as h,A as u,i as x}from"./Illustration-d12a0291.js";import{u as g,I as f,f as v}from"./InputStyle.styled-0e2e3fdb.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const j=e.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,y=e.div`
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
`,w=e.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,S=e(r)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,I=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,b=()=>{const n=s(),t=l(),a=g({initialValues:{email:""},onSubmit:o=>{t(m(o)),n("/signin")},validationSchema:v});return i.jsxs(j,{onSubmit:a.handleSubmit,children:[i.jsx(c,{children:"Forgot your password"}),i.jsx(d,{children:"We will send you an email with recovery instructions"}),i.jsxs(I,{children:[i.jsx(f,{id:"email",name:"email",placeholder:"E-mail",onChange:a.handleChange,value:a.values.email}),a.errors.email&&a.touched.email&&a.handleSubmit?i.jsx(p,{children:a.errors.email}):null]}),i.jsx(h,{className:"btn-active",type:"submit",children:"Send"}),i.jsxs(y,{children:[i.jsx(w,{children:"Do you already have an account?"}),i.jsx(S,{to:"/signin",children:"Sign in"})]})]})},B=()=>i.jsx(u,{image:x,children:i.jsx(b,{})});export{B as default};
