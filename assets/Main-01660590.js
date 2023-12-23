import{s as t,j as e,r as d,g as T,b as P,h as q,u as f,i as K,L as u,k as X}from"./index-52d35938.js";import{i as S}from"./sprite-bebf375b.js";import{C as Y,A as J,p as Q,a as Z,D as ee,F as te}from"./index.esm-e1e4dca4.js";import{n as p,s as ne,a as ie,b as re,c as oe,L as ae,t as se,M as de,d as ce,l as le,e as pe,f as xe}from"./snack-5a1b760a.js";import"./emotion-element-c39617d8.browser.esm-d28b2a85.js";import"./index.esm-5ca7ed9d.js";import"./hoist-non-react-statics.cjs-328f2350.js";const he=t.div`
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
`,me=({children:n})=>e.jsx(he,{children:n}),ge=t.div`
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
`,ue=({calories:n,water:i})=>e.jsx(ge,{children:e.jsxs("ul",{children:[e.jsxs(I,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${S}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(D,{children:"Calories"}),e.jsx(M,{children:n})]})]}),e.jsxs(I,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${S}#icon-bottle`})}),e.jsxs("div",{children:[e.jsx(D,{children:"Water"}),e.jsxs(M,{children:[i," ",e.jsx(fe,{children:"ml"})]})]})]})]})}),we=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 5, 0.8);
`,be=({children:n,onClose:i})=>{d.useEffect(()=>{const o=a=>{a.code==="Escape"&&i()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[i]);const r=o=>{o.target===o.currentTarget&&i()};return e.jsx(we,{onClick:r,children:n})},je=t.div`
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
`,ye=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 29px;
    line-height: 1.2;
    text-align: center;
  }
`,ve=t.form`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,ke=t.label`
  display: block;
  margin-bottom: 32px;
`,Ce=t.span`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.43;
`,ze=t.input`
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
`,Fe=t.button`
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
`,Se=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;

  text-align: center;
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,We=({onClose:n,successHandler:i})=>{const[r,o]=d.useState(""),a=s=>{s.preventDefault,!(+r<0)&&+r%1===0&&(i(+r),n())},c=s=>{o(s.target.value)};return e.jsx(be,{onClose:n,children:e.jsxs(je,{children:[e.jsx(ye,{children:"Add water intake"}),e.jsxs(ve,{onSubmit:a,children:[e.jsxs(ke,{children:[e.jsx(Ce,{children:"How much water"}),e.jsx(ze,{type:"number",onChange:c,value:r})]}),e.jsx(Fe,{type:"submit",children:"Confirm"}),e.jsx(Se,{type:"button",onClick:n,children:"Cancel"})]})]})})},Ie=t.div`
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
`,De=t.div`
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
`,Me=t.h3`
  margin-bottom: 12px;
  color: var(--color-primary-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,$e=t.div`
  margin-bottom: 16px;

  color: var(--color-primary-white);

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`,Be=t.p`
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
`,Te=t.p`
  font-size: 14px;
  line-height: 1.43;
`,$=t.span`
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`,Pe=t.div`
  position: relative;
  height: ${n=>`${n.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`,Re=t.p`
  position: absolute;
  left: 50%;
  bottom: ${n=>n.$isHighPercent?"50%":"calc(100% + 6px)"};
  transform: ${n=>n.$isHighPercent?"translate(-50%, 50%)":"translateX(-50%)"};
  color: ${n=>n.$isHighPercent?"black":"var(--color-primary-violet)"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
`,Ee=t.div``,Le=t.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;

  border-radius: 12px;
  background-color: var(--color-primary-green-lite);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,Ge=({dailyWater:n})=>{const[i,r]=d.useState(1050),[o,a]=d.useState(!1),c=()=>{a(!1)},s=async h=>{try{const l=await T.post("/user/water-intake",{water:h}),g=new Date,w=g.getFullYear(),b=("0"+(g.getMonth()+1)).slice(-2),j=("0"+g.getDate()).slice(-2),y=w+"-"+b+"-"+j;r(l.data.waters[y])}catch(l){console.log(l)}},m=h=>{r(l=>l+h),s(h)},x=d.useMemo(()=>Math.round(i/n*100),[n,i]);return e.jsxs(Ie,{children:[e.jsx(De,{children:e.jsx(Pe,{$percent:x,children:e.jsxs(Re,{$isHighPercent:x>=84,children:[x,"%"]})})}),e.jsxs(Ee,{children:[e.jsx(Me,{children:"Water consumption"}),e.jsxs($e,{children:[e.jsxs(Be,{children:[i," ",e.jsx($,{children:"ml"})]}),e.jsxs(Te,{children:["left: ",e.jsxs($,{children:[n-i," ml"]})]})]}),e.jsxs(Le,{onClick:()=>a(!0),children:[e.jsx("svg",{height:12,width:12,children:e.jsx("use",{href:`${S}#icon-plus`})}),"Add water intake"]})]}),o&&e.jsx(We,{onClose:c,successHandler:m})]})};Y.register(J,Q,Z);const Ae={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},He={id:"bcgCircle",beforeDatasetsDraw(n){const{ctx:i}=n;i.save();const r=n.getDatasetMeta(0).data[0].x,o=n.getDatasetMeta(0).data[0].y,a=n.getDatasetMeta(0).data[0].innerRadius,c=n.getDatasetMeta(0).data[0].outerRadius,s=c-a,m=Math.PI/180;i.beginPath(),i.lineWidth=s,i.strokeStyle="rgba(41, 41, 40, 1)",i.arc(r,o,c-s/2,0,m*360,!1),i.stroke()}},R=({dailyCalories:n,inputValue:i,chartBcg:r})=>{i>n&&(i=n,r="red");const o=n-i,a={datasets:[{label:[],data:[i,o],backgroundColor:[r,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(ee,{options:Ae,data:a,plugins:[He]})})},Oe=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Ve=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Ne=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,Ue=t.div`
  display: flex;
  flex-direction: column;
`,_e=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,qe=t.div`
  display: flex;
  column-gap: 12px;
`,B=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,Ke=t.p`
  width: 78px;
`,k=n=>{const{title:i,chartBcg:r,elementGoal:o,elementValue:a}=n;let c=(o-a).toFixed(1);c<0&&(c=0);let s=Math.round(a*100/o);return(s===1/0||isNaN(s))&&(s=0),s>100&&(s=100),e.jsx(e.Fragment,{children:e.jsxs(Oe,{children:[e.jsxs(Ve,{children:[e.jsx(R,{dailyCalories:o,inputValue:a,chartBcg:r}),e.jsx(Ne,{children:e.jsx("p",{children:`${s}%`})})]}),e.jsxs(Ue,{children:[e.jsx(_e,{children:i}),e.jsxs(qe,{children:[e.jsxs(Ke,{children:["Goal: ",e.jsx(B,{children:o})]}),e.jsxs("p",{children:["left: ",e.jsx(B,{children:c})]})]})]})]})})},Xe=t.div`
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
`,Ye=t.div`
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
`,Je=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Qe=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Ze="#FFC4F7",et="#FFF3B7",tt="#B6B6B6",nt=()=>{const[n,i]=d.useState(),[r,o]=d.useState(),[a,c]=d.useState(),[s,m]=d.useState(),[x,h]=d.useState(),[l,g]=d.useState(),[w,b]=d.useState(),[j,y]=d.useState(),W=P();d.useEffect(()=>{W(q()).then(v=>{const{recommendedCalories:G,recommendedCarbs:A,recommendedFat:H,recommendedProtein:O,totalCalories:V,totalCarbs:N,totalFat:U,totalProtein:_}=v.payload;i(G),o(A),c(H),m(O),h(V),g(N),b(U),y(_)}).catch(v=>{console.error("Error fetching user data:",v)})},[W]);let L="#45FFBC";return e.jsx("div",{children:e.jsxs(Xe,{children:[e.jsxs(Ye,{children:[e.jsx(R,{dailyCalories:n,inputValue:x,chartBcg:L}),e.jsxs(Je,{children:[e.jsx("p",{children:x}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Qe,{children:[e.jsx(k,{title:"Carbonohidrates",chartBcg:Ze,elementGoal:r,elementValue:l}),e.jsx(k,{title:"Protein",chartBcg:et,elementGoal:s,elementValue:j}),e.jsx(k,{title:"Fat",chartBcg:tt,elementGoal:a,elementValue:w})]})]})})},it=()=>e.jsx("div",{children:e.jsx(nt,{})}),rt=t.div`
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
  }
`,C=t.div`
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
`,z=t.h2`
  margin-bottom: 6px;

  color: var(--color-primary-white);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,F=t.div`
  background-color: var(--color-primary-black-2);
  border-radius: 12px;
`,ot=()=>{const n=f(K),{recommendedCalories:i,recommendedWater:r}=n;return e.jsxs(rt,{children:[e.jsxs(C,{children:[e.jsx(z,{children:"Daily goal"}),e.jsx(F,{children:e.jsx(ue,{calories:i,water:r*1e3})})]}),e.jsxs(C,{children:[e.jsx(z,{children:"Water"}),e.jsx(F,{children:e.jsx(Ge,{dailyWater:r*1e3})})]}),e.jsxs(C,{children:[e.jsx(z,{children:"Food"}),e.jsx(F,{children:e.jsx(it,{})})]})]})},at=t.div`
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
`,st=t.h1`
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
`;const E=t.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,dt=t(u)`
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
    ${E} {
      color: var(--color-primary-green-lite);
    }
  }

  @media only screen and (min-width: 835px) {
    font-size: 16px;
    line-height: 1.37;
  }
`,ct=()=>e.jsx(e.Fragment,{children:e.jsxs(dt,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(E,{children:e.jsx(te,{})})]})}),lt=t.div`
  padding: 20px 34px 52px 138px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
  }
`,pt=t.div`
  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,xt=t.h2`
  margin-bottom: 16px;
  color: #ffffff;
  font-size: 22px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 18px;
  }
`,ht=t.div`
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
`,mt=t.div`
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
`,gt=t.p`
  display: block;
  margin-top: 16px;
  color: #b6b6b6;
  font-size: 16px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,ft=t.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,ut=t.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,wt=t.p`
  color: #b6b6b6;
`,bt=()=>{const[n,i]=d.useState([]);return d.useEffect(()=>{(async()=>{try{const o=await T.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");i(o.data.slice(0,4))}catch(o){console.error("Error fetching recommended food:",o)}})()},[]),e.jsx(lt,{children:e.jsxs(pt,{children:[e.jsx(xt,{children:"Recommended Food"}),e.jsx(ht,{children:n.map((r,o)=>e.jsxs(mt,{children:[e.jsx("img",{src:r.img,alt:r.name}),e.jsxs(ft,{children:[e.jsx("h3",{children:r.name}),e.jsxs(ut,{children:[e.jsx("p",{children:r.amount}),e.jsxs(wt,{children:[r.calories," calories"]})]})]})]},o))}),e.jsx(u,{to:"/recommended-food",children:e.jsx(gt,{children:"See more →"})})]})})},jt=p.div`
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  @media screen and (max-width: 834px) {
   width: 300px;
  }`,yt=p.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
font-size: 18px;
font-weight: 500;
line-height: 1.33;`,vt=p.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 8px;
  }`,kt=p.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,Ct=p.button`
background-color: transparent;
border: none;
`,zt=p.button`
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
  }`,Ft=({name:n,img:i})=>{const[r,o]=d.useState(!1),a=P(),c=()=>{o(!r)};d.useEffect(()=>{a(X())},[a]);const s=f(ne),m=f(ie),x=f(re),h=f(oe);let l;switch(n){case"breakfast":l=s;break;case"lunch":l=m;break;case"dinner":l=x;break;case"snack":l=h;break;default:l=null;break}return e.jsxs(jt,{children:[e.jsxs(vt,{children:[e.jsx("img",{src:i,width:36,height:36}),e.jsx(yt,{children:n})]}),!l||l.dish.length===0?e.jsx(zt,{onClick:c,children:"+ Record your meal"}):e.jsxs(e.Fragment,{children:[e.jsx(ae,{name:n}),e.jsx(Ct,{children:e.jsx(kt,{children:e.jsx("use",{href:`${se}#icon-trash`})})})]}),r&&e.jsx(de,{name:n,img:i,onClose:c})]})},St=p.div`
text-align: left;
width: 558px;`,Wt=p.h2`
margin-bottom: 16px;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.33;
@media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }`,It=p(u)`
margin-left: 16px;
color: var(--color-primary-grey);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
&:hover{color: var(--color-primary-green-lite);}
`,Dt=p.ul`
   display:flex;
   flex-direction: column;
   gap: 28px;
  `,Mt=()=>{const n=[{name:"breakfast",img:ce},{name:"lunch",img:le},{name:"dinner",img:pe},{name:"snack",img:xe}];return e.jsxs(St,{children:[e.jsxs(Wt,{children:["Diary",e.jsx(It,{to:"/diary",children:"See more"})]}),e.jsx(Dt,{children:n.map(i=>e.jsx(Ft,{name:i.name,img:i.img},i.name))})]})},Gt=()=>e.jsx("section",{children:e.jsxs(me,{children:[e.jsxs(at,{children:[e.jsx(st,{children:"Today"}),e.jsx(ct,{})]}),e.jsx(ot,{}),e.jsx(bt,{}),e.jsx(Mt,{})]})});export{Gt as default};
