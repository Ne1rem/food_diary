import{j as e,s as i,L as x}from"./index-3f319373.js";import{C as c,A as h,p as m,a as f,D as g}from"./index-57203aff.js";import{A as u,B as w,N as j,a as b}from"./Broccoli-a6a70450.js";c.register(h,m,f);const v={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},y={id:"bcgCircle",beforeDatasetsDraw(a){const{ctx:t}=a;t.save();const r=a.getDatasetMeta(0).data[0].x,n=a.getDatasetMeta(0).data[0].y,s=a.getDatasetMeta(0).data[0].innerRadius,d=a.getDatasetMeta(0).data[0].outerRadius,o=d-s,p=Math.PI/180;t.beginPath(),t.lineWidth=o,t.strokeStyle="rgba(41, 41, 40, 1)",t.arc(r,n,d-o/2,0,p*360,!1),t.stroke()}},C=({dailyCalories:a,inputValue:t,chartBcg:r})=>{t>a&&(t=a,r="red");const n=a-t,s={datasets:[{label:[],data:[t,n],backgroundColor:[r,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(g,{options:v,data:s,plugins:[y]})})},R=i.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,z=i.div`
  position: relative;
  width: 48px;
  height: 48px;
`,D=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,F=i.div`
  display: flex;
  flex-direction: column;
`,M=i.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,W=i.div`
  display: flex;
  column-gap: 12px;
`,l=i.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,k=i.p`
  width: 78px;
`,B=a=>{const{title:t,chartBcg:r,elementGoal:n,elementValue:s}=a;let d=(n-s).toFixed(1);d<0&&(d=0);let o=Math.round(s*100/n);return(o===1/0||isNaN(o))&&(o=0),o>100&&(o=100),e.jsx(e.Fragment,{children:e.jsxs(R,{children:[e.jsxs(z,{children:[e.jsx(C,{dailyCalories:n,inputValue:s,chartBcg:r}),e.jsx(D,{children:e.jsx("p",{children:`${o}%`})})]}),e.jsxs(F,{children:[e.jsx(M,{children:t}),e.jsxs(W,{children:[e.jsxs(k,{children:["Goal: ",e.jsx(l,{children:n})]}),e.jsxs("p",{children:["left: ",e.jsx(l,{children:d})]})]})]})]})})},A=i.div`
  padding: 20px 34px 52px 138px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */

    padding: 20px 27px 40px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */

    padding: 20px 10px 80px 10px;
  }
`,N=i.div`
  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,E=i.h2`
  margin-bottom: 16px;
  color: #ffffff;
  font-size: 22px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 18px;
  }
`,I=i.div`
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
`,P=i.div`
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
`,S=i.p`
  display: block;
  margin-top: 16px;
  color: #b6b6b6;
  font-size: 16px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,G=i.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,O=i.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,L=i.p`
  color: #b6b6b6;
`,T=()=>{const a=[{id:1,icon:u,name:"Avocado",measure:"100 g",calories:"200 calories"},{id:2,icon:w,name:"Beans",measure:"100 g",calories:"123 calories"},{id:3,icon:j,name:"Nuts",measure:"100 g",calories:"500 calories"},{id:4,icon:b,name:"Broccoli",measure:"100 g",calories:"28 calories"}];return e.jsx(A,{children:e.jsxs(N,{children:[e.jsx(E,{children:"Recommended Food"}),e.jsx(I,{children:a.map(t=>e.jsxs(P,{children:[e.jsx("img",{src:t.icon,alt:t.name}),e.jsxs(G,{children:[e.jsx("h3",{children:t.name}),e.jsxs(O,{children:[e.jsx("p",{children:t.measure}),e.jsx(L,{children:t.calories})]})]})]},t.id))}),e.jsx(x,{to:"/recommended-food",children:e.jsx(S,{children:"See more →"})})]})})},q=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(B,{}),e.jsx(T,{})]})});export{q as default};
