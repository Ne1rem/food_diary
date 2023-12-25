import{s as t,j as e,r as l,g as U,h as $,u as Y,i as _,b as P,k as K,L as j}from"./index-cdb4cf72.js";import{i as x}from"./sprite-c3eea4a6.js";import{c as X,b as J,u as Q}from"./index.esm-54b23ba0.js";import{C as Z,A as ee,p as te,a as re,D as ie,F as ne}from"./index.esm-e59fa259.js";import{n as d,s as oe,L as ae,t as se,M as ce,b as le,l as de,d as pe,a as xe}from"./snack-57ff5d65.js";import"./hoist-non-react-statics.cjs-23967bbb.js";import"./emotion-element-c39617d8.browser.esm-887d2e7e.js";const he=t.div`
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
`,me=({children:r})=>e.jsx(he,{children:r}),ge=t.div`
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
`,fe=t.span`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,ue=({calories:r,water:i})=>e.jsx(ge,{children:e.jsxs("ul",{children:[e.jsxs(I,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${x}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(D,{children:"Calories"}),e.jsx(M,{children:r})]})]}),e.jsxs(I,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${x}#icon-bottle`})}),e.jsxs("div",{children:[e.jsx(D,{children:"Water"}),e.jsxs(M,{children:[i," ",e.jsx(fe,{children:"ml"})]})]})]})]})}),we=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 5, 0.8);
`,je=document.querySelector("#modal-root"),be=({children:r,onClose:i})=>{l.useEffect(()=>{const o=c=>{c.code==="Escape"&&i()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[i]);const n=o=>{o.target===o.currentTarget&&i()};return U.createPortal(e.jsx(we,{onClick:n,children:r}),je)},ye=t.div`
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
`,ve=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 29px;
    line-height: 1.2;
    text-align: center;
  }
`,Ce=t.form`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,ke=t.label`
  display: block;
  margin-bottom: 32px;
`,ze=t.span`
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
`,Fe=t.input`
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
`,We=t.span`
  display: block;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`,$e=t.p`
  padding-left: 10px;
  color: #e74a3b;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
`,Ie=t.button`
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
`,De=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;

  text-align: center;
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,Me=X().shape({water:J().typeError("It must be a valid number").required("Please fill the input").integer("Please enter only integer value").min(1,"The min value is 1")}),Be=({onClose:r,successHandler:i})=>{const n=Q({initialValues:{water:""},onSubmit:a=>{i(a.water),r()},validationSchema:Me}),o=n.errors.water&&n.touched.water,c=!n.errors.water&&n.touched.water;return e.jsx(be,{onClose:r,children:e.jsxs(ye,{children:[e.jsx(ve,{children:"Add water intake"}),e.jsxs(Ce,{onSubmit:n.handleSubmit,children:[e.jsxs(ke,{children:[e.jsx(ze,{children:"How much water"}),e.jsxs(Se,{$isError:o,$isCorrect:c,children:[e.jsx(Fe,{type:"text",name:"water",onChange:n.handleChange,value:n.values.water}),e.jsxs(We,{children:[c&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${x}#correct`})}),o&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${x}#error`})})]})]}),o?e.jsx($e,{children:n.errors.water}):null]}),e.jsx(Ie,{type:"submit",children:"Confirm"}),e.jsx(De,{type:"button",onClick:r,children:"Cancel"})]})]})})},Te=t.div`
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
`,Pe=t.button`
  position: absolute;
  top: 12px;
  right: 12px;

  @media screen and (min-width: 834px) {
    top: 24px;
    right: 24px;
  }
`,Ee=t.div`
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
`,Re=t.h3`
  margin-bottom: 12px;
  color: var(--color-primary-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,Ge=t.div`
  margin-bottom: 16px;

  color: var(--color-primary-white);

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`,Le=t.p`
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
`,He=t.p`
  font-size: 14px;
  line-height: 1.43;
`,B=t.span`
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`,Ae=t.div`
  position: relative;
  height: ${r=>`${r.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`,Ve=t.p`
  position: absolute;
  left: 50%;
  bottom: ${r=>r.$isHighPercent?"50%":"calc(100% + 6px)"};
  transform: ${r=>r.$isHighPercent?"translate(-50%, 50%)":"translateX(-50%)"};
  color: ${r=>r.$isHighPercent?"black":"var(--color-primary-violet)"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
`,Oe=t.div``,Ne=t.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;

  border-radius: 12px;
  background-color: var(--color-primary-green-lite);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,qe=({dailyWater:r,water:i})=>{const[n,o]=l.useState(null),[c,a]=l.useState(!1);l.useEffect(()=>{o(i)},[i]);const s=()=>{a(!1)},h=async p=>{try{const g=await $.post("/user/water-intake",{water:p}),f=new Date,y=f.getFullYear(),v=("0"+(f.getMonth()+1)).slice(-2),w=("0"+f.getDate()).slice(-2),C=y+"-"+v+"-"+w;o(g.data.waters[C])}catch(g){console.log(g)}},u=p=>{h(p)},b=async()=>{try{const p=await $.delete("/user/water-intake");console.log(p),o(0)}catch(p){console.log(p)}},m=l.useMemo(()=>Math.floor(n/r*100),[r,n]);return e.jsxs(Te,{children:[e.jsx(Pe,{onClick:b,children:e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${x}#icon-trash-bin`})})}),e.jsx(Ee,{children:e.jsx(Ae,{$percent:m,children:e.jsxs(Ve,{$isHighPercent:m>=84,children:[m,"%"]})})}),e.jsxs(Oe,{children:[e.jsx(Re,{children:"Water consumption"}),e.jsxs(Ge,{children:[e.jsxs(Le,{children:[n," ",e.jsx(B,{children:"ml"})]}),r>n&&e.jsxs(He,{children:["left: ",e.jsxs(B,{children:[r-n," ml"]})]})]}),e.jsxs(Ne,{onClick:()=>a(!0),children:[e.jsx("svg",{height:12,width:12,children:e.jsx("use",{href:`${x}#icon-plus`})}),"Add water intake"]})]}),c&&e.jsx(Be,{onClose:s,successHandler:u})]})};Z.register(ee,te,re);const Ue={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Ye={id:"bcgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const n=r.getDatasetMeta(0).data[0].x,o=r.getDatasetMeta(0).data[0].y,c=r.getDatasetMeta(0).data[0].innerRadius,a=r.getDatasetMeta(0).data[0].outerRadius,s=a-c,h=Math.PI/180;i.beginPath(),i.lineWidth=s,i.strokeStyle="rgba(41, 41, 40, 1)",i.arc(n,o,a-s/2,0,h*360,!1),i.stroke()}},E=({dailyCalories:r,inputValue:i,chartBcg:n})=>{i>r&&(i=r,n="red");const o=r-i,c={datasets:[{label:[],data:[i,o],backgroundColor:[n,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(ie,{options:Ue,data:c,plugins:[Ye]})})},_e=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Ke=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Xe=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,Je=t.div`
  display: flex;
  flex-direction: column;
`,Qe=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Ze=t.div`
  display: flex;
  column-gap: 12px;
`,T=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,et=t.p`
  width: 78px;
`,z=r=>{const{title:i,chartBcg:n,elementGoal:o,elementValue:c}=r;let a=(o-c).toFixed(1);a<0&&(a=0);let s=Math.round(c*100/o);return(s===1/0||isNaN(s))&&(s=0),s>100&&(s=100),e.jsx(e.Fragment,{children:e.jsxs(_e,{children:[e.jsxs(Ke,{children:[e.jsx(E,{dailyCalories:o,inputValue:c,chartBcg:n}),e.jsx(Xe,{children:e.jsx("p",{children:`${s}%`})})]}),e.jsxs(Je,{children:[e.jsx(Qe,{children:i}),e.jsxs(Ze,{children:[e.jsxs(et,{children:["Goal: ",e.jsx(T,{children:o})]}),e.jsxs("p",{children:["left: ",e.jsx(T,{children:a})]})]})]})]})})},tt=t.div`
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
`,rt=t.div`
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
`,it=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,nt=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,ot="#FFC4F7",at="#FFF3B7",st="#B6B6B6",ct=()=>{const[r,i]=l.useState(),[n,o]=l.useState(),[c,a]=l.useState(),[s,h]=l.useState(),[u,b]=l.useState(),[m,p]=l.useState(),[g,f]=l.useState(),[y,v]=l.useState(),w=Y();l.useEffect(()=>{w(_()).then(k=>{const{recommendedCalories:G,recommendedCarbs:L,recommendedFat:H,recommendedProtein:A,totalCalories:V,totalCarbs:O,totalFat:N,totalProtein:q}=k.payload;i(G),o(L),a(H),h(A),b(V),p(O),f(N),v(q)}).catch(k=>{console.error("Error fetching user data:",k)})},[w]);let C="#45FFBC";return e.jsx("div",{children:e.jsxs(tt,{children:[e.jsxs(rt,{children:[e.jsx(E,{dailyCalories:r,inputValue:u,chartBcg:C}),e.jsxs(it,{children:[e.jsx("p",{children:u}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(nt,{children:[e.jsx(z,{title:"Carbonohidrates",chartBcg:ot,elementGoal:n,elementValue:m}),e.jsx(z,{title:"Protein",chartBcg:at,elementGoal:s,elementValue:y}),e.jsx(z,{title:"Fat",chartBcg:st,elementGoal:c,elementValue:g})]})]})})},lt=()=>e.jsx("div",{children:e.jsx(ct,{})}),dt=t.div`
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
  }
`,S=t.div`
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
`,F=t.h2`
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
`,pt=()=>{const r=P(K),{recommendedWater:i,recommendedCalories:n,totalWater:o}=r;return e.jsxs(dt,{children:[e.jsxs(S,{children:[e.jsx(F,{children:"Daily goal"}),e.jsx(W,{children:e.jsx(ue,{calories:n,water:i*1e3})})]}),e.jsxs(S,{children:[e.jsx(F,{children:"Water"}),e.jsx(W,{children:e.jsx(qe,{water:o,dailyWater:i*1e3})})]}),e.jsxs(S,{children:[e.jsx(F,{children:"Food"}),e.jsx(W,{children:e.jsx(lt,{})})]})]})},xt=t.div`
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
`,ht=t.h1`
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
`;const R=t.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,mt=t(j)`
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
    ${R} {
      color: var(--color-primary-green-lite);
    }
  }

  @media only screen and (min-width: 835px) {
    font-size: 16px;
    line-height: 1.37;
  }
`,gt=()=>e.jsx(e.Fragment,{children:e.jsxs(mt,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(R,{children:e.jsx(ne,{})})]})}),ft=t.div`
  padding: 20px 34px 52px 138px;

  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
  }
`,ut=t.div`
  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,wt=t.h2`
  margin-bottom: 16px;
  color: var(--color-primary-white);
  font-size: 22px;

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    font-size: 18px;
  }
`,jt=t.div`
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
`,bt=t.div`
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
`,yt=t.p`
  display: block;
  margin-top: 16px;
  color: var(--color-primary-grey);
  font-size: 16px;

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,vt=t.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,Ct=t.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,kt=t.p`
  color: var(--color-primary-grey);
`,zt=()=>{const[r,i]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const o=await $.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");i(o.data.slice(0,4))}catch(o){console.error("Error fetching recommended food:",o)}})()},[]),e.jsx(ft,{children:e.jsxs(ut,{children:[e.jsx(wt,{children:"Recommended Food"}),e.jsx(jt,{children:r.map((n,o)=>e.jsxs(bt,{children:[e.jsx("img",{src:n.img,alt:n.name}),e.jsxs(vt,{children:[e.jsx("h3",{children:n.name}),e.jsxs(Ct,{children:[e.jsx("p",{children:n.amount}),e.jsxs(kt,{children:[n.calories," calories"]})]})]})]},o))}),e.jsx(j,{to:"/recommended-food",children:e.jsx(yt,{children:"See more →"})})]})})},St=d.div`
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  @media screen and (max-width: 834px) {
   width: 300px;
  }`,Ft=d.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
font-size: 18px;
font-weight: 500;
line-height: 1.33;`,Wt=d.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 8px;
  }`,$t=d.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,It=d.button`
background-color: transparent;
border: none;
`,Dt=d.button`
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
  }`,Mt=({name:r,img:i})=>{const[n,o]=l.useState(!1),c=()=>{o(!n)},a=P(oe);let s;switch(r){case"breakfast":s=a==null?void 0:a.breakfast;break;case"lunch":s=a==null?void 0:a.lunch;break;case"dinner":s=a==null?void 0:a.dinner;break;case"snack":s=a==null?void 0:a.snack;break;default:s=null;break}return e.jsxs(St,{children:[e.jsxs(Wt,{children:[e.jsx("img",{src:i,width:36,height:36}),e.jsx(Ft,{children:r})]}),!s||s.dish.length===0?e.jsx(Dt,{onClick:c,children:"+ Record your meal"}):e.jsxs(e.Fragment,{children:[e.jsx(ae,{name:r}),e.jsx(It,{children:e.jsx($t,{children:e.jsx("use",{href:`${se}#icon-trash`})})})]}),n&&e.jsx(ce,{name:r,img:i,onClose:c})]})},Bt=d.div`
text-align: left;
width: 558px;`,Tt=d.h2`
margin-bottom: 16px;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.33;
@media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }`,Pt=d(j)`
margin-left: 16px;
color: var(--color-primary-grey);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
&:hover{color: var(--color-primary-green-lite);}
`,Et=d.ul`
   display:flex;
   flex-direction: column;
   gap: 28px;
  `,Rt=()=>{const r=[{name:"breakfast",img:le},{name:"lunch",img:de},{name:"dinner",img:pe},{name:"snack",img:xe}];return e.jsxs(Bt,{children:[e.jsxs(Tt,{children:["Diary",e.jsx(Pt,{to:"/diary",children:"See more"})]}),e.jsx(Et,{children:r.map(i=>e.jsx(Mt,{name:i.name,img:i.img},i.name))})]})},qt=()=>e.jsx("section",{children:e.jsxs(me,{children:[e.jsxs(xt,{children:[e.jsx(ht,{children:"Today"}),e.jsx(gt,{})]}),e.jsx(pt,{}),e.jsx(zt,{}),e.jsx(Rt,{})]})});export{qt as default};
