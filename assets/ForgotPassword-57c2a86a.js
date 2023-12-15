import{s as e,N as o,j as i}from"./index-b7fadf01.js";import{A as r,I as a}from"./Illustration-b04ac423.js";import{u as l,I as s,B as m}from"./ButtonStyle.styled-4a0fe83a.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const d=e.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,p=e.h2`
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
`,c=e.p`
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
`,x=e.div`
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
`,h=e.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,g=e(o)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,u=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,f=()=>{const n=l({initialValues:{email:"",password:""},onSubmit:t=>{alert(JSON.stringify(t,null,2))}});return i.jsxs(d,{onSubmit:n.handleSubmit,children:[i.jsx(p,{children:"Forgot your password"}),i.jsx(c,{children:"We will send you an email with recovery instructions"}),i.jsx(u,{children:i.jsx(s,{id:"email",name:"email",type:"email",placeholder:"E-mail",onChange:n.handleChange,value:n.values.email})}),i.jsx(m,{children:"Send"}),i.jsxs(x,{children:[i.jsx(h,{children:"Do you already have an account?"}),i.jsx(g,{to:"/signin",children:"Sign in"})]})]})},b=()=>i.jsx(r,{image:a,children:i.jsx(f,{})});export{b as default};
