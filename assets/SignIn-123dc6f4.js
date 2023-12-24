import{s as n,N as x,a as f,c as w,d as S,r as p,j as s,e as y}from"./index-567a1809.js";import{T as I,a as C,I as t,B as k,A as b,i as N}from"./Illustration-639e512e.js";import{u as T}from"./index.esm-d252f90f.js";import{a as B}from"./validationSchema-ff40699a.js";import{i as r}from"./sprite-2307e05d.js";import{I as m,a as h,b as a,L as $}from"./LoaderBtn-4aae2f4f.js";import"./hoist-non-react-statics.cjs-675f4425.js";const L=n.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,E=n.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,P=n(x)`
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
`,F=n.div`
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
`,H=n.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,U=n(x)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,V=()=>{const u=f(),d=w(S),[i,g]=p.useState(""),[o,j]=p.useState(!1),e=T({initialValues:{email:"",password:""},validationSchema:B,isValidating:!1,onSubmit:l=>{u(y(l))}}),v=()=>{g("validation")},c=()=>{j(l=>!l)};return s.jsxs(L,{onSubmit:e.handleSubmit,children:[s.jsx(I,{children:"Sign in"}),s.jsx(C,{children:"You need to login to use the service"}),s.jsxs(E,{children:[s.jsx("li",{children:s.jsxs(m,{children:[s.jsx(h,{className:i==="validation"?e.errors.email?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email}),i==="validation"?e.errors.email?s.jsx(a,{children:s.jsx("use",{href:`${r}#error`})}):s.jsx(a,{children:s.jsx("use",{href:`${r}#correct`})}):null,i==="validation"?e.errors.email?s.jsx(t,{children:e.errors.email}):s.jsx(t,{style:{color:"#3CBC81"},children:"E-mail is valid"}):null]})}),s.jsx("li",{children:s.jsxs(m,{children:[s.jsx(h,{className:i==="validation"?e.errors.password?"error":"correct":"",id:"password",name:"password",placeholder:"Password",type:o?"text":"password",onChange:e.handleChange,value:e.values.password}),o?i!=="validation"&&s.jsx(a,{onClick:()=>{c()},children:s.jsx("use",{href:`${r}#eye`})}):s.jsx(a,{onClick:()=>{c()},children:s.jsx("use",{href:`${r}#eye-off`})}),o&&i==="validation"?e.errors.password?s.jsx(a,{children:s.jsx("use",{href:`${r}#error`})}):s.jsx(a,{children:s.jsx("use",{href:`${r}#correct`})}):null,o&&i==="validation"?e.errors.password?s.jsx(t,{children:e.errors.password}):s.jsx(t,{style:{color:"#3CBC81"},children:"Password is valid"}):null]})})]}),s.jsx(k,{className:"btn-active",disabled:d,onClick:()=>{v()},type:"submit",children:d?s.jsx($,{}):"Sign in"}),s.jsx(P,{to:"/forgot-password",children:"Forgot your password?"}),s.jsxs(F,{children:[s.jsx(H,{children:"If you don't have an account yet"}),s.jsx(U,{to:"/signup",children:"Sign up"})]})]})},J=()=>s.jsx(b,{image:N,children:s.jsx(V,{})});export{J as default};
