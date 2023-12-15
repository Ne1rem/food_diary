import{s as i,N as r,j as e}from"./index-b7fadf01.js";import{I as t,B as o,u as s}from"./ButtonStyle.styled-4a0fe83a.js";import{A as l,I as d}from"./Illustration-b04ac423.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const p=i.div`
  @media screen and (min-width: 1440px) { 
padding-top: 80px;
}
`,m=i.h2`
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
`,h=i.p`
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
`,c=i.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
margin-bottom: 40px;

@media screen and (min-width: 1440px) { 
align-items: start;
}
`,x=i.div`
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
`,g=i.p`
color: var(--color-primary-grey);
font-weight: 400;
line-height: 1.4; 
`,u=i(r)`
color: var(--color-primary-white);
line-height: 1.4;
`,w=({formik:n})=>e.jsxs(p,{children:[e.jsx(m,{children:"Sign up"}),e.jsx(h,{children:"You need to register to use the service"}),e.jsxs(c,{children:[e.jsx("li",{children:e.jsx(t,{id:"name",name:"name",type:"name",placeholder:"Name",onChange:n.handleChange,value:n.values.name})}),e.jsx("li",{children:e.jsx(t,{id:"email",name:"email",type:"email",placeholder:"E-mail",onChange:n.handleChange,value:n.values.email})}),e.jsx("li",{children:e.jsx(t,{id:"password",name:"password",type:"password",placeholder:"Password",onChange:n.handleChange,value:n.values.password})})]}),e.jsx(o,{type:"button",children:"Next"}),e.jsxs(x,{children:[e.jsx(g,{children:"Do you already have an account?"}),e.jsx(u,{to:"/signin",children:"Sign in"})]})]}),j=()=>{const n=s({initialValues:{name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activity:""},onSubmit:a=>{alert(JSON.stringify(a,null,2))}});return e.jsx(l,{image:d,children:e.jsx("form",{onSubmit:n.handleSubmit,children:e.jsx(w,{formik:n})})})},b=()=>e.jsx(j,{});export{b as default};
