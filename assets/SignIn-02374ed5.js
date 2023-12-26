import{s as n,N as x,u as f,b as w,c as S,r as p,j as i,d as y}from"./index-cef11774.js";import{T as C,a as I,I as l,B as k,A as b,i as N}from"./Illustration-e8af9a24.js";import{u as T}from"./index.esm-7dc61f04.js";import{a as B}from"./validationSchema-85e329b6.js";import{i as r}from"./sprite-8225803d.js";import{I as m,a as h,b as a,L as $}from"./LoaderBtn-5c836841.js";import"./hoist-non-react-statics.cjs-116f6a9d.js";const L=n.form`
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
`,V=()=>{const u=f(),c=w(S),[e,g]=p.useState(""),[o,j]=p.useState(!1),s=T({initialValues:{email:"",password:""},validationSchema:B,isValidating:!1,onSubmit:d=>{u(y(d))}}),v=()=>{g("validation")},t=()=>{j(d=>!d)};return i.jsxs(L,{onSubmit:s.handleSubmit,children:[i.jsx(C,{children:"Sign in"}),i.jsx(I,{children:"You need to login to use the service"}),i.jsxs(E,{children:[i.jsx("li",{children:i.jsxs(m,{children:[i.jsx(h,{className:e==="validation"?s.errors.email?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:s.handleChange,value:s.values.email}),e==="validation"?s.errors.email?i.jsx(a,{children:i.jsx("use",{href:`${r}#error`})}):i.jsx(a,{children:i.jsx("use",{href:`${r}#correct`})}):null,e==="validation"?s.errors.email?i.jsx(l,{children:s.errors.email}):i.jsx(l,{style:{color:"#3CBC81"},children:"E-mail is valid"}):null]})}),i.jsx("li",{children:i.jsxs(m,{children:[i.jsx(h,{className:e==="validation"?s.errors.password?"error":"correct":"",id:"password",name:"password",placeholder:"Password",type:o?"text":"password",onChange:s.handleChange,value:s.values.password}),o?e!=="validation"&&i.jsx(a,{onClick:()=>{t()},children:i.jsx("use",{href:`${r}#eye`})}):i.jsx(a,{onClick:()=>{t()},children:i.jsx("use",{href:`${r}#eye-off`})}),o&&e==="validation"?s.errors.password?i.jsx(a,{onClick:()=>{t()},children:i.jsx("use",{href:`${r}#error`})}):i.jsx(a,{onClick:()=>{t()},children:i.jsx("use",{href:`${r}#correct`})}):null,o&&e==="validation"?s.errors.password?i.jsx(l,{children:s.errors.password}):i.jsx(l,{style:{color:"#3CBC81"},children:"Password is valid"}):null]})})]}),i.jsx(k,{className:"btn-active",disabled:c,onClick:()=>{v()},type:"submit",children:c?i.jsx($,{}):"Sign in"}),i.jsx(P,{to:"/forgot-password",children:"Forgot your password?"}),i.jsxs(F,{children:[i.jsx(H,{children:"If you don't have an account yet"}),i.jsx(U,{to:"/signup",children:"Sign up"})]})]})},J=()=>i.jsx(b,{image:N,children:i.jsx(V,{})});export{J as default};
