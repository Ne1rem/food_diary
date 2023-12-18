import{s as e,N as r,u as l,j as i,b as d}from"./index-6690def9.js";import{T as p,a as m,I as a,B as c,A as h,i as x}from"./Illustration-4613a591.js";import{u as g,I as s,a as u}from"./InputStyle.styled-0f94d739.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const w=e.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,j=e.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,S=e(r)`
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
`,v=e.div`
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
`,f=e.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,y=e(r)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,I=()=>{const o=l(),n=g({initialValues:{email:"",password:""},validationSchema:u,onSubmit:t=>{o(d(t))}});return i.jsxs(w,{onSubmit:n.handleSubmit,children:[i.jsx(p,{children:"Sign in"}),i.jsx(m,{children:"You need to login to use the service"}),i.jsxs(j,{children:[i.jsxs("li",{children:[i.jsx(s,{id:"email",name:"email",placeholder:"E-mail",onChange:n.handleChange,value:n.values.email}),n.errors.email&&n.touched.email&&n.handleSubmit?i.jsx(a,{children:n.errors.email}):null]}),i.jsxs("li",{children:[i.jsx(s,{id:"password",name:"password",type:"password",placeholder:"Password",onChange:n.handleChange,value:n.values.password}),n.errors.password&&n.touched.password&&n.handleSubmit?i.jsx(a,{children:n.errors.password}):null]})]}),i.jsx(c,{type:"submit",children:"Sign in"}),i.jsx(S,{to:"/forgot-password",children:"Forgot your password?"}),i.jsxs(v,{children:[i.jsx(f,{children:"If you don't have an account yet"}),i.jsx(y,{to:"/signup",children:"Sign up"})]})]})},C=()=>i.jsx(h,{image:x,children:i.jsx(I,{})});export{C as default};
