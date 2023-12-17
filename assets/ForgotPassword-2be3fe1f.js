import{s as n,N as t,j as i}from"./index-7bf0c55a.js";import{T as o,a as r,B as s,A as l,i as m}from"./Illustration-2514b681.js";import{u as d,I as c}from"./InputStyle.styled-26336db7.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const p=n.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,x=n.div`
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
`,g=n.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,h=n(t)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,u=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,f=()=>{const e=d({initialValues:{email:"",password:""},onSubmit:a=>{alert(JSON.stringify(a,null,2))}});return i.jsxs(p,{onSubmit:e.handleSubmit,children:[i.jsx(o,{children:"Forgot your password"}),i.jsx(r,{children:"We will send you an email with recovery instructions"}),i.jsx(u,{children:i.jsx(c,{id:"email",name:"email",type:"email",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email})}),i.jsx(s,{children:"Send"}),i.jsxs(x,{children:[i.jsx(g,{children:"Do you already have an account?"}),i.jsx(h,{to:"/signin",children:"Sign in"})]})]})},S=()=>i.jsx(l,{image:m,children:i.jsx(f,{})});export{S as default};
