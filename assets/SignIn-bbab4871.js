import{s as n,N as x,u as f,r as d,j as s,b as y}from"./index-4bbc7351.js";import{T as S,a as C,I as l,B as k,A as I,i as b}from"./Illustration-0db17ba9.js";import{u as N}from"./index.esm-5a8ab2f8.js";import{a as T}from"./validationSchema-3feb2a0f.js";import{i}from"./sprite-3c944537.js";import{I as h,a as u,b as r,L as B}from"./LoaderBtn-605d360a.js";import"./hoist-non-react-statics.cjs-7116d9d1.js";const P=n.form`
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
`,U=()=>{const g=f(),[c,p]=d.useState(""),[a,v]=d.useState(""),[o,j]=d.useState(!1),e=N({initialValues:{email:"",password:""},validationSchema:T,isValidating:!1}),w=async()=>{if(v("validation"),e.values.email!==""&&!e.errors.email&&e.values.password!==""&&!e.errors.password)try{p("loading"),await g(y(e.values)).unwrap()}catch{return}finally{p("")}},t=()=>{j(m=>!m)};return s.jsxs(P,{onSubmit:e.handleSubmit,children:[s.jsx(S,{children:"Sign in"}),s.jsx(C,{children:"You need to login to use the service"}),s.jsxs($,{children:[s.jsx("li",{children:s.jsxs(h,{children:[s.jsx(u,{className:a==="validation"?e.errors.email||e.values.email===""?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email}),a==="validation"?e.errors.email||e.values.email===""?s.jsx(r,{children:s.jsx("use",{href:`${i}#error`})}):s.jsx(r,{children:s.jsx("use",{href:`${i}#correct`})}):null,a==="validation"?e.errors.email||e.values.password===""?s.jsx(l,{children:e.errors.email||"Email required"}):s.jsx(l,{style:{color:"#3CBC81"},children:"E-mail is valid"}):null]})}),s.jsx("li",{children:s.jsxs(h,{children:[s.jsx(u,{className:a==="validation"?e.errors.password||e.values.password===""?"error":"correct":"",id:"password",name:"password",placeholder:"Password",type:o?"text":"password",onChange:e.handleChange,value:e.values.password}),o?a!=="validation"&&s.jsx(r,{onClick:()=>{t()},children:s.jsx("use",{href:`${i}#eye`})}):s.jsx(r,{onClick:()=>{t()},children:s.jsx("use",{href:`${i}#eye-off`})}),o&&a==="validation"?e.errors.password||e.values.password===""?s.jsx(r,{onClick:()=>{t()},children:s.jsx("use",{href:`${i}#error`})}):s.jsx(r,{onClick:()=>{t()},children:s.jsx("use",{href:`${i}#correct`})}):null,o&&a==="validation"?e.errors.password||e.values.password===""?s.jsx(l,{children:e.errors.password||"Password required"}):s.jsx(l,{style:{color:"#3CBC81"},children:"Password is valid"}):null]})})]}),s.jsx(k,{className:"btn-active",disabled:c==="loading",onClick:()=>{w()},type:"button",children:c==="loading"?s.jsx(B,{}):"Sign in"}),s.jsx(E,{to:"/forgot-password",children:"Forgot your password?"}),s.jsxs(L,{children:[s.jsx(F,{children:"If you don't have an account yet"}),s.jsx(H,{to:"/signup",children:"Sign up"})]})]})},G=()=>s.jsx(I,{image:b,children:s.jsx(U,{})});export{G as default};
