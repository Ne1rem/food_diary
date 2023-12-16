import{s as e,N as r,j as i}from"./index-4edd2a67.js";import{I as a,u as o}from"./InputStyle.styled-4d60245a.js";import{T as l,a as d,B as p,A as s,I as c}from"./Illustration-1ed36119.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const x=e.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,m=e.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,g=e.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 48px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    margin-left: 32px;
    margin-top: 206px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-top: 168px;
  }
`,h=e.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,u=e(r)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,f=({formik:n})=>i.jsxs(x,{children:[i.jsx(l,{children:"Sign up"}),i.jsx(d,{children:"You need to register to use the service"}),i.jsxs(m,{children:[i.jsx("li",{children:i.jsx(a,{id:"name",name:"name",type:"name",placeholder:"Name",onChange:n.handleChange,value:n.values.name})}),i.jsx("li",{children:i.jsx(a,{id:"email",name:"email",type:"email",placeholder:"E-mail",onChange:n.handleChange,value:n.values.email})}),i.jsx("li",{children:i.jsx(a,{id:"password",name:"password",type:"password",placeholder:"Password",onChange:n.handleChange,value:n.values.password})})]}),i.jsx(p,{type:"button",children:"Next"}),i.jsxs(g,{children:[i.jsx(h,{children:"Do you already have an account?"}),i.jsx(u,{to:"/signin",children:"Sign in"})]})]});e.label`
   display: flex;
  align-items: center;
  cursor: pointer;

  input[type="radio"] {
  display: none;
  }

  input[type="radio"]:checked + :before {
  transform: translate(-50%, -50%) scale(1);
}
`;e.div`
width: 12px;
height: 12px;
border-radius: 12px;
border: 1px solid var(--color-primary-grey);
background: var(--color-primary-black-2);
  position: relative;
  margin-right: 8px;

  &:before {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-primary-green-lite);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.2s ease-in-out;
  }

  input[type="radio"]:checked + :before {
  transform: translate(-50%, -50%) scale(1);
}
`;e.span`
color: var(--color-primary-white);

max-width: 278px;
font-weight: 400;
line-height: 1.4;


@media screen and (min-width: 834px) {
  max-width: 440px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    max-width: 308px;
  }
`;e.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;e.ul`
display: flex;
flex-direction: column;
gap: 24px;
margin-bottom: 24px;

@media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: center;
    gap: 52px;
    }

    @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    }
`;e.ul`
display: flex;
flex-direction: column;
gap: 12px;
`;e.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;e.ul`
  display: flex;
  gap: 86px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    gap: 52px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`;e.span`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`;e.div`
  @media screen and (min-width: 834px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
  }
`;e.label`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`;e.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`;e.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;e.ul`
display: flex;
flex-direction: column;
gap: 24px;

@media screen and (min-width: 834px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
  }
`;e.label`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`;e.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`;e.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;e.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`;e.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;const y=()=>{const n=o({initialValues:{name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activity:""},onSubmit:t=>{alert(JSON.stringify(t,null,2))}});return i.jsx(s,{image:c,children:i.jsx("form",{onSubmit:n.handleSubmit,children:i.jsx(f,{formik:n})})})},S=()=>i.jsx(y,{});export{S as default};
