import{s as n,u as b,r as m,h as C,i as B,k,j as e}from"./index-4eb2a734.js";import{u as S,c as F,a as g,b as c}from"./index.esm-71c01efe.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const R=a=>a.user.user,D="/food_diary/assets/symbol-defs-a36e553a.svg",L=n.form`
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
`,U=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-top: 12px;

  @media screen and (min-width: 834px) {
    justify-content: start;
  }
`,t=n.span`
  margin-left: 6px;
  font-weight: 400;
`,I=n.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
    gap: 12px;
  }
`,u=n.button`
  width: 300px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;

  border: none;
  border-radius: 12px;
  line-height: 1.4;
  color: #b6b6b6;
  background: transparent;

  &:hover {
    background: var(--color-primary-green-lite);
    color: var(--color-primary-black-2);
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
`,z=n.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,q=n.button`
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
  }
`,E=n.div`
  display: flex;
  flex-direction: row;
`,T=n.svg`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  fill: #e3ffa8;
`,d=n.label`
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
`,f=n.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,l=n.input`
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
`,y=n.p`
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
`,s=n.label`
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
`,$=n.div`
  min-width: 300px;

  @media screen and (min-width: 834px) {
    min-width: 464px;
  }
`,x=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    grid-gap: 40px;
  }
`,o=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
  }
`,A=n.div`
  /* @media screen and (min-width: 834px) { */
  display: flex;
  align-items: center;
  justify-content: start;
  /* } */
`,P=()=>{const a=b();m.useEffect(()=>{a(C())},[a]);const r=B(R),p=m.useRef(null),i=S({initialValues:{name:r.name||"",avatarURL:r.avatarURL||"",age:r.age||0,gender:r.gender||"",weight:r.weight||"",height:r.height||"",activity:r.activity||""},validationSchema:F({name:g().required("Поле ім'я є обов'язковим"),age:c().positive("Вік повинен бути додатнім числом").required("Поле вік є обов'язковим"),weight:c().positive("Вага повинна бути додатнім числом").required("Поле вага є обов'язковим"),height:c().positive("Зріст повинен бути додатнім числом").required("Поле зріст є обов'язковим"),activity:g().required("Оберіть рівень фізичної активності")}),onSubmit:h=>{a(k(h))}}),v=h=>{const j=h.currentTarget.files[0];i.setFieldValue("avatarURL",URL.createObjectURL(j))},w=()=>{p.current.click()};return e.jsx("div",{children:e.jsxs(L,{onSubmit:i.handleSubmit,children:[e.jsxs(x,{children:[e.jsxs(o,{children:[e.jsx(d,{htmlFor:"name",children:"Your name"}),e.jsx(l,{type:"text",id:"name",name:"name",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.name}),i.touched.name&&i.errors.name?e.jsx("div",{children:i.errors.name}):null]}),e.jsxs(z,{children:[e.jsx(y,{children:"Your photo"}),e.jsxs(A,{children:[i.values.avatarURL?e.jsx("img",{src:i.values.avatarURL,alt:"User Avatar",style:{width:"36px",height:"36px",borderRadius:"50%"}}):null,e.jsx(E,{children:e.jsxs(q,{type:"button",onClick:w,children:[e.jsx(l,{type:"file",ref:p,style:{display:"none"},onChange:v}),e.jsx(T,{width:"16",height:"16",children:e.jsx("use",{href:`${D}#icon-inbox`})}),e.jsx(t,{children:"Download new photo"})]})})]})]})]}),e.jsxs(x,{children:[e.jsxs(o,{children:[e.jsx(d,{htmlFor:"age",children:"Your age"}),e.jsx(l,{type:"number",id:"age",name:"age",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.age}),i.touched.age&&i.errors.age?e.jsx("div",{children:i.errors.age}):null]}),e.jsxs("div",{children:[e.jsx(d,{children:"Gender"}),e.jsxs(U,{children:[e.jsxs(f,{children:[e.jsx("input",{type:"radio",name:"gender",value:"male",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.gender==="male"}),e.jsx(t,{children:"Male"})]}),e.jsxs(f,{children:[e.jsx("input",{type:"radio",name:"gender",value:"female",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.gender==="female"}),e.jsx(t,{children:"Female"})]})]}),i.touched.gender&&i.errors.gender?e.jsx("div",{children:i.errors.gender}):null]})]}),e.jsxs(x,{children:[e.jsxs(o,{children:[e.jsx(d,{htmlFor:"weight",children:"Weight"}),e.jsx(l,{type:"number",id:"weight",name:"weight",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.weight}),i.touched.weight&&i.errors.weight?e.jsx("div",{children:i.errors.weight}):null]}),e.jsxs(o,{children:[e.jsx(d,{htmlFor:"height",children:"Height"}),e.jsx(l,{type:"number",id:"height",name:"height",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.height}),i.touched.height&&i.errors.height?e.jsx("div",{children:i.errors.height}):null]})]}),e.jsxs($,{children:[e.jsx(y,{children:"Your activity"}),e.jsx("div",{children:e.jsxs(s,{children:[e.jsx("input",{type:"radio",name:"activity",value:"1.2",onChange:i.handleChange,onBlur:i.handleBlur}),e.jsx(t,{children:"1.2 - if you do not have physical activity and sedentary work"})]})}),e.jsx("div",{children:e.jsxs(s,{children:[e.jsx("input",{type:"radio",name:"activity",value:"1.375",onChange:i.handleChange,onBlur:i.handleBlur}),e.jsx(t,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]})}),e.jsx("div",{children:e.jsxs(s,{children:[e.jsx("input",{type:"radio",name:"activity",value:"1.55",onChange:i.handleChange,onBlur:i.handleBlur}),e.jsx(t,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]})}),e.jsx("div",{children:e.jsxs(s,{children:[e.jsx("input",{type:"radio",name:"activity",value:"1.725",onChange:i.handleChange,onBlur:i.handleBlur}),e.jsx(t,{children:"1.725 - if you train fully 6-7 times a week"})]})}),e.jsx("div",{children:e.jsxs(s,{children:[e.jsx("input",{type:"radio",name:"activity",value:"1.9",onChange:i.handleChange,onBlur:i.handleBlur}),e.jsx(t,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})}),i.touched.activityLevel&&i.errors.activity?e.jsx("div",{children:i.errors.activity}):null]}),e.jsxs(I,{children:[e.jsx(u,{type:"button",onClick:i.handleReset,children:"Cancel"}),e.jsx(u,{type:"submit",children:"Save"})]})]})})},Y=n.img`
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
`,G=n.div`
  
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`,H="/food_diary/assets/Illustration-b0655153.png",W=n.h1`
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
`,V=()=>e.jsx(e.Fragment,{children:e.jsx(W,{children:"Profile setting"})}),_=()=>e.jsx(e.Fragment,{children:e.jsxs(G,{children:[e.jsx(V,{}),e.jsx(Y,{src:H,alt:"hero settings page"})]})}),M=n.div`
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
`,N=n.section`
  font-family: Poppins;
  width: 100%;
  height: 100%;
  padding-Bottom: 40px;

  background-color: var(--color-primary-black);
  color: var(--color-primary-white);

  @media only screen and (min-width: 835px) {
    padding-bottom: 174px;
  }
`,O=n.div`
 

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
    max-width: 1474px;
    padding: 0 34px;
    display: flex;
  }
`,X=()=>e.jsx(e.Fragment,{children:e.jsx(N,{children:e.jsx(M,{children:e.jsxs(O,{children:[e.jsx(_,{}),e.jsx(P,{})]})})})});export{X as default};
