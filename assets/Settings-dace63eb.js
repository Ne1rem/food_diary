import{s as n,h as C,r as k,j as e}from"./index-3f319373.js";import{u as B,c as S,a as f,b as p}from"./index.esm-70b4cb08.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const F=t=>t.user.user,D="/food_diary/assets/symbol-defs-a36e553a.svg",R=n.form`
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
`,L=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-top: 12px;

  @media screen and (min-width: 834px) {
    justify-content: start;
  }
`,r=n.span`
  margin-left: 6px;
  font-weight: 400;
`,U=n.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
    gap: 12px;
  }
`,v=n.button`
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
`,I=n.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,z=n.button`
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
`,l=n.label`
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
`,y=n.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,o=n.input`
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
`,w=n.p`
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
`,q=n.div`
  min-width: 300px;

  @media screen and (min-width: 834px) {
    min-width: 464px;
  }
`,m=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    grid-gap: 40px;
  }
`,h=n.div`
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
`,P=()=>{const t=C(F),g=k.useRef(null),i=B({initialValues:{name:t.name||"",avatarURL:t.avatarURL||"",age:t.age||0,gender:t.gender||"",weight:t.weight||"",height:t.height||"",activity:t.activity||""},validationSchema:S({name:f().required("Поле ім'я є обов'язковим"),age:p().positive("Вік повинен бути додатнім числом").required("Поле вік є обов'язковим"),weight:p().positive("Вага повинна бути додатнім числом").required("Поле вага є обов'язковим"),height:p().positive("Зріст повинен бути додатнім числом").required("Поле зріст є обов'язковим"),activity:f().required("Оберіть рівень фізичної активності")}),onSubmit:async c=>{const d=new FormData;Object.entries(c).forEach(([a,x])=>{a==="avatar"&&x instanceof File?d.append(a,x):d.append(a,JSON.stringify(x))});for(var u of d.entries())console.log(u[0]+", "+u[1]);try{const a=await fetch("http://food-diary-backend-kr1b.onrender.com/api/user/update",{method:"PUT",body:d});console.log("Server response:",a)}catch(a){console.error("Error sending data:",a)}}}),j=c=>{const d=c.currentTarget.files[0];i.setFieldValue("avatarURL",URL.createObjectURL(d))},b=()=>{g.current.click()};return e.jsx("div",{children:e.jsxs(R,{onSubmit:i.handleSubmit,children:[e.jsxs(m,{children:[e.jsxs(h,{children:[e.jsx(l,{htmlFor:"name",children:"Your name"}),e.jsx(o,{type:"text",id:"name",name:"name",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.name}),i.touched.name&&i.errors.name?e.jsx("div",{children:i.errors.name}):null]}),e.jsxs(I,{children:[e.jsx(w,{children:"Your photo"}),e.jsxs(A,{children:[i.values.avatarURL?e.jsx("img",{src:i.values.avatarURL,alt:"User Avatar",style:{width:"36px",height:"36px",borderRadius:"50%"}}):null,e.jsx(E,{children:e.jsxs(z,{type:"button",onClick:b,children:[e.jsx(o,{type:"file",ref:g,style:{display:"none"},onChange:j}),e.jsx(T,{width:"16",height:"16",children:e.jsx("use",{href:`${D}#icon-inbox`})}),e.jsx(r,{children:"Download new photo"})]})})]})]})]}),e.jsxs(m,{children:[e.jsxs(h,{children:[e.jsx(l,{htmlFor:"age",children:"Your age"}),e.jsx(o,{type:"number",id:"age",name:"age",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.age}),i.touched.age&&i.errors.age?e.jsx("div",{children:i.errors.age}):null]}),e.jsxs("div",{children:[e.jsx(l,{children:"Gender"}),e.jsxs(L,{children:[e.jsxs(y,{children:[e.jsx("input",{type:"radio",name:"gender",value:"male",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.gender==="male"}),e.jsx(r,{children:"Male"})]}),e.jsxs(y,{children:[e.jsx("input",{type:"radio",name:"gender",value:"female",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.gender==="female"}),e.jsx(r,{children:"Female"})]})]}),i.touched.gender&&i.errors.gender?e.jsx("div",{children:i.errors.gender}):null]})]}),e.jsxs(m,{children:[e.jsxs(h,{children:[e.jsx(l,{htmlFor:"weight",children:"Weight"}),e.jsx(o,{type:"number",id:"weight",name:"weight",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.weight}),i.touched.weight&&i.errors.weight?e.jsx("div",{children:i.errors.weight}):null]}),e.jsxs(h,{children:[e.jsx(l,{htmlFor:"height",children:"Height"}),e.jsx(o,{type:"number",id:"height",name:"height",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.height}),i.touched.height&&i.errors.height?e.jsx("div",{children:i.errors.height}):null]})]}),e.jsxs(q,{children:[e.jsx(w,{children:"Your activity"}),e.jsx("div",{children:e.jsxs(s,{children:[e.jsx("input",{type:"radio",name:"activity",value:"sedentary",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.2}),e.jsx(r,{children:"1.2 - if you do not have physical activity and sedentary work"})]})}),e.jsx("div",{children:e.jsxs(s,{children:[e.jsx("input",{type:"radio",name:"activity",value:"light",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.375}),e.jsx(r,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]})}),e.jsx("div",{children:e.jsxs(s,{children:[e.jsx("input",{type:"radio",name:"activity",value:"moderate",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity==="moderate"}),e.jsx(r,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]})}),e.jsx("div",{children:e.jsxs(s,{children:[e.jsx("input",{type:"radio",name:"activity",value:"active",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.725}),e.jsx(r,{children:"1.725 - if you train fully 6-7 times a week"})]})}),e.jsx("div",{children:e.jsxs(s,{children:[e.jsx("input",{type:"radio",name:"activity",value:"veryActive",onChange:i.handleChange,onBlur:i.handleBlur,checked:i.values.activity===1.9}),e.jsx(r,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})}),i.touched.activityLevel&&i.errors.activity?e.jsx("div",{children:i.errors.activity}):null]}),e.jsxs(U,{children:[e.jsx(v,{type:"button",onClick:i.handleReset,children:"Cancel"}),e.jsx(v,{type:"submit",children:"Save"})]})]})})},$=n.img`
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
`,Y=n.div`
  
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`,G="/food_diary/assets/Illustration-b0655153.png",H=n.h1`
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
`,O=()=>e.jsx(e.Fragment,{children:e.jsx(H,{children:"Profile setting"})}),W=()=>e.jsx(e.Fragment,{children:e.jsxs(Y,{children:[e.jsx(O,{}),e.jsx($,{src:G,alt:"hero settings page"})]})}),N=n.div`
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
`,V=n.section`
  font-family: Poppins;
  width: 100%;
  height: 100%;
  padding-Bottom: 40px;

  background-color: var(--color-primary-black);
  color: var(--color-primary-white);

  @media only screen and (min-width: 835px) {
    padding-bottom: 174px;
  }
`,_=n.div`
 

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
    max-width: 1474px;
    padding: 0 34px;
    display: flex;
  }
`,Q=()=>e.jsx(e.Fragment,{children:e.jsx(V,{children:e.jsx(N,{children:e.jsxs(_,{children:[e.jsx(W,{}),e.jsx(P,{})]})})})});export{Q as default};
