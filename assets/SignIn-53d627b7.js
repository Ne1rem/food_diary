import{s,N as d,b as x,r as g,j as i,d as u}from"./index-aa210fd1.js";import{T as j,a as v,I as a,B as f,A as w,i as S}from"./Illustration-9a3146d7.js";import{u as y}from"./index.esm-1e4ba95b.js";import{I as t,a as l,b as n,c as I}from"./InputStyle.styled-7f89e963.js";import{i as o}from"./sprite-0228fed0.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const b=s.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,N=s.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,k=s(d)`
  display: block;
  margin-top: 14px;

  color: var(--color-primary-grey);
  text-align: center;

  font-weight: 400;
  line-height: 1.4;

  @media screen and (min-width: 834px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,T=s.div`
  display: flex;
  gap: 10px;
  margin-top: 54px;

  @media screen and (min-width: 834px) {
    margin-top: 224px;
    margin-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-top: 186px;
  }
`,C=s.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,E=s(d)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,$=()=>{const c=x(),[e,p]=g.useState(""),r=y({initialValues:{email:"",password:""},validationSchema:I,isValidating:!1,onSubmit:h=>{c(u(h))}}),m=()=>{p("validation")};return i.jsxs(b,{onSubmit:r.handleSubmit,children:[i.jsx(j,{children:"Sign in"}),i.jsx(v,{children:"You need to login to use the service"}),i.jsxs(N,{children:[i.jsx("li",{children:i.jsxs(t,{children:[i.jsx(l,{className:e==="validation"?r.errors.email?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:r.handleChange,value:r.values.email}),e==="validation"?r.errors.email?i.jsx(n,{children:i.jsx("use",{href:`${o}#error`})}):i.jsx(n,{children:i.jsx("use",{href:`${o}#correct`})}):null,e==="validation"?r.errors.email?i.jsx(a,{children:r.errors.email}):i.jsx(a,{style:{color:"green"},children:"E-mail is valid"}):null]})}),i.jsx("li",{children:i.jsxs(t,{children:[i.jsx(l,{className:e==="validation"?r.errors.password?"error":"correct":"",id:"password",name:"password",placeholder:"Password",onChange:r.handleChange,value:r.values.password}),e==="validation"?r.errors.password?i.jsx(n,{children:i.jsx("use",{href:`${o}#error`})}):i.jsx(n,{children:i.jsx("use",{href:`${o}#correct`})}):null,e==="validation"?r.errors.password?i.jsx(a,{children:r.errors.password}):i.jsx(a,{style:{color:"green"},children:"Password is valid"}):null]})})]}),i.jsx(f,{className:"btn-active",onClick:()=>{m()},type:"submit",children:"Sign in"}),i.jsx(k,{to:"/forgot-password",children:"Forgot your password?"}),i.jsxs(T,{children:[i.jsx(C,{children:"If you don't have an account yet"}),i.jsx(E,{to:"/signup",children:"Sign up"})]})]})},A=()=>i.jsx(w,{image:S,children:i.jsx($,{})});export{A as default};
