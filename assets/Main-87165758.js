import{j as e,s as t,L as x}from"./index-70e516ec.js";import{C as f,A as u,p as w,a as j,D as y,F as b}from"./index.esm-2affe289.js";import{A as v,B as C,N as F,a as B}from"./Broccoli-a6a70450.js";f.register(u,w,j);const z={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},G={id:"bcgCircle",beforeDatasetsDraw(o){const{ctx:i}=o;i.save();const s=o.getDatasetMeta(0).data[0].x,a=o.getDatasetMeta(0).data[0].y,r=o.getDatasetMeta(0).data[0].innerRadius,l=o.getDatasetMeta(0).data[0].outerRadius,n=l-r,d=Math.PI/180;i.beginPath(),i.lineWidth=n,i.strokeStyle="rgba(41, 41, 40, 1)",i.arc(s,a,l-n/2,0,d*360,!1),i.stroke()}},h=({dailyCalories:o,inputValue:i,chartBcg:s})=>{i>o&&(i=o,s="red");const a=o-i,r={datasets:[{label:[],data:[i,a],backgroundColor:[s,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(y,{options:z,data:r,plugins:[G]})})},R=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,W=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,I=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,M=t.div`
  display: flex;
  flex-direction: column;
`,k=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,D=t.div`
  display: flex;
  column-gap: 12px;
`,p=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,S=t.p`
  width: 78px;
`,c=o=>{const{title:i,chartBcg:s,elementGoal:a,elementValue:r}=o;let l=(a-r).toFixed(1);l<0&&(l=0);let n=Math.round(r*100/a);return(n===1/0||isNaN(n))&&(n=0),n>100&&(n=100),e.jsx(e.Fragment,{children:e.jsxs(R,{children:[e.jsxs(W,{children:[e.jsx(h,{dailyCalories:a,inputValue:r,chartBcg:s}),e.jsx(I,{children:e.jsx("p",{children:`${n}%`})})]}),e.jsxs(M,{children:[e.jsx(k,{children:i}),e.jsxs(D,{children:[e.jsxs(S,{children:["Goal: ",e.jsx(p,{children:a})]}),e.jsxs("p",{children:["left: ",e.jsx(p,{children:l})]})]})]})]})})},A=t.h2`
  color: var(--color-primary-white);
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,V=t.div`
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
`,N=t.div`
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
`,O=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,P=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,E="#FFC4F7",L="#FFF3B7",T="#B6B6B6",$=()=>{let o=1700,i=1360,s=119.5,a=136,r=44.8,l=170,n=135.5,d=56,g="#45FFBC";return e.jsxs("div",{children:[e.jsx(A,{children:"Food"}),e.jsxs(V,{children:[e.jsxs(N,{children:[e.jsx(h,{dailyCalories:o,inputValue:i,chartBcg:g}),e.jsxs(O,{children:[e.jsx("p",{children:i}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(P,{children:[e.jsx(c,{title:"Carbonohidrates",chartBcg:E,elementGoal:l,elementValue:a}),e.jsx(c,{title:"Protein",chartBcg:L,elementGoal:n,elementValue:s}),e.jsx(c,{title:"Fat",chartBcg:T,elementGoal:d,elementValue:r})]})]})]})},m=t.div`
  width: 16px;
  height: 16px;
  color: var(--color-primary-grey);
`,_=t(x)`
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
    ${m} {
      color: var(--color-primary-green-lite);
    }
  }

  @media only screen and (min-width: 835px) {
    font-size: 16px;
    line-height: 1.37;
  }
`,q=()=>e.jsx(e.Fragment,{children:e.jsxs(_,{to:"/dashboard",children:[e.jsx("p",{children:"On the way to the goal"}),e.jsx(m,{children:e.jsx(b,{})})]})}),H=t.div`
  padding: 20px 34px 52px 138px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
  }
`,J=t.div`
  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,K=t.h2`
  margin-bottom: 16px;
  color: #ffffff;
  font-size: 22px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 18px;
  }
`,Q=t.div`
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
`,U=t.div`
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
`,X=t.p`
  display: block;
  margin-top: 16px;
  color: #b6b6b6;
  font-size: 16px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,Y=t.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,Z=t.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,ee=t.p`
  color: #b6b6b6;
`,te=()=>{const o=[{id:1,icon:v,name:"Avocado",measure:"100 g",calories:"200 calories"},{id:2,icon:C,name:"Beans",measure:"100 g",calories:"123 calories"},{id:3,icon:F,name:"Nuts",measure:"100 g",calories:"500 calories"},{id:4,icon:B,name:"Broccoli",measure:"100 g",calories:"28 calories"}];return e.jsx(H,{children:e.jsxs(J,{children:[e.jsx(K,{children:"Recommended Food"}),e.jsx(Q,{children:o.map(i=>e.jsxs(U,{children:[e.jsx("img",{src:i.icon,alt:i.name}),e.jsxs(Y,{children:[e.jsx("h3",{children:i.name}),e.jsxs(Z,{children:[e.jsx("p",{children:i.measure}),e.jsx(ee,{children:i.calories})]})]})]},i.id))}),e.jsx(x,{to:"/recommended-food",children:e.jsx(X,{children:"See more →"})})]})})},ae=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(q,{}),e.jsx($,{}),e.jsx(te,{})]})});export{ae as default};
