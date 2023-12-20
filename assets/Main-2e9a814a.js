import{j as e,s as t,L as h,r as p,d as u}from"./index-f03696b2.js";import{C as w,A as j,p as y,a as b,D as v,F as C}from"./index.esm-0838600a.js";w.register(j,y,b);const F={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},z={id:"bcgCircle",beforeDatasetsDraw(n){const{ctx:i}=n;i.save();const a=n.getDatasetMeta(0).data[0].x,o=n.getDatasetMeta(0).data[0].y,s=n.getDatasetMeta(0).data[0].innerRadius,d=n.getDatasetMeta(0).data[0].outerRadius,r=d-s,l=Math.PI/180;i.beginPath(),i.lineWidth=r,i.strokeStyle="rgba(41, 41, 40, 1)",i.arc(a,o,d-r/2,0,l*360,!1),i.stroke()}},m=({dailyCalories:n,inputValue:i,chartBcg:a})=>{i>n&&(i=n,a="red");const o=n-i,s={datasets:[{label:[],data:[i,o],backgroundColor:[a,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(v,{options:F,data:s,plugins:[z]})})},B=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,k=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,D=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,G=t.div`
  display: flex;
  flex-direction: column;
`,I=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,R=t.div`
  display: flex;
  column-gap: 12px;
`,x=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,W=t.p`
  width: 78px;
`,c=n=>{const{title:i,chartBcg:a,elementGoal:o,elementValue:s}=n;let d=(o-s).toFixed(1);d<0&&(d=0);let r=Math.round(s*100/o);return(r===1/0||isNaN(r))&&(r=0),r>100&&(r=100),e.jsx(e.Fragment,{children:e.jsxs(B,{children:[e.jsxs(k,{children:[e.jsx(m,{dailyCalories:o,inputValue:s,chartBcg:a}),e.jsx(D,{children:e.jsx("p",{children:`${r}%`})})]}),e.jsxs(G,{children:[e.jsx(I,{children:i}),e.jsxs(R,{children:[e.jsxs(W,{children:["Goal: ",e.jsx(x,{children:o})]}),e.jsxs("p",{children:["left: ",e.jsx(x,{children:d})]})]})]})]})})},M=t.h2`
  color: var(--color-primary-white);
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,S=t.div`
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
`,E=t.div`
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
`,V=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,O=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,P="#FFC4F7",L="#FFF3B7",A="#B6B6B6",T=()=>{let n=1700,i=1360,a=119.5,o=136,s=44.8,d=170,r=135.5,l=56,f="#45FFBC";return e.jsxs("div",{children:[e.jsx(M,{children:"Food"}),e.jsxs(S,{children:[e.jsxs(E,{children:[e.jsx(m,{dailyCalories:n,inputValue:i,chartBcg:f}),e.jsxs(V,{children:[e.jsx("p",{children:i}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(O,{children:[e.jsx(c,{title:"Carbonohidrates",chartBcg:P,elementGoal:d,elementValue:o}),e.jsx(c,{title:"Protein",chartBcg:L,elementGoal:r,elementValue:a}),e.jsx(c,{title:"Fat",chartBcg:A,elementGoal:l,elementValue:s})]})]})]})},g=t.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,$=t(h)`
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
    ${g} {
      color: var(--color-primary-green-lite);
    }
  }

  @media only screen and (min-width: 835px) {
    font-size: 16px;
    line-height: 1.37;
  }
`,N=()=>e.jsx(e.Fragment,{children:e.jsxs($,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(g,{children:e.jsx(C,{})})]})}),_=t.div`
  padding: 20px 34px 52px 138px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
  }
`,q=t.div`
  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,H=t.h2`
  margin-bottom: 16px;
  color: #ffffff;
  font-size: 22px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 18px;
  }
`,J=t.div`
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
`,K=t.div`
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
`,Q=t.p`
  display: block;
  margin-top: 16px;
  color: #b6b6b6;
  font-size: 16px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,U=t.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,X=t.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,Y=t.p`
  color: #b6b6b6;
`,Z=()=>{const[n,i]=p.useState([]);return p.useEffect(()=>{(async()=>{try{const o=await u.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");i(o.data.slice(0,4))}catch(o){console.error("Error fetching recommended food:",o)}})()},[]),e.jsx(_,{children:e.jsxs(q,{children:[e.jsx(H,{children:"Recommended Food"}),e.jsx(J,{children:n.map((a,o)=>e.jsxs(K,{children:[e.jsx("img",{src:a.img,alt:a.name}),e.jsxs(U,{children:[e.jsx("h3",{children:a.name}),e.jsxs(X,{children:[e.jsx("p",{children:a.amount}),e.jsxs(Y,{children:[a.calories," calories"]})]})]})]},o))}),e.jsx(h,{to:"/recommended-food",children:e.jsx(Q,{children:"See more →"})})]})})},ie=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(N,{}),e.jsx(T,{}),e.jsx(Z,{})]})});export{ie as default};
