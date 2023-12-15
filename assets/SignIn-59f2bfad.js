import{s as n,N as a,j as i}from"./index-c1af2a39.js";import{A as r,I as s}from"./Illustration-1edaa12b.js";import{u as l,I as t,B as p}from"./ButtonStyle.styled-1b9de4ca.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const d=n.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,m=n.h2`
  margin-bottom: 16px;

  color: var(--color-primary-white);
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,c=n.p`
  margin-bottom: 24px;

  color: var(--color-primary-grey, #b6b6b6);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    display: block;
    width: 444px;
    text-align: center;
    font-size: 22px;
    line-height: 1.4;

    @media screen and (min-width: 1440px) {
      text-align: left;
    }
  }
`,h=n.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,x=n(a)`
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
`,g=n.div`
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
`,w=n(a)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,f=()=>{const e=l({initialValues:{email:"",password:""},onSubmit:o=>{alert(JSON.stringify(o,null,2))}});return i.jsxs(d,{onSubmit:e.handleSubmit,children:[i.jsx(m,{children:"Sign in"}),i.jsx(c,{children:"You need to login to use the service"}),i.jsxs(h,{children:[i.jsx("li",{children:i.jsx(t,{id:"email",name:"email",type:"email",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email})}),i.jsx("li",{children:i.jsx(t,{id:"password",name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password})})]}),i.jsx(p,{children:"Sign in"}),i.jsx(x,{to:"/forgot-password",children:"Forgot your password?"}),i.jsxs(g,{children:[i.jsx(u,{children:"Do you already have an account?"}),i.jsx(w,{to:"/signup",children:"Sign up"})]})]})},b=()=>i.jsx(r,{image:s,children:i.jsx(f,{})});export{b as default};
