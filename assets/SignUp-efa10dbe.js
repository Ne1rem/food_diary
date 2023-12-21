import{s as a,N,r as g,j as e,u as B,a as $,b as L,c as A}from"./index-f5d0ff9e.js";import{u as I}from"./index.esm-2ac1714a.js";import{I as j,a as m,b as r,s as F}from"./InputStyle.styled-ad5027fe.js";import{T as v,a as y,I as l,B as u,i as b,A as E}from"./Illustration-a8072152.js";import{i as c}from"./sprite-d5b80169.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const T="/food_diary/assets/goals-12d0ed7f.png",G="/food_diary/assets/genderAndAge-42209e67.png",M="/food_diary/assets/bodyParameters-bce33dad.png",R="/food_diary/assets/illustrationActivity-1f59fd5a.png",U=a.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,P=a.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,V=a.div`
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
`,Y=a.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,_=a(N)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,D=({formik:n,increment:s})=>{const[i,t]=g.useState(""),d=()=>{t("validation"),n.values.name!==""&&n.values.email!==""&&n.values.password!==""&&!n.errors.name&&!n.errors.email&&!n.errors.password&&s()};return e.jsxs(U,{children:[e.jsx(v,{children:"Sign up"}),e.jsx(y,{children:"You need to register to use the service"}),e.jsxs(P,{children:[e.jsx("li",{children:e.jsxs(j,{children:[e.jsx(m,{className:i==="validation"?n.errors.name?"error":"correct":"",id:"name",name:"name",placeholder:"Name",onChange:n.handleChange,value:n.values.name}),i==="validation"?n.errors.name?e.jsx(r,{children:e.jsx("use",{href:`${c}#error`})}):e.jsx(r,{children:e.jsx("use",{href:`${c}#correct`})}):null,i==="validation"?n.errors.name?e.jsx(l,{children:n.errors.name}):e.jsx(l,{style:{color:"green"},children:"Name is valid"}):null]})}),e.jsx("li",{children:e.jsxs(j,{children:[e.jsx(m,{className:i==="validation"?n.errors.email?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:n.handleChange,value:n.values.email}),i==="validation"?n.errors.email?e.jsx(r,{children:e.jsx("use",{href:`${c}#error`})}):e.jsx(r,{children:e.jsx("use",{href:`${c}#correct`})}):null,i==="validation"?n.errors.email?e.jsx(l,{children:n.errors.email}):e.jsx(l,{style:{color:"green"},children:"E-mail is valid"}):null]})}),e.jsx("li",{children:e.jsxs(j,{children:[e.jsx(m,{className:i==="validation"?n.errors.password?"error":"correct":"",id:"password",name:"password",placeholder:"Password",onChange:n.handleChange,value:n.values.password}),i==="validation"?n.errors.password?e.jsx(r,{children:e.jsx("use",{href:`${c}#error`})}):e.jsx(r,{children:e.jsx("use",{href:`${c}#correct`})}):null,i==="validation"?n.errors.password?e.jsx(l,{children:n.errors.password}):e.jsx(l,{style:{color:"green"},children:"Password is valid"}):null]})})]}),e.jsx(u,{onClick:()=>{d()},className:"btn-active",type:"submit",children:"Next"}),e.jsxs(V,{children:[e.jsx(Y,{children:"Do you already have an account?"}),e.jsx(_,{to:"/signin",children:"Sign in"})]})]})},h=a.label`
   display: flex;
  align-items: center;
  cursor: pointer;

  input[type="radio"] {
  display: none;
  }

  input[type="radio"]:checked + :before {
  transform: translate(-50%, -50%) scale(1);
}
`,x=a.div`
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
`,p=a.span`
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
`,H=a.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,W=a.ul`
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
`,q=a.ul`
display: flex;
flex-direction: column;
gap: 12px;
`,z=({formik:n,increment:s,decrement:i})=>e.jsxs(H,{children:[e.jsx(v,{children:"Your goal"}),e.jsx(y,{children:"Choose a goal so that we can help you effectively"}),e.jsxs(W,{children:[e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",defaultChecked:n.values.goal==="Lose Fat",value:"Lose Fat"}),e.jsx(x,{}),e.jsx(p,{children:"Lose Fat"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",defaultChecked:n.values.goal==="Maintain",value:"Maintain"}),e.jsx(x,{}),e.jsx(p,{children:"Maintain"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",defaultChecked:n.values.goal==="Gain Muscle",value:"Gain Muscle"}),e.jsx(x,{}),e.jsx(p,{children:"Gain Muscle"})]})})]}),e.jsxs(q,{children:[e.jsx("li",{children:e.jsx(u,{onClick:()=>{s()},className:"btn-active",type:"button",children:"Next"})}),e.jsx("li",{children:e.jsx(u,{onClick:()=>{i()},type:"button",children:"Back"})})]})]}),J=a.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,K=a.ul`
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
`,O=a.span`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,Q=a.div`
  @media screen and (min-width: 834px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
  }
`,X=a.label`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,Z=a.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`,k=({formik:n,increment:s,decrement:i})=>{const[t,d]=g.useState(""),o=()=>{d("validation"),n.values.age!==""&&!n.errors.age&&s()};return e.jsxs(J,{children:[e.jsx(v,{children:"Select gender, Age"}),e.jsxs(y,{children:["Choose a goal so that we can ",e.jsx("br",{}),"help you effectively"]}),e.jsxs(Q,{children:[e.jsx(O,{children:"Gender"}),e.jsxs(K,{children:[e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"gender",value:"male",defaultChecked:n.values.gender==="male"}),e.jsx(x,{}),e.jsx(p,{children:"Male"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"gender",value:"female",defaultChecked:n.values.gender==="female"}),e.jsx(x,{}),e.jsx(p,{children:"Female"})]})})]}),e.jsx(X,{htmlFor:"age",children:"Your age"}),e.jsxs(j,{children:[e.jsx(m,{className:t==="validation"?n.errors.age?"error":"correct":"",id:"age",name:"age",placeholder:"Enter your age",onChange:n.handleChange,value:n.values.age}),t==="validation"?n.errors.age?e.jsx(r,{children:e.jsx("use",{href:`${c}#error`})}):e.jsx(r,{children:e.jsx("use",{href:`${c}#correct`})}):null,t==="validation"?n.errors.age?e.jsx(l,{children:n.errors.age}):e.jsx(l,{style:{color:"green"},children:"Age is valid"}):null]})]}),e.jsxs(Z,{children:[e.jsx("li",{children:e.jsx(u,{onClick:()=>{o()},className:"btn-active",type:"submit",children:"Next"})}),e.jsx("li",{children:e.jsx(u,{onClick:()=>{i()},type:"button",children:"Back"})})]})]})},ee=a.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,ne=a.ul`
display: flex;
flex-direction: column;
gap: 24px;

@media screen and (min-width: 834px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
  }
`,f=a.label`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,ae=a.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`,ie=({formik:n,increment:s,decrement:i})=>{const[t,d]=g.useState(""),o=()=>{d("validation"),n.values.height!==""&&!n.errors.height&&n.values.weight!==""&&!n.errors.weight&&s()};return e.jsxs(ee,{children:[e.jsx(v,{children:"Body parameters"}),e.jsx(y,{children:"Enter your parameters for correct performance tracking"}),e.jsxs(ne,{children:[e.jsxs("li",{children:[e.jsx(f,{htmlFor:"height",children:"Height"}),e.jsxs(j,{children:[e.jsx(m,{className:t==="validation"?n.errors.height?"error":"correct":"",id:"height",name:"height",placeholder:"Enter your height",onChange:n.handleChange,value:n.values.height}),t==="validation"?n.errors.height?e.jsx(r,{children:e.jsx("use",{href:`${c}#error`})}):e.jsx(r,{children:e.jsx("use",{href:`${c}#correct`})}):null,t==="validation"?n.errors.height?e.jsx(l,{children:n.errors.height}):e.jsx(l,{style:{color:"green"},children:"Height is valid"}):null]})]}),e.jsxs("li",{children:[e.jsx(f,{htmlFor:"weight",children:"Weight"}),e.jsxs(j,{children:[e.jsx(m,{className:t==="validation"?n.errors.weight?"error":"correct":"",id:"weight",name:"weight",placeholder:"Enter your weight",onChange:n.handleChange,value:n.values.weight}),t==="validation"?n.errors.weight?e.jsx(r,{children:e.jsx("use",{href:`${c}#error`})}):e.jsx(r,{children:e.jsx("use",{href:`${c}#correct`})}):null,t==="validation"?n.errors.weight?e.jsx(l,{children:n.errors.weight}):e.jsx(l,{style:{color:"green"},children:"Weight is valid"}):null]})]})]}),e.jsxs(ae,{children:[e.jsx("li",{children:e.jsx(u,{onClick:()=>{o()},className:"btn-active",type:"submit",children:"Next"})}),e.jsx("li",{children:e.jsx(u,{onClick:()=>{i()},type:"button",children:"Back"})})]})]})},se=a.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,te=a.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`,re=a.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`,le=({formik:n,decrement:s})=>{const i=B($),t=()=>{console.log(i)};return e.jsxs(se,{children:[e.jsx(v,{children:"Your Activity"}),e.jsxs(y,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]}),e.jsxs(te,{children:[e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.2",value:"1.2"}),e.jsx(x,{}),e.jsx(p,{children:"1.2 - if you do not have physical activity and sedentary work"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.375",value:"1.375"}),e.jsx(x,{}),e.jsx(p,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.55",value:"1.55"}),e.jsx(x,{}),e.jsx(p,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.725",value:"1.725"}),e.jsx(x,{}),e.jsx(p,{children:"1.725 - if you train fully 6-7 times a week"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.9",value:"1.9"}),e.jsx(x,{}),e.jsx(p,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})})]}),e.jsxs(re,{children:[e.jsx(u,{className:"btn-active",onClick:()=>{t()},type:"submit",children:"Sign Up"}),e.jsx(u,{onClick:()=>{s()},type:"button",children:"Back"})]})]})},ce=()=>{const n=L(),[s,i]=g.useState(1),[t,d]=g.useState(b),o=I({initialValues:{name:"",email:"",password:"",goal:"Lose Fat",gender:"male",age:"",height:"",weight:"",activity:"1.2"},onSubmit:S=>{n(A(S))},validationSchema:F}),w=()=>{i(s+1)},C=()=>{i(s-1)};return g.useEffect(()=>{switch(s){case 1:d(b);break;case 2:d(T);break;case 3:d(G);break;case 4:d(M);break;case 5:d(R);break}},[s]),e.jsx(E,{image:t,children:e.jsxs("form",{onSubmit:o.handleSubmit,children:[s===1&&e.jsx(D,{increment:w,validationSchema:o.validationSchema,formik:o}),s===2&&e.jsx(z,{increment:w,decrement:C,formik:o}),s===3&&e.jsx(k,{increment:w,decrement:C,formik:o}),s===4&&e.jsx(ie,{increment:w,decrement:C,formik:o}),s===5&&e.jsx(le,{decrement:C,formik:o})]})})},ge=()=>e.jsx(ce,{});export{ge as default};
