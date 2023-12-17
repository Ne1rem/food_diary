import{s as i,N as f,j as e,u as b,r as m,a as C}from"./index-0bebe3c4.js";import{I as c,u as S}from"./InputStyle.styled-3c1b5687.js";import{T as p,a as x,B as d,i as y,A as k}from"./Illustration-a779b8d3.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const B="/food_diary/assets/goals-12d0ed7f.png",L="/food_diary/assets/genderAndAge-42209e67.png",A="/food_diary/assets/bodyParameters-bce33dad.png",N="/food_diary/assets/illustrationActivity-1f59fd5a.png",F=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,E=i.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,I=i.div`
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
`,T=i.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,R=i(f)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,$=({formik:n,increment:a})=>{const t=()=>{a()};return e.jsxs(F,{children:[e.jsx(p,{children:"Sign up"}),e.jsx(x,{children:"You need to register to use the service"}),e.jsxs(E,{children:[e.jsxs("li",{children:[e.jsx(c,{id:"name",name:"name",type:"name",placeholder:"Name",onChange:n.handleChange,value:n.values.name}),n.errors.email&&n.touched.email?e.jsx("div",{children:n.errors.email}):null]}),e.jsxs("li",{children:[e.jsx(c,{id:"email",name:"email",type:"email",placeholder:"E-mail",onChange:n.handleChange,value:n.values.email}),n.errors.email&&n.touched.email?e.jsx("div",{children:n.errors.email}):null]}),e.jsxs("li",{children:[e.jsx(c,{id:"password",name:"password",type:"password",placeholder:"Password",onChange:n.handleChange,value:n.values.password}),n.errors.email&&n.touched.email?e.jsx("div",{children:n.errors.email}):null]})]}),e.jsx(d,{onClick:()=>{t()},type:"button",children:"Next"}),e.jsxs(I,{children:[e.jsx(T,{children:"Do you already have an account?"}),e.jsx(R,{to:"/signin",children:"Sign in"})]})]})},s=i.label`
   display: flex;
  align-items: center;
  cursor: pointer;

  input[type="radio"] {
  display: none;
  }

  input[type="radio"]:checked + :before {
  transform: translate(-50%, -50%) scale(1);
}
`,l=i.div`
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
`,r=i.span`
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
`,G=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,M=i.ul`
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
`,U=i.ul`
display: flex;
flex-direction: column;
gap: 12px;
`,Y=({formik:n,increment:a,decrement:t})=>e.jsxs(G,{children:[e.jsx(p,{children:"Your goal"}),e.jsx(x,{children:"Choose a goal so that we can help you effectively"}),e.jsxs(M,{children:[e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",defaultChecked:!0,value:"Lose Fat"}),e.jsx(l,{}),e.jsx(r,{children:"Lose Fat"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",value:"Maintain"}),e.jsx(l,{}),e.jsx(r,{children:"Maintain"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",value:"Gain Muscle"}),e.jsx(l,{}),e.jsx(r,{children:"Gain Muscle"})]})})]}),e.jsxs(U,{children:[e.jsx("li",{children:e.jsx(d,{onClick:()=>{a()},type:"button",children:"Next"})}),e.jsx("li",{children:e.jsx(d,{onClick:()=>{t()},type:"button",children:"Back"})})]})]}),_=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,D=i.ul`
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
`,P=i.span`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,H=i.div`
  @media screen and (min-width: 834px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
  }
`,J=i.label`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,O=i.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`,V=({formik:n,increment:a,decrement:t})=>e.jsxs(_,{children:[e.jsx(p,{children:"Select gender, Age"}),e.jsxs(x,{children:["Choose a goal so that we can ",e.jsx("br",{}),"help you effectively"]}),e.jsxs(H,{children:[e.jsx(P,{children:"Gender"}),e.jsxs(D,{children:[e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"gender",defaultChecked:!0,value:"Male"}),e.jsx(l,{}),e.jsx(r,{children:"Male"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"gender",value:"Female"}),e.jsx(l,{}),e.jsx(r,{children:"Female"})]})})]}),e.jsx(J,{htmlFor:"age",children:"Your age"}),e.jsx(c,{id:"age",name:"age",type:"age",placeholder:"Enter your age",onChange:n.handleChange,value:n.values.age})]}),e.jsxs(O,{children:[e.jsx("li",{children:e.jsx(d,{onClick:()=>{a()},type:"button",children:"Next"})}),e.jsx("li",{children:e.jsx(d,{onClick:()=>{t()},type:"button",children:"Back"})})]})]}),W=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,q=i.ul`
display: flex;
flex-direction: column;
gap: 24px;

@media screen and (min-width: 834px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
  }
`,v=i.label`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,z=i.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`,K=({formik:n,increment:a,decrement:t})=>e.jsxs(W,{children:[e.jsx(p,{children:"Body parameters"}),e.jsx(x,{children:"Enter your parameters for correct performance tracking"}),e.jsxs(q,{children:[e.jsxs("li",{children:[e.jsx(v,{htmlFor:"height",children:"Height"}),e.jsx(c,{id:"height",name:"height",type:"height",placeholder:"Enter your height",onChange:n.handleChange,value:n.values.height})]}),e.jsxs("li",{children:[e.jsx(v,{htmlFor:"weight",children:"Weight"}),e.jsx(c,{id:"weight",name:"weight",type:"weight",placeholder:"Enter your weight",onChange:n.handleChange,value:n.values.weight})]})]}),e.jsxs(z,{children:[e.jsx("li",{children:e.jsx(d,{onClick:()=>{a()},type:"button",children:"Next"})}),e.jsx("li",{children:e.jsx(d,{onClick:()=>{t()},type:"button",children:"Back"})})]})]}),Q=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,X=i.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`,Z=i.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`,ee=({formik:n,decrement:a})=>e.jsxs(Q,{children:[e.jsx(p,{children:"Your Activity"}),e.jsxs(x,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]}),e.jsxs(X,{children:[e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:!0,value:"1.2"}),e.jsx(l,{}),e.jsx(r,{children:"1.2 - if you do not have physical activity and sedentary work"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",value:"1.375"}),e.jsx(l,{}),e.jsx(r,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",value:"1.55"}),e.jsx(l,{}),e.jsx(r,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",value:"1.725"}),e.jsx(l,{}),e.jsx(r,{children:"1.725 - if you train fully 6-7 times a week"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",value:"1.9"}),e.jsx(l,{}),e.jsx(r,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})})]}),e.jsxs(Z,{children:[e.jsx(d,{type:"submit",children:"Sign Up"}),e.jsx(d,{onClick:()=>{a()},type:"button",children:"Back"})]})]}),ne=()=>{const n=b(),[a,t]=m.useState(1),[w,h]=m.useState(y),o=S({initialValues:{name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activity:""},onSubmit:j=>{alert(JSON.stringify(j,null,2)),n(C(j)),t(1)}}),g=()=>{t(a+1)},u=()=>{t(a-1)};return m.useEffect(()=>{switch(a){case 1:h(y);break;case 2:h(B);break;case 3:h(L);break;case 4:h(A);break;case 5:h(N);break}},[a]),e.jsx(k,{image:w,children:e.jsxs("form",{onSubmit:o.handleSubmit,children:[a===1&&e.jsx($,{increment:g,validationSchema:o.validationSchema,formik:o}),a===2&&e.jsx(Y,{increment:g,decrement:u,formik:o}),a===3&&e.jsx(V,{increment:g,decrement:u,formik:o}),a===4&&e.jsx(K,{increment:g,decrement:u,formik:o}),a===5&&e.jsx(ee,{decrement:u,formik:o})]})})},le=()=>e.jsx(ne,{});export{le as default};
