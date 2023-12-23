import{s as t,j as e,r as d,g as M,b as N,h as U,u as _,i as K,L as F}from"./index-ff5cf59d.js";import{i as k}from"./sprite-d974ef00.js";import{C as X,A as Y,p as q,a as J,D as Q,F as Z}from"./index.esm-a635d5e9.js";const ee=t.div`
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
`,te=({children:i})=>e.jsx(ee,{children:i}),ie=t.div`
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    padding: 24px 40px;
  }
`,W=t.li`
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
`,S=t.h3`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,D=t.p`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--color-primary-white);
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,ne=t.span`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,oe=({calories:i,water:n})=>e.jsx(ie,{children:e.jsxs("ul",{children:[e.jsxs(W,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${k}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(S,{children:"Calories"}),e.jsx(D,{children:i})]})]}),e.jsxs(W,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${k}#icon-bottle`})}),e.jsxs("div",{children:[e.jsx(S,{children:"Water"}),e.jsxs(D,{children:[n," ",e.jsx(ne,{children:"ml"})]})]})]})]})}),re=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 5, 0.8);
`,ae=({children:i,onClose:n})=>{d.useEffect(()=>{const r=s=>{s.code==="Escape"&&n()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[n]);const o=r=>{r.target===r.currentTarget&&n()};return e.jsx(re,{onClick:o,children:i})},se=t.div`
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
`,de=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 29px;
    line-height: 1.2;
    text-align: center;
  }
`,ce=t.form`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,le=t.label`
  display: block;
  margin-bottom: 32px;
`,pe=t.span`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.43;
`,xe=t.input`
  display: block;
  width: 100%;
  padding: 8px 10px;
  border: 1px solid var(--color-primary-green-lite);

  font-weight: 400;
  border-radius: 12px;
  background-color: var(--color-primary-black-2);
  color: var(--color-primary-white);

  &::placeholder {
    color: var(--color-primary-grey);
  }
`,he=t.button`
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
`,me=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;

  text-align: center;
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,ge=({onClose:i,successHandler:n})=>{const[o,r]=d.useState(""),s=a=>{a.preventDefault,!(+o<0)&&+o%1===0&&(n(+o),i())},c=a=>{r(a.target.value)};return e.jsx(ae,{onClose:i,children:e.jsxs(se,{children:[e.jsx(de,{children:"Add water intake"}),e.jsxs(ce,{onSubmit:s,children:[e.jsxs(le,{children:[e.jsx(pe,{children:"How much water"}),e.jsx(xe,{type:"number",onChange:c,value:o})]}),e.jsx(he,{type:"submit",children:"Confirm"}),e.jsx(me,{type:"button",onClick:i,children:"Cancel"})]})]})})},fe=t.div`
  padding: 16px 22px 16px 12px;
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 24px 22px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 24px 24px 40px;
  }
`,ue=t.div`
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
`,we=t.h3`
  margin-bottom: 12px;
  color: var(--color-primary-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,je=t.div`
  margin-bottom: 16px;

  color: var(--color-primary-white);

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`,be=t.p`
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
`,ye=t.p`
  font-size: 14px;
  line-height: 1.43;
`,$=t.span`
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`,ve=t.div`
  position: relative;
  height: ${i=>`${i.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`,Ce=t.p`
  position: absolute;
  left: 50%;
  bottom: ${i=>i.$isHighPercent?"50%":"calc(100% + 6px)"};
  transform: ${i=>i.$isHighPercent?"translate(-50%, 50%)":"translateX(-50%)"};
  color: ${i=>i.$isHighPercent?"black":"var(--color-primary-violet)"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
`,ke=t.div``,Fe=t.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;

  border-radius: 12px;
  background-color: var(--color-primary-green-lite);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,ze=({dailyWater:i})=>{const[n,o]=d.useState(1050),[r,s]=d.useState(!1),c=()=>{s(!1)},a=async x=>{try{const l=await M.post("/user/water-intake",{water:x}),m=new Date,g=m.getFullYear(),f=("0"+(m.getMonth()+1)).slice(-2),u=("0"+m.getDate()).slice(-2),w=g+"-"+f+"-"+u;o(l.data.waters[w])}catch(l){console.log(l)}},h=x=>{o(l=>l+x),a(x)},p=d.useMemo(()=>Math.round(n/i*100),[i,n]);return e.jsxs(fe,{children:[e.jsx(ue,{children:e.jsx(ve,{$percent:p,children:e.jsxs(Ce,{$isHighPercent:p>=84,children:[p,"%"]})})}),e.jsxs(ke,{children:[e.jsx(we,{children:"Water consumption"}),e.jsxs(je,{children:[e.jsxs(be,{children:[n," ",e.jsx($,{children:"ml"})]}),e.jsxs(ye,{children:["left: ",e.jsxs($,{children:[i-n," ml"]})]})]}),e.jsxs(Fe,{onClick:()=>s(!0),children:[e.jsx("svg",{height:12,width:12,children:e.jsx("use",{href:`${k}#icon-plus`})}),"Add water intake"]})]}),r&&e.jsx(ge,{onClose:c,successHandler:h})]})};X.register(Y,q,J);const We={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Se={id:"bcgCircle",beforeDatasetsDraw(i){const{ctx:n}=i;n.save();const o=i.getDatasetMeta(0).data[0].x,r=i.getDatasetMeta(0).data[0].y,s=i.getDatasetMeta(0).data[0].innerRadius,c=i.getDatasetMeta(0).data[0].outerRadius,a=c-s,h=Math.PI/180;n.beginPath(),n.lineWidth=a,n.strokeStyle="rgba(41, 41, 40, 1)",n.arc(o,r,c-a/2,0,h*360,!1),n.stroke()}},I=({dailyCalories:i,inputValue:n,chartBcg:o})=>{n>i&&(n=i,o="red");const r=i-n,s={datasets:[{label:[],data:[n,r],backgroundColor:[o,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(Q,{options:We,data:s,plugins:[Se]})})},De=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,$e=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Be=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,Me=t.div`
  display: flex;
  flex-direction: column;
`,Ie=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Pe=t.div`
  display: flex;
  column-gap: 12px;
`,B=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,Te=t.p`
  width: 78px;
`,b=i=>{const{title:n,chartBcg:o,elementGoal:r,elementValue:s}=i;let c=(r-s).toFixed(1);c<0&&(c=0);let a=Math.round(s*100/r);return(a===1/0||isNaN(a))&&(a=0),a>100&&(a=100),e.jsx(e.Fragment,{children:e.jsxs(De,{children:[e.jsxs($e,{children:[e.jsx(I,{dailyCalories:r,inputValue:s,chartBcg:o}),e.jsx(Be,{children:e.jsx("p",{children:`${a}%`})})]}),e.jsxs(Me,{children:[e.jsx(Ie,{children:n}),e.jsxs(Pe,{children:[e.jsxs(Te,{children:["Goal: ",e.jsx(B,{children:r})]}),e.jsxs("p",{children:["left: ",e.jsx(B,{children:c})]})]})]})]})})},Re=t.div`
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
`,Ee=t.div`
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
`,Ge=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Ae=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,He="#FFC4F7",Le="#FFF3B7",Oe="#B6B6B6",Ve=()=>{const[i,n]=d.useState(),[o,r]=d.useState(),[s,c]=d.useState(),[a,h]=d.useState(),[p,x]=d.useState(),[l,m]=d.useState(),[g,f]=d.useState(),[u,w]=d.useState(),z=N();d.useEffect(()=>{z(U()).then(j=>{const{recommendedCalories:R,recommendedCarbs:E,recommendedFat:G,recommendedProtein:A,totalCalories:H,totalCarbs:L,totalFat:O,totalProtein:V}=j.payload;n(R),r(E),c(G),h(A),x(H),m(L),f(O),w(V)}).catch(j=>{console.error("Error fetching user data:",j)})},[z]);let T="#45FFBC";return e.jsx("div",{children:e.jsxs(Re,{children:[e.jsxs(Ee,{children:[e.jsx(I,{dailyCalories:i,inputValue:p,chartBcg:T}),e.jsxs(Ge,{children:[e.jsx("p",{children:p}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Ae,{children:[e.jsx(b,{title:"Carbonohidrates",chartBcg:He,elementGoal:o,elementValue:l}),e.jsx(b,{title:"Protein",chartBcg:Le,elementGoal:a,elementValue:u}),e.jsx(b,{title:"Fat",chartBcg:Oe,elementGoal:s,elementValue:g})]})]})})},Ne=()=>e.jsx("div",{children:e.jsx(Ve,{})}),Ue=t.div`
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
  }
`,y=t.div`
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
`,v=t.h2`
  margin-bottom: 6px;

  color: var(--color-primary-white);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,C=t.div`
  background-color: var(--color-primary-black-2);
  border-radius: 12px;
`,_e=()=>{const i=_(K),{recommendedCalories:n,recommendedWater:o}=i;return e.jsxs(Ue,{children:[e.jsxs(y,{children:[e.jsx(v,{children:"Daily goal"}),e.jsx(C,{children:e.jsx(oe,{calories:n,water:o*1e3})})]}),e.jsxs(y,{children:[e.jsx(v,{children:"Water"}),e.jsx(C,{children:e.jsx(ze,{dailyWater:o*1e3})})]}),e.jsxs(y,{children:[e.jsx(v,{children:"Food"}),e.jsx(C,{children:e.jsx(Ne,{})})]})]})},Ke=t.div`
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
`,Xe=t.h1`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;t(F)`
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
`;const P=t.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,Ye=t(F)`
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
    ${P} {
      color: var(--color-primary-green-lite);
    }
  }

  @media only screen and (min-width: 835px) {
    font-size: 16px;
    line-height: 1.37;
  }
`,qe=()=>e.jsx(e.Fragment,{children:e.jsxs(Ye,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(P,{children:e.jsx(Z,{})})]})}),Je=t.div`
  padding: 20px 34px 52px 138px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
  }
`,Qe=t.div`
  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,Ze=t.h2`
  margin-bottom: 16px;
  color: #ffffff;
  font-size: 22px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 18px;
  }
`,et=t.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 676px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
    gap: 10px;

    & > div:nth-child(n + 3) {
      display: none;
    }
  }
`,tt=t.div`
  width: 328px;
  display: flex;
  flex-direction: row;
  background-color: #0f0f0f;
  color: #ffffff;
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

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 380px;
  }
`,it=t.p`
  display: block;
  margin-top: 16px;
  color: #b6b6b6;
  font-size: 16px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,nt=t.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,ot=t.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,rt=t.p`
  color: #b6b6b6;
`,at=()=>{const[i,n]=d.useState([]);return d.useEffect(()=>{(async()=>{try{const r=await M.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");n(r.data.slice(0,4))}catch(r){console.error("Error fetching recommended food:",r)}})()},[]),e.jsx(Je,{children:e.jsxs(Qe,{children:[e.jsx(Ze,{children:"Recommended Food"}),e.jsx(et,{children:i.map((o,r)=>e.jsxs(tt,{children:[e.jsx("img",{src:o.img,alt:o.name}),e.jsxs(nt,{children:[e.jsx("h3",{children:o.name}),e.jsxs(ot,{children:[e.jsx("p",{children:o.amount}),e.jsxs(rt,{children:[o.calories," calories"]})]})]})]},r))}),e.jsx(F,{to:"/recommended-food",children:e.jsx(it,{children:"See more →"})})]})})},lt=()=>e.jsx("section",{children:e.jsxs(te,{children:[e.jsxs(Ke,{children:[e.jsx(Xe,{children:"Today"}),e.jsx(qe,{})]}),e.jsx(_e,{}),e.jsx(at,{})]})});export{lt as default};
