import{s as t,j as e,r as x,g as R,h as z,b as p,i as G,L as u,u as H,k as O}from"./index-450960a9.js";import{i as f}from"./sprite-24ea7bfa.js";import{c as A,b as V,u as q}from"./index.esm-3727a046.js";import{C as N,A as Y,p as _,a as K,D as U,F as X}from"./index.esm-d204fcd6.js";import{n as h,L as J,t as Q,M as Z,s as ee,b as te,l as re,d as ie,a as ne}from"./snack-18c14aa9.js";import"./hoist-non-react-statics.cjs-9a276d61.js";import"./emotion-element-c39617d8.browser.esm-02d0516f.js";const oe=t.div`
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
`,ae=({children:r})=>e.jsx(oe,{children:r}),se=t.div`
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
`,ce=({calories:r,water:o})=>e.jsx(se,{children:e.jsxs("ul",{children:[e.jsxs(F,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${f}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(W,{children:"Calories"}),e.jsx($,{children:r})]})]}),e.jsxs(F,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${f}#icon-bottle`})}),e.jsxs("div",{children:[e.jsx(W,{children:"Water"}),e.jsxs($,{children:[o," ",e.jsx(le,{children:"ml"})]})]})]})]})}),de=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 5, 0.8);
`,pe=document.querySelector("#modal-root"),xe=({children:r,onClose:o})=>{x.useEffect(()=>{const n=a=>{a.code==="Escape"&&o()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[o]),x.useEffect(()=>{const n=document.body.classList.contains("noOverflow");return document.body.classList.add("noOverflow"),()=>{n||document.body.classList.remove("noOverflow")}},[]);const i=n=>{n.target===n.currentTarget&&o()};return R.createPortal(e.jsx(de,{onClick:i,children:r}),pe)},he=t.div`
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
`,ue=t.span`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.43;
`,we=t.span`
  display: block;
  position: relative;

  & input {
    border-color: ${r=>r.$isError&&"#E74A3B"};
  }

  & input {
    border-color: ${r=>r.$isCorrect&&"#3CBC81"};
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
`,ke=A().shape({water:V().typeError("It must be a valid number").required("Please fill the input").integer("Please enter only integer value").min(1,"The min value is 1")}),ze=({onClose:r,successHandler:o})=>{const i=q({initialValues:{water:""},onSubmit:l=>{o(l.water),r()},validationSchema:ke}),n=i.errors.water&&i.touched.water,a=!i.errors.water&&i.touched.water;return e.jsx(xe,{onClose:r,children:e.jsxs(he,{children:[e.jsx(me,{children:"Add water intake"}),e.jsxs(ge,{onSubmit:i.handleSubmit,children:[e.jsxs(fe,{children:[e.jsx(ue,{children:"How much water"}),e.jsxs(we,{$isError:n,$isCorrect:a,children:[e.jsx(je,{type:"text",name:"water",onChange:i.handleChange,value:i.values.water}),e.jsxs(ye,{children:[a&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${f}#correct`})}),n&&e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${f}#error`})})]})]}),n?e.jsx(be,{children:i.errors.water}):null]}),e.jsx(ve,{type:"submit",children:"Confirm"}),e.jsx(Ce,{type:"button",onClick:r,children:"Cancel"})]})]})})},Fe=t.div`
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
`,Ie=t.h3`
  margin-bottom: 12px;
  color: var(--color-primary-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,Se=t.div`
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
`,I=t.span`
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`,Be=t.div`
  position: relative;
  height: ${r=>`${r.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`,Te=t.p`
  position: absolute;
  left: 50%;
  bottom: ${r=>r.$isHighPercent?"50%":"calc(100% + 6px)"};
  transform: ${r=>r.$isHighPercent?"translate(-50%, 50%)":"translateX(-50%)"};
  color: ${r=>r.$isHighPercent?"black":"var(--color-primary-violet)"};
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
`,Le=({dailyWater:r,water:o})=>{const[i,n]=x.useState(null),[a,l]=x.useState(!1);x.useEffect(()=>{n(o)},[o]);const c=()=>{l(!1)},m=async g=>{try{const j=await z.post("/user/water-intake",{water:g}),y=new Date,T=y.getFullYear(),E=("0"+(y.getMonth()+1)).slice(-2),P=("0"+y.getDate()).slice(-2),L=T+"-"+E+"-"+P;n(j.data.waters[L])}catch(j){console.log(j)}},d=g=>{m(g)},s=async()=>{try{const g=await z.delete("/user/water-intake");console.log(g),n(0)}catch(g){console.log(g)}},w=x.useMemo(()=>Math.floor(i/r*100),[r,i]);return e.jsxs(Fe,{children:[e.jsx(We,{onClick:s,children:e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${f}#icon-trash-bin`})})}),e.jsx($e,{children:e.jsx(Be,{$percent:w,children:e.jsxs(Te,{$isHighPercent:w>=84,children:[w,"%"]})})}),e.jsxs(Ee,{children:[e.jsx(Ie,{children:"Water consumption"}),e.jsxs(Se,{children:[e.jsxs(De,{children:[i," ",e.jsx(I,{children:"ml"})]}),r>i&&e.jsxs(Me,{children:["left: ",e.jsxs(I,{children:[r-i," ml"]})]})]}),e.jsxs(Pe,{onClick:()=>l(!0),children:[e.jsx("svg",{height:12,width:12,children:e.jsx("use",{href:`${f}#icon-plus`})}),"Add water intake"]})]}),a&&e.jsx(ze,{onClose:c,successHandler:d})]})};N.register(Y,_,K);const Re={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Ge={id:"bcgCircle",beforeDatasetsDraw(r){const{ctx:o}=r;o.save();const i=r.getDatasetMeta(0).data[0].x,n=r.getDatasetMeta(0).data[0].y,a=r.getDatasetMeta(0).data[0].innerRadius,l=r.getDatasetMeta(0).data[0].outerRadius,c=l-a,m=Math.PI/180;o.beginPath(),o.lineWidth=c,o.strokeStyle="rgba(41, 41, 40, 1)",o.arc(i,n,l-c/2,0,m*360,!1),o.stroke()}},M=({dailyCalories:r,inputValue:o,chartBcg:i})=>{o>r&&(o=r,i="red");const n=r-o,a={datasets:[{label:[],data:[o,n],backgroundColor:[i,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(U,{options:Re,data:a,plugins:[Ge]})})},He=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Oe=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Ae=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,Ve=t.div`
  display: flex;
  flex-direction: column;
`,qe=t.h3`
  color: var(--color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Ne=t.div`
  display: flex;
  column-gap: 12px;
`,S=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,D=t.p`
  width: 78px;
  display: flex ;
  flex-direction: row;
  gap: 4px;
`,b=r=>{const{title:o,chartBcg:i,elementGoal:n,elementValue:a}=r;let l=(n-a).toFixed(1);l<0&&(l=0);let c=Math.round(a*100/n);return(c===1/0||isNaN(c))&&(c=0),c>100&&(c=100),e.jsx(e.Fragment,{children:e.jsxs(He,{children:[e.jsxs(Oe,{children:[e.jsx(M,{dailyCalories:n,inputValue:a,chartBcg:i}),e.jsx(Ae,{children:e.jsx("p",{children:`${c}%`})})]}),e.jsxs(Ve,{children:[e.jsx(qe,{children:o}),e.jsxs(Ne,{children:[e.jsxs(D,{children:[e.jsx("span",{style:{color:"white"},children:"Goal:"}),e.jsx(S,{children:n})]}),e.jsxs(D,{children:[e.jsx("span",{style:{color:"white"},children:"left:"}),e.jsx(S,{children:l})]})]})]})]})})},Ye=t.div`
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
`,Xe="#FFC4F7",Je="#FFF3B7",Qe="#B6B6B6",Ze=()=>{const r=p(s=>s.user.user.recommendedCalories),o=p(s=>s.user.user.recommendedCarbs),i=p(s=>s.user.user.recommendedFat),n=p(s=>s.user.user.recommendedProtein),a=p(s=>s.user.user.totalCalories),l=p(s=>s.user.user.totalCarbs),c=p(s=>s.user.user.totalFat),m=p(s=>s.user.user.totalProtein);let d="#45FFBC";return e.jsx("div",{children:e.jsxs(Ye,{children:[e.jsxs(_e,{children:[e.jsx(M,{dailyCalories:r,inputValue:a,chartBcg:d}),e.jsxs(Ke,{children:[e.jsx("p",{style:{color:"white"},children:a}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Ue,{children:[e.jsx(b,{title:"Carbonohidrates",chartBcg:Xe,elementGoal:o,elementValue:l}),e.jsx(b,{title:"Protein",chartBcg:Je,elementGoal:n,elementValue:m}),e.jsx(b,{title:"Fat",chartBcg:Qe,elementGoal:i,elementValue:c})]})]})})},et=()=>e.jsx("div",{children:e.jsx(Ze,{})}),tt=t.div`
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
`,k=t.div`
  background-color: var(--color-primary-black-2);
  border-radius: 12px;
`,rt=()=>{const r=p(G),{recommendedWater:o,recommendedCalories:i,totalWater:n}=r,a=o&&o.toFixed(1)*1e3;return e.jsxs(tt,{children:[e.jsxs(v,{children:[e.jsx(C,{children:"Daily goal"}),e.jsx(k,{children:e.jsx(ce,{calories:i,water:a})})]}),e.jsxs(v,{children:[e.jsx(C,{children:"Water"}),e.jsx(k,{children:e.jsx(Le,{water:n,dailyWater:a})})]}),e.jsxs(v,{children:[e.jsx(C,{children:"Food"}),e.jsx(k,{children:e.jsx(et,{})})]})]})},it=t.div`
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
`;t(u)`
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
`,at=t(u)`
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
  padding: 20px 34px 52px 138px;

  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
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

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    font-size: 18px;
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
`,gt=t.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,ft=t.p`
  color: var(--color-primary-grey);
`,ut=()=>{const[r,o]=x.useState([]);return x.useEffect(()=>{(async()=>{try{const n=await z.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");o(n.data.slice(0,4))}catch(n){console.error("Error fetching recommended food:",n)}})()},[]),e.jsx(lt,{children:e.jsxs(ct,{children:[e.jsx(dt,{children:"Recommended Food"}),e.jsx(pt,{children:r.map((i,n)=>e.jsxs(xt,{children:[e.jsx("img",{src:i.img,alt:i.name}),e.jsxs(mt,{children:[e.jsx("h3",{children:i.name}),e.jsxs(gt,{children:[e.jsx("p",{children:i.amount}),e.jsxs(ft,{children:[i.calories," calories"]})]})]})]},n))}),e.jsx(u,{to:"/recommended-food",children:e.jsx(ht,{children:"See more →"})})]})})},wt=h.div`
position: relative;
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  @media screen and (max-width: 834px) {
   width: 300px;
  }`,jt=h.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
font-size: 18px;
font-weight: 500;
line-height: 1.33;`,yt=h.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 8px;
  }`,bt=h.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,vt=h.button`

background-color: transparent;
border: none;
@media screen and (max-width: 833px) {
  position: absolute;
  top: 73px;
  left: 63px;
  }`,Ct=h.button`
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
  }`,kt=({name:r,img:o,intake:i})=>{const[n,a]=x.useState(!1),l="POST",c=null,m=()=>{a(!n)};let d;switch(r){case"breakfast":d=i==null?void 0:i.breakfast;break;case"lunch":d=i==null?void 0:i.lunch;break;case"dinner":d=i==null?void 0:i.dinner;break;case"snack":d=i==null?void 0:i.snack;break;default:d=null;break}return e.jsxs(wt,{children:[e.jsxs(yt,{children:[e.jsx("img",{src:o,width:36,height:36}),e.jsx(jt,{children:r})]}),!d||d.dish.length===0?e.jsx(Ct,{onClick:m,children:"+ Record your meal"}):e.jsxs(e.Fragment,{children:[e.jsx(J,{name:r}),e.jsx(vt,{children:e.jsx(bt,{children:e.jsx("use",{href:`${Q}#icon-trash`})})})]}),n&&e.jsx(Z,{name:r,img:o,onClose:m,requestType:l,idIntake:c})]})},zt=h.div`
width: 320px;
text-align: left;
@media screen and (min-width: 834px) {
    width: 558px;
  }`,Ft=h.h2`
margin-bottom: 16px;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.33;
@media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }`,Wt=h(u)`
margin-left: 16px;
color: var(--color-primary-grey);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
&:hover{color: var(--color-primary-green-lite);}
`,$t=h.ul`
   display:flex;
   flex-direction: column;
   gap: 28px;
  `,It=()=>{const r=H();x.useEffect(()=>{r(O())},[r]);const o=p(ee),i=[{name:"breakfast",img:te},{name:"lunch",img:re},{name:"dinner",img:ie},{name:"snack",img:ne}];return e.jsxs(zt,{children:[e.jsxs(Ft,{children:["Diary",e.jsx(Wt,{to:"/diary",children:"See more"})]}),e.jsx($t,{children:i.map(n=>e.jsx(kt,{name:n.name,img:n.img,intake:o},n.name))})]})},Lt=()=>e.jsx("section",{children:e.jsxs(ae,{children:[e.jsxs(it,{children:[e.jsx(nt,{children:"Today"}),e.jsx(st,{})]}),e.jsx(rt,{}),e.jsxs(ot,{children:[e.jsx(It,{}),e.jsx(ut,{})]})]})});export{Lt as default};
