import{s as r,j as e,r as p,d as R,e as F,g as m,h as H,L as u,u as M,i as N,k as A}from"./index-f25eabe8.js";import{i as f}from"./sprite-74f4977e.js";import{c as O,b as V,u as q}from"./index.esm-ef617290.js";import{C as U,A as Y,p as _,a as K,D as X,F as J}from"./index.esm-00b9db57.js";import{C as Q,R as Z,T as ee,F as te,a as re,b as ne,S as oe,W as ie,c as ae,d as se}from"./RecFoodOnMainStyled-34b39154.js";import{n as x,L as ce,t as le,M as de,s as pe,b as xe,l as he,d as me,a as ge}from"./snack-28c544b9.js";import"./hoist-non-react-statics.cjs-c117cc16.js";import"./emotion-element-c39617d8.browser.esm-b23e866b.js";const fe=r.div`
  width: 100%;
  padding: 0 10px;

  @media screen and (min-width: 320px) {
    max-width: 320px;
    margin: 0 auto;
  }

  @media screen and (min-width: 834px) {
    max-width: 800px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1392px;
  }
`,ue=({children:t})=>e.jsx(fe,{children:t}),we=r.div`
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    padding: 24px 40px;
  }
`,z=r.li`
  display: flex;
  align-items: center;
  gap: 20px;

  & + & {
    margin-top: 20px;
  }

  @media screen and (min-width: 834px) {
    & + & {
      margin-top: 32px;
    }
  }
`,W=r.h3`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,S=r.p`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--color-primary-white);
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,be=r.span`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,je=({calories:t,water:a})=>e.jsx(we,{children:e.jsxs("ul",{children:[e.jsxs(z,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${f}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(W,{children:"Calories"}),e.jsx(S,{children:t})]})]}),e.jsxs(z,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${f}#icon-bottle`})}),e.jsxs("div",{children:[e.jsx(W,{children:"Water"}),e.jsxs(S,{children:[a," ",e.jsx(be,{children:"ml"})]})]})]})]})}),ye=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 5, 0.8);
`,ve=document.querySelector("#modal-root"),Ce=({children:t,onClose:a})=>{p.useEffect(()=>{const i=o=>{o.code==="Escape"&&a()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[a]),p.useEffect(()=>{const i=document.body.classList.contains("noOverflow");return document.body.classList.add("noOverflow"),()=>{i||document.body.classList.remove("noOverflow")}},[]);const n=i=>{i.target===i.currentTarget&&a()};return R.createPortal(e.jsx(ye,{onClick:n,children:t}),ve)},ke=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 16px 12px 24px;

  background-color: var(--color-primary-black-2);
  border-radius: 12px;
  color: var(--color-primary-white);
  font-weight: 500;

  @media screen and (min-width: 834px) {
    width: 338px;
    padding: 24px 40px;
  }
`,Fe=r.h2`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 29px;
    line-height: 1.2;
    text-align: center;
  }
`,ze=r.form`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,We=r.label`
  display: block;
  margin-bottom: 32px;
`,Se=r.span`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.43;
`,$e=r.span`
  display: block;
  position: relative;

  & input {
    border-color: ${t=>t.$isError&&"#E74A3B"};
  }

  & input {
    border-color: ${t=>t.$isCorrect&&"#3CBC81"};
  }
`,Ie=r.input`
  display: block;
  width: 100%;
  padding: 8px 30px 8px 10px;
  border: 1px solid var(--color-primary-green-lite);

  font-weight: 400;
  border-radius: 12px;
  background-color: var(--color-primary-black-2);
  color: var(--color-primary-white);

  &::placeholder {
    color: var(--color-primary-grey);
  }
`,De=r.span`
  display: block;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`,Me=r.p`
  padding-left: 10px;
  color: #e74a3b;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
`,Be=r.button`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  padding: 8px 10px;

  border-radius: 12px;
  text-align: center;
  background: var(--color-primary-green-lite);
  color: var(--color-primary-black-2);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`,Te=r.button`
  display: block;
  width: 100%;
  padding: 8px 10px;

  text-align: center;
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  border-radius: 12px;

  transition:
    background-color 0.4s cubic-bezier(0, 0, 1, 1),
    color 0.4s cubic-bezier(0, 0, 1, 1);

  &:hover {
    color: var(--color-primary-black-2);
    background: var(--color-primary-green-lite);
  }
`,Ee=O().shape({water:V().typeError("It must be a valid number").required("Please fill the input").integer("Please enter only integer value").min(1,"The min value is 1")}),Pe=({onClose:t,successHandler:a})=>{const n=q({initialValues:{water:""},onSubmit:s=>{a(s.water),t()},validationSchema:Ee}),i=n.errors.water&&n.touched.water,o=!n.errors.water&&n.touched.water;return e.jsx(Ce,{onClose:t,children:e.jsxs(ke,{children:[e.jsx(Fe,{children:"Add water intake"}),e.jsxs(ze,{onSubmit:n.handleSubmit,children:[e.jsxs(We,{children:[e.jsx(Se,{children:"How much water"}),e.jsxs($e,{$isError:i,$isCorrect:o,children:[e.jsx(Ie,{type:"text",name:"water",placeholder:"Amount of vater in ml",onChange:n.handleChange,value:n.values.water}),e.jsxs(De,{children:[o&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${f}#correct`})}),i&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${f}#error`})})]})]}),i?e.jsx(Me,{children:n.errors.water}):null]}),e.jsx(Be,{type:"submit",children:"Confirm"}),e.jsx(Te,{type:"button",onClick:t,children:"Cancel"})]})]})})},Le=r.div`
  padding: 16px 22px 16px 12px;
  display: flex;
  gap: 20px;
  position: relative;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 24px 22px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 24px 24px 40px;
  }
`,Ge=r.button`
  position: absolute;
  top: 12px;
  right: 12px;

  @media screen and (min-width: 834px) {
    top: 24px;
    right: 24px;
  }
`,Re=r.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: flex-end;
  width: 80px;
  height: 192px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-1);

  border-radius: 20px;
  background: var(--primary-color-black);
`,He=r.h3`
  margin-bottom: 12px;
  color: var(--color-primary-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,Ne=r.div`
  margin-bottom: 16px;

  color: var(--color-primary-white);

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`,Ae=r.p`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;

  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 1.18;
  }
`,Oe=r.p`
  font-size: 14px;
  line-height: 1.43;
`,$=r.span`
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`,Ve=r.div`
  position: relative;
  height: ${t=>`${t.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`,qe=r.p`
  position: absolute;
  left: 50%;
  bottom: ${t=>t.$isHighPercent?"50%":"calc(100% + 6px)"};
  transform: ${t=>t.$isHighPercent?"translate(-50%, 50%)":"translateX(-50%)"};
  color: ${t=>t.$isHighPercent?"black":"var(--color-primary-violet)"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
`,Ue=r.div``,Ye=r.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;

  border-radius: 12px;
  background-color: var(--color-primary-green-lite);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,_e=({dailyWater:t,water:a})=>{const[n,i]=p.useState(null),[o,s]=p.useState(!1);p.useEffect(()=>{i(a)},[a]);const c=()=>{s(!1)},h=async g=>{try{const b=await F.post("/user/water-intake",{water:g}),j=new Date,E=j.getFullYear(),P=("0"+(j.getMonth()+1)).slice(-2),L=("0"+j.getDate()).slice(-2),G=E+"-"+P+"-"+L;i(b.data.waters[G])}catch(b){console.log(b)}},d=g=>{h(g)},w=async()=>{try{const g=await F.delete("/user/water-intake");console.log(g),i(0)}catch(g){console.log(g)}},l=p.useMemo(()=>Math.floor(n/t*100),[t,n]);return e.jsxs(Le,{children:[e.jsx(Ge,{onClick:w,children:e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${f}#icon-trash-bin`})})}),e.jsx(Re,{children:e.jsx(Ve,{$percent:l,children:e.jsxs(qe,{$isHighPercent:l>=84,children:[l,"%"]})})}),e.jsxs(Ue,{children:[e.jsx(He,{children:"Water consumption"}),e.jsxs(Ne,{children:[e.jsxs(Ae,{children:[n," ",e.jsx($,{children:"ml"})]}),t>n&&e.jsxs(Oe,{children:["left: ",e.jsxs($,{children:[t-n," ml"]})]})]}),e.jsxs(Ye,{onClick:()=>s(!0),children:[e.jsx("svg",{height:12,width:12,children:e.jsx("use",{href:`${f}#icon-plus`})}),"Add water intake"]})]}),o&&e.jsx(Pe,{onClose:c,successHandler:d})]})};U.register(Y,_,K);const Ke={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Xe={id:"bcgCircle",beforeDatasetsDraw(t){const{ctx:a}=t;a.save();const n=t.getDatasetMeta(0).data[0].x,i=t.getDatasetMeta(0).data[0].y,o=t.getDatasetMeta(0).data[0].innerRadius,s=t.getDatasetMeta(0).data[0].outerRadius,c=s-o,h=Math.PI/180;a.beginPath(),a.lineWidth=c,a.strokeStyle="rgba(41, 41, 40, 1)",a.arc(n,i,s-c/2,0,h*360,!1),a.stroke()}},B=({dailyCalories:t,inputValue:a,chartBcg:n})=>{a>t&&(a=t,n="red");const i=t-a,o={datasets:[{label:[],data:[a,i],backgroundColor:[n,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(X,{options:Ke,data:o,plugins:[Xe]})})},Je=r.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Qe=r.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Ze=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,et=r.div`
  display: flex;
  flex-direction: column;
`,tt=r.h3`
  color: var(--color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,rt=r.div`
  display: flex;
  column-gap: 12px;
`,I=r.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,D=r.p`
  width: 78px;
  display: flex ;
  flex-direction: row;
  gap: 4px;
`,y=t=>{const{title:a,chartBcg:n,elementGoal:i,elementValue:o}=t;let s=(i-o).toFixed(1);s<0&&(s=0);let c=Math.round(o*100/i);return(c===1/0||isNaN(c))&&(c=0),c>100&&(c=100),e.jsx(e.Fragment,{children:e.jsxs(Je,{children:[e.jsxs(Qe,{children:[e.jsx(B,{dailyCalories:i,inputValue:o,chartBcg:n}),e.jsx(Ze,{children:e.jsx("p",{children:`${c}%`})})]}),e.jsxs(et,{children:[e.jsx(tt,{children:a}),e.jsxs(rt,{children:[e.jsxs(D,{children:[e.jsx("span",{style:{color:"white"},children:"Goal:"}),e.jsx(I,{children:i})]}),e.jsxs(D,{children:[e.jsx("span",{style:{color:"white"},children:"left:"}),e.jsx(I,{children:s})]})]})]})]})})},nt=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px 12px;
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background-color: var(--color-primary-black-2);
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 36px 40px;
    flex-direction: row;
    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
    height: 240px;
  }
`,ot=r.div`
  position: relative;

  width: 168px;
  height: 168px;

  font-size: 32px;
  font-weight: 500;
  line-height: 1.19;

  p:last-child {
    color: var(--color-primary-grey);

    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
  }
`,it=r.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,at=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,st="#FFC4F7",ct="#FFF3B7",lt="#B6B6B6",dt=()=>{const t=m(l=>l.user.user.recommendedCalories),a=m(l=>l.user.user.recommendedCarbs),n=m(l=>l.user.user.recommendedFat),i=m(l=>l.user.user.recommendedProtein),o=m(l=>l.intake.intake),s=isNaN(o==null?void 0:o.totalCalories)?0:o==null?void 0:o.totalCalories,c=isNaN(o==null?void 0:o.totalCarbs)?0:o==null?void 0:o.totalCarbs,h=isNaN(o==null?void 0:o.totalFat)?0:o==null?void 0:o.totalFat,d=isNaN(o==null?void 0:o.totalProtein)?0:o==null?void 0:o.totalProtein;let w="#45FFBC";return e.jsx("div",{children:e.jsxs(nt,{children:[e.jsxs(ot,{children:[e.jsx(B,{dailyCalories:t,inputValue:s,chartBcg:w}),e.jsxs(it,{children:[e.jsx("p",{style:{color:"white"},children:s}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(at,{children:[e.jsx(y,{title:"Carbonohidrates",chartBcg:st,elementGoal:a,elementValue:c}),e.jsx(y,{title:"Protein",chartBcg:ct,elementGoal:i,elementValue:d}),e.jsx(y,{title:"Fat",chartBcg:lt,elementGoal:n,elementValue:h})]})]})})},pt=()=>e.jsx("div",{children:e.jsx(dt,{})}),xt=r.div`
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
  }
`,v=r.div`
  & + & {
    margin-top: 20px;
  }

  @media screen and (min-width: 834px) {
    flex-basis: 48.7%;
    & + & {
      margin-top: unset;
    }

    &:last-child {
      flex: 1;
    }

    @media screen and (min-width: 1440px) {
      &:first-child {
        flex-basis: 328px;
      }

      &:nth-child(2) {
        flex-basis: 444px;
      }

      &:last-child {
        flex-basis: 560px;
      }
    }
  }
`,C=r.h2`
  margin-bottom: 6px;

  color: var(--color-primary-white);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,k=r.div`
  background-color: var(--color-primary-black-2);
  border-radius: 12px;
`,ht=()=>{const t=m(H),{recommendedWater:a,recommendedCalories:n,totalWater:i}=t,o=a&&a.toFixed(1)*1e3;return e.jsxs(xt,{children:[e.jsxs(v,{children:[e.jsx(C,{children:"Daily goal"}),e.jsx(k,{children:e.jsx(je,{calories:n,water:o})})]}),e.jsxs(v,{children:[e.jsx(C,{children:"Water"}),e.jsx(k,{children:e.jsx(_e,{water:i,dailyWater:o})})]}),e.jsxs(v,{children:[e.jsx(C,{children:"Food"}),e.jsx(k,{children:e.jsx(pt,{})})]})]})},mt=r.div`
  margin-top: 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 834px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
    margin-top: 16px;
  }
`,gt=r.h1`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;r(u)`
  display: flex;
  align-items: center;
  gap: 6px;

  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.37;
  }
`;const ft=r.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`,T=r.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,ut=r(u)`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--color-primary-grey);
  transition: all 0.3s ease;

  &:hover {
    ${T} {
      color: var(--color-primary-green-lite);
    }
  }

  @media only screen and (min-width: 835px) {
    font-size: 16px;
    line-height: 1.37;
  }
`,wt=()=>e.jsx(e.Fragment,{children:e.jsxs(ut,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(T,{children:e.jsx(J,{})})]})}),bt=()=>{const[t,a]=p.useState([]);return p.useEffect(()=>{(async()=>{try{const i=await F.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");a(i.data.slice(0,4))}catch(i){console.error("Error fetching recommended food:",i)}})()},[]),e.jsx(Q,{children:e.jsxs(Z,{children:[e.jsx(ee,{children:"Recommended Food"}),e.jsx(te,{children:t.map((n,i)=>e.jsxs(re,{children:[e.jsx("img",{src:n.img,alt:n.name}),e.jsxs(ne,{children:[e.jsx(oe,{children:n.name}),e.jsxs(ie,{children:[e.jsx("p",{children:n.amount}),e.jsxs(ae,{children:[n.calories," calories"]})]})]})]},i))}),e.jsx(u,{to:"/recommended-food",children:e.jsx(se,{children:"See more →"})})]})})},jt=x.div`
position: relative;
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  @media screen and (max-width: 834px) {
   width: 300px;
  }`,yt=x.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
font-size: 18px;
font-weight: 500;
line-height: 1.33;`,vt=x.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 8px;
  }`,Ct=x.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,kt=x.button`

background-color: transparent;
border: none;
@media screen and (max-width: 833px) {
  position: absolute;
  top: 73px;
  left: 63px;
  }`,Ft=x.button`
background: none;
border: none;
margin-left: 0;
color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
@media screen and (min-width: 834px) {
    margin-right: 180px;
    margin-left: 16px;
  }`,zt=({name:t,img:a,intake:n})=>{const[i,o]=p.useState(!1),s="POST",c=null,h=()=>{o(!i)};let d;switch(t){case"breakfast":d=n==null?void 0:n.breakfast;break;case"lunch":d=n==null?void 0:n.lunch;break;case"dinner":d=n==null?void 0:n.dinner;break;case"snack":d=n==null?void 0:n.snack;break;default:d=null;break}return e.jsxs(jt,{children:[e.jsxs(vt,{children:[e.jsx("img",{src:a,width:36,height:36}),e.jsx(yt,{children:t})]}),!d||d.dish.length===0?e.jsx(Ft,{onClick:h,children:"+ Record your meal"}):e.jsxs(e.Fragment,{children:[e.jsx(ce,{name:t}),e.jsx(kt,{type:"button",children:e.jsx(Ct,{children:e.jsx("use",{href:`${le}#icon-trash`})})})]}),i&&e.jsx(de,{name:t,img:a,onClose:h,requestType:s,idIntake:c})]})},Wt=x.div`
width: 300px;
text-align: left;
@media screen and (min-width: 834px) {
    width: 558px;
  }`,St=x.h2`
margin-bottom: 16px;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.33;
@media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }`,$t=x(u)`
margin-left: 16px;
color: var(--color-primary-grey);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
&:hover{color: var(--color-primary-green-lite);}
`,It=x.ul`
   display:flex;
   flex-direction: column;
   gap: 28px;
  `,Dt=()=>{const t=M();p.useEffect(()=>{t(N())},[t]);const a=m(pe),n=[{name:"breakfast",img:xe},{name:"lunch",img:he},{name:"dinner",img:me},{name:"snack",img:ge}];return e.jsxs(Wt,{children:[e.jsxs(St,{children:["Diary",e.jsx($t,{to:"/diary",children:"See more"})]}),e.jsx(It,{children:n.map(i=>e.jsx(zt,{name:i.name,img:i.img,intake:a},i.name))})]})},Ht=()=>{const t=M(),a=m(n=>n.auth.needGetCurrentUser);return p.useEffect(()=>{a&&t(A())},[t,a]),e.jsx("section",{children:e.jsxs(ue,{children:[e.jsxs(mt,{children:[e.jsx(gt,{children:"Today"}),e.jsx(wt,{})]}),e.jsx(ht,{}),e.jsxs(ft,{children:[e.jsx(Dt,{}),e.jsx(bt,{})]})]})})};export{Ht as default};
