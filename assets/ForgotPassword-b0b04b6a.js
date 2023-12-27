import{s as e,N as h,e as g,u as v,r as o,j as i,f}from"./index-e3d71783.js";import{T as j,a as y,I as s,B as S,A as w,i as I}from"./Illustration-0c5a7edd.js";import{u as b}from"./index.esm-75c00be6.js";import{f as N}from"./validationSchema-9ec7d09b.js";import{i as l}from"./sprite-4d528b33.js";import{I as k,a as T,b as c,L as B}from"./LoaderBtn-17b12108.js";import"./hoist-non-react-statics.cjs-fde01bef.js";const C=e.form`
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
`,A=()=>{const m=g(),d=v(),[n,t]=o.useState(""),[r,p]=o.useState(""),a=b({initialValues:{email:""},validationSchema:N}),u=async()=>{if(p("validation"),a.values.email!==""&&!a.errors.email)try{t("loading"),await d(f(a.values)).unwrap(),m("/signin")}catch(x){return x}finally{t("")}};return i.jsxs(C,{onSubmit:a.handleSubmit,children:[i.jsx(j,{children:"Forgot your password"}),i.jsx(y,{children:"We will send you an email with recovery instructions"}),i.jsx(P,{children:i.jsxs(k,{children:[i.jsx(T,{className:r==="validation"?a.errors.email||a.values.email===""?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:a.handleChange,value:a.values.email}),r==="validation"?a.errors.email||a.values.email===""?i.jsx(c,{children:i.jsx("use",{href:`${l}#error`})}):i.jsx(c,{children:i.jsx("use",{href:`${l}#correct`})}):null,r==="validation"?a.errors.email||a.values.email===""?i.jsx(s,{children:a.errors.email||"Email required"}):i.jsx(s,{style:{color:"#3CBC81"},children:"E-mail is valid"}):null]})}),i.jsx(S,{className:"btn-active",disabled:n==="loading",onClick:()=>{u()},type:"button",children:n==="loading"?i.jsx(B,{}):"Send"}),i.jsxs(E,{children:[i.jsx(F,{children:"Do you already have an account?"}),i.jsx(L,{to:"/signin",children:"Sign in"})]})]})},G=()=>i.jsx(w,{image:I,children:i.jsx(A,{})});export{G as default};
