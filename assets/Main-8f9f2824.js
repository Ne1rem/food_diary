import{s as t,j as e,r as p,g as R,h as k,b as g,i as G,L as w,u as H,k as N}from"./index-e5482518.js";import{i as f}from"./sprite-28cb5139.js";import{c as O,b as A,u as V}from"./index.esm-3abdb4e7.js";import{C as q,A as Y,p as _,a as K,D as U,F as X}from"./index.esm-fd2db792.js";import{n as x,L as J,t as Q,M as Z,s as ee,b as te,l as ie,d as re,a as ne}from"./snack-e3994ffa.js";import"./hoist-non-react-statics.cjs-86c99d73.js";import"./emotion-element-c39617d8.browser.esm-d97905e9.js";const oe=t.div`
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
`,ae=({children:i})=>e.jsx(oe,{children:i}),se=t.div`
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    padding: 24px 40px;
  }
`,F=t.li`
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
`,W=t.h3`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,$=t.p`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--color-primary-white);
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,le=t.span`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,ce=({calories:i,water:a})=>e.jsx(se,{children:e.jsxs("ul",{children:[e.jsxs(F,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${f}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(W,{children:"Calories"}),e.jsx($,{children:i})]})]}),e.jsxs(F,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${f}#icon-bottle`})}),e.jsxs("div",{children:[e.jsx(W,{children:"Water"}),e.jsxs($,{children:[a," ",e.jsx(le,{children:"ml"})]})]})]})]})}),de=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 5, 0.8);
`,pe=document.querySelector("#modal-root"),xe=({children:i,onClose:a})=>{p.useEffect(()=>{const o=n=>{n.code==="Escape"&&a()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[a]),p.useEffect(()=>{const o=document.body.classList.contains("noOverflow");return document.body.classList.add("noOverflow"),()=>{o||document.body.classList.remove("noOverflow")}},[]);const r=o=>{o.target===o.currentTarget&&a()};return R.createPortal(e.jsx(de,{onClick:r,children:i}),pe)},he=t.div`
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
`,me=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 29px;
    line-height: 1.2;
    text-align: center;
  }
`,ge=t.form`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,fe=t.label`
  display: block;
  margin-bottom: 32px;
`,we=t.span`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.43;
`,ue=t.span`
  display: block;
  position: relative;

  & input {
    border-color: ${i=>i.$isError&&"#E74A3B"};
  }

  & input {
    border-color: ${i=>i.$isCorrect&&"#3CBC81"};
  }
`,je=t.input`
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
`,ye=t.span`
  display: block;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`,be=t.p`
  padding-left: 10px;
  color: #e74a3b;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
`,ve=t.button`
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
`,Ce=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;

  text-align: center;
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,ze=O().shape({water:A().typeError("It must be a valid number").required("Please fill the input").integer("Please enter only integer value").min(1,"The min value is 1")}),ke=({onClose:i,successHandler:a})=>{const r=V({initialValues:{water:""},onSubmit:s=>{a(s.water),i()},validationSchema:ze}),o=r.errors.water&&r.touched.water,n=!r.errors.water&&r.touched.water;return e.jsx(xe,{onClose:i,children:e.jsxs(he,{children:[e.jsx(me,{children:"Add water intake"}),e.jsxs(ge,{onSubmit:r.handleSubmit,children:[e.jsxs(fe,{children:[e.jsx(we,{children:"How much water"}),e.jsxs(ue,{$isError:o,$isCorrect:n,children:[e.jsx(je,{type:"text",name:"water",onChange:r.handleChange,value:r.values.water}),e.jsxs(ye,{children:[n&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${f}#correct`})}),o&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${f}#error`})})]})]}),o?e.jsx(be,{children:r.errors.water}):null]}),e.jsx(ve,{type:"submit",children:"Confirm"}),e.jsx(Ce,{type:"button",onClick:i,children:"Cancel"})]})]})})},Fe=t.div`
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
`,We=t.button`
  position: absolute;
  top: 12px;
  right: 12px;

  @media screen and (min-width: 834px) {
    top: 24px;
    right: 24px;
  }
`,$e=t.div`
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
`,Se=t.h3`
  margin-bottom: 12px;
  color: var(--color-primary-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,Ie=t.div`
  margin-bottom: 16px;

  color: var(--color-primary-white);

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`,De=t.p`
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
`,Me=t.p`
  font-size: 14px;
  line-height: 1.43;
`,S=t.span`
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`,Be=t.div`
  position: relative;
  height: ${i=>`${i.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`,Te=t.p`
  position: absolute;
  left: 50%;
  bottom: ${i=>i.$isHighPercent?"50%":"calc(100% + 6px)"};
  transform: ${i=>i.$isHighPercent?"translate(-50%, 50%)":"translateX(-50%)"};
  color: ${i=>i.$isHighPercent?"black":"var(--color-primary-violet)"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
`,Ee=t.div``,Pe=t.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;

  border-radius: 12px;
  background-color: var(--color-primary-green-lite);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,Le=({dailyWater:i,water:a})=>{const[r,o]=p.useState(null),[n,s]=p.useState(!1);p.useEffect(()=>{o(a)},[a]);const l=()=>{s(!1)},h=async m=>{try{const j=await k.post("/user/water-intake",{water:m}),y=new Date,T=y.getFullYear(),E=("0"+(y.getMonth()+1)).slice(-2),P=("0"+y.getDate()).slice(-2),L=T+"-"+E+"-"+P;o(j.data.waters[L])}catch(j){console.log(j)}},d=m=>{h(m)},u=async()=>{try{const m=await k.delete("/user/water-intake");console.log(m),o(0)}catch(m){console.log(m)}},c=p.useMemo(()=>Math.floor(r/i*100),[i,r]);return e.jsxs(Fe,{children:[e.jsx(We,{onClick:u,children:e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${f}#icon-trash-bin`})})}),e.jsx($e,{children:e.jsx(Be,{$percent:c,children:e.jsxs(Te,{$isHighPercent:c>=84,children:[c,"%"]})})}),e.jsxs(Ee,{children:[e.jsx(Se,{children:"Water consumption"}),e.jsxs(Ie,{children:[e.jsxs(De,{children:[r," ",e.jsx(S,{children:"ml"})]}),i>r&&e.jsxs(Me,{children:["left: ",e.jsxs(S,{children:[i-r," ml"]})]})]}),e.jsxs(Pe,{onClick:()=>s(!0),children:[e.jsx("svg",{height:12,width:12,children:e.jsx("use",{href:`${f}#icon-plus`})}),"Add water intake"]})]}),n&&e.jsx(ke,{onClose:l,successHandler:d})]})};q.register(Y,_,K);const Re={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Ge={id:"bcgCircle",beforeDatasetsDraw(i){const{ctx:a}=i;a.save();const r=i.getDatasetMeta(0).data[0].x,o=i.getDatasetMeta(0).data[0].y,n=i.getDatasetMeta(0).data[0].innerRadius,s=i.getDatasetMeta(0).data[0].outerRadius,l=s-n,h=Math.PI/180;a.beginPath(),a.lineWidth=l,a.strokeStyle="rgba(41, 41, 40, 1)",a.arc(r,o,s-l/2,0,h*360,!1),a.stroke()}},M=({dailyCalories:i,inputValue:a,chartBcg:r})=>{a>i&&(a=i,r="red");const o=i-a,n={datasets:[{label:[],data:[a,o],backgroundColor:[r,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(U,{options:Re,data:n,plugins:[Ge]})})},He=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Ne=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Oe=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,Ae=t.div`
  display: flex;
  flex-direction: column;
`,Ve=t.h3`
  color: var(--color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,qe=t.div`
  display: flex;
  column-gap: 12px;
`,I=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,D=t.p`
  width: 78px;
  display: flex ;
  flex-direction: row;
  gap: 4px;
`,b=i=>{const{title:a,chartBcg:r,elementGoal:o,elementValue:n}=i;let s=(o-n).toFixed(1);s<0&&(s=0);let l=Math.round(n*100/o);return(l===1/0||isNaN(l))&&(l=0),l>100&&(l=100),e.jsx(e.Fragment,{children:e.jsxs(He,{children:[e.jsxs(Ne,{children:[e.jsx(M,{dailyCalories:o,inputValue:n,chartBcg:r}),e.jsx(Oe,{children:e.jsx("p",{children:`${l}%`})})]}),e.jsxs(Ae,{children:[e.jsx(Ve,{children:a}),e.jsxs(qe,{children:[e.jsxs(D,{children:[e.jsx("span",{style:{color:"white"},children:"Goal:"}),e.jsx(I,{children:o})]}),e.jsxs(D,{children:[e.jsx("span",{style:{color:"white"},children:"left:"}),e.jsx(I,{children:s})]})]})]})]})})},Ye=t.div`
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
`,_e=t.div`
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
`,Ke=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Ue=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Xe="#FFC4F7",Je="#FFF3B7",Qe="#B6B6B6",Ze=()=>{const i=g(c=>c.user.user.recommendedCalories),a=g(c=>c.user.user.recommendedCarbs),r=g(c=>c.user.user.recommendedFat),o=g(c=>c.user.user.recommendedProtein),n=g(c=>c.intake.intake),s=isNaN(n==null?void 0:n.totalCalories)?0:n==null?void 0:n.totalCalories,l=isNaN(n==null?void 0:n.totalCarbs)?0:n==null?void 0:n.totalCarbs,h=isNaN(n==null?void 0:n.totalFat)?0:n==null?void 0:n.totalFat,d=isNaN(n==null?void 0:n.totalProtein)?0:n==null?void 0:n.totalProtein;let u="#45FFBC";return e.jsx("div",{children:e.jsxs(Ye,{children:[e.jsxs(_e,{children:[e.jsx(M,{dailyCalories:i,inputValue:s,chartBcg:u}),e.jsxs(Ke,{children:[e.jsx("p",{style:{color:"white"},children:s}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Ue,{children:[e.jsx(b,{title:"Carbonohidrates",chartBcg:Xe,elementGoal:a,elementValue:l}),e.jsx(b,{title:"Protein",chartBcg:Je,elementGoal:o,elementValue:d}),e.jsx(b,{title:"Fat",chartBcg:Qe,elementGoal:r,elementValue:h})]})]})})},et=()=>e.jsx("div",{children:e.jsx(Ze,{})}),tt=t.div`
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
  }
`,v=t.div`
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
`,C=t.h2`
  margin-bottom: 6px;

  color: var(--color-primary-white);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,z=t.div`
  background-color: var(--color-primary-black-2);
  border-radius: 12px;
`,it=()=>{const i=g(G),{recommendedWater:a,recommendedCalories:r,totalWater:o}=i,n=a&&a.toFixed(1)*1e3;return e.jsxs(tt,{children:[e.jsxs(v,{children:[e.jsx(C,{children:"Daily goal"}),e.jsx(z,{children:e.jsx(ce,{calories:r,water:n})})]}),e.jsxs(v,{children:[e.jsx(C,{children:"Water"}),e.jsx(z,{children:e.jsx(Le,{water:o,dailyWater:n})})]}),e.jsxs(v,{children:[e.jsx(C,{children:"Food"}),e.jsx(z,{children:e.jsx(et,{})})]})]})},rt=t.div`
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
`,nt=t.h1`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;t(w)`
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
`;const ot=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`,B=t.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,at=t(w)`
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
    ${B} {
      color: var(--color-primary-green-lite);
    }
  }

  @media only screen and (min-width: 835px) {
    font-size: 16px;
    line-height: 1.37;
  }
`,st=()=>e.jsx(e.Fragment,{children:e.jsxs(at,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(B,{children:e.jsx(X,{})})]})}),lt=t.div`
  padding: 0 0 138px 0;

  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    margin-top: 20px;
    padding: 0 0 27px 0;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    margin-top: 20px;
    padding: 0 0 10px 0;
  }
`,ct=t.div`
  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,dt=t.h2`
  margin-bottom: 16px;
  color: var(--color-primary-white);
  font-size: 22px;
  font-weight: 400;
  line-height: 1.45;

  @media (max-width: 833px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,pt=t.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 676px;

  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    width: 300px;
    gap: 10px;

    & > div:nth-child(n + 3) {
      display: none;
    }
  }
`,xt=t.div`
  width: 328px;
  display: flex;
  flex-direction: row;
  background-color: #0f0f0f;
  color: var(--color-primary-white);
  border-radius: 12px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 24px;

  img {
    width: 46px;
    height: 46px;
  }

  h3,
  p {
    margin: 2px 0;
  }

  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 380px;
  }
`,ht=t.p`
  display: block;
  margin-top: 16px;
  color: var(--color-primary-grey);
  font-size: 16px;

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,mt=t.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;

  @media (max-width: 833px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
  }
`,gt=t.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,ft=t.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  align-items: center;
`,wt=t.p`
  color: var(--color-primary-grey);
`,ut=()=>{const[i,a]=p.useState([]);return p.useEffect(()=>{(async()=>{try{const o=await k.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");a(o.data.slice(0,4))}catch(o){console.error("Error fetching recommended food:",o)}})()},[]),e.jsx(lt,{children:e.jsxs(ct,{children:[e.jsx(dt,{children:"Recommended Food"}),e.jsx(pt,{children:i.map((r,o)=>e.jsxs(xt,{children:[e.jsx("img",{src:r.img,alt:r.name}),e.jsxs(mt,{children:[e.jsx(gt,{children:r.name}),e.jsxs(ft,{children:[e.jsx("p",{children:r.amount}),e.jsxs(wt,{children:[r.calories," calories"]})]})]})]},o))}),e.jsx(w,{to:"/recommended-food",children:e.jsx(ht,{children:"See more →"})})]})})},jt=x.div`
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
line-height: 1.33;`,bt=x.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 8px;
  }`,vt=x.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,Ct=x.button`

background-color: transparent;
border: none;
@media screen and (max-width: 833px) {
  position: absolute;
  top: 73px;
  left: 63px;
  }`,zt=x.button`
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
  }`,kt=({name:i,img:a,intake:r})=>{const[o,n]=p.useState(!1),s="POST",l=null,h=()=>{n(!o)};let d;switch(i){case"breakfast":d=r==null?void 0:r.breakfast;break;case"lunch":d=r==null?void 0:r.lunch;break;case"dinner":d=r==null?void 0:r.dinner;break;case"snack":d=r==null?void 0:r.snack;break;default:d=null;break}return e.jsxs(jt,{children:[e.jsxs(bt,{children:[e.jsx("img",{src:a,width:36,height:36}),e.jsx(yt,{children:i})]}),!d||d.dish.length===0?e.jsx(zt,{onClick:h,children:"+ Record your meal"}):e.jsxs(e.Fragment,{children:[e.jsx(J,{name:i}),e.jsx(Ct,{children:e.jsx(vt,{children:e.jsx("use",{href:`${Q}#icon-trash`})})})]}),o&&e.jsx(Z,{name:i,img:a,onClose:h,requestType:s,idIntake:l})]})},Ft=x.div`
width: 320px;
text-align: left;
@media screen and (min-width: 834px) {
    width: 558px;
  }`,Wt=x.h2`
margin-bottom: 16px;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.33;
@media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }`,$t=x(w)`
margin-left: 16px;
color: var(--color-primary-grey);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
&:hover{color: var(--color-primary-green-lite);}
`,St=x.ul`
   display:flex;
   flex-direction: column;
   gap: 28px;
  `,It=()=>{const i=H();p.useEffect(()=>{i(N())},[i]);const a=g(ee),r=[{name:"breakfast",img:te},{name:"lunch",img:ie},{name:"dinner",img:re},{name:"snack",img:ne}];return e.jsxs(Ft,{children:[e.jsxs(Wt,{children:["Diary",e.jsx($t,{to:"/diary",children:"See more"})]}),e.jsx(St,{children:r.map(o=>e.jsx(kt,{name:o.name,img:o.img,intake:a},o.name))})]})},Rt=()=>e.jsx("section",{children:e.jsxs(ae,{children:[e.jsxs(rt,{children:[e.jsx(nt,{children:"Today"}),e.jsx(st,{})]}),e.jsx(it,{}),e.jsxs(ot,{children:[e.jsx(It,{}),e.jsx(ut,{})]})]})});export{Rt as default};
