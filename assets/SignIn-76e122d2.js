import{s as n,N as x,u as f,r as d,j as e,b as y}from"./index-da737403.js";import{T as S,a as C,I as t,B as k,A as I,i as b}from"./Illustration-6d86348f.js";import{u as N}from"./index.esm-1ee883f3.js";import{a as T}from"./validationSchema-4e797b74.js";import{i}from"./sprite-29536eb2.js";import{I as h,a as u,b as r,L as B}from"./LoaderBtn-86dea6ac.js";import"./hoist-non-react-statics.cjs-0f51afe3.js";const P=n.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,$=n.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,E=n(x)`
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
`,L=n.div`
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
`,F=n.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,H=n(x)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,U=()=>{const g=f(),[c,p]=d.useState(""),[a,v]=d.useState(""),[o,j]=d.useState(!1),s=N({initialValues:{email:"",password:""},validationSchema:T,isValidating:!1}),w=async()=>{if(v("validation"),s.values.email!==""&&!s.errors.email&&s.values.password!==""&&!s.errors.password)try{p("loading"),await g(y(s.values)).unwrap()}catch{return}finally{p("")}},l=()=>{j(m=>!m)};return e.jsxs(P,{onSubmit:s.handleSubmit,children:[e.jsx(S,{children:"Sign in"}),e.jsx(C,{children:"You need to login to use the service"}),e.jsxs($,{children:[e.jsx("li",{children:e.jsxs(h,{children:[e.jsx(u,{className:a==="validation"?s.errors.email||s.values.email===""?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:s.handleChange,value:s.values.email}),a==="validation"?s.errors.email||s.values.email===""?e.jsx(r,{children:e.jsx("use",{href:`${i}#error`})}):e.jsx(r,{children:e.jsx("use",{href:`${i}#correct`})}):null,a==="validation"?s.errors.email||s.values.email===""?e.jsx(t,{children:s.errors.email||"Email required"}):e.jsx(t,{style:{color:"#3CBC81"},children:"E-mail is valid"}):null]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx(u,{className:a==="validation"?s.errors.password||s.values.password===""?"error":"correct":"",id:"password",name:"password",placeholder:"Password",type:o?"text":"password",onChange:s.handleChange,value:s.values.password}),o?a!=="validation"&&e.jsx(r,{onClick:()=>{l()},children:e.jsx("use",{href:`${i}#eye`})}):e.jsx(r,{onClick:()=>{l()},children:e.jsx("use",{href:`${i}#eye-off`})}),o&&a==="validation"?s.errors.password||s.values.password===""?e.jsx(r,{onClick:()=>{l()},children:e.jsx("use",{href:`${i}#error`})}):e.jsx(r,{onClick:()=>{l()},children:e.jsx("use",{href:`${i}#correct`})}):null,o&&a==="validation"?s.errors.password||s.values.password===""?e.jsx(t,{children:s.errors.password||"Password required"}):e.jsx(t,{style:{color:"#3CBC81"},children:"Password is valid"}):null]})})]}),e.jsx(k,{className:"btn-active",disabled:c==="loading",onClick:()=>{w()},type:"button",children:c==="loading"?e.jsx(B,{}):"Sign in"}),e.jsx(E,{to:"/forgot-password",children:"Forgot your password?"}),e.jsxs(L,{children:[e.jsx(F,{children:"If you don't have an account yet"}),e.jsx(H,{to:"/signup",children:"Sign up"})]})]})},G=()=>e.jsx(I,{image:b,children:e.jsx(U,{})});export{G as default};
