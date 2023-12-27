import{s as r,j as e,r as p,g as R,h as F,b as g,i as G,L as u,u as H,k as N}from"./index-27172bc8.js";import{i as f}from"./sprite-68df3b8d.js";import{c as O,b as A,u as V}from"./index.esm-027fea15.js";import{C as q,A as Y,p as _,a as K,D as U,F as X}from"./index.esm-756d8172.js";import{C as J,R as Q,T as Z,F as ee,a as te,b as re,S as ne,W as ie,c as oe,d as ae}from"./RecFoodOnMainStyled-0dfbc46d.js";import{n as x,L as se,t as le,M as ce,s as de,b as pe,l as xe,d as he,a as me}from"./snack-7f046f82.js";import"./hoist-non-react-statics.cjs-52649681.js";import"./emotion-element-c39617d8.browser.esm-f0725941.js";const ge=r.div`
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
`,fe=({children:t})=>e.jsx(ge,{children:t}),ue=r.div`
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    padding: 24px 40px;
  }
`,W=r.li`
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
`,z=r.h3`
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
`,we=r.span`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,je=({calories:t,water:a})=>e.jsx(ue,{children:e.jsxs("ul",{children:[e.jsxs(W,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${f}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(z,{children:"Calories"}),e.jsx(S,{children:t})]})]}),e.jsxs(W,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${f}#icon-bottle`})}),e.jsxs("div",{children:[e.jsx(z,{children:"Water"}),e.jsxs(S,{children:[a," ",e.jsx(we,{children:"ml"})]})]})]})]})}),be=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 5, 0.8);
`,ye=document.querySelector("#modal-root"),ve=({children:t,onClose:a})=>{p.useEffect(()=>{const o=i=>{i.code==="Escape"&&a()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[a]),p.useEffect(()=>{const o=document.body.classList.contains("noOverflow");return document.body.classList.add("noOverflow"),()=>{o||document.body.classList.remove("noOverflow")}},[]);const n=o=>{o.target===o.currentTarget&&a()};return R.createPortal(e.jsx(be,{onClick:n,children:t}),ye)},Ce=r.div`
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
`,ke=r.h2`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 29px;
    line-height: 1.2;
    text-align: center;
  }
`,Fe=r.form`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,We=r.label`
  display: block;
  margin-bottom: 32px;
`,ze=r.span`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.43;
`,Se=r.span`
  display: block;
  position: relative;

  & input {
    border-color: ${t=>t.$isError&&"#E74A3B"};
  }

  & input {
    border-color: ${t=>t.$isCorrect&&"#3CBC81"};
  }
`,$e=r.input`
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
`,Ie=r.span`
  display: block;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`,De=r.p`
  padding-left: 10px;
  color: #e74a3b;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
`,Me=r.button`
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
`,Be=r.button`
  display: block;
  width: 100%;
  padding: 8px 10px;

  text-align: center;
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,Te=O().shape({water:A().typeError("It must be a valid number").required("Please fill the input").integer("Please enter only integer value").min(1,"The min value is 1")}),Ee=({onClose:t,successHandler:a})=>{const n=V({initialValues:{water:""},onSubmit:s=>{a(s.water),t()},validationSchema:Te}),o=n.errors.water&&n.touched.water,i=!n.errors.water&&n.touched.water;return e.jsx(ve,{onClose:t,children:e.jsxs(Ce,{children:[e.jsx(ke,{children:"Add water intake"}),e.jsxs(Fe,{onSubmit:n.handleSubmit,children:[e.jsxs(We,{children:[e.jsx(ze,{children:"How much water"}),e.jsxs(Se,{$isError:o,$isCorrect:i,children:[e.jsx($e,{type:"text",name:"water",onChange:n.handleChange,value:n.values.water}),e.jsxs(Ie,{children:[i&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${f}#correct`})}),o&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${f}#error`})})]})]}),o?e.jsx(De,{children:n.errors.water}):null]}),e.jsx(Me,{type:"submit",children:"Confirm"}),e.jsx(Be,{type:"button",onClick:t,children:"Cancel"})]})]})})},Pe=r.div`
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
`,Le=r.button`
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
`,Ge=r.h3`
  margin-bottom: 12px;
  color: var(--color-primary-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,He=r.div`
  margin-bottom: 16px;

  color: var(--color-primary-white);

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`,Ne=r.p`
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
`,Ae=r.div`
  position: relative;
  height: ${t=>`${t.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`,Ve=r.p`
  position: absolute;
  left: 50%;
  bottom: ${t=>t.$isHighPercent?"50%":"calc(100% + 6px)"};
  transform: ${t=>t.$isHighPercent?"translate(-50%, 50%)":"translateX(-50%)"};
  color: ${t=>t.$isHighPercent?"black":"var(--color-primary-violet)"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
`,qe=r.div``,Ye=r.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;

  border-radius: 12px;
  background-color: var(--color-primary-green-lite);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,_e=({dailyWater:t,water:a})=>{const[n,o]=p.useState(null),[i,s]=p.useState(!1);p.useEffect(()=>{o(a)},[a]);const l=()=>{s(!1)},h=async m=>{try{const j=await F.post("/user/water-intake",{water:m}),b=new Date,T=b.getFullYear(),E=("0"+(b.getMonth()+1)).slice(-2),P=("0"+b.getDate()).slice(-2),L=T+"-"+E+"-"+P;o(j.data.waters[L])}catch(j){console.log(j)}},d=m=>{h(m)},w=async()=>{try{const m=await F.delete("/user/water-intake");console.log(m),o(0)}catch(m){console.log(m)}},c=p.useMemo(()=>Math.floor(n/t*100),[t,n]);return e.jsxs(Pe,{children:[e.jsx(Le,{onClick:w,children:e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${f}#icon-trash-bin`})})}),e.jsx(Re,{children:e.jsx(Ae,{$percent:c,children:e.jsxs(Ve,{$isHighPercent:c>=84,children:[c,"%"]})})}),e.jsxs(qe,{children:[e.jsx(Ge,{children:"Water consumption"}),e.jsxs(He,{children:[e.jsxs(Ne,{children:[n," ",e.jsx($,{children:"ml"})]}),t>n&&e.jsxs(Oe,{children:["left: ",e.jsxs($,{children:[t-n," ml"]})]})]}),e.jsxs(Ye,{onClick:()=>s(!0),children:[e.jsx("svg",{height:12,width:12,children:e.jsx("use",{href:`${f}#icon-plus`})}),"Add water intake"]})]}),i&&e.jsx(Ee,{onClose:l,successHandler:d})]})};q.register(Y,_,K);const Ke={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Ue={id:"bcgCircle",beforeDatasetsDraw(t){const{ctx:a}=t;a.save();const n=t.getDatasetMeta(0).data[0].x,o=t.getDatasetMeta(0).data[0].y,i=t.getDatasetMeta(0).data[0].innerRadius,s=t.getDatasetMeta(0).data[0].outerRadius,l=s-i,h=Math.PI/180;a.beginPath(),a.lineWidth=l,a.strokeStyle="rgba(41, 41, 40, 1)",a.arc(n,o,s-l/2,0,h*360,!1),a.stroke()}},M=({dailyCalories:t,inputValue:a,chartBcg:n})=>{a>t&&(a=t,n="red");const o=t-a,i={datasets:[{label:[],data:[a,o],backgroundColor:[n,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(U,{options:Ke,data:i,plugins:[Ue]})})},Xe=r.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Je=r.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Qe=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,Ze=r.div`
  display: flex;
  flex-direction: column;
`,et=r.h3`
  color: var(--color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,tt=r.div`
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
`,y=t=>{const{title:a,chartBcg:n,elementGoal:o,elementValue:i}=t;let s=(o-i).toFixed(1);s<0&&(s=0);let l=Math.round(i*100/o);return(l===1/0||isNaN(l))&&(l=0),l>100&&(l=100),e.jsx(e.Fragment,{children:e.jsxs(Xe,{children:[e.jsxs(Je,{children:[e.jsx(M,{dailyCalories:o,inputValue:i,chartBcg:n}),e.jsx(Qe,{children:e.jsx("p",{children:`${l}%`})})]}),e.jsxs(Ze,{children:[e.jsx(et,{children:a}),e.jsxs(tt,{children:[e.jsxs(D,{children:[e.jsx("span",{style:{color:"white"},children:"Goal:"}),e.jsx(I,{children:o})]}),e.jsxs(D,{children:[e.jsx("span",{style:{color:"white"},children:"left:"}),e.jsx(I,{children:s})]})]})]})]})})},rt=r.div`
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
`,nt=r.div`
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
`,ot=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,at="#FFC4F7",st="#FFF3B7",lt="#B6B6B6",ct=()=>{const t=g(c=>c.user.user.recommendedCalories),a=g(c=>c.user.user.recommendedCarbs),n=g(c=>c.user.user.recommendedFat),o=g(c=>c.user.user.recommendedProtein),i=g(c=>c.intake.intake),s=isNaN(i==null?void 0:i.totalCalories)?0:i==null?void 0:i.totalCalories,l=isNaN(i==null?void 0:i.totalCarbs)?0:i==null?void 0:i.totalCarbs,h=isNaN(i==null?void 0:i.totalFat)?0:i==null?void 0:i.totalFat,d=isNaN(i==null?void 0:i.totalProtein)?0:i==null?void 0:i.totalProtein;let w="#45FFBC";return e.jsx("div",{children:e.jsxs(rt,{children:[e.jsxs(nt,{children:[e.jsx(M,{dailyCalories:t,inputValue:s,chartBcg:w}),e.jsxs(it,{children:[e.jsx("p",{style:{color:"white"},children:s}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(ot,{children:[e.jsx(y,{title:"Carbonohidrates",chartBcg:at,elementGoal:a,elementValue:l}),e.jsx(y,{title:"Protein",chartBcg:st,elementGoal:o,elementValue:d}),e.jsx(y,{title:"Fat",chartBcg:lt,elementGoal:n,elementValue:h})]})]})})},dt=()=>e.jsx("div",{children:e.jsx(ct,{})}),pt=r.div`
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
`,xt=()=>{const t=g(G),{recommendedWater:a,recommendedCalories:n,totalWater:o}=t,i=a&&a.toFixed(1)*1e3;return e.jsxs(pt,{children:[e.jsxs(v,{children:[e.jsx(C,{children:"Daily goal"}),e.jsx(k,{children:e.jsx(je,{calories:n,water:i})})]}),e.jsxs(v,{children:[e.jsx(C,{children:"Water"}),e.jsx(k,{children:e.jsx(_e,{water:o,dailyWater:i})})]}),e.jsxs(v,{children:[e.jsx(C,{children:"Food"}),e.jsx(k,{children:e.jsx(dt,{})})]})]})},ht=r.div`
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
`,mt=r.h1`
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
`;const gt=r.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`,B=r.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,ft=r(u)`
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
`,ut=()=>e.jsx(e.Fragment,{children:e.jsxs(ft,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(B,{children:e.jsx(X,{})})]})}),wt=()=>{const[t,a]=p.useState([]);return p.useEffect(()=>{(async()=>{try{const o=await F.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");a(o.data.slice(0,4))}catch(o){console.error("Error fetching recommended food:",o)}})()},[]),e.jsx(J,{children:e.jsxs(Q,{children:[e.jsx(Z,{children:"Recommended Food"}),e.jsx(ee,{children:t.map((n,o)=>e.jsxs(te,{children:[e.jsx("img",{src:n.img,alt:n.name}),e.jsxs(re,{children:[e.jsx(ne,{children:n.name}),e.jsxs(ie,{children:[e.jsx("p",{children:n.amount}),e.jsxs(oe,{children:[n.calories," calories"]})]})]})]},o))}),e.jsx(u,{to:"/recommended-food",children:e.jsx(ae,{children:"See more →"})})]})})},jt=x.div`
position: relative;
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  @media screen and (max-width: 834px) {
   width: 300px;
  }`,bt=x.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
font-size: 18px;
font-weight: 500;
line-height: 1.33;`,yt=x.div`
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
  }`,kt=x.button`
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
  }`,Ft=({name:t,img:a,intake:n})=>{const[o,i]=p.useState(!1),s="POST",l=null,h=()=>{i(!o)};let d;switch(t){case"breakfast":d=n==null?void 0:n.breakfast;break;case"lunch":d=n==null?void 0:n.lunch;break;case"dinner":d=n==null?void 0:n.dinner;break;case"snack":d=n==null?void 0:n.snack;break;default:d=null;break}return e.jsxs(jt,{children:[e.jsxs(yt,{children:[e.jsx("img",{src:a,width:36,height:36}),e.jsx(bt,{children:t})]}),!d||d.dish.length===0?e.jsx(kt,{onClick:h,children:"+ Record your meal"}):e.jsxs(e.Fragment,{children:[e.jsx(se,{name:t}),e.jsx(Ct,{children:e.jsx(vt,{children:e.jsx("use",{href:`${le}#icon-trash`})})})]}),o&&e.jsx(ce,{name:t,img:a,onClose:h,requestType:s,idIntake:l})]})},Wt=x.div`
width: 320px;
text-align: left;
@media screen and (min-width: 834px) {
    width: 558px;
  }`,zt=x.h2`
margin-bottom: 16px;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.33;
@media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }`,St=x(u)`
margin-left: 16px;
color: var(--color-primary-grey);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
&:hover{color: var(--color-primary-green-lite);}
`,$t=x.ul`
   display:flex;
   flex-direction: column;
   gap: 28px;
  `,It=()=>{const t=H();p.useEffect(()=>{t(N())},[t]);const a=g(de),n=[{name:"breakfast",img:pe},{name:"lunch",img:xe},{name:"dinner",img:he},{name:"snack",img:me}];return e.jsxs(Wt,{children:[e.jsxs(zt,{children:["Diary",e.jsx(St,{to:"/diary",children:"See more"})]}),e.jsx($t,{children:n.map(o=>e.jsx(Ft,{name:o.name,img:o.img,intake:a},o.name))})]})},Gt=()=>e.jsx("section",{children:e.jsxs(fe,{children:[e.jsxs(ht,{children:[e.jsx(mt,{children:"Today"}),e.jsx(ut,{})]}),e.jsx(xt,{}),e.jsxs(gt,{children:[e.jsx(It,{}),e.jsx(wt,{})]})]})});export{Gt as default};
