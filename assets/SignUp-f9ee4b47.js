import{s as i,N as C,r as p,j as e,u as f,a as S}from"./index-b56849d6.js";import{u as N}from"./index.esm-4a6cfddb.js";import{I as g,s as B}from"./InputStyle.styled-2c0b09c3.js";import{T as u,a as m,I as s,B as h,i as v,A as L}from"./Illustration-1c70c320.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const A="/food_diary/assets/goals-12d0ed7f.png",E="/food_diary/assets/genderAndAge-42209e67.png",F="/food_diary/assets/bodyParameters-bce33dad.png",I="/food_diary/assets/illustrationActivity-1f59fd5a.png",T=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,R=i.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,$=i.div`
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
`,G=i.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,U=i(C)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,M=({formik:n,increment:a})=>{const[t,x]=p.useState(!1),r=()=>{n.values.name!==""&&n.values.email!==""&&n.values.password!==""&&!n.errors.name&&!n.errors.email&&!n.errors.password?a():x(!0)};return e.jsxs(T,{children:[e.jsx(u,{children:"Sign up"}),e.jsx(m,{children:"You need to register to use the service"}),e.jsxs(R,{children:[e.jsxs("li",{children:[e.jsx(g,{id:"name",name:"name",type:"name",placeholder:"Name",onChange:n.handleChange,value:n.values.name}),t?e.jsx(s,{children:n.errors.name}):null,!n.errors.name&&n.touched.name?e.jsx(s,{style:{color:"green"},children:"Name is valid"}):null]}),e.jsxs("li",{children:[e.jsx(g,{id:"email",name:"email",placeholder:"E-mail",onChange:n.handleChange,value:n.values.email}),t?e.jsx(s,{children:n.errors.email}):null,!n.errors.email&&n.touched.email?e.jsx(s,{style:{color:"green"},children:"Email is valid"}):null]}),e.jsxs("li",{children:[e.jsx(g,{id:"password",name:"password",type:"password",placeholder:"Password",onChange:n.handleChange,value:n.values.password}),t?e.jsx(s,{children:n.errors.password}):null,!n.errors.password&&n.touched.password?e.jsx(s,{style:{color:"green"},children:"Password is secure"}):null]})]}),e.jsx(h,{onClick:()=>{r()},className:"btn-active",type:"submit",children:"Next"}),e.jsxs($,{children:[e.jsx(G,{children:"Do you already have an account?"}),e.jsx(U,{to:"/signin",children:"Sign in"})]})]})},d=i.label`
   display: flex;
  align-items: center;
  cursor: pointer;

  input[type="radio"] {
  display: none;
  }

  input[type="radio"]:checked + :before {
  transform: translate(-50%, -50%) scale(1);
}
`,o=i.div`
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
`,c=i.span`
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
`,P=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,Y=i.ul`
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
`,_=i.ul`
display: flex;
flex-direction: column;
gap: 12px;
`,D=({formik:n,increment:a,decrement:t})=>e.jsxs(P,{children:[e.jsx(u,{children:"Your goal"}),e.jsx(m,{children:"Choose a goal so that we can help you effectively"}),e.jsxs(Y,{children:[e.jsx("li",{children:e.jsxs(d,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",defaultChecked:!0,value:"Lose Fat"}),e.jsx(o,{}),e.jsx(c,{children:"Lose Fat"})]})}),e.jsx("li",{children:e.jsxs(d,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",value:"Maintain"}),e.jsx(o,{}),e.jsx(c,{children:"Maintain"})]})}),e.jsx("li",{children:e.jsxs(d,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",value:"Gain Muscle"}),e.jsx(o,{}),e.jsx(c,{children:"Gain Muscle"})]})})]}),e.jsxs(_,{children:[e.jsx("li",{children:e.jsx(h,{onClick:()=>{a()},className:"btn-active",type:"button",children:"Next"})}),e.jsx("li",{children:e.jsx(h,{onClick:()=>{t()},type:"button",children:"Back"})})]})]}),H=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,W=i.ul`
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
`,V=i.span`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,q=i.div`
  @media screen and (min-width: 834px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
  }
`,z=i.label`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,J=i.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`,K=({formik:n,increment:a,decrement:t})=>{const[x,r]=p.useState(!1),l=()=>{n.values.age!==""&&!n.errors.age?a():r(!0)};return e.jsxs(H,{children:[e.jsx(u,{children:"Select gender, Age"}),e.jsxs(m,{children:["Choose a goal so that we can ",e.jsx("br",{}),"help you effectively"]}),e.jsxs(q,{children:[e.jsx(V,{children:"Gender"}),e.jsxs(W,{children:[e.jsx("li",{children:e.jsxs(d,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"gender",value:"male",defaultChecked:!0}),e.jsx(o,{}),e.jsx(c,{children:"Male"})]})}),e.jsx("li",{children:e.jsxs(d,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"gender",value:"female"}),e.jsx(o,{}),e.jsx(c,{children:"Female"})]})})]}),e.jsx(z,{htmlFor:"age",children:"Your age"}),e.jsx(g,{id:"age",name:"age",placeholder:"Enter your age",onChange:n.handleChange,value:n.values.age}),x?e.jsx(s,{children:n.errors.age}):null,!n.errors.age&&n.touched.age?e.jsx(s,{style:{color:"green"},children:"Age is valid"}):null]}),e.jsxs(J,{children:[e.jsx("li",{children:e.jsx(h,{onClick:()=>{l()},className:"btn-active",type:"submit",children:"Next"})}),e.jsx("li",{children:e.jsx(h,{onClick:()=>{t()},type:"button",children:"Back"})})]})]})},O=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,Q=i.ul`
display: flex;
flex-direction: column;
gap: 24px;

@media screen and (min-width: 834px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
  }
`,w=i.label`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,X=i.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`,Z=({formik:n,increment:a,decrement:t})=>{const[x,r]=p.useState(!1),l=()=>{n.values.height!==""&&!n.errors.height&&n.values.weight!==""&&!n.errors.weight?a():r(!0)};return e.jsxs(O,{children:[e.jsx(u,{children:"Body parameters"}),e.jsx(m,{children:"Enter your parameters for correct performance tracking"}),e.jsxs(Q,{children:[e.jsxs("li",{children:[e.jsx(w,{htmlFor:"height",children:"Height"}),e.jsx(g,{id:"height",name:"height",type:"height",placeholder:"Enter your height",onChange:n.handleChange,value:n.values.height}),x?e.jsx(s,{children:n.errors.height}):null,!n.errors.height&&n.touched.height?e.jsx(s,{style:{color:"green"},children:"Height is valid"}):null]}),e.jsxs("li",{children:[e.jsx(w,{htmlFor:"weight",children:"Weight"}),e.jsx(g,{id:"weight",name:"weight",type:"weight",placeholder:"Enter your weight",onChange:n.handleChange,value:n.values.weight}),x?e.jsx(s,{children:n.errors.weight}):null,!n.errors.weight&&n.touched.weight?e.jsx(s,{style:{color:"green"},children:"Weight is valid"}):null]})]}),e.jsxs(X,{children:[e.jsx("li",{children:e.jsx(h,{onClick:()=>{l()},className:"btn-active",type:"submit",children:"Next"})}),e.jsx("li",{children:e.jsx(h,{onClick:()=>{t()},type:"button",children:"Back"})})]})]})},k=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,ee=i.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`,ne=i.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`,ie=({formik:n,decrement:a})=>e.jsxs(k,{children:[e.jsx(u,{children:"Your Activity"}),e.jsxs(m,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]}),e.jsxs(ee,{children:[e.jsx("li",{children:e.jsxs(d,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:!0,value:"1.2"}),e.jsx(o,{}),e.jsx(c,{children:"1.2 - if you do not have physical activity and sedentary work"})]})}),e.jsx("li",{children:e.jsxs(d,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",value:"1.375"}),e.jsx(o,{}),e.jsx(c,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]})}),e.jsx("li",{children:e.jsxs(d,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",value:"1.55"}),e.jsx(o,{}),e.jsx(c,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]})}),e.jsx("li",{children:e.jsxs(d,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",value:"1.725"}),e.jsx(o,{}),e.jsx(c,{children:"1.725 - if you train fully 6-7 times a week"})]})}),e.jsx("li",{children:e.jsxs(d,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",value:"1.9"}),e.jsx(o,{}),e.jsx(c,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})})]}),e.jsxs(ne,{children:[e.jsx(h,{className:"btn-active",type:"submit",children:"Sign Up"}),e.jsx(h,{onClick:()=>{a()},type:"button",children:"Back"})]})]}),ae=()=>{const n=f(),[a,t]=p.useState(1),[x,r]=p.useState(v),l=N({initialValues:{name:"",email:"",password:"",goal:"Lose Fat",gender:"male",age:"",height:"",weight:"",activity:"1.2"},onSubmit:b=>{n(S(b)),t(1)},validationSchema:B}),j=()=>{t(a+1)},y=()=>{t(a-1)};return p.useEffect(()=>{switch(a){case 1:r(v);break;case 2:r(A);break;case 3:r(E);break;case 4:r(F);break;case 5:r(I);break}},[a]),e.jsx(L,{image:x,children:e.jsxs("form",{onSubmit:l.handleSubmit,children:[a===1&&e.jsx(M,{increment:j,validationSchema:l.validationSchema,formik:l}),a===2&&e.jsx(D,{increment:j,decrement:y,formik:l}),a===3&&e.jsx(K,{increment:j,decrement:y,formik:l}),a===4&&e.jsx(Z,{increment:j,decrement:y,formik:l}),a===5&&e.jsx(ie,{decrement:y,formik:l})]})})},oe=()=>e.jsx(ae,{});export{oe as default};
