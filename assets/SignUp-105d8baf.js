import{s as a,N as B,r as j,j as e,u as N,a as $,b as L}from"./index-567a1809.js";import{u as A}from"./index.esm-d252f90f.js";import{s as F}from"./validationSchema-ff40699a.js";import{T as y,a as C,I as o,B as g,i as f,A as I}from"./Illustration-639e512e.js";import{i as r}from"./sprite-2307e05d.js";import{I as m,a as v,b as l,L as E}from"./LoaderBtn-4aae2f4f.js";import"./hoist-non-react-statics.cjs-675f4425.js";const T="/food_diary/assets/goals-12d0ed7f.png",G="/food_diary/assets/genderAndAge-42209e67.png",M="/food_diary/assets/bodyParameters-bce33dad.png",P="/food_diary/assets/illustrationActivity-1f59fd5a.png",R=a.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,U=a.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`,H=a.div`
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
`,V=a.p`
  color: var(--color-primary-grey);
  font-weight: 400;
  line-height: 1.4;
`,Y=a(B)`
  color: var(--color-primary-white);
  line-height: 1.4;
`,_=({formik:n,increment:d})=>{const[i,s]=j.useState(""),[t,c]=j.useState(!1),u=()=>{s("validation"),n.values.name!==""&&n.values.email!==""&&n.values.password!==""&&!n.errors.name&&!n.errors.email&&!n.errors.password&&d()},w=()=>{c(b=>!b)};return e.jsxs(R,{children:[e.jsx(y,{children:"Sign up"}),e.jsx(C,{children:"You need to register to use the service"}),e.jsxs(U,{children:[e.jsx("li",{children:e.jsxs(m,{children:[e.jsx(v,{className:i==="validation"?n.errors.name?"error":"correct":"",id:"name",name:"name",placeholder:"Name",onChange:n.handleChange,value:n.values.name}),i==="validation"?n.errors.name?e.jsx(l,{children:e.jsx("use",{href:`${r}#error`})}):e.jsx(l,{children:e.jsx("use",{href:`${r}#correct`})}):null,i==="validation"?n.errors.name?e.jsx(o,{children:n.errors.name}):e.jsx(o,{style:{color:"#3CBC81"},children:"Name is valid"}):null]})}),e.jsx("li",{children:e.jsxs(m,{children:[e.jsx(v,{className:i==="validation"?n.errors.email?"error":"correct":"",id:"email",name:"email",placeholder:"E-mail",onChange:n.handleChange,value:n.values.email}),i==="validation"?n.errors.email?e.jsx(l,{children:e.jsx("use",{href:`${r}#error`})}):e.jsx(l,{children:e.jsx("use",{href:`${r}#correct`})}):null,i==="validation"?n.errors.email?e.jsx(o,{children:n.errors.email}):e.jsx(o,{style:{color:"#3CBC81"},children:"E-mail is valid"}):null]})}),e.jsx("li",{children:e.jsxs(m,{children:[e.jsx(v,{className:i==="validation"?n.errors.password?"error":"correct":"",id:"password",name:"password",placeholder:"Password",type:t?"text":"password",onChange:n.handleChange,value:n.values.password}),t?i!=="validation"&&e.jsx(l,{onClick:()=>{w()},children:e.jsx("use",{href:`${r}#eye`})}):e.jsx(l,{onClick:()=>{w()},children:e.jsx("use",{href:`${r}#eye-off`})}),t&&i==="validation"?n.errors.password?e.jsx(l,{children:e.jsx("use",{href:`${r}#error`})}):e.jsx(l,{children:e.jsx("use",{href:`${r}#correct`})}):null,t&&i==="validation"?n.errors.password?e.jsx(o,{children:n.errors.password}):e.jsx(o,{style:{color:"#3CBC81"},children:"Password is valid"}):null]})})]}),e.jsx(g,{onClick:()=>{u()},className:"btn-active",type:"submit",children:"Next"}),e.jsxs(H,{children:[e.jsx(V,{children:"Do you already have an account?"}),e.jsx(Y,{to:"/signin",children:"Sign in"})]})]})},D=a.div`
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
`,z=({formik:n,increment:d,decrement:i})=>e.jsxs(D,{children:[e.jsx(y,{children:"Your goal"}),e.jsx(C,{children:"Choose a goal so that we can help you effectively"}),e.jsxs(W,{children:[e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",defaultChecked:n.values.goal==="Lose Fat",value:"Lose Fat"}),e.jsx(x,{}),e.jsx(p,{children:"Lose Fat"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",defaultChecked:n.values.goal==="Maintain",value:"Maintain"}),e.jsx(x,{}),e.jsx(p,{children:"Maintain"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",defaultChecked:n.values.goal==="Gain Muscle",value:"Gain Muscle"}),e.jsx(x,{}),e.jsx(p,{children:"Gain Muscle"})]})})]}),e.jsxs(q,{children:[e.jsx("li",{children:e.jsx(g,{onClick:()=>{d()},className:"btn-active",type:"button",children:"Next"})}),e.jsx("li",{children:e.jsx(g,{onClick:()=>{i()},type:"button",children:"Back"})})]})]}),J=a.div`
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
`,k=({formik:n,increment:d,decrement:i})=>{const[s,t]=j.useState(""),c=()=>{t("validation"),n.values.age!==""&&!n.errors.age&&d()};return e.jsxs(J,{children:[e.jsx(y,{children:"Select gender, Age"}),e.jsxs(C,{children:["Choose a goal so that we can ",e.jsx("br",{}),"help you effectively"]}),e.jsxs(Q,{children:[e.jsx(O,{children:"Gender"}),e.jsxs(K,{children:[e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"gender",value:"male",defaultChecked:n.values.gender==="male"}),e.jsx(x,{}),e.jsx(p,{children:"Male"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"gender",value:"female",defaultChecked:n.values.gender==="female"}),e.jsx(x,{}),e.jsx(p,{children:"Female"})]})})]}),e.jsx(X,{htmlFor:"age",children:"Your age"}),e.jsxs(m,{children:[e.jsx(v,{className:s==="validation"?n.errors.age?"error":"correct":"",id:"age",name:"age",placeholder:"Enter your age",onChange:n.handleChange,value:n.values.age}),s==="validation"?n.errors.age?e.jsx(l,{children:e.jsx("use",{href:`${r}#error`})}):e.jsx(l,{children:e.jsx("use",{href:`${r}#correct`})}):null,s==="validation"?n.errors.age?e.jsx(o,{children:n.errors.age}):e.jsx(o,{style:{color:"#3CBC81"},children:"Age is valid"}):null]})]}),e.jsxs(Z,{children:[e.jsx("li",{children:e.jsx(g,{onClick:()=>{c()},className:"btn-active",type:"submit",children:"Next"})}),e.jsx("li",{children:e.jsx(g,{onClick:()=>{i()},type:"button",children:"Back"})})]})]})},ee=a.div`
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
`,S=a.label`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,ae=a.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`,ie=({formik:n,increment:d,decrement:i})=>{const[s,t]=j.useState(""),c=()=>{t("validation"),n.values.height!==""&&!n.errors.height&&n.values.weight!==""&&!n.errors.weight&&d()};return e.jsxs(ee,{children:[e.jsx(y,{children:"Body parameters"}),e.jsx(C,{children:"Enter your parameters for correct performance tracking"}),e.jsxs(ne,{children:[e.jsxs("li",{children:[e.jsx(S,{htmlFor:"height",children:"Height"}),e.jsxs(m,{children:[e.jsx(v,{className:s==="validation"?n.errors.height?"error":"correct":"",id:"height",name:"height",placeholder:"Enter your height",onChange:n.handleChange,value:n.values.height}),s==="validation"?n.errors.height?e.jsx(l,{children:e.jsx("use",{href:`${r}#error`})}):e.jsx(l,{children:e.jsx("use",{href:`${r}#correct`})}):null,s==="validation"?n.errors.height?e.jsx(o,{children:n.errors.height}):e.jsx(o,{style:{color:"#3CBC81"},children:"Height is valid"}):null]})]}),e.jsxs("li",{children:[e.jsx(S,{htmlFor:"weight",children:"Weight"}),e.jsxs(m,{children:[e.jsx(v,{className:s==="validation"?n.errors.weight?"error":"correct":"",id:"weight",name:"weight",placeholder:"Enter your weight",onChange:n.handleChange,value:n.values.weight}),s==="validation"?n.errors.weight?e.jsx(l,{children:e.jsx("use",{href:`${r}#error`})}):e.jsx(l,{children:e.jsx("use",{href:`${r}#correct`})}):null,s==="validation"?n.errors.weight?e.jsx(o,{children:n.errors.weight}):e.jsx(o,{style:{color:"#3CBC81"},children:"Weight is valid"}):null]})]})]}),e.jsxs(ae,{children:[e.jsx("li",{children:e.jsx(g,{onClick:()=>{c()},className:"btn-active",type:"submit",children:"Next"})}),e.jsx("li",{children:e.jsx(g,{onClick:()=>{i()},type:"button",children:"Back"})})]})]})},se=a.div`
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
`,le=({formik:n,decrement:d,currentStep:i})=>{const s=N(),t=$(),[c,u]=j.useState(""),w=async()=>{try{u("loading"),await t(L(n.values)).unwrap(),s("/signin")}catch(b){return i(1),b}finally{u("")}};return e.jsxs(se,{children:[e.jsx(y,{children:"Your Activity"}),e.jsxs(C,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]}),e.jsxs(te,{children:[e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.2",value:"1.2"}),e.jsx(x,{}),e.jsx(p,{children:"1.2 - if you do not have physical activity and sedentary work"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.375",value:"1.375"}),e.jsx(x,{}),e.jsx(p,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.55",value:"1.55"}),e.jsx(x,{}),e.jsx(p,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.725",value:"1.725"}),e.jsx(x,{}),e.jsx(p,{children:"1.725 - if you train fully 6-7 times a week"})]})}),e.jsx("li",{children:e.jsxs(h,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:n.values.activity==="1.9",value:"1.9"}),e.jsx(x,{}),e.jsx(p,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})})]}),e.jsxs(re,{children:[e.jsx(g,{className:"btn-active",onClick:()=>{w()},type:"button",children:c==="loading"?e.jsx(E,{}):"Sign Up"}),e.jsx(g,{onClick:()=>{d()},type:"button",children:"Back"})]})]})},de=()=>{const[n,d]=j.useState(1),[i,s]=j.useState(f),t=A({initialValues:{name:"",email:"",password:"",goal:"Lose Fat",gender:"male",age:"",height:"",weight:"",activity:"1.2"},validationSchema:F}),c=()=>{d(n+1)},u=()=>{d(n-1)};return j.useEffect(()=>{switch(n){case 1:s(f);break;case 2:s(T);break;case 3:s(G);break;case 4:s(M);break;case 5:s(P);break}},[n]),e.jsx(I,{image:i,children:e.jsxs("form",{onSubmit:t.handleSubmit,children:[n===1&&e.jsx(_,{increment:c,validationSchema:t.validationSchema,formik:t}),n===2&&e.jsx(z,{increment:c,decrement:u,formik:t}),n===3&&e.jsx(k,{increment:c,decrement:u,formik:t}),n===4&&e.jsx(ie,{increment:c,decrement:u,formik:t}),n===5&&e.jsx(le,{decrement:u,currentStep:d,formik:t})]})})},je=()=>e.jsx(de,{});export{je as default};
