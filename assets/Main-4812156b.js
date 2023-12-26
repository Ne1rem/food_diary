import{s as t,j as e,r as s,g as Y,h as $,u as P,i as _,b as E,k as K,L as j,l as X}from"./index-cef11774.js";import{i as g}from"./sprite-8225803d.js";import{c as J,b as Q,u as Z}from"./index.esm-7dc61f04.js";import{C as ee,A as te,p as ie,a as re,D as ne,F as oe}from"./index.esm-f4e94b27.js";import{n as x,s as ae,L as se,t as de,M as ce,b as le,l as pe,d as xe,a as he}from"./snack-af73c82b.js";import"./hoist-non-react-statics.cjs-116f6a9d.js";import"./emotion-element-c39617d8.browser.esm-77c357c9.js";const me=t.div`
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
`,ge=({children:i})=>e.jsx(me,{children:i}),fe=t.div`
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
`,we=({calories:i,water:r})=>e.jsx(fe,{children:e.jsxs("ul",{children:[e.jsxs(I,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${g}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(D,{children:"Calories"}),e.jsx(M,{children:i})]})]}),e.jsxs(I,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${g}#icon-bottle`})}),e.jsxs("div",{children:[e.jsx(D,{children:"Water"}),e.jsxs(M,{children:[r," ",e.jsx(ue,{children:"ml"})]})]})]})]})}),be=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 5, 0.8);
`,je=document.querySelector("#modal-root"),ye=({children:i,onClose:r})=>{s.useEffect(()=>{const o=a=>{a.code==="Escape"&&r()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[r]),s.useEffect(()=>{const o=document.body.classList.contains("noOverflow");return document.body.classList.add("noOverflow"),()=>{o||document.body.classList.remove("noOverflow")}},[]);const n=o=>{o.target===o.currentTarget&&r()};return Y.createPortal(e.jsx(be,{onClick:n,children:i}),je)},ve=t.div`
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
    border-color: ${i=>i.$isError&&"#E74A3B"};
  }

  & input {
    border-color: ${i=>i.$isCorrect&&"#3CBC81"};
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
`,Te=J().shape({water:Q().typeError("It must be a valid number").required("Please fill the input").integer("Please enter only integer value").min(1,"The min value is 1")}),Be=({onClose:i,successHandler:r})=>{const n=Z({initialValues:{water:""},onSubmit:c=>{r(c.water),i()},validationSchema:Te}),o=n.errors.water&&n.touched.water,a=!n.errors.water&&n.touched.water;return e.jsx(ye,{onClose:i,children:e.jsxs(ve,{children:[e.jsx(Ce,{children:"Add water intake"}),e.jsxs(ke,{onSubmit:n.handleSubmit,children:[e.jsxs(ze,{children:[e.jsx(Fe,{children:"How much water"}),e.jsxs(Se,{$isError:o,$isCorrect:a,children:[e.jsx(We,{type:"text",name:"water",onChange:n.handleChange,value:n.values.water}),e.jsxs($e,{children:[a&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${g}#correct`})}),o&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${g}#error`})})]})]}),o?e.jsx(Ie,{children:n.errors.water}):null]}),e.jsx(De,{type:"submit",children:"Confirm"}),e.jsx(Me,{type:"button",onClick:i,children:"Cancel"})]})]})})},Pe=t.div`
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
`,Le=t.h3`
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
`,Oe=t.p`
  font-size: 14px;
  line-height: 1.43;
`,T=t.span`
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`,Ae=t.div`
  position: relative;
  height: ${i=>`${i.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`,Ve=t.p`
  position: absolute;
  left: 50%;
  bottom: ${i=>i.$isHighPercent?"50%":"calc(100% + 6px)"};
  transform: ${i=>i.$isHighPercent?"translate(-50%, 50%)":"translateX(-50%)"};
  color: ${i=>i.$isHighPercent?"black":"var(--color-primary-violet)"};
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
`,Ue=({dailyWater:i,water:r})=>{const[n,o]=s.useState(null),[a,c]=s.useState(!1);s.useEffect(()=>{o(r)},[r]);const l=()=>{c(!1)},m=async h=>{try{const u=await $.post("/user/water-intake",{water:h}),w=new Date,y=w.getFullYear(),v=("0"+(w.getMonth()+1)).slice(-2),b=("0"+w.getDate()).slice(-2),C=y+"-"+v+"-"+b;o(u.data.waters[C])}catch(u){console.log(u)}},d=h=>{m(h)},p=async()=>{try{const h=await $.delete("/user/water-intake");console.log(h),o(0)}catch(h){console.log(h)}},f=s.useMemo(()=>Math.floor(n/i*100),[i,n]);return e.jsxs(Pe,{children:[e.jsx(Ee,{onClick:p,children:e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${g}#icon-trash-bin`})})}),e.jsx(Re,{children:e.jsx(Ae,{$percent:f,children:e.jsxs(Ve,{$isHighPercent:f>=84,children:[f,"%"]})})}),e.jsxs(qe,{children:[e.jsx(Le,{children:"Water consumption"}),e.jsxs(Ge,{children:[e.jsxs(He,{children:[n," ",e.jsx(T,{children:"ml"})]}),i>n&&e.jsxs(Oe,{children:["left: ",e.jsxs(T,{children:[i-n," ml"]})]})]}),e.jsxs(Ne,{onClick:()=>c(!0),children:[e.jsx("svg",{height:12,width:12,children:e.jsx("use",{href:`${g}#icon-plus`})}),"Add water intake"]})]}),a&&e.jsx(Be,{onClose:l,successHandler:d})]})};ee.register(te,ie,re);const Ye={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},_e={id:"bcgCircle",beforeDatasetsDraw(i){const{ctx:r}=i;r.save();const n=i.getDatasetMeta(0).data[0].x,o=i.getDatasetMeta(0).data[0].y,a=i.getDatasetMeta(0).data[0].innerRadius,c=i.getDatasetMeta(0).data[0].outerRadius,l=c-a,m=Math.PI/180;r.beginPath(),r.lineWidth=l,r.strokeStyle="rgba(41, 41, 40, 1)",r.arc(n,o,c-l/2,0,m*360,!1),r.stroke()}},R=({dailyCalories:i,inputValue:r,chartBcg:n})=>{r>i&&(r=i,n="red");const o=i-r,a={datasets:[{label:[],data:[r,o],backgroundColor:[n,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(ne,{options:Ye,data:a,plugins:[_e]})})},Ke=t.div`
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
`,B=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,tt=t.p`
  width: 78px;
`,z=i=>{const{title:r,chartBcg:n,elementGoal:o,elementValue:a}=i;let c=(o-a).toFixed(1);c<0&&(c=0);let l=Math.round(a*100/o);return(l===1/0||isNaN(l))&&(l=0),l>100&&(l=100),e.jsx(e.Fragment,{children:e.jsxs(Ke,{children:[e.jsxs(Xe,{children:[e.jsx(R,{dailyCalories:o,inputValue:a,chartBcg:n}),e.jsx(Je,{children:e.jsx("p",{children:`${l}%`})})]}),e.jsxs(Qe,{children:[e.jsx(Ze,{children:r}),e.jsxs(et,{children:[e.jsxs(tt,{children:["Goal: ",e.jsx(B,{children:o})]}),e.jsxs("p",{children:["left: ",e.jsx(B,{children:c})]})]})]})]})})},it=t.div`
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
`,at="#FFC4F7",st="#FFF3B7",dt="#B6B6B6",ct=()=>{const[i,r]=s.useState(),[n,o]=s.useState(),[a,c]=s.useState(),[l,m]=s.useState(),[d,p]=s.useState(),[f,h]=s.useState(),[u,w]=s.useState(),[y,v]=s.useState(),b=P();s.useEffect(()=>{b(_()).then(k=>{const{recommendedCalories:G,recommendedCarbs:H,recommendedFat:O,recommendedProtein:A,totalCalories:V,totalCarbs:q,totalFat:N,totalProtein:U}=k.payload;r(G),o(H),c(O),m(A),p(V),h(q),w(N),v(U)}).catch(k=>{console.error("Error fetching user data:",k)})},[b]);let C="#45FFBC";return e.jsx("div",{children:e.jsxs(it,{children:[e.jsxs(rt,{children:[e.jsx(R,{dailyCalories:i,inputValue:d,chartBcg:C}),e.jsxs(nt,{children:[e.jsx("p",{children:d}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(ot,{children:[e.jsx(z,{title:"Carbonohidrates",chartBcg:at,elementGoal:n,elementValue:f}),e.jsx(z,{title:"Protein",chartBcg:st,elementGoal:l,elementValue:y}),e.jsx(z,{title:"Fat",chartBcg:dt,elementGoal:a,elementValue:u})]})]})})},lt=()=>e.jsx("div",{children:e.jsx(ct,{})}),pt=t.div`
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
`,xt=()=>{const i=E(K),{recommendedWater:r,recommendedCalories:n,totalWater:o}=i,a=r&&r.toFixed(1)*1e3;return e.jsxs(pt,{children:[e.jsxs(F,{children:[e.jsx(S,{children:"Daily goal"}),e.jsx(W,{children:e.jsx(we,{calories:n,water:a})})]}),e.jsxs(F,{children:[e.jsx(S,{children:"Water"}),e.jsx(W,{children:e.jsx(Ue,{water:o,dailyWater:a})})]}),e.jsxs(F,{children:[e.jsx(S,{children:"Food"}),e.jsx(W,{children:e.jsx(lt,{})})]})]})},ht=t.div`
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
`;const gt=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`,L=t.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,ft=t(j)`
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
`,ut=()=>e.jsx(e.Fragment,{children:e.jsxs(ft,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(L,{children:e.jsx(oe,{})})]})}),wt=t.div`
  padding: 20px 34px 52px 138px;

  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
  }
`,bt=t.div`
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
`,yt=t.div`
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
`,vt=t.div`
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
`,Ct=t.p`
  display: block;
  margin-top: 16px;
  color: var(--color-primary-grey);
  font-size: 16px;

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,kt=t.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,zt=t.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,Ft=t.p`
  color: var(--color-primary-grey);
`,St=()=>{const[i,r]=s.useState([]);return s.useEffect(()=>{(async()=>{try{const o=await $.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");r(o.data.slice(0,4))}catch(o){console.error("Error fetching recommended food:",o)}})()},[]),e.jsx(wt,{children:e.jsxs(bt,{children:[e.jsx(jt,{children:"Recommended Food"}),e.jsx(yt,{children:i.map((n,o)=>e.jsxs(vt,{children:[e.jsx("img",{src:n.img,alt:n.name}),e.jsxs(kt,{children:[e.jsx("h3",{children:n.name}),e.jsxs(zt,{children:[e.jsx("p",{children:n.amount}),e.jsxs(Ft,{children:[n.calories," calories"]})]})]})]},o))}),e.jsx(j,{to:"/recommended-food",children:e.jsx(Ct,{children:"See more →"})})]})})},Wt=x.div`
position: relative;
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  @media screen and (max-width: 834px) {
   width: 300px;
  }`,$t=x.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
font-size: 18px;
font-weight: 500;
line-height: 1.33;`,It=x.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 8px;
  }`,Dt=x.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,Mt=x.button`

background-color: transparent;
border: none;
@media screen and (max-width: 833px) {
  position: absolute;
  top: 73px;
  left: 63px;
  }`,Tt=x.button`
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
  }`,Bt=({name:i,img:r})=>{const[n,o]=s.useState(!1),a=P(),c="POST",l=null,m=()=>{o(!n)};s.useEffect(()=>{a(X())},[a]);const d=E(ae);let p;switch(i){case"breakfast":p=d==null?void 0:d.breakfast;break;case"lunch":p=d==null?void 0:d.lunch;break;case"dinner":p=d==null?void 0:d.dinner;break;case"snack":p=d==null?void 0:d.snack;break;default:p=null;break}return e.jsxs(Wt,{children:[e.jsxs(It,{children:[e.jsx("img",{src:r,width:36,height:36}),e.jsx($t,{children:i})]}),!p||p.dish.length===0?e.jsx(Tt,{onClick:m,children:"+ Record your meal"}):e.jsxs(e.Fragment,{children:[e.jsx(se,{name:i}),e.jsx(Mt,{children:e.jsx(Dt,{children:e.jsx("use",{href:`${de}#icon-trash`})})})]}),n&&e.jsx(ce,{name:i,img:r,onClose:m,requestType:c,idIntake:l})]})},Pt=x.div`
max-width: 320px;
text-align: left;
@media screen and (min-width: 834px) {
    max-width: 558px;
  }`,Et=x.h2`
margin-bottom: 16px;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.33;
@media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }`,Rt=x(j)`
margin-left: 16px;
color: var(--color-primary-grey);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
&:hover{color: var(--color-primary-green-lite);}
`,Lt=x.ul`
   display:flex;
   flex-direction: column;
   gap: 28px;
  `,Gt=()=>{const i=[{name:"breakfast",img:le},{name:"lunch",img:pe},{name:"dinner",img:xe},{name:"snack",img:he}];return e.jsxs(Pt,{children:[e.jsxs(Et,{children:["Diary",e.jsx(Rt,{to:"/diary",children:"See more"})]}),e.jsx(Lt,{children:i.map(r=>e.jsx(Bt,{name:r.name,img:r.img},r.name))})]})},Yt=()=>e.jsx("section",{children:e.jsxs(ge,{children:[e.jsxs(ht,{children:[e.jsx(mt,{children:"Today"}),e.jsx(ut,{})]}),e.jsx(xt,{}),e.jsxs(gt,{children:[e.jsx(Gt,{}),e.jsx(St,{})]})]})});export{Yt as default};
