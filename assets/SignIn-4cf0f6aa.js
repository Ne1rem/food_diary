import{s as a,N as r,u as l,j as i,b as d}from"./index-d38869a8.js";import{T as p,a as m,I as s,B as c,A as h,i as g}from"./Illustration-888f3919.js";import{u as x}from"./index.esm-e43030c9.js";import{I as n,a as u}from"./InputStyle.styled-0535a36d.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const w=a.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,j=a.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,v=a(r)`
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
`,f=a.div`
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
`,y=a.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,S=a(r)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,I=()=>{const o=l(),e=x({initialValues:{email:"",password:""},validationSchema:u,isValidating:!1,onSubmit:t=>{o(d(t))}});return i.jsxs(w,{onSubmit:e.handleSubmit,children:[i.jsx(p,{children:"Sign in"}),i.jsx(m,{children:"You need to login to use the service"}),i.jsxs(j,{children:[i.jsxs("li",{children:[i.jsx(n,{id:"email",name:"email",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email}),e.errors.email&&e.touched.email&&e.handleSubmit?i.jsx(s,{children:e.errors.email}):null,!e.errors.email&&e.touched.email?i.jsx(s,{style:{color:"green"},children:"E-mail is valid"}):null]}),i.jsxs("li",{children:[i.jsx(n,{id:"password",name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password}),e.errors.password&&e.touched.password&&e.handleSubmit?i.jsx(s,{children:e.errors.password}):null,!e.errors.password&&e.touched.password?i.jsx(s,{style:{color:"green"},children:"Password is valid"}):null]})]}),i.jsx(c,{className:"btn-active",type:"submit",children:"Sign in"}),i.jsx(v,{to:"/forgot-password",children:"Forgot your password?"}),i.jsxs(f,{children:[i.jsx(y,{children:"If you don't have an account yet"}),i.jsx(S,{to:"/signup",children:"Sign up"})]})]})},E=()=>i.jsx(h,{image:g,children:i.jsx(I,{})});export{E as default};
