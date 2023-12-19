import{s as n,k as w,l as j,r as b,j as e}from"./index-335cbbb3.js";import{u as C,c as k,a as p,b as h}from"./index.esm-07c38b91.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const B="/food_diary/assets/symbol-defs-a36e553a.svg",S=n.form`
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
`,F=n.div`
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
`,R=n.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
    gap: 12px;
  }
`,m=n.button`
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
`,D=n.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,L=n.button`
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
`,U=n.div`
  display: flex;
  flex-direction: row;
`,I=n.svg`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  fill: #e3ffa8;
`,r=n.label`
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
`,g=n.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,d=n.input`
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
`,u=n.p`
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
`,l=n.label`
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
`,z=n.div`
  min-width: 300px;

  @media screen and (min-width: 834px) {
    min-width: 464px;
  }
`,c=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    grid-gap: 40px;
  }
`,s=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
  }
`,q=n.div`
  /* @media screen and (min-width: 834px) { */
  display: flex;
  align-items: center;
  justify-content: start;
  /* } */
`,A=()=>{const a=w(j),x=b.useRef(null),i=C({initialValues:{name:a.name||"",avatarURL:a.avatarURL||"",age:a.age||0,gender:a.gender||"",weight:a.weight||"",height:a.height||"",activity:a.activity||""},validationSchema:k({name:p().required("Поле ім'я є обов'язковим"),age:h().positive("Вік повинен бути додатнім числом").required("Поле вік є обов'язковим"),weight:h().positive("Вага повинна бути додатнім числом").required("Поле вага є обов'язковим"),height:h().positive("Зріст повинен бути додатнім числом").required("Поле зріст є обов'язковим"),activity:p().required("Оберіть рівень фізичної активності")}),onSubmit:o=>{console.log("Збережено:",o)}}),f=o=>{const y=o.currentTarget.files[0];i.setFieldValue("avatarURL",URL.createObjectURL(y))},v=()=>{x.current.click()};return e.jsx("div",{children:e.jsxs(S,{onSubmit:i.handleSubmit,children:[e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx(r,{htmlFor:"name",children:"Your name"}),e.jsx(d,{type:"text",id:"name",name:"name",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.name}),i.touched.name&&i.errors.name?e.jsx("div",{children:i.errors.name}):null]}),e.jsxs(D,{children:[e.jsx(u,{children:"Your photo"}),e.jsxs(q,{children:[i.values.avatarURL?e.jsx("img",{src:i.values.avatarURL,alt:"User Avatar",style:{width:"36px",height:"36px",borderRadius:"40%"}}):null,e.jsx(U,{children:e.jsxs(L,{type:"button",onClick:v,children:[e.jsx(d,{type:"file",ref:x,style:{display:"none"},onChange:f}),e.jsx(I,{width:"16",height:"16",children:e.jsx("use",{href:`${B}#icon-inbox`})}),e.jsx(t,{children:"Download new photo"})]})})]})]})]}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx(r,{htmlFor:"age",children:"Your age"}),e.jsx(d,{type:"number",id:"age",name:"age",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.age}),i.touched.age&&i.errors.age?e.jsx("div",{children:i.errors.age}):null]}),e.jsxs("div",{children:[e.jsx(r,{children:"Gender"}),e.jsxs(F,{children:[e.jsxs(g,{children:[e.jsx("input",{type:"radio",name:"gender",value:"male",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.gender==="male"}),e.jsx(t,{children:"Male"})]}),e.jsxs(g,{children:[e.jsx("input",{type:"radio",name:"gender",value:"female",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.gender==="female"}),e.jsx(t,{children:"Female"})]})]}),i.touched.gender&&i.errors.gender?e.jsx("div",{children:i.errors.gender}):null]})]}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx(r,{htmlFor:"weight",children:"Weight"}),e.jsx(d,{type:"number",id:"weight",name:"weight",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.weight}),i.touched.weight&&i.errors.weight?e.jsx("div",{children:i.errors.weight}):null]}),e.jsxs(s,{children:[e.jsx(r,{htmlFor:"height",children:"Height"}),e.jsx(d,{type:"number",id:"height",name:"height",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.height}),i.touched.height&&i.errors.height?e.jsx("div",{children:i.errors.height}):null]})]}),e.jsxs(z,{children:[e.jsx(u,{children:"Your activity"}),e.jsx("div",{children:e.jsxs(l,{children:[e.jsx("input",{type:"radio",name:"activity",value:"sedentary",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.2}),e.jsx(t,{children:"1.2 - if you do not have physical activity and sedentary work"})]})}),e.jsx("div",{children:e.jsxs(l,{children:[e.jsx("input",{type:"radio",name:"activity",value:"light",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.375}),e.jsx(t,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]})}),e.jsx("div",{children:e.jsxs(l,{children:[e.jsx("input",{type:"radio",name:"activity",value:"moderate",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity==="moderate"}),e.jsx(t,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]})}),e.jsx("div",{children:e.jsxs(l,{children:[e.jsx("input",{type:"radio",name:"activity",value:"active",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.725}),e.jsx(t,{children:"1.725 - if you train fully 6-7 times a week"})]})}),e.jsx("div",{children:e.jsxs(l,{children:[e.jsx("input",{type:"radio",name:"activity",value:"veryActive",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.9}),e.jsx(t,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})}),i.touched.activityLevel&&i.errors.activity?e.jsx("div",{children:i.errors.activity}):null]}),e.jsxs(R,{children:[e.jsx(m,{type:"button",onClick:i.handleReset,children:"Cancel"}),e.jsx(m,{type:"submit",children:"Save"})]})]})})},T=n.img`
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
`,$=n.div`
  
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`,E=n.h1`
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
`,P=()=>e.jsx(e.Fragment,{children:e.jsx(E,{children:"Profile setting"})}),Y=()=>e.jsx(e.Fragment,{children:e.jsxs($,{children:[e.jsx(P,{}),e.jsx(T,{src:"../../assets/settings/Illustration.png",alt:"hero settings page"})]})}),G=n.div`
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
`,H=n.section`
  font-family: Poppins;
  width: 100%;
  height: 100%;
  padding-Bottom: 40px;

  background-color: var(--color-primary-black);
  color: var(--color-primary-white);

  @media only screen and (min-width: 835px) {
    padding-bottom: 174px;
  }
`,W=n.div`
 

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
    max-width: 1474px;
    padding: 0 34px;
    display: flex;
  }
`,O=()=>e.jsx(e.Fragment,{children:e.jsx(H,{children:e.jsx(G,{children:e.jsxs(W,{children:[e.jsx(Y,{}),e.jsx(A,{})]})})})});export{O as default};
