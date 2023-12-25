import{s as t,u as $,r as c,i as z,b as D,v as E,w as q,j as e}from"./index-519b3869.js";import{u as N,c as A,a as k,b as v}from"./index.esm-f64fbe83.js";import{I as g,L as H}from"./LoaderBtn-8ec77511.js";import{i as a}from"./sprite-7e42c9a8.js";import"./hoist-non-react-statics.cjs-a47e9503.js";const W=t.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 834px) {
    width: 50%;
    margin-left: 25%;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 72px;
    margin-left: 160px;
  }
`,T=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-top: 12px;

  @media screen and (min-width: 834px) {
    justify-content: start;
  }
`,m=t.span`
  margin-left: 6px;
  font-weight: 400;
`,P=t.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
    gap: 12px;
  }
`,C=t.button`
  width: 300px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;

  border: none;
  border-radius: 12px;
  line-height: 1.4;
  color: var(--color-crimary-grey);
  background: transparent;

  transition:
    background-color 0.4s cubic-bezier(0, 0, 1, 1),
    color 0.4s cubic-bezier(0, 0, 1, 1);

  &:hover {
    background: var(--color-primary-green-lite);
    color: var(--color-primary-black-2);
  }

  &.btn-active {
    color: var(--color-primary-black-2);
    background: var(--color-primary-green-lite);
  }

  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }
`,V=t.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,Y=t.button`
  min-width: 171px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  line-height: 1.4;
  font-weight: 400;
  color: #ffffff;
  background: transparent;

  @media screen and (min-width: 834px) {
    margin-right: auto;
    min-width: 171px;
    height: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
    justify-content: flex-start;
  }
`,G=t.div`
  display: flex;
  flex-direction: row;
`,O=t.svg`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  fill: #e3ffa8;
`,h=t.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: #ffffff;

  @media screen and (min-width: 834px) {
    width: 212px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`,p=t.input`
  width: 300px;
  height: 36px;

  display: inline-flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin-top: 12px;
  margin-bottom: 40px;

  color: var(--color-primary-grey, #b6b6b6);
  font-weight: 400;
  line-height: 1.4;

  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: var(--color-primary-black-2);

  @media screen and (min-width: 834px) {
    width: 212px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }

  &.error {
    border: 1px solid #e74a3b;
  }

  &.correct {
    border: 1px solid #3cbc81;
  }
`,B=t.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`;t.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;
  & label:last-child {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const _=t.div`
  min-width: 300px;

  @media screen and (min-width: 834px) {
    min-width: 464px;
  }
`,y=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    grid-gap: 40px;
  }
`;t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
  }
`;const M=t.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;t.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const x=t.label`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + :before {
    transform: translate(-50%, -50%) scale(1);
  }
`,S=t.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + :before {
    transform: translate(-50%, -50%) scale(1);
  }
`,l=t.div`
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
`,u=t.span`
  color: var(--color-primary-white);
  margin-left: 6px;
  max-width: 260px;
  font-weight: 400;
  line-height: 1.2;
  font-size: 14px;

  @media screen and (min-width: 834px) {
    max-width: 420px;
  }
`,o=t.svg`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 39px;
  right: 10px;
`,s=t.div`
  position: absolute;
  top: 68px;
  left: 2px;
  color: #e74a3b;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
`,J="/food_diary/assets/symbol-defs-a36e553a.svg",K=()=>{const f=$();c.useEffect(()=>{f(z())},[f]);const n=D(E),j=c.useRef(null),[r,R]=c.useState(""),[w,b]=c.useState(""),L=async()=>{R("validation");try{await i.validateForm(),Object.keys(i.errors).length===0&&(b("loading"),await i.handleSubmit())}catch(d){console.log(d)}finally{b("")}},i=N({initialValues:{name:n.name||"",avatarURL:n.avatarURL||"https://cdn-icons-png.flaticon.com/256/805/805439.png",age:n.age||0,gender:n.gender||"",weight:n.weight||"",height:n.height||"",activity:n.activity||""},validationSchema:A({name:k().required("Name ir required"),age:v().positive("Age has to be positive number").required("Age is required").min(16),weight:v().positive("Weight has to be positive number").required("Weight is required").min(30),height:v().positive("Height has to be positive number").required("Height is required").min(100),activity:k().required("Choose activity level")}),onSubmit:d=>{f(q(d))}});c.useEffect(()=>{i.setValues({name:n.name||"",avatarURL:n.avatarURL||"https://cdn-icons-png.flaticon.com/256/805/805439.png",age:n.age||0,gender:n.gender||"",weight:n.weight||"",height:n.height||"",activity:n.activity||""})},[n]);const F=d=>{const U=d.currentTarget.files[0];i.setFieldValue("avatarURL",URL.createObjectURL(U))},I=()=>{j.current.click()};return e.jsx("div",{children:e.jsxs(W,{onSubmit:i.handleSubmit,children:[e.jsxs(y,{children:[e.jsxs(g,{children:[e.jsx(h,{htmlFor:"name",children:"Your name"}),e.jsx(p,{className:r==="validation"?i.errors.name?"error":"correct":"",type:"text",id:"name",name:"name",placeholder:"Enter your name",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.name}),r==="validation"?i.errors.name?e.jsx(o,{children:e.jsx("use",{href:`${a}#error`})}):e.jsx(o,{children:e.jsx("use",{href:`${a}#correct`})}):null,r==="validation"?i.errors.name?e.jsx(s,{children:i.errors.name}):e.jsx(s,{style:{color:"#3CBC81"},children:"Name is valid"}):null]}),e.jsxs(V,{children:[e.jsx(B,{children:"Your photo"}),e.jsxs(M,{children:[i.values.avatarURL?e.jsx("img",{src:i.values.avatarURL,alt:"User Avatar",style:{width:"36px",height:"36px",borderRadius:"50%"}}):null,e.jsx(G,{children:e.jsxs(Y,{type:"button",onClick:I,children:[e.jsx(p,{type:"file",ref:j,style:{display:"none"},onChange:F}),e.jsx(O,{width:"16",height:"16",children:e.jsx("use",{href:`${J}#icon-inbox`})}),e.jsx(m,{children:"Download new photo"})]})})]})]})]}),e.jsxs(y,{children:[e.jsxs(g,{children:[e.jsx(h,{htmlFor:"age",children:"Your age"}),e.jsx(p,{className:r==="validation"?i.errors.age?"error":"correct":"",id:"age",name:"age",placeholder:"Enter your age",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.age}),r==="validation"?i.errors.age?e.jsx(o,{children:e.jsx("use",{href:`${a}#error`})}):e.jsx(o,{children:e.jsx("use",{href:`${a}#correct`})}):null,r==="validation"?i.errors.age?e.jsx(s,{children:i.errors.age}):e.jsx(s,{style:{color:"#3CBC81"},children:"Age is valid"}):null]}),e.jsxs("div",{children:[e.jsx(h,{children:"Gender"}),e.jsxs(T,{children:[e.jsxs(S,{children:[e.jsx("input",{type:"radio",name:"gender",value:"male",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.gender==="male"}),e.jsx(l,{}),e.jsx(m,{children:"Male"})]}),e.jsxs(S,{children:[e.jsx("input",{type:"radio",name:"gender",value:"female",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.gender==="female"}),e.jsx(l,{}),e.jsx(m,{children:"Female"})]})]}),i.touched.gender&&i.errors.gender?e.jsx("div",{children:i.errors.gender}):null]})]}),e.jsxs(y,{children:[e.jsxs(g,{children:[e.jsx(h,{htmlFor:"weight",children:"Weight"}),e.jsx(p,{className:r==="validation"?i.errors.weight?"error":"correct":"",id:"weight",name:"weight",placeholder:"Enter your weight",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.weight}),r==="validation"?i.errors.weight?e.jsx(o,{children:e.jsx("use",{href:`${a}#error`})}):e.jsx(o,{children:e.jsx("use",{href:`${a}#correct`})}):null,r==="validation"?i.errors.weight?e.jsx(s,{children:i.errors.weight}):e.jsx(s,{style:{color:"#3CBC81"},children:"Weight is valid"}):null]}),e.jsxs(g,{children:[e.jsx(h,{htmlFor:"height",children:"Height"}),e.jsx(p,{className:r==="validation"?i.errors.height?"error":"correct":"",id:"height",name:"height",placeholder:"Enter your height",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.height}),r==="validation"?i.errors.height?e.jsx(o,{children:e.jsx("use",{href:`${a}#error`})}):e.jsx(o,{children:e.jsx("use",{href:`${a}#correct`})}):null,r==="validation"?i.errors.height?e.jsx(s,{children:i.errors.height}):e.jsx(s,{style:{color:"#3CBC81"},children:"Height is valid"}):null]})]}),e.jsxs(_,{children:[e.jsx(B,{children:"Your activity"}),e.jsxs(x,{children:[e.jsx("input",{type:"radio",name:"activity",value:"1.2",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.2||i.values.activity==="1.2"}),e.jsx(l,{}),e.jsx(u,{children:"1.2 - if you do not have physical activity and sedentary work"})]}),e.jsxs(x,{children:[e.jsx("input",{type:"radio",name:"activity",value:"1.375",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.375||i.values.activity==="1.375"}),e.jsx(l,{}),e.jsx(u,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]}),e.jsxs(x,{children:[e.jsx("input",{type:"radio",name:"activity",value:"1.55",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.55||i.values.activity==="1.55"}),e.jsx(l,{}),e.jsx(u,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]}),e.jsxs(x,{children:[e.jsx("input",{type:"radio",name:"activity",value:"1.725",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.725||i.values.activity==="1.725"}),e.jsx(l,{}),e.jsx(m,{children:"1.725 - if you train fully 6-7 times a week"})]}),e.jsxs(x,{children:[e.jsx("input",{type:"radio",name:"activity",value:"1.9",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.9||i.values.activity==="1.9"}),e.jsx(l,{}),e.jsx(u,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]}),i.touched.activityLevel&&i.errors.activity?e.jsx("div",{children:i.errors.activity}):null]}),e.jsxs(P,{children:[e.jsx(C,{type:"button",onClick:()=>i.resetForm({values:n}),children:"Cancel"}),e.jsx(C,{className:"btn-active",type:"submit",disabled:w,onClick:()=>{L()},children:w==="loading"?e.jsx(H,{}):"Send"})]})]})})},Q=t.img`
  width: 300px;
  height: 296px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 380px;
    height: 374px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 528px;
    margin-bottom: 0;
    margin-left: 86px;
  }
`,X=t.div`
  
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`,Z="/food_diary/assets/Illustration-b0655153.png",ee=t.h1`
  width: 165px;
  height: 30px;
  margin-top: 16px;
  margin-left: 10px;
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  color: #ffffff;

  /* з [835px */
  @media only screen and (min-width: 835px) {
    min-width: 206px;
    height: 36px;
    margin-top: 24px;
    margin-left: 27px;
    margin-bottom: 20px;
    font-size: 30px;
  }

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
    margin-top: 20px;
    margin-left: 0;
    margin-bottom: 24px;
  }
`,ie=()=>e.jsx(e.Fragment,{children:e.jsx(ee,{children:"Profile setting"})}),te=()=>e.jsx(e.Fragment,{children:e.jsxs(X,{children:[e.jsx(ie,{}),e.jsx(Q,{src:Z,alt:"hero settings page"})]})}),ne=t.div`
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  padding: 0 10px;

  /* з [835px */
  @media only screen and (min-width: 835px) {
    max-width: 858px;
    padding: 0 27px;
  }

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
    max-width: 1474px;
    padding: 0 34px;
    /* display: flex; */
  }
`,re=t.section`
  font-family: Poppins;
  width: 100%;
  height: 100%;
  padding-Bottom: 40px;

  background-color: var(--color-primary-black);
  color: var(--color-primary-white);

  @media only screen and (min-width: 835px) {
    padding-bottom: 174px;
  }
`,ae=t.div`
 

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
    max-width: 1474px;
    padding: 0 34px;
    display: flex;
  }
`,he=()=>e.jsx(e.Fragment,{children:e.jsx(re,{children:e.jsx(ne,{children:e.jsxs(ae,{children:[e.jsx(te,{}),e.jsx(K,{})]})})})});export{he as default};
