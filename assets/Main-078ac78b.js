import{s as i,j as e,r as a,g as k,u as M,h as T,L as j}from"./index-08b517a0.js";import{i as w}from"./sprite-a6a5b9e3.js";import{F as D}from"./index.esm-a59d456e.js";const I=i.div`
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
`,B=({children:t})=>e.jsx(I,{children:t}),E=i.div`
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    padding: 24px 40px;
  }
`,u=i.li`
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
`,b=i.h3`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,y=i.p`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--color-primary-white);
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,A=i.span`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,H=({calories:t,water:r})=>e.jsx(E,{children:e.jsxs("ul",{children:[e.jsxs(u,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${w}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(b,{children:"Calories"}),e.jsx(y,{children:t})]})]}),e.jsxs(u,{children:[e.jsx("svg",{width:80,height:80,children:e.jsx("use",{href:`${w}#icon-bottle`})}),e.jsxs("div",{children:[e.jsx(b,{children:"Water"}),e.jsxs(y,{children:[r," ",e.jsx(A,{children:"ml"})]})]})]})]})}),L=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 5, 0.8);
`,O=({children:t,onClose:r})=>{a.useEffect(()=>{const o=s=>{s.code==="Escape"&&r()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[r]);const n=o=>{o.target===o.currentTarget&&r()};return e.jsx(L,{onClick:n,children:t})},P=i.div`
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
`,G=i.h2`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 29px;
    line-height: 1.2;
    text-align: center;
  }
`,R=i.form`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,K=i.label`
  display: block;
  margin-bottom: 32px;
`,U=i.span`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.43;
`,X=i.input`
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
`,Y=i.button`
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
`,q=i.button`
  display: block;
  width: 100%;
  padding: 8px 10px;

  text-align: center;
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,J=({onClose:t,successHandler:r})=>{const[n,o]=a.useState(""),s=d=>{d.preventDefault,!(+n<0)&&+n%1===0&&(r(+n),t())},x=d=>{o(d.target.value)};return e.jsx(O,{onClose:t,children:e.jsxs(P,{children:[e.jsx(G,{children:"Add water intake"}),e.jsxs(R,{onSubmit:s,children:[e.jsxs(K,{children:[e.jsx(U,{children:"How much water"}),e.jsx(X,{type:"number",onChange:x,value:n})]}),e.jsx(Y,{type:"submit",children:"Confirm"}),e.jsx(q,{type:"button",onClick:t,children:"Cancel"})]})]})})},N=i.div`
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
`,Q=i.div`
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
`,V=i.h3`
  margin-bottom: 12px;
  color: var(--color-primary-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,Z=i.div`
  margin-bottom: 16px;

  color: var(--color-primary-white);

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`,_=i.p`
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
`,ee=i.p`
  font-size: 14px;
  line-height: 1.43;
`,v=i.span`
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`,ie=i.div`
  position: relative;
  height: ${t=>`${t.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`,te=i.p`
  position: absolute;
  left: 50%;
  bottom: ${t=>t.$isHighPercent?"50%":"calc(100% + 6px)"};
  transform: ${t=>t.$isHighPercent?"translate(-50%, 50%)":"translateX(-50%)"};
  color: ${t=>t.$isHighPercent?"black":"var(--color-primary-violet)"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
`,ne=i.div``,re=i.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;

  border-radius: 12px;
  background-color: var(--color-primary-green-lite);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,oe=({dailyWater:t})=>{const[r,n]=a.useState(1050),[o,s]=a.useState(!1),x=()=>{s(!1)},d=async c=>{try{const p=await k.post("/user/water-intake",{water:c}),h=new Date,C=h.getFullYear(),$=("0"+(h.getMonth()+1)).slice(-2),S=("0"+h.getDate()).slice(-2),F=C+"-"+$+"-"+S;n(p.data.waters[F])}catch(p){console.log(p)}},W=c=>{n(p=>p+c),d(c)},l=a.useMemo(()=>Math.round(r/t*100),[t,r]);return e.jsxs(N,{children:[e.jsx(Q,{children:e.jsx(ie,{$percent:l,children:e.jsxs(te,{$isHighPercent:l>=84,children:[l,"%"]})})}),e.jsxs(ne,{children:[e.jsx(V,{children:"Water consumption"}),e.jsxs(Z,{children:[e.jsxs(_,{children:[r," ",e.jsx(v,{children:"ml"})]}),e.jsxs(ee,{children:["left: ",e.jsxs(v,{children:[t-r," ml"]})]})]}),e.jsxs(re,{onClick:()=>s(!0),children:[e.jsx("svg",{height:12,width:12,children:e.jsx("use",{href:`${w}#icon-plus`})}),"Add water intake"]})]}),o&&e.jsx(J,{onClose:x,successHandler:W})]})},ae=()=>e.jsx("div",{children:"FoodStatistic"}),se=i.div`
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
  }
`,m=i.div`
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
`,g=i.h2`
  margin-bottom: 6px;

  color: var(--color-primary-white);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,f=i.div`
  background-color: var(--color-primary-black-2);
  border-radius: 12px;
`,de=()=>{const t=M(T),{recommendedCalories:r,recommendedWater:n}=t;return e.jsxs(se,{children:[e.jsxs(m,{children:[e.jsx(g,{children:"Daily goal"}),e.jsx(f,{children:e.jsx(H,{calories:r,water:n*1e3})})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Water"}),e.jsx(f,{children:e.jsx(oe,{dailyWater:n*1e3})})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Food"}),e.jsx(f,{children:e.jsx(ae,{})})]})]})},pe=i.div`
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
`,ce=i.h1`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;i(j)`
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
`;const z=i.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,xe=i(j)`
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
    ${z} {
      color: var(--color-primary-green-lite);
    }
  }

  @media only screen and (min-width: 835px) {
    font-size: 16px;
    line-height: 1.37;
  }
`,le=()=>e.jsx(e.Fragment,{children:e.jsxs(xe,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(z,{children:e.jsx(D,{})})]})}),he=()=>e.jsx(e.Fragment,{children:e.jsx("div",{})}),me=i.div`
  padding: 20px 34px 52px 138px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
  }
`,ge=i.div`
  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,fe=i.h2`
  margin-bottom: 16px;
  color: #ffffff;
  font-size: 22px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 18px;
  }
`,we=i.div`
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
`,je=i.div`
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
`,ue=i.p`
  display: block;
  margin-top: 16px;
  color: #b6b6b6;
  font-size: 16px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,be=i.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,ye=i.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,ve=i.p`
  color: #b6b6b6;
`,ke=()=>{const[t,r]=a.useState([]);return a.useEffect(()=>{(async()=>{try{const o=await k.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");r(o.data.slice(0,4))}catch(o){console.error("Error fetching recommended food:",o)}})()},[]),e.jsx(me,{children:e.jsxs(ge,{children:[e.jsx(fe,{children:"Recommended Food"}),e.jsx(we,{children:t.map((n,o)=>e.jsxs(je,{children:[e.jsx("img",{src:n.img,alt:n.name}),e.jsxs(be,{children:[e.jsx("h3",{children:n.name}),e.jsxs(ye,{children:[e.jsx("p",{children:n.amount}),e.jsxs(ve,{children:[n.calories," calories"]})]})]})]},o))}),e.jsx(j,{to:"/recommended-food",children:e.jsx(ue,{children:"See more →"})})]})})},$e=()=>e.jsx("section",{children:e.jsxs(B,{children:[e.jsxs(pe,{children:[e.jsx(ce,{children:"Today"}),e.jsx(le,{})]}),e.jsx(de,{}),e.jsx(he,{}),e.jsx(ke,{})]})});export{$e as default};
