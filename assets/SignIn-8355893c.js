import{s as n,N as o,j as i}from"./index-8bd583c3.js";import{T as r,a as s,B as l,A as p,I as d}from"./Illustration-4d805bc7.js";import{u as m,I as a}from"./InputStyle.styled-991dfa60.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const c=n.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,g=n.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,x=n(o)`
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
`,h=n.div`
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
`,u=n.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,w=n(o)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,j=()=>{const e=m({initialValues:{email:"",password:""},onSubmit:t=>{alert(JSON.stringify(t,null,2))}});return i.jsxs(c,{onSubmit:e.handleSubmit,children:[i.jsx(r,{children:"Sign in"}),i.jsx(s,{children:"You need to login to use the service"}),i.jsxs(g,{children:[i.jsx("li",{children:i.jsx(a,{id:"email",name:"email",type:"email",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email})}),i.jsx("li",{children:i.jsx(a,{id:"password",name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password})})]}),i.jsx(l,{children:"Sign in"}),i.jsx(x,{to:"/forgot-password",children:"Forgot your password?"}),i.jsxs(h,{children:[i.jsx(u,{children:"Do you already have an account?"}),i.jsx(w,{to:"/signup",children:"Sign up"})]})]})},I=()=>i.jsx(p,{image:d,children:i.jsx(j,{})});export{I as default};
