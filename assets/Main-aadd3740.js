import{s as t,j as e,r as s,g as Y,h as I,a as E,i as _,c as b,k as K,L as y}from"./index-f2e87f12.js";import{i as g}from"./sprite-9cca58f7.js";import{c as X,b as J,u as Q}from"./index.esm-1f872035.js";import{C as Z,A as ee,p as te,a as ie,D as ne,F as re}from"./index.esm-808ba32d.js";import{n as p,s as oe,a as ae,b as se,c as ce,L as le,t as de,M as pe,d as xe,l as he,e as me,f as ge}from"./snack-cd5cb42f.js";import"./hoist-non-react-statics.cjs-2a5b7553.js";import"./emotion-element-c39617d8.browser.esm-3bde47f8.js";const fe=t.div`
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
`,ue=({children:i})=>e.jsx(fe,{children:i}),we=t.div`
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    padding: 24px 40px;
  }
`,D=t.li`
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
`,M=t.h3`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,B=t.p`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--color-primary-white);
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,be=t.span`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,je=({calories:i,water:n})=>e.jsx(we,{children:e.jsxs("ul",{children:[e.jsxs(D,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${g}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(M,{children:"Calories"}),e.jsx(B,{children:i})]})]}),e.jsxs(D,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${g}#icon-bottle`})}),e.jsxs("div",{children:[e.jsx(M,{children:"Water"}),e.jsxs(B,{children:[n," ",e.jsx(be,{children:"ml"})]})]})]})]})}),ye=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 5, 0.8);
`,ve=document.querySelector("#modal-root"),ke=({children:i,onClose:n})=>{s.useEffect(()=>{const o=a=>{a.code==="Escape"&&n()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[n]);const r=o=>{o.target===o.currentTarget&&n()};return Y.createPortal(e.jsx(ye,{onClick:r,children:i}),ve)},Ce=t.div`
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
`,ze=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 29px;
    line-height: 1.2;
    text-align: center;
  }
`,Se=t.form`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,Fe=t.label`
  display: block;
  margin-bottom: 32px;
`,We=t.span`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.43;
`,$e=t.span`
  display: block;
  position: relative;

  & input {
    border-color: ${i=>i.$isError&&"#E74A3B"};
  }

  & input {
    border-color: ${i=>i.$isCorrect&&"#3CBC81"};
  }
`,Ie=t.input`
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
`,De=t.span`
  display: block;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`,Me=t.p`
  padding-left: 10px;
  color: #e74a3b;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
`,Be=t.button`
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
`,Te=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;

  text-align: center;
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,Pe=X().shape({water:J().typeError("It must be a valid number").required("Please fill the input").integer("Please enter only integer value").min(1,"The min value is 1")}),Ee=({onClose:i,successHandler:n})=>{const r=Q({initialValues:{water:""},onSubmit:c=>{n(c.water),i()},validationSchema:Pe}),o=r.errors.water&&r.touched.water,a=!r.errors.water&&r.touched.water;return e.jsx(ke,{onClose:i,children:e.jsxs(Ce,{children:[e.jsx(ze,{children:"Add water intake"}),e.jsxs(Se,{onSubmit:r.handleSubmit,children:[e.jsxs(Fe,{children:[e.jsx(We,{children:"How much water"}),e.jsxs($e,{$isError:o,$isCorrect:a,children:[e.jsx(Ie,{type:"text",name:"water",onChange:r.handleChange,value:r.values.water}),e.jsxs(De,{children:[a&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${g}#correct`})}),o&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${g}#error`})})]})]}),o?e.jsx(Me,{children:r.errors.water}):null]}),e.jsx(Be,{type:"submit",children:"Confirm"}),e.jsx(Te,{type:"button",onClick:i,children:"Cancel"})]})]})})},Re=t.div`
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
`,Le=t.button`
  position: absolute;
  top: 12px;
  right: 12px;

  @media screen and (min-width: 834px) {
    top: 24px;
    right: 24px;
  }
`,Ge=t.div`
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
`,He=t.h3`
  margin-bottom: 12px;
  color: var(--color-primary-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,Ae=t.div`
  margin-bottom: 16px;

  color: var(--color-primary-white);

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`,Ve=t.p`
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
`,Oe=t.p`
  font-size: 14px;
  line-height: 1.43;
`,T=t.span`
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`,Ne=t.div`
  position: relative;
  height: ${i=>`${i.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`,qe=t.p`
  position: absolute;
  left: 50%;
  bottom: ${i=>i.$isHighPercent?"50%":"calc(100% + 6px)"};
  transform: ${i=>i.$isHighPercent?"translate(-50%, 50%)":"translateX(-50%)"};
  color: ${i=>i.$isHighPercent?"black":"var(--color-primary-violet)"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
`,Ue=t.div``,Ye=t.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;

  border-radius: 12px;
  background-color: var(--color-primary-green-lite);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,_e=({dailyWater:i,water:n})=>{const[r,o]=s.useState(()=>n),[a,c]=s.useState(!1),l=()=>{c(!1)},h=async x=>{try{const u=await I.post("/user/water-intake",{water:x}),w=new Date,v=w.getFullYear(),k=("0"+(w.getMonth()+1)).slice(-2),j=("0"+w.getDate()).slice(-2),C=v+"-"+k+"-"+j;o(u.data.waters[C])}catch(u){console.log(u)}},m=x=>{h(x)},d=async()=>{try{const x=await I.delete("/user/water-intake");console.log(x),o(0)}catch(x){console.log(x)}},f=s.useMemo(()=>Math.floor(r/i*100),[i,r]);return e.jsxs(Re,{children:[e.jsx(Le,{onClick:d,children:e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${g}#icon-trash-bin`})})}),e.jsx(Ge,{children:e.jsx(Ne,{$percent:f,children:e.jsxs(qe,{$isHighPercent:f>=84,children:[f,"%"]})})}),e.jsxs(Ue,{children:[e.jsx(He,{children:"Water consumption"}),e.jsxs(Ae,{children:[e.jsxs(Ve,{children:[r," ",e.jsx(T,{children:"ml"})]}),i>r&&e.jsxs(Oe,{children:["left: ",e.jsxs(T,{children:[i-r," ml"]})]})]}),e.jsxs(Ye,{onClick:()=>c(!0),children:[e.jsx("svg",{height:12,width:12,children:e.jsx("use",{href:`${g}#icon-plus`})}),"Add water intake"]})]}),a&&e.jsx(Ee,{onClose:l,successHandler:m})]})};Z.register(ee,te,ie);const Ke={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Xe={id:"bcgCircle",beforeDatasetsDraw(i){const{ctx:n}=i;n.save();const r=i.getDatasetMeta(0).data[0].x,o=i.getDatasetMeta(0).data[0].y,a=i.getDatasetMeta(0).data[0].innerRadius,c=i.getDatasetMeta(0).data[0].outerRadius,l=c-a,h=Math.PI/180;n.beginPath(),n.lineWidth=l,n.strokeStyle="rgba(41, 41, 40, 1)",n.arc(r,o,c-l/2,0,h*360,!1),n.stroke()}},R=({dailyCalories:i,inputValue:n,chartBcg:r})=>{n>i&&(n=i,r="red");const o=i-n,a={datasets:[{label:[],data:[n,o],backgroundColor:[r,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(ne,{options:Ke,data:a,plugins:[Xe]})})},Je=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Qe=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Ze=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,et=t.div`
  display: flex;
  flex-direction: column;
`,tt=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,it=t.div`
  display: flex;
  column-gap: 12px;
`,P=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,nt=t.p`
  width: 78px;
`,S=i=>{const{title:n,chartBcg:r,elementGoal:o,elementValue:a}=i;let c=(o-a).toFixed(1);c<0&&(c=0);let l=Math.round(a*100/o);return(l===1/0||isNaN(l))&&(l=0),l>100&&(l=100),e.jsx(e.Fragment,{children:e.jsxs(Je,{children:[e.jsxs(Qe,{children:[e.jsx(R,{dailyCalories:o,inputValue:a,chartBcg:r}),e.jsx(Ze,{children:e.jsx("p",{children:`${l}%`})})]}),e.jsxs(et,{children:[e.jsx(tt,{children:n}),e.jsxs(it,{children:[e.jsxs(nt,{children:["Goal: ",e.jsx(P,{children:o})]}),e.jsxs("p",{children:["left: ",e.jsx(P,{children:c})]})]})]})]})})},rt=t.div`
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
`,ot=t.div`
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
`,at=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,st=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,ct="#FFC4F7",lt="#FFF3B7",dt="#B6B6B6",pt=()=>{const[i,n]=s.useState(),[r,o]=s.useState(),[a,c]=s.useState(),[l,h]=s.useState(),[m,d]=s.useState(),[f,x]=s.useState(),[u,w]=s.useState(),[v,k]=s.useState(),j=E();s.useEffect(()=>{j(_()).then(z=>{const{recommendedCalories:G,recommendedCarbs:H,recommendedFat:A,recommendedProtein:V,totalCalories:O,totalCarbs:N,totalFat:q,totalProtein:U}=z.payload;n(G),o(H),c(A),h(V),d(O),x(N),w(q),k(U)}).catch(z=>{console.error("Error fetching user data:",z)})},[j]);let C="#45FFBC";return e.jsx("div",{children:e.jsxs(rt,{children:[e.jsxs(ot,{children:[e.jsx(R,{dailyCalories:i,inputValue:m,chartBcg:C}),e.jsxs(at,{children:[e.jsx("p",{children:m}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(st,{children:[e.jsx(S,{title:"Carbonohidrates",chartBcg:ct,elementGoal:r,elementValue:f}),e.jsx(S,{title:"Protein",chartBcg:lt,elementGoal:l,elementValue:v}),e.jsx(S,{title:"Fat",chartBcg:dt,elementGoal:a,elementValue:u})]})]})})},xt=()=>e.jsx("div",{children:e.jsx(pt,{})}),ht=t.div`
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
  }
`,F=t.div`
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
`,W=t.h2`
  margin-bottom: 6px;

  color: var(--color-primary-white);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,$=t.div`
  background-color: var(--color-primary-black-2);
  border-radius: 12px;
`,mt=()=>{const i=b(K),{recommendedWater:n,recommendedCalories:r,totalWater:o}=i;return e.jsxs(ht,{children:[e.jsxs(F,{children:[e.jsx(W,{children:"Daily goal"}),e.jsx($,{children:e.jsx(je,{calories:r,water:n*1e3})})]}),e.jsxs(F,{children:[e.jsx(W,{children:"Water"}),e.jsx($,{children:e.jsx(_e,{water:o,dailyWater:n*1e3})})]}),e.jsxs(F,{children:[e.jsx(W,{children:"Food"}),e.jsx($,{children:e.jsx(xt,{})})]})]})},gt=t.div`
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
`,ft=t.h1`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;t(y)`
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
`;const L=t.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,ut=t(y)`
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
    ${L} {
      color: var(--color-primary-green-lite);
    }
  }

  @media only screen and (min-width: 835px) {
    font-size: 16px;
    line-height: 1.37;
  }
`,wt=()=>e.jsx(e.Fragment,{children:e.jsxs(ut,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(L,{children:e.jsx(re,{})})]})}),bt=t.div`
  padding: 20px 34px 52px 138px;

  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
  }
`,jt=t.div`
  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,yt=t.h2`
  margin-bottom: 16px;
  color: #ffffff;
  font-size: 22px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 18px;
  }
`,vt=t.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 676px;

  @media (min-width: 834px) and (max-width: 1440px) {
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
`,kt=t.div`
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

  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 380px;
  }
`,Ct=t.p`
  display: block;
  margin-top: 16px;
  color: #b6b6b6;
  font-size: 16px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,zt=t.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,St=t.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,Ft=t.p`
  color: #b6b6b6;
`,Wt=()=>{const[i,n]=s.useState([]);return s.useEffect(()=>{(async()=>{try{const o=await I.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");n(o.data.slice(0,4))}catch(o){console.error("Error fetching recommended food:",o)}})()},[]),e.jsx(bt,{children:e.jsxs(jt,{children:[e.jsx(yt,{children:"Recommended Food"}),e.jsx(vt,{children:i.map((r,o)=>e.jsxs(kt,{children:[e.jsx("img",{src:r.img,alt:r.name}),e.jsxs(zt,{children:[e.jsx("h3",{children:r.name}),e.jsxs(St,{children:[e.jsx("p",{children:r.amount}),e.jsxs(Ft,{children:[r.calories," calories"]})]})]})]},o))}),e.jsx(y,{to:"/recommended-food",children:e.jsx(Ct,{children:"See more →"})})]})})},$t=p.div`
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  @media screen and (max-width: 834px) {
   width: 300px;
  }`,It=p.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
font-size: 18px;
font-weight: 500;
line-height: 1.33;`,Dt=p.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 8px;
  }`,Mt=p.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,Bt=p.button`
background-color: transparent;
border: none;
`,Tt=p.button`
background: none;
border: none;
margin-left: 0;
color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
@media screen and (min-width: 834px) {
    margin-right: 250px;
    margin-left: 16px;
  }`,Pt=({name:i,img:n})=>{const[r,o]=s.useState(!1);E();const a=()=>{o(!r)},c=b(oe),l=b(ae),h=b(se),m=b(ce);let d;switch(i){case"breakfast":d=c;break;case"lunch":d=l;break;case"dinner":d=h;break;case"snack":d=m;break;default:d=null;break}return e.jsxs($t,{children:[e.jsxs(Dt,{children:[e.jsx("img",{src:n,width:36,height:36}),e.jsx(It,{children:i})]}),!d||d.dish.length===0?e.jsx(Tt,{onClick:a,children:"+ Record your meal"}):e.jsxs(e.Fragment,{children:[e.jsx(le,{name:i}),e.jsx(Bt,{children:e.jsx(Mt,{children:e.jsx("use",{href:`${de}#icon-trash`})})})]}),r&&e.jsx(pe,{name:i,img:n,onClose:a})]})},Et=p.div`
text-align: left;
width: 558px;`,Rt=p.h2`
margin-bottom: 16px;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.33;
@media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }`,Lt=p(y)`
margin-left: 16px;
color: var(--color-primary-grey);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
&:hover{color: var(--color-primary-green-lite);}
`,Gt=p.ul`
   display:flex;
   flex-direction: column;
   gap: 28px;
  `,Ht=()=>{const i=[{name:"breakfast",img:xe},{name:"lunch",img:he},{name:"dinner",img:me},{name:"snack",img:ge}];return e.jsxs(Et,{children:[e.jsxs(Rt,{children:["Diary",e.jsx(Lt,{to:"/diary",children:"See more"})]}),e.jsx(Gt,{children:i.map(n=>e.jsx(Pt,{name:n.name,img:n.img},n.name))})]})},_t=()=>e.jsx("section",{children:e.jsxs(ue,{children:[e.jsxs(gt,{children:[e.jsx(ft,{children:"Today"}),e.jsx(wt,{})]}),e.jsx(mt,{}),e.jsx(Wt,{}),e.jsx(Ht,{})]})});export{_t as default};
