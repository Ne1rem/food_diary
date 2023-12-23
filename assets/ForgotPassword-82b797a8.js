import{s as e,N as h,b as g,e as v,r as o,j as i,f}from"./index-684c15cf.js";import{T as j,a as y,I as t,B as S,A as w,i as I}from"./Illustration-4bb69333.js";import{u as b}from"./index.esm-cfeb0b55.js";import{I as N,a as k,b as s}from"./InputStyle.styled-7bb5892e.js";import{L as T}from"./LoaderBtn-497cbc4e.js";import{f as B}from"./validationSchema-77b925ff.js";import{i as l}from"./sprite-b47a74ce.js";import"./hoist-non-react-statics.cjs-45085b3e.js";const C=e.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,E=e.div`
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
`,F=e.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,L=e(h)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,P=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,A=()=>{const m=g(),c=v(),[r,d]=o.useState(""),[p,n]=o.useState(""),a=b({initialValues:{email:""},validationSchema:B}),u=async()=>{if(d("validation"),a.values.email!==""&&!a.errors.email)try{n("loading"),await m(f(a.values)).unwrap(),c("/signin")}catch(x){console.log(x)}finally{n("")}};return i.jsxs(C,{onSubmit:a.handleSubmit,children:[i.jsx(j,{children:"Forgot your password"}),i.jsx(y,{children:"We will send you an email with recovery instructions"}),i.jsx(P,{children:i.jsxs(N,{children:[i.jsx(k,{className:r==="validation"?a.errors.email||a.values.email===""?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:a.handleChange,value:a.values.email}),r==="validation"?a.errors.email||a.values.email===""?i.jsx(s,{children:i.jsx("use",{href:`${l}#error`})}):i.jsx(s,{children:i.jsx("use",{href:`${l}#correct`})}):null,r==="validation"?a.errors.email||a.values.email===""?i.jsx(t,{children:a.errors.email||"Email required"}):i.jsx(t,{style:{color:"#3CBC81"},children:"E-mail is valid"}):null]})}),i.jsx(S,{className:"btn-active",onClick:()=>{u()},type:"button",children:p==="loading"?i.jsx(T,{}):"Send"}),i.jsxs(E,{children:[i.jsx(F,{children:"Do you already have an account?"}),i.jsx(L,{to:"/signin",children:"Sign in"})]})]})},H=()=>i.jsx(w,{image:I,children:i.jsx(A,{})});export{H as default};
