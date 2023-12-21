import{s as a,N as p,e as x,b as h,r as u,j as i,f as g}from"./index-5120c3f9.js";import{T as v,a as f,I as n,B as j,A as S,i as y}from"./Illustration-5118fce8.js";import{u as w}from"./index.esm-d92be58d.js";import{I,a as b,b as o,f as N}from"./InputStyle.styled-e0eaf1b3.js";import{i as t}from"./sprite-b0066999.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const k=a.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,T=a.div`
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
`,F=a.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,E=a(p)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,B=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,C=()=>{const s=x(),l=h(),[r,c]=u.useState(""),e=w({initialValues:{email:""},onSubmit:d=>{l(g(d)),s("/signin")},validationSchema:N}),m=()=>{c("validation")};return i.jsxs(k,{onSubmit:e.handleSubmit,children:[i.jsx(v,{children:"Forgot your password"}),i.jsx(f,{children:"We will send you an email with recovery instructions"}),i.jsx(B,{children:i.jsxs(I,{children:[i.jsx(b,{className:r==="validation"?e.errors.email?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email}),r==="validation"?e.errors.email?i.jsx(o,{children:i.jsx("use",{href:`${t}#error`})}):i.jsx(o,{children:i.jsx("use",{href:`${t}#correct`})}):null,r==="validation"?e.errors.email?i.jsx(n,{children:e.errors.email}):i.jsx(n,{style:{color:"green"},children:"E-mail is valid"}):null]})}),i.jsx(j,{className:"btn-active",onClick:()=>{m()},type:"submit",children:"Send"}),i.jsxs(T,{children:[i.jsx(F,{children:"Do you already have an account?"}),i.jsx(E,{to:"/signin",children:"Sign in"})]})]})},$=()=>i.jsx(S,{image:y,children:i.jsx(C,{})});export{$ as default};
