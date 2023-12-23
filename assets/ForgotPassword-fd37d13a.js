import{s as a,N as g,j as i,b as f,e as v,r,f as w}from"./index-80391330.js";import{T as j,a as y,I as o,B as b,A as k,i as S}from"./Illustration-c46fd173.js";import{u as D}from"./index.esm-d617a63b.js";import{I,a as N,b as l}from"./InputStyle.styled-e1fbb822.js";import{f as B}from"./validationSchema-9d1f9a5f.js";import{i as c}from"./sprite-cf14f500.js";import"./hoist-non-react-statics.cjs-15f4f394.js";const F=a.form`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,T=a.div`
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
`,C=a.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,E=a(g)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,L=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,s=a.span`
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: var(--secondary-color-grey-1);
    position: relative;
    -webkit-animation: 1.2s scaleDown ease-in-out infinite ;
    animation: 1.2s scaleDown ease-in-out infinite ;

&:nth-child(2){
    margin: 0 15px;
    -webkit-animation: 1.2s scaleDown ease-in-out infinite .15555s;
    animation: 1.2s scaleDown ease-in-out infinite .15555s;
}

&:nth-child(3){
    -webkit-animation: 1.2s scaleDown ease-in-out infinite .300000s;
    animation: 1.2s scaleDown ease-in-out infinite .300000s;
}

@-webkit-keyframes scaleDown{
    0%, 80%, 100%{
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    40%{
      -webkit-transform: scale(1);
              transform: scale(1);
    }
}

@keyframes scaleDown{
    0%, 80%, 100%{
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    40%{
      -webkit-transform: scale(1);
              transform: scale(1);
    }
}
`,P=()=>i.jsxs(i.Fragment,{children:[i.jsx(s,{}),i.jsx(s,{}),i.jsx(s,{})]}),A=()=>{const m=f(),d=v(),[n,u]=r.useState(""),[p,t]=r.useState(""),e=D({initialValues:{email:""},validationSchema:B}),x=async()=>{if(u("validation"),e.values.email!==""&&!e.errors.email)try{t("loading"),await m(w(e.values)).unwrap(),d("/signin")}catch(h){console.log(h)}finally{t("")}};return i.jsxs(F,{onSubmit:e.handleSubmit,children:[i.jsx(j,{children:"Forgot your password"}),i.jsx(y,{children:"We will send you an email with recovery instructions"}),i.jsx(L,{children:i.jsxs(I,{children:[i.jsx(N,{className:n==="validation"?e.errors.email||e.values.email===""?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email}),n==="validation"?e.errors.email||e.values.email===""?i.jsx(l,{children:i.jsx("use",{href:`${c}#error`})}):i.jsx(l,{children:i.jsx("use",{href:`${c}#correct`})}):null,n==="validation"?e.errors.email||e.values.email===""?i.jsx(o,{children:e.errors.email||"Email required"}):i.jsx(o,{style:{color:"#3CBC81"},children:"E-mail is valid"}):null]})}),i.jsx(b,{className:"btn-active",onClick:()=>{x()},type:"button",children:p==="loading"?i.jsx(P,{}):"Send"}),i.jsxs(T,{children:[i.jsx(C,{children:"Do you already have an account?"}),i.jsx(E,{to:"/signin",children:"Sign in"})]})]})},H=()=>i.jsx(k,{image:S,children:i.jsx(A,{})});export{H as default};
