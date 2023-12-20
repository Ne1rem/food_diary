import{j as e,s as i,L as m}from"./index-bdf99d94.js";import{C as g,A as f,p as u,a as w,D as j}from"./index-8c66f9ab.js";import{A as b,B as y,N as C,a as v}from"./Broccoli-a6a70450.js";g.register(f,u,w);const F={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},B={id:"bcgCircle",beforeDatasetsDraw(o){const{ctx:t}=o;t.save();const s=o.getDatasetMeta(0).data[0].x,n=o.getDatasetMeta(0).data[0].y,r=o.getDatasetMeta(0).data[0].innerRadius,d=o.getDatasetMeta(0).data[0].outerRadius,a=d-r,l=Math.PI/180;t.beginPath(),t.lineWidth=a,t.strokeStyle="rgba(41, 41, 40, 1)",t.arc(s,n,d-a/2,0,l*360,!1),t.stroke()}},x=({dailyCalories:o,inputValue:t,chartBcg:s})=>{t>o&&(t=o,s="red");const n=o-t,r={datasets:[{label:[],data:[t,n],backgroundColor:[s,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(j,{options:F,data:r,plugins:[B]})})},z=i.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,W=i.div`
  position: relative;
  width: 48px;
  height: 48px;
`,G=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,R=i.div`
  display: flex;
  flex-direction: column;
`,D=i.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,M=i.div`
  display: flex;
  column-gap: 12px;
`,p=i.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,k=i.p`
  width: 78px;
`,c=o=>{const{title:t,chartBcg:s,elementGoal:n,elementValue:r}=o;let d=(n-r).toFixed(1);d<0&&(d=0);let a=Math.round(r*100/n);return(a===1/0||isNaN(a))&&(a=0),a>100&&(a=100),e.jsx(e.Fragment,{children:e.jsxs(z,{children:[e.jsxs(W,{children:[e.jsx(x,{dailyCalories:n,inputValue:r,chartBcg:s}),e.jsx(G,{children:e.jsx("p",{children:`${a}%`})})]}),e.jsxs(R,{children:[e.jsx(D,{children:t}),e.jsxs(M,{children:[e.jsxs(k,{children:["Goal: ",e.jsx(p,{children:n})]}),e.jsxs("p",{children:["left: ",e.jsx(p,{children:d})]})]})]})]})})},I=i.h2`
  color: var(--color-primary-white);
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,S=i.div`
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
`,V=i.div`
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
`,A=i.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,N=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,P="#FFC4F7",E="#FFF3B7",O="#B6B6B6",T=()=>{let o=1700,t=1360,s=119.5,n=136,r=44.8,d=170,a=135.5,l=56,h="#45FFBC";return e.jsxs("div",{children:[e.jsx(I,{children:"Food"}),e.jsxs(S,{children:[e.jsxs(V,{children:[e.jsx(x,{dailyCalories:o,inputValue:t,chartBcg:h}),e.jsxs(A,{children:[e.jsx("p",{children:t}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(N,{children:[e.jsx(c,{title:"Carbonohidrates",chartBcg:P,elementGoal:d,elementValue:n}),e.jsx(c,{title:"Protein",chartBcg:E,elementGoal:a,elementValue:s}),e.jsx(c,{title:"Fat",chartBcg:O,elementGoal:l,elementValue:r})]})]})]})},L=i.div`
  padding: 20px 34px 52px 138px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
  }
`,_=i.div`
  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,$=i.h2`
  margin-bottom: 16px;
  color: #ffffff;
  font-size: 22px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 18px;
  }
`,q=i.div`
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
`,H=i.div`
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
`,J=i.p`
  display: block;
  margin-top: 16px;
  color: #b6b6b6;
  font-size: 16px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,K=i.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,Q=i.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,U=i.p`
  color: #b6b6b6;
`,X=()=>{const o=[{id:1,icon:b,name:"Avocado",measure:"100 g",calories:"200 calories"},{id:2,icon:y,name:"Beans",measure:"100 g",calories:"123 calories"},{id:3,icon:C,name:"Nuts",measure:"100 g",calories:"500 calories"},{id:4,icon:v,name:"Broccoli",measure:"100 g",calories:"28 calories"}];return e.jsx(L,{children:e.jsxs(_,{children:[e.jsx($,{children:"Recommended Food"}),e.jsx(q,{children:o.map(t=>e.jsxs(H,{children:[e.jsx("img",{src:t.icon,alt:t.name}),e.jsxs(K,{children:[e.jsx("h3",{children:t.name}),e.jsxs(Q,{children:[e.jsx("p",{children:t.measure}),e.jsx(U,{children:t.calories})]})]})]},t.id))}),e.jsx(m,{to:"/recommended-food",children:e.jsx(J,{children:"See more →"})})]})})},te=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(T,{}),e.jsx(X,{})]})});export{te as default};
