import{s as a,N as B,r as j,j as e,u as N,a as $}from"./index-adeb5ac8.js";import{u as L}from"./index.esm-4b57a045.js";import{s as A}from"./validationSchema-4d936e49.js";import{T as C,a as w,I as o,B as u,i as b,A as F}from"./Illustration-e4003c0d.js";import{i as r}from"./sprite-cb64a185.js";import{I as v,a as y,b as l,L as I}from"./LoaderBtn-3eb50b0d.js";import"./hoist-non-react-statics.cjs-ff3f184d.js";const E="/food_diary/assets/goals-12d0ed7f.png",T="/food_diary/assets/genderAndAge-42209e67.png",G="/food_diary/assets/bodyParameters-bce33dad.png",M="/food_diary/assets/illustrationActivity-1f59fd5a.png",P=a.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,R=a.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,U=a.div`
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
`,H=a.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,V=a(B)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,Y=({formik:n,increment:d})=>{const[i,s]=j.useState(""),[t,c]=j.useState(!1),g=()=>{s("validation"),n.values.name!==""&&n.values.email!==""&&n.values.password!==""&&!n.errors.name&&!n.errors.email&&!n.errors.password&&d()},m=()=>{c(S=>!S)};return e.jsxs(P,{children:[e.jsx(C,{children:"Sign up"}),e.jsx(w,{children:"You need to register to use the service"}),e.jsxs(R,{children:[e.jsx("li",{children:e.jsxs(v,{children:[e.jsx(y,{className:i==="validation"?n.errors.name?"error":"correct":"",id:"name",name:"name",placeholder:"Name",onChange:n.handleChange,value:n.values.name}),i==="validation"?n.errors.name?e.jsx(l,{children:e.jsx("use",{href:`${r}#error`})}):e.jsx(l,{children:e.jsx("use",{href:`${r}#correct`})}):null,i==="validation"?n.errors.name?e.jsx(o,{children:n.errors.name}):e.jsx(o,{style:{color:"#3CBC81"},children:"Name is valid"}):null]})}),e.jsx("li",{children:e.jsxs(v,{children:[e.jsx(y,{className:i==="validation"?n.errors.email?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:n.handleChange,value:n.values.email}),i==="validation"?n.errors.email?e.jsx(l,{children:e.jsx("use",{href:`${r}#error`})}):e.jsx(l,{children:e.jsx("use",{href:`${r}#correct`})}):null,i==="validation"?n.errors.email?e.jsx(o,{children:n.errors.email}):e.jsx(o,{style:{color:"#3CBC81"},children:"E-mail is valid"}):null]})}),e.jsx("li",{children:e.jsxs(v,{children:[e.jsx(y,{className:i==="validation"?n.errors.password?"error":"correct":"",id:"password",name:"password",placeholder:"Password",type:t?"text":"password",onChange:n.handleChange,value:n.values.password}),t?i!=="validation"&&e.jsx(l,{onClick:()=>{m()},children:e.jsx("use",{href:`${r}#eye`})}):e.jsx(l,{onClick:()=>{m()},children:e.jsx("use",{href:`${r}#eye-off`})}),t&&i==="validation"?n.errors.password?e.jsx(l,{onClick:()=>{m()},children:e.jsx("use",{href:`${r}#error`})}):e.jsx(l,{onClick:()=>{m()},children:e.jsx("use",{href:`${r}#correct`})}):null,t&&i==="validation"?n.errors.password?e.jsx(o,{children:n.errors.password}):e.jsx(o,{style:{color:"#3CBC81"},children:"Password is valid"}):null]})})]}),e.jsx(u,{onClick:()=>{g()},className:"btn-active",type:"submit",children:"Next"}),e.jsxs(U,{children:[e.jsx(H,{children:"Do you already have an account?"}),e.jsx(V,{to:"/signin",children:"Sign in"})]})]})},_=a.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,D=a.ul`
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
`,W=a.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,h=a.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + :before {
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
    content: '';
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

  input[type='radio']:checked + :before {
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
`,q=({formik:n,increment:d,decrement:i})=>e.jsxs(_,{children:[e.jsx(C,{children:"Your goal"}),e.jsx(w,{children:"Choose a goal so that we can help you effectively"}),e.jsxs(D,{children:[e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",defaultChecked:n.values.goal==="Lose Fat",value:"Lose Fat"}),e.jsx(x,{}),e.jsx(p,{children:"Lose Fat"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",defaultChecked:n.values.goal==="Maintain",value:"Maintain"}),e.jsx(x,{}),e.jsx(p,{children:"Maintain"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",defaultChecked:n.values.goal==="Gain Muscle",value:"Gain Muscle"}),e.jsx(x,{}),e.jsx(p,{children:"Gain Muscle"})]})})]}),e.jsxs(W,{children:[e.jsx("li",{children:e.jsx(u,{onClick:()=>{d()},className:"btn-active",type:"button",children:"Next"})}),e.jsx("li",{children:e.jsx(u,{onClick:()=>{i()},type:"button",children:"Back"})})]})]}),z=a.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,J=a.ul`
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
`,K=a.span`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,O=a.div`
  @media screen and (min-width: 834px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
  }
`,Q=a.label`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,X=a.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`,Z=({formik:n,increment:d,decrement:i})=>{const[s,t]=j.useState(""),c=()=>{t("validation"),n.values.age!==""&&!n.errors.age&&d()};return e.jsxs(z,{children:[e.jsx(C,{children:"Select gender, Age"}),e.jsxs(w,{children:["Choose a goal so that we can ",e.jsx("br",{}),"help you effectively"]}),e.jsxs(O,{children:[e.jsx(K,{children:"Gender"}),e.jsxs(J,{children:[e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"gender",value:"male",defaultChecked:n.values.gender==="male"}),e.jsx(x,{}),e.jsx(p,{children:"Male"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"gender",value:"female",defaultChecked:n.values.gender==="female"}),e.jsx(x,{}),e.jsx(p,{children:"Female"})]})})]}),e.jsx(Q,{htmlFor:"age",children:"Your age"}),e.jsxs(v,{children:[e.jsx(y,{className:s==="validation"?n.errors.age?"error":"correct":"",id:"age",name:"age",placeholder:"Enter your age",onChange:n.handleChange,value:n.values.age}),s==="validation"?n.errors.age?e.jsx(l,{children:e.jsx("use",{href:`${r}#error`})}):e.jsx(l,{children:e.jsx("use",{href:`${r}#correct`})}):null,s==="validation"?n.errors.age?e.jsx(o,{children:n.errors.age}):e.jsx(o,{style:{color:"#3CBC81"},children:"Age is valid"}):null]})]}),e.jsxs(X,{children:[e.jsx("li",{children:e.jsx(u,{onClick:()=>{c()},className:"btn-active",type:"submit",children:"Next"})}),e.jsx("li",{children:e.jsx(u,{onClick:()=>{i()},type:"button",children:"Back"})})]})]})},k=a.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,ee=a.ul`
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
`,ne=a.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`,ae=({formik:n,increment:d,decrement:i})=>{const[s,t]=j.useState(""),c=()=>{t("validation"),n.values.height!==""&&!n.errors.height&&n.values.weight!==""&&!n.errors.weight&&d()};return e.jsxs(k,{children:[e.jsx(C,{children:"Body parameters"}),e.jsx(w,{children:"Enter your parameters for correct performance tracking"}),e.jsxs(ee,{children:[e.jsxs("li",{children:[e.jsx(f,{htmlFor:"height",children:"Height"}),e.jsxs(v,{children:[e.jsx(y,{className:s==="validation"?n.errors.height?"error":"correct":"",id:"height",name:"height",placeholder:"Enter your height",onChange:n.handleChange,value:n.values.height}),s==="validation"?n.errors.height?e.jsx(l,{children:e.jsx("use",{href:`${r}#error`})}):e.jsx(l,{children:e.jsx("use",{href:`${r}#correct`})}):null,s==="validation"?n.errors.height?e.jsx(o,{children:n.errors.height}):e.jsx(o,{style:{color:"#3CBC81"},children:"Height is valid"}):null]})]}),e.jsxs("li",{children:[e.jsx(f,{htmlFor:"weight",children:"Weight"}),e.jsxs(v,{children:[e.jsx(y,{className:s==="validation"?n.errors.weight?"error":"correct":"",id:"weight",name:"weight",placeholder:"Enter your weight",onChange:n.handleChange,value:n.values.weight}),s==="validation"?n.errors.weight?e.jsx(l,{children:e.jsx("use",{href:`${r}#error`})}):e.jsx(l,{children:e.jsx("use",{href:`${r}#correct`})}):null,s==="validation"?n.errors.weight?e.jsx(o,{children:n.errors.weight}):e.jsx(o,{style:{color:"#3CBC81"},children:"Weight is valid"}):null]})]})]}),e.jsxs(ne,{children:[e.jsx("li",{children:e.jsx(u,{onClick:()=>{c()},className:"btn-active",type:"submit",children:"Next"})}),e.jsx("li",{children:e.jsx(u,{onClick:()=>{i()},type:"button",children:"Back"})})]})]})},ie=a.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,se=a.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`,te=a.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`,re=({formik:n,decrement:d,currentStep:i})=>{const s=N(),[t,c]=j.useState(""),g=async()=>{try{c("loading"),await s($(n.values)).unwrap()}catch(m){return i(1),m}finally{c("")}};return e.jsxs(ie,{children:[e.jsx(C,{children:"Your Activity"}),e.jsxs(w,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]}),e.jsxs(se,{children:[e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.2",value:"1.2"}),e.jsx(x,{}),e.jsx(p,{children:"1.2 - if you do not have physical activity and sedentary work"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.375",value:"1.375"}),e.jsx(x,{}),e.jsx(p,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.55",value:"1.55"}),e.jsx(x,{}),e.jsx(p,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.725",value:"1.725"}),e.jsx(x,{}),e.jsx(p,{children:"1.725 - if you train fully 6-7 times a week"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.9",value:"1.9"}),e.jsx(x,{}),e.jsx(p,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})})]}),e.jsxs(te,{children:[e.jsx(u,{className:"btn-active",onClick:()=>{g()},type:"button",children:t==="loading"?e.jsx(I,{}):"Sign Up"}),e.jsx(u,{onClick:()=>{d()},type:"button",children:"Back"})]})]})},le=()=>{const[n,d]=j.useState(1),[i,s]=j.useState(b),t=L({initialValues:{name:"",email:"",password:"",goal:"Lose Fat",gender:"male",age:"",height:"",weight:"",activity:"1.2"},validationSchema:A}),c=()=>{d(n+1)},g=()=>{d(n-1)};return j.useEffect(()=>{switch(n){case 1:s(b);break;case 2:s(E);break;case 3:s(T);break;case 4:s(G);break;case 5:s(M);break}},[n]),e.jsx(F,{image:i,children:e.jsxs("form",{onSubmit:t.handleSubmit,children:[n===1&&e.jsx(Y,{increment:c,validationSchema:t.validationSchema,formik:t}),n===2&&e.jsx(q,{increment:c,decrement:g,formik:t}),n===3&&e.jsx(Z,{increment:c,decrement:g,formik:t}),n===4&&e.jsx(ae,{increment:c,decrement:g,formik:t}),n===5&&e.jsx(re,{decrement:g,currentStep:d,formik:t})]})})},ge=()=>e.jsx(le,{});export{ge as default};
