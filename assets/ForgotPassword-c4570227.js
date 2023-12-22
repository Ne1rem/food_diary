import{s as e,N as p,b as x,e as h,r as u,j as i,f as g}from"./index-4ebf79c3.js";import{T as v,a as f,I as n,B as j,A as S,i as y}from"./Illustration-33b33659.js";import{u as w}from"./index.esm-d37b0601.js";import{I,a as b,b as o,f as N}from"./InputStyle.styled-5a7987d7.js";import{i as t}from"./sprite-60cacf17.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const k=e.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,T=e.div`
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
`,C=e.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,F=e(p)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,B=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,E=()=>{const s=x(),l=h(),[r,c]=u.useState(""),a=w({initialValues:{email:""},onSubmit:d=>{s(g(d)),l("/signin")},validationSchema:N}),m=()=>{c("validation")};return i.jsxs(k,{onSubmit:a.handleSubmit,children:[i.jsx(v,{children:"Forgot your password"}),i.jsx(f,{children:"We will send you an email with recovery instructions"}),i.jsx(B,{children:i.jsxs(I,{children:[i.jsx(b,{className:r==="validation"?a.errors.email?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:a.handleChange,value:a.values.email}),r==="validation"?a.errors.email?i.jsx(o,{children:i.jsx("use",{href:`${t}#error`})}):i.jsx(o,{children:i.jsx("use",{href:`${t}#correct`})}):null,r==="validation"?a.errors.email?i.jsx(n,{children:a.errors.email}):i.jsx(n,{style:{color:"#3CBC81"},children:"E-mail is valid"}):null]})}),i.jsx(j,{className:"btn-active",onClick:()=>{m()},type:"submit",children:"Send"}),i.jsxs(T,{children:[i.jsx(C,{children:"Do you already have an account?"}),i.jsx(F,{to:"/signin",children:"Sign in"})]})]})},$=()=>i.jsx(S,{image:y,children:i.jsx(E,{})});export{$ as default};
