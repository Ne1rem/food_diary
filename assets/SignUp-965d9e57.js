import{s as i,N as C,j as e,u as f,r as j,a as S}from"./index-dbeec58e.js";import{I as c,u as B,s as L}from"./InputStyle.styled-3d95af6f.js";import{T as x,a as g,I as h,B as d,i as v,A}from"./Illustration-0d25f5af.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const N="/food_diary/assets/goals-12d0ed7f.png",F="/food_diary/assets/genderAndAge-42209e67.png",I="/food_diary/assets/bodyParameters-bce33dad.png",E="/food_diary/assets/illustrationActivity-1f59fd5a.png",T=i.div`
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
`,M=({formik:n,increment:a})=>{const t=()=>{a()};return e.jsxs(T,{children:[e.jsx(x,{children:"Sign up"}),e.jsx(g,{children:"You need to register to use the service"}),e.jsxs(R,{children:[e.jsxs("li",{children:[e.jsx(c,{id:"name",name:"name",type:"name",placeholder:"Name",onBlur:n.handleBlur,onChange:n.handleChange,value:n.values.name}),n.errors.name&&n.touched.name?e.jsx(h,{children:n.errors.name}):null]}),e.jsxs("li",{children:[e.jsx(c,{id:"email",name:"email",type:"email",placeholder:"E-mail",onBlur:n.handleBlur,onChange:n.handleChange,value:n.values.email}),n.errors.email&&n.touched.email?e.jsx(h,{children:n.errors.email}):null]}),e.jsxs("li",{children:[e.jsx(c,{id:"password",name:"password",type:"password",placeholder:"Password",onBlur:n.handleBlur,onChange:n.handleChange,value:n.values.password}),n.errors.password&&n.touched.password?e.jsx(h,{children:n.errors.password}):null]})]}),e.jsx(d,{onClick:()=>{t()},type:"button",children:"Next"}),e.jsxs($,{children:[e.jsx(G,{children:"Do you already have an account?"}),e.jsx(U,{to:"/signin",children:"Sign in"})]})]})},s=i.label`
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
`,Y=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,_=i.ul`
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
`,D=i.ul`
display: flex;
flex-direction: column;
gap: 12px;
`,P=({formik:n,increment:a,decrement:t})=>e.jsxs(Y,{children:[e.jsx(x,{children:"Your goal"}),e.jsx(g,{children:"Choose a goal so that we can help you effectively"}),e.jsxs(_,{children:[e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",defaultChecked:!0,value:"Lose Fat"}),e.jsx(l,{}),e.jsx(r,{children:"Lose Fat"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",value:"Maintain"}),e.jsx(l,{}),e.jsx(r,{children:"Maintain"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"goal",value:"Gain Muscle"}),e.jsx(l,{}),e.jsx(r,{children:"Gain Muscle"})]})})]}),e.jsxs(D,{children:[e.jsx("li",{children:e.jsx(d,{onClick:()=>{a()},type:"button",children:"Next"})}),e.jsx("li",{children:e.jsx(d,{onClick:()=>{t()},type:"button",children:"Back"})})]})]}),k=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,H=i.ul`
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
`,J=i.span`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,O=i.div`
  @media screen and (min-width: 834px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
  }
`,V=i.label`
  display: block;
  margin-bottom: 12px;

  color: var(--color-primary-white);

  line-height: 1.4;
`,W=i.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`,q=({formik:n,increment:a,decrement:t})=>e.jsxs(k,{children:[e.jsx(x,{children:"Select gender, Age"}),e.jsxs(g,{children:["Choose a goal so that we can ",e.jsx("br",{}),"help you effectively"]}),e.jsxs(O,{children:[e.jsx(J,{children:"Gender"}),e.jsxs(H,{children:[e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"gender",value:"male",defaultChecked:!0}),e.jsx(l,{}),e.jsx(r,{children:"Male"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"gender",value:"female"}),e.jsx(l,{}),e.jsx(r,{children:"Female"})]})})]}),e.jsx(V,{htmlFor:"age",children:"Your age"}),e.jsx(c,{id:"age",name:"age",type:"age",placeholder:"Enter your age",onChange:n.handleChange,value:n.values.age,onBlur:n.handleBlur}),n.errors.age&&n.touched.age?e.jsx(h,{children:n.errors.age}):null]}),e.jsxs(W,{children:[e.jsx("li",{children:e.jsx(d,{onClick:()=>{a()},type:"button",children:"Next"})}),e.jsx("li",{children:e.jsx(d,{onClick:()=>{t()},type:"button",children:"Back"})})]})]}),z=i.div`
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`,K=i.ul`
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
`,Q=i.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`,X=({formik:n,increment:a,decrement:t})=>e.jsxs(z,{children:[e.jsx(x,{children:"Body parameters"}),e.jsx(g,{children:"Enter your parameters for correct performance tracking"}),e.jsxs(K,{children:[e.jsxs("li",{children:[e.jsx(w,{htmlFor:"height",children:"Height"}),e.jsx(c,{id:"height",name:"height",type:"height",placeholder:"Enter your height",onChange:n.handleChange,value:n.values.height,onBlur:n.handleBlur}),n.errors.height&&n.touched.height?e.jsx(h,{children:n.errors.height}):null]}),e.jsxs("li",{children:[e.jsx(w,{htmlFor:"weight",children:"Weight"}),e.jsx(c,{id:"weight",name:"weight",type:"weight",placeholder:"Enter your weight",onChange:n.handleChange,value:n.values.weight,onBlur:n.handleBlur}),n.errors.weight&&n.touched.weight?e.jsx(h,{children:n.errors.weight}):null]})]}),e.jsxs(Q,{children:[e.jsx("li",{children:e.jsx(d,{onClick:()=>{a()},type:"button",children:"Next"})}),e.jsx("li",{children:e.jsx(d,{onClick:()=>{t()},type:"button",children:"Back"})})]})]}),Z=i.div`
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
`,ie=({formik:n,decrement:a})=>e.jsxs(Z,{children:[e.jsx(x,{children:"Your Activity"}),e.jsxs(g,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]}),e.jsxs(ee,{children:[e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",defaultChecked:!0,value:"1.2"}),e.jsx(l,{}),e.jsx(r,{children:"1.2 - if you do not have physical activity and sedentary work"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",value:"1.375"}),e.jsx(l,{}),e.jsx(r,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",value:"1.55"}),e.jsx(l,{}),e.jsx(r,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",value:"1.725"}),e.jsx(l,{}),e.jsx(r,{children:"1.725 - if you train fully 6-7 times a week"})]})}),e.jsx("li",{children:e.jsxs(s,{children:[e.jsx("input",{onChange:n.handleChange,type:"radio",name:"activity",value:"1.9"}),e.jsx(l,{}),e.jsx(r,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})})]}),e.jsxs(ne,{children:[e.jsx(d,{type:"submit",children:"Sign Up"}),e.jsx(d,{onClick:()=>{a()},type:"button",children:"Back"})]})]}),ae=()=>{const n=f(),[a,t]=j.useState(1),[b,p]=j.useState(v),o=B({initialValues:{name:"",email:"",password:"",goal:"Lose Fat",gender:"male",age:"",height:"",weight:"",activity:"1.2"},onSubmit:y=>{alert(JSON.stringify(y,null,2)),n(S(y)),t(1)},validationSchema:L}),u=()=>{t(a+1)},m=()=>{t(a-1)};return j.useEffect(()=>{switch(a){case 1:p(v);break;case 2:p(N);break;case 3:p(F);break;case 4:p(I);break;case 5:p(E);break}},[a]),e.jsx(A,{image:b,children:e.jsxs("form",{onSubmit:o.handleSubmit,children:[a===1&&e.jsx(M,{increment:u,validationSchema:o.validationSchema,formik:o}),a===2&&e.jsx(P,{increment:u,decrement:m,formik:o}),a===3&&e.jsx(q,{increment:u,decrement:m,formik:o}),a===4&&e.jsx(X,{increment:u,decrement:m,formik:o}),a===5&&e.jsx(ie,{decrement:m,formik:o})]})})},de=()=>e.jsx(ae,{});export{de as default};
