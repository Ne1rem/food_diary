import{s as t,j as e,r as c,g as Y,h as $,a as P,i as _,c as E,k as K,L as j,l as X}from"./index-1c882f1a.js";import{i as h}from"./sprite-e52320ac.js";import{c as J,b as Q,u as Z}from"./index.esm-8f8169fc.js";import{C as ee,A as te,p as re,a as ie,D as ne,F as oe}from"./index.esm-31edb00b.js";import{n as p,s as ae,L as se,t as ce,M as le,b as de,l as pe,d as xe,a as he}from"./snack-f8257824.js";import"./hoist-non-react-statics.cjs-bf9efcb8.js";import"./emotion-element-c39617d8.browser.esm-ad70cedd.js";const me=t.div`
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
`,ge=({children:r})=>e.jsx(me,{children:r}),fe=t.div`
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    padding: 24px 40px;
  }
`,I=t.li`
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
`,D=t.h3`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,M=t.p`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--color-primary-white);
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,ue=t.span`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,we=({calories:r,water:i})=>e.jsx(fe,{children:e.jsxs("ul",{children:[e.jsxs(I,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${h}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(D,{children:"Calories"}),e.jsx(M,{children:r})]})]}),e.jsxs(I,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${h}#icon-bottle`})}),e.jsxs("div",{children:[e.jsx(D,{children:"Water"}),e.jsxs(M,{children:[i," ",e.jsx(ue,{children:"ml"})]})]})]})]})}),je=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 5, 0.8);
`,be=document.querySelector("#modal-root"),ye=({children:r,onClose:i})=>{c.useEffect(()=>{const o=s=>{s.code==="Escape"&&i()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[i]);const n=o=>{o.target===o.currentTarget&&i()};return Y.createPortal(e.jsx(je,{onClick:n,children:r}),be)},ve=t.div`
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
`,Ce=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 29px;
    line-height: 1.2;
    text-align: center;
  }
`,ke=t.form`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,ze=t.label`
  display: block;
  margin-bottom: 32px;
`,Fe=t.span`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.43;
`,Se=t.span`
  display: block;
  position: relative;

  & input {
    border-color: ${r=>r.$isError&&"#E74A3B"};
  }

  & input {
    border-color: ${r=>r.$isCorrect&&"#3CBC81"};
  }
`,We=t.input`
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
`,$e=t.span`
  display: block;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`,Ie=t.p`
  padding-left: 10px;
  color: #e74a3b;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
`,De=t.button`
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
`,Me=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;

  text-align: center;
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,Be=J().shape({water:Q().typeError("It must be a valid number").required("Please fill the input").integer("Please enter only integer value").min(1,"The min value is 1")}),Te=({onClose:r,successHandler:i})=>{const n=Z({initialValues:{water:""},onSubmit:l=>{i(l.water),r()},validationSchema:Be}),o=n.errors.water&&n.touched.water,s=!n.errors.water&&n.touched.water;return e.jsx(ye,{onClose:r,children:e.jsxs(ve,{children:[e.jsx(Ce,{children:"Add water intake"}),e.jsxs(ke,{onSubmit:n.handleSubmit,children:[e.jsxs(ze,{children:[e.jsx(Fe,{children:"How much water"}),e.jsxs(Se,{$isError:o,$isCorrect:s,children:[e.jsx(We,{type:"text",name:"water",onChange:n.handleChange,value:n.values.water}),e.jsxs($e,{children:[s&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${h}#correct`})}),o&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${h}#error`})})]})]}),o?e.jsx(Ie,{children:n.errors.water}):null]}),e.jsx(De,{type:"submit",children:"Confirm"}),e.jsx(Me,{type:"button",onClick:r,children:"Cancel"})]})]})})},Pe=t.div`
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
`,Ee=t.button`
  position: absolute;
  top: 12px;
  right: 12px;

  @media screen and (min-width: 834px) {
    top: 24px;
    right: 24px;
  }
`,Re=t.div`
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
`,Ge=t.h3`
  margin-bottom: 12px;
  color: var(--color-primary-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,Le=t.div`
  margin-bottom: 16px;

  color: var(--color-primary-white);

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`,He=t.p`
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
`,Ae=t.p`
  font-size: 14px;
  line-height: 1.43;
`,B=t.span`
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`,Ve=t.div`
  position: relative;
  height: ${r=>`${r.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`,Oe=t.p`
  position: absolute;
  left: 50%;
  bottom: ${r=>r.$isHighPercent?"50%":"calc(100% + 6px)"};
  transform: ${r=>r.$isHighPercent?"translate(-50%, 50%)":"translateX(-50%)"};
  color: ${r=>r.$isHighPercent?"black":"var(--color-primary-violet)"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
`,qe=t.div``,Ne=t.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;

  border-radius: 12px;
  background-color: var(--color-primary-green-lite);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,Ue=({dailyWater:r,water:i})=>{const[n,o]=c.useState(null),[s,l]=c.useState(!1);c.useEffect(()=>{o(i)},[i]);const a=()=>{l(!1)},d=async x=>{try{const g=await $.post("/user/water-intake",{water:x}),f=new Date,y=f.getFullYear(),v=("0"+(f.getMonth()+1)).slice(-2),w=("0"+f.getDate()).slice(-2),C=y+"-"+v+"-"+w;o(g.data.waters[C])}catch(g){console.log(g)}},u=x=>{d(x)},b=async()=>{try{const x=await $.delete("/user/water-intake");console.log(x),o(0)}catch(x){console.log(x)}},m=c.useMemo(()=>Math.floor(n/r*100),[r,n]);return e.jsxs(Pe,{children:[e.jsx(Ee,{onClick:b,children:e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${h}#icon-trash-bin`})})}),e.jsx(Re,{children:e.jsx(Ve,{$percent:m,children:e.jsxs(Oe,{$isHighPercent:m>=84,children:[m,"%"]})})}),e.jsxs(qe,{children:[e.jsx(Ge,{children:"Water consumption"}),e.jsxs(Le,{children:[e.jsxs(He,{children:[n," ",e.jsx(B,{children:"ml"})]}),r>n&&e.jsxs(Ae,{children:["left: ",e.jsxs(B,{children:[r-n," ml"]})]})]}),e.jsxs(Ne,{onClick:()=>l(!0),children:[e.jsx("svg",{height:12,width:12,children:e.jsx("use",{href:`${h}#icon-plus`})}),"Add water intake"]})]}),s&&e.jsx(Te,{onClose:a,successHandler:u})]})};ee.register(te,re,ie);const Ye={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},_e={id:"bcgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const n=r.getDatasetMeta(0).data[0].x,o=r.getDatasetMeta(0).data[0].y,s=r.getDatasetMeta(0).data[0].innerRadius,l=r.getDatasetMeta(0).data[0].outerRadius,a=l-s,d=Math.PI/180;i.beginPath(),i.lineWidth=a,i.strokeStyle="rgba(41, 41, 40, 1)",i.arc(n,o,l-a/2,0,d*360,!1),i.stroke()}},R=({dailyCalories:r,inputValue:i,chartBcg:n})=>{i>r&&(i=r,n="red");const o=r-i,s={datasets:[{label:[],data:[i,o],backgroundColor:[n,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(ne,{options:Ye,data:s,plugins:[_e]})})},Ke=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Xe=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Je=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,Qe=t.div`
  display: flex;
  flex-direction: column;
`,Ze=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,et=t.div`
  display: flex;
  column-gap: 12px;
`,T=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,tt=t.p`
  width: 78px;
`,z=r=>{const{title:i,chartBcg:n,elementGoal:o,elementValue:s}=r;let l=(o-s).toFixed(1);l<0&&(l=0);let a=Math.round(s*100/o);return(a===1/0||isNaN(a))&&(a=0),a>100&&(a=100),e.jsx(e.Fragment,{children:e.jsxs(Ke,{children:[e.jsxs(Xe,{children:[e.jsx(R,{dailyCalories:o,inputValue:s,chartBcg:n}),e.jsx(Je,{children:e.jsx("p",{children:`${a}%`})})]}),e.jsxs(Qe,{children:[e.jsx(Ze,{children:i}),e.jsxs(et,{children:[e.jsxs(tt,{children:["Goal: ",e.jsx(T,{children:o})]}),e.jsxs("p",{children:["left: ",e.jsx(T,{children:l})]})]})]})]})})},rt=t.div`
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
`,it=t.div`
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
`,nt=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,ot=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,at="#FFC4F7",st="#FFF3B7",ct="#B6B6B6",lt=()=>{const[r,i]=c.useState(),[n,o]=c.useState(),[s,l]=c.useState(),[a,d]=c.useState(),[u,b]=c.useState(),[m,x]=c.useState(),[g,f]=c.useState(),[y,v]=c.useState(),w=P();c.useEffect(()=>{w(_()).then(k=>{const{recommendedCalories:L,recommendedCarbs:H,recommendedFat:A,recommendedProtein:V,totalCalories:O,totalCarbs:q,totalFat:N,totalProtein:U}=k.payload;i(L),o(H),l(A),d(V),b(O),x(q),f(N),v(U)}).catch(k=>{console.error("Error fetching user data:",k)})},[w]);let C="#45FFBC";return e.jsx("div",{children:e.jsxs(rt,{children:[e.jsxs(it,{children:[e.jsx(R,{dailyCalories:r,inputValue:u,chartBcg:C}),e.jsxs(nt,{children:[e.jsx("p",{children:u}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(ot,{children:[e.jsx(z,{title:"Carbonohidrates",chartBcg:at,elementGoal:n,elementValue:m}),e.jsx(z,{title:"Protein",chartBcg:st,elementGoal:a,elementValue:y}),e.jsx(z,{title:"Fat",chartBcg:ct,elementGoal:s,elementValue:g})]})]})})},dt=()=>e.jsx("div",{children:e.jsx(lt,{})}),pt=t.div`
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
`,S=t.h2`
  margin-bottom: 6px;

  color: var(--color-primary-white);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,W=t.div`
  background-color: var(--color-primary-black-2);
  border-radius: 12px;
`,xt=()=>{const r=E(K),{recommendedWater:i,recommendedCalories:n,totalWater:o}=r;return e.jsxs(pt,{children:[e.jsxs(F,{children:[e.jsx(S,{children:"Daily goal"}),e.jsx(W,{children:e.jsx(we,{calories:n,water:i*1e3})})]}),e.jsxs(F,{children:[e.jsx(S,{children:"Water"}),e.jsx(W,{children:e.jsx(Ue,{water:o,dailyWater:i*1e3})})]}),e.jsxs(F,{children:[e.jsx(S,{children:"Food"}),e.jsx(W,{children:e.jsx(dt,{})})]})]})},ht=t.div`
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
`,mt=t.h1`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;t(j)`
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
`;const G=t.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,gt=t(j)`
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
    ${G} {
      color: var(--color-primary-green-lite);
    }
  }

  @media only screen and (min-width: 835px) {
    font-size: 16px;
    line-height: 1.37;
  }
`,ft=()=>e.jsx(e.Fragment,{children:e.jsxs(gt,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(G,{children:e.jsx(oe,{})})]})}),ut=t.div`
  padding: 20px 34px 52px 138px;

  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
  }
`,wt=t.div`
  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,jt=t.h2`
  margin-bottom: 16px;
  color: var(--color-primary-white);
  font-size: 22px;

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    font-size: 18px;
  }
`,bt=t.div`
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
`,yt=t.div`
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
`,vt=t.p`
  display: block;
  margin-top: 16px;
  color: var(--color-primary-grey);
  font-size: 16px;

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,Ct=t.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,kt=t.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,zt=t.p`
  color: var(--color-primary-grey);
`,Ft=()=>{const[r,i]=c.useState([]);return c.useEffect(()=>{(async()=>{try{const o=await $.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");i(o.data.slice(0,4))}catch(o){console.error("Error fetching recommended food:",o)}})()},[]),e.jsx(ut,{children:e.jsxs(wt,{children:[e.jsx(jt,{children:"Recommended Food"}),e.jsx(bt,{children:r.map((n,o)=>e.jsxs(yt,{children:[e.jsx("img",{src:n.img,alt:n.name}),e.jsxs(Ct,{children:[e.jsx("h3",{children:n.name}),e.jsxs(kt,{children:[e.jsx("p",{children:n.amount}),e.jsxs(zt,{children:[n.calories," calories"]})]})]})]},o))}),e.jsx(j,{to:"/recommended-food",children:e.jsx(vt,{children:"See more →"})})]})})},St=p.div`
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  @media screen and (max-width: 834px) {
   width: 300px;
  }`,Wt=p.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
font-size: 18px;
font-weight: 500;
line-height: 1.33;`,$t=p.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 8px;
  }`,It=p.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,Dt=p.button`
background-color: transparent;
border: none;
`,Mt=p.button`
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
  }`,Bt=({name:r,img:i})=>{const[n,o]=c.useState(!1),s=P(),l=()=>{o(!n)};c.useEffect(()=>{s(X())},[s]);const a=E(ae);let d;switch(r){case"breakfast":d=a==null?void 0:a.breakfast;break;case"lunch":d=a==null?void 0:a.lunch;break;case"dinner":d=a==null?void 0:a.dinner;break;case"snack":d=a==null?void 0:a.snack;break;default:d=null;break}return e.jsxs(St,{children:[e.jsxs($t,{children:[e.jsx("img",{src:i,width:36,height:36}),e.jsx(Wt,{children:r})]}),!d||d.dish.length===0?e.jsx(Mt,{onClick:l,children:"+ Record your meal"}):e.jsxs(e.Fragment,{children:[e.jsx(se,{name:r}),e.jsx(Dt,{children:e.jsx(It,{children:e.jsx("use",{href:`${ce}#icon-trash`})})})]}),n&&e.jsx(le,{name:r,img:i,onClose:l})]})},Tt=p.div`
text-align: left;
width: 558px;`,Pt=p.h2`
margin-bottom: 16px;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.33;
@media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }`,Et=p(j)`
margin-left: 16px;
color: var(--color-primary-grey);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
&:hover{color: var(--color-primary-green-lite);}
`,Rt=p.ul`
   display:flex;
   flex-direction: column;
   gap: 28px;
  `,Gt=()=>{const r=[{name:"breakfast",img:de},{name:"lunch",img:pe},{name:"dinner",img:xe},{name:"snack",img:he}];return e.jsxs(Tt,{children:[e.jsxs(Pt,{children:["Diary",e.jsx(Et,{to:"/diary",children:"See more"})]}),e.jsx(Rt,{children:r.map(i=>e.jsx(Bt,{name:i.name,img:i.img},i.name))})]})},Ut=()=>e.jsx("section",{children:e.jsxs(ge,{children:[e.jsxs(ht,{children:[e.jsx(mt,{children:"Today"}),e.jsx(ft,{})]}),e.jsx(xt,{}),e.jsx(Ft,{}),e.jsx(Gt,{})]})});export{Ut as default};
