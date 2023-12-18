import{s as n,N as r,u as t,j as i,f as s}from"./index-dbeec58e.js";import{T as l,a as m,I as d,B as c,A as p,i as h}from"./Illustration-0d25f5af.js";import{u as x,I as u,f as g}from"./InputStyle.styled-3d95af6f.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const f=n.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,j=n.div`
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
`,v=n.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,y=n(r)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,w=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,S=()=>{const a=t(),e=x({initialValues:{email:""},onSubmit:o=>{a(s(o))},validationSchema:g});return i.jsxs(f,{onSubmit:e.handleSubmit,children:[i.jsx(l,{children:"Forgot your password"}),i.jsx(m,{children:"We will send you an email with recovery instructions"}),i.jsxs(w,{children:[i.jsx(u,{id:"email",name:"email",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email}),e.errors.email&&e.touched.email&&e.handleSubmit?i.jsx(d,{children:e.errors.email}):null]}),i.jsx(c,{type:"submit",children:"Send"}),i.jsxs(j,{children:[i.jsx(v,{children:"Do you already have an account?"}),i.jsx(y,{to:"/signin",children:"Sign in"})]})]})},N=()=>i.jsx(p,{image:h,children:i.jsx(S,{})});export{N as default};
