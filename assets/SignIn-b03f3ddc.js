import{s as n,N as h,b as v,r as c,j as i,d as f}from"./index-52d35938.js";import{T as w,a as S,I as t,B as y,A as C,i as I}from"./Illustration-2f6e0a29.js";import{u as k}from"./index.esm-5ca7ed9d.js";import{I as p,a as m,b as r,c as b}from"./InputStyle.styled-5b8ccb59.js";import{i as a}from"./sprite-bebf375b.js";import"./hoist-non-react-statics.cjs-328f2350.js";const N=n.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,T=n.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,$=n(h)`
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
`,B=n.div`
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
`,E=n.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,P=n(h)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,F=()=>{const x=v(),[s,u]=c.useState(""),[o,g]=c.useState(!1),e=k({initialValues:{email:"",password:""},validationSchema:b,isValidating:!1,onSubmit:l=>{x(f(l))}}),j=()=>{u("validation")},d=()=>{g(l=>!l)};return i.jsxs(N,{onSubmit:e.handleSubmit,children:[i.jsx(w,{children:"Sign in"}),i.jsx(S,{children:"You need to login to use the service"}),i.jsxs(T,{children:[i.jsx("li",{children:i.jsxs(p,{children:[i.jsx(m,{className:s==="validation"?e.errors.email?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email}),s==="validation"?e.errors.email?i.jsx(r,{children:i.jsx("use",{href:`${a}#error`})}):i.jsx(r,{children:i.jsx("use",{href:`${a}#correct`})}):null,s==="validation"?e.errors.email?i.jsx(t,{children:e.errors.email}):i.jsx(t,{style:{color:"#3CBC81"},children:"E-mail is valid"}):null]})}),i.jsx("li",{children:i.jsxs(p,{children:[i.jsx(m,{className:s==="validation"?e.errors.password?"error":"correct":"",id:"password",name:"password",placeholder:"Password",type:o?"text":"password",onChange:e.handleChange,value:e.values.password}),o?s!=="validation"&&i.jsx(r,{onClick:()=>{d()},children:i.jsx("use",{href:`${a}#eye`})}):i.jsx(r,{onClick:()=>{d()},children:i.jsx("use",{href:`${a}#eye-off`})}),o&&s==="validation"?e.errors.password?i.jsx(r,{children:i.jsx("use",{href:`${a}#error`})}):i.jsx(r,{children:i.jsx("use",{href:`${a}#correct`})}):null,o&&s==="validation"?e.errors.password?i.jsx(t,{children:e.errors.password}):i.jsx(t,{style:{color:"#3CBC81"},children:"Password is valid"}):null]})})]}),i.jsx(y,{className:"btn-active",onClick:()=>{j()},type:"submit",children:"Sign in"}),i.jsx($,{to:"/forgot-password",children:"Forgot your password?"}),i.jsxs(B,{children:[i.jsx(E,{children:"If you don't have an account yet"}),i.jsx(P,{to:"/signup",children:"Sign up"})]})]})},R=()=>i.jsx(C,{image:I,children:i.jsx(F,{})});export{R as default};
