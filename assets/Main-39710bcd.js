import{s as t,j as e,r as l,g as W,u as I,h as G,L as b}from"./index-aa210fd1.js";import{i as j}from"./sprite-0228fed0.js";import{C as T,A as E,p as P,a as R,D as A,F as H}from"./index.esm-bdcf589b.js";const L=t.div`
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
`,O=({children:i})=>e.jsx(L,{children:i}),V=t.div`
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    padding: 24px 40px;
  }
`,y=t.li`
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
`,v=t.h3`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,C=t.p`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--color-primary-white);
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,N=t.span`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,_=({calories:i,water:n})=>e.jsx(V,{children:e.jsxs("ul",{children:[e.jsxs(y,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${j}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(v,{children:"Calories"}),e.jsx(C,{children:i})]})]}),e.jsxs(y,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${j}#icon-bottle`})}),e.jsxs("div",{children:[e.jsx(v,{children:"Water"}),e.jsxs(C,{children:[n," ",e.jsx(N,{children:"ml"})]})]})]})]})}),K=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 5, 0.8);
`,U=({children:i,onClose:n})=>{l.useEffect(()=>{const o=s=>{s.code==="Escape"&&n()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[n]);const r=o=>{o.target===o.currentTarget&&n()};return e.jsx(K,{onClick:r,children:i})},X=t.div`
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
`,Y=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 29px;
    line-height: 1.2;
    text-align: center;
  }
`,q=t.form`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,J=t.label`
  display: block;
  margin-bottom: 32px;
`,Q=t.span`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.43;
`,Z=t.input`
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
`,ee=t.button`
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
`,te=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;

  text-align: center;
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,ie=({onClose:i,successHandler:n})=>{const[r,o]=l.useState(""),s=a=>{a.preventDefault,!(+r<0)&&+r%1===0&&(n(+r),i())},d=a=>{o(a.target.value)};return e.jsx(U,{onClose:i,children:e.jsxs(X,{children:[e.jsx(Y,{children:"Add water intake"}),e.jsxs(q,{onSubmit:s,children:[e.jsxs(J,{children:[e.jsx(Q,{children:"How much water"}),e.jsx(Z,{type:"number",onChange:d,value:r})]}),e.jsx(ee,{type:"submit",children:"Confirm"}),e.jsx(te,{type:"button",onClick:i,children:"Cancel"})]})]})})},ne=t.div`
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
`,re=t.div`
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
`,oe=t.h3`
  margin-bottom: 12px;
  color: var(--color-primary-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,ae=t.div`
  margin-bottom: 16px;

  color: var(--color-primary-white);

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`,se=t.p`
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
`,de=t.p`
  font-size: 14px;
  line-height: 1.43;
`,k=t.span`
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`,le=t.div`
  position: relative;
  height: ${i=>`${i.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`,ce=t.p`
  position: absolute;
  left: 50%;
  bottom: ${i=>i.$isHighPercent?"50%":"calc(100% + 6px)"};
  transform: ${i=>i.$isHighPercent?"translate(-50%, 50%)":"translateX(-50%)"};
  color: ${i=>i.$isHighPercent?"black":"var(--color-primary-violet)"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
`,pe=t.div``,xe=t.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;

  border-radius: 12px;
  background-color: var(--color-primary-green-lite);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,he=({dailyWater:i})=>{const[n,r]=l.useState(1050),[o,s]=l.useState(!1),d=()=>{s(!1)},a=async h=>{try{const x=await W.post("/user/water-intake",{water:h}),m=new Date,D=m.getFullYear(),$=("0"+(m.getMonth()+1)).slice(-2),B=("0"+m.getDate()).slice(-2),M=D+"-"+$+"-"+B;r(x.data.waters[M])}catch(x){console.log(x)}},c=h=>{r(x=>x+h),a(h)},p=l.useMemo(()=>Math.round(n/i*100),[i,n]);return e.jsxs(ne,{children:[e.jsx(re,{children:e.jsx(le,{$percent:p,children:e.jsxs(ce,{$isHighPercent:p>=84,children:[p,"%"]})})}),e.jsxs(pe,{children:[e.jsx(oe,{children:"Water consumption"}),e.jsxs(ae,{children:[e.jsxs(se,{children:[n," ",e.jsx(k,{children:"ml"})]}),e.jsxs(de,{children:["left: ",e.jsxs(k,{children:[i-n," ml"]})]})]}),e.jsxs(xe,{onClick:()=>s(!0),children:[e.jsx("svg",{height:12,width:12,children:e.jsx("use",{href:`${j}#icon-plus`})}),"Add water intake"]})]}),o&&e.jsx(ie,{onClose:d,successHandler:c})]})};T.register(E,P,R);const me={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},ge={id:"bcgCircle",beforeDatasetsDraw(i){const{ctx:n}=i;n.save();const r=i.getDatasetMeta(0).data[0].x,o=i.getDatasetMeta(0).data[0].y,s=i.getDatasetMeta(0).data[0].innerRadius,d=i.getDatasetMeta(0).data[0].outerRadius,a=d-s,c=Math.PI/180;n.beginPath(),n.lineWidth=a,n.strokeStyle="rgba(41, 41, 40, 1)",n.arc(r,o,d-a/2,0,c*360,!1),n.stroke()}},F=({dailyCalories:i,inputValue:n,chartBcg:r})=>{n>i&&(n=i,r="red");const o=i-n,s={datasets:[{label:[],data:[n,o],backgroundColor:[r,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(A,{options:me,data:s,plugins:[ge]})})},fe=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,we=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,ue=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,je=t.div`
  display: flex;
  flex-direction: column;
`,be=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,ye=t.div`
  display: flex;
  column-gap: 12px;
`,z=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,ve=t.p`
  width: 78px;
`,g=i=>{const{title:n,chartBcg:r,elementGoal:o,elementValue:s}=i;let d=(o-s).toFixed(1);d<0&&(d=0);let a=Math.round(s*100/o);return(a===1/0||isNaN(a))&&(a=0),a>100&&(a=100),e.jsx(e.Fragment,{children:e.jsxs(fe,{children:[e.jsxs(we,{children:[e.jsx(F,{dailyCalories:o,inputValue:s,chartBcg:r}),e.jsx(ue,{children:e.jsx("p",{children:`${a}%`})})]}),e.jsxs(je,{children:[e.jsx(be,{children:n}),e.jsxs(ye,{children:[e.jsxs(ve,{children:["Goal: ",e.jsx(z,{children:o})]}),e.jsxs("p",{children:["left: ",e.jsx(z,{children:d})]})]})]})]})})},Ce=t.div`
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
`,ke=t.div`
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
`,ze=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,We=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Fe="#FFC4F7",Se="#FFF3B7",De="#B6B6B6",$e=()=>{let i=1700,n=1360,r=119.5,o=136,s=44.8,d=170,a=135.5,c=56,p="#45FFBC";return e.jsx("div",{children:e.jsxs(Ce,{children:[e.jsxs(ke,{children:[e.jsx(F,{dailyCalories:i,inputValue:n,chartBcg:p}),e.jsxs(ze,{children:[e.jsx("p",{children:n}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(We,{children:[e.jsx(g,{title:"Carbonohidrates",chartBcg:Fe,elementGoal:d,elementValue:o}),e.jsx(g,{title:"Protein",chartBcg:Se,elementGoal:a,elementValue:r}),e.jsx(g,{title:"Fat",chartBcg:De,elementGoal:c,elementValue:s})]})]})})},Be=()=>e.jsx("div",{children:e.jsx($e,{})}),Me=t.div`
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
  }
`,f=t.div`
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
`,w=t.h2`
  margin-bottom: 6px;

  color: var(--color-primary-white);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,u=t.div`
  background-color: var(--color-primary-black-2);
  border-radius: 12px;
`,Ie=()=>{const i=I(G),{recommendedCalories:n,recommendedWater:r}=i;return e.jsxs(Me,{children:[e.jsxs(f,{children:[e.jsx(w,{children:"Daily goal"}),e.jsx(u,{children:e.jsx(_,{calories:n,water:r*1e3})})]}),e.jsxs(f,{children:[e.jsx(w,{children:"Water"}),e.jsx(u,{children:e.jsx(he,{dailyWater:r*1e3})})]}),e.jsxs(f,{children:[e.jsx(w,{children:"Food"}),e.jsx(u,{children:e.jsx(Be,{})})]})]})},Ge=t.div`
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
`,Te=t.h1`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;t(b)`
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
`;const S=t.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,Ee=t(b)`
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
    ${S} {
      color: var(--color-primary-green-lite);
    }
  }

  @media only screen and (min-width: 835px) {
    font-size: 16px;
    line-height: 1.37;
  }
`,Pe=()=>e.jsx(e.Fragment,{children:e.jsxs(Ee,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(S,{children:e.jsx(H,{})})]})}),Re=()=>e.jsx(e.Fragment,{children:e.jsx("div",{})}),Ae=t.div`
  padding: 20px 34px 52px 138px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
  }
`,He=t.div`
  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,Le=t.h2`
  margin-bottom: 16px;
  color: #ffffff;
  font-size: 22px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 18px;
  }
`,Oe=t.div`
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
`,Ve=t.div`
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
`,Ne=t.p`
  display: block;
  margin-top: 16px;
  color: #b6b6b6;
  font-size: 16px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,_e=t.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,Ke=t.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,Ue=t.p`
  color: #b6b6b6;
`,Xe=()=>{const[i,n]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const o=await W.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");n(o.data.slice(0,4))}catch(o){console.error("Error fetching recommended food:",o)}})()},[]),e.jsx(Ae,{children:e.jsxs(He,{children:[e.jsx(Le,{children:"Recommended Food"}),e.jsx(Oe,{children:i.map((r,o)=>e.jsxs(Ve,{children:[e.jsx("img",{src:r.img,alt:r.name}),e.jsxs(_e,{children:[e.jsx("h3",{children:r.name}),e.jsxs(Ke,{children:[e.jsx("p",{children:r.amount}),e.jsxs(Ue,{children:[r.calories," calories"]})]})]})]},o))}),e.jsx(b,{to:"/recommended-food",children:e.jsx(Ne,{children:"See more →"})})]})})},Qe=()=>e.jsx("section",{children:e.jsxs(O,{children:[e.jsxs(Ge,{children:[e.jsx(Te,{children:"Today"}),e.jsx(Pe,{})]}),e.jsx(Ie,{}),e.jsx(Re,{}),e.jsx(Xe,{})]})});export{Qe as default};
