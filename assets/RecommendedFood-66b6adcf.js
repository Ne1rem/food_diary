import{s as e,j as i,L as a,A as n,B as s,h as r,i as x}from"./index-3be07cb6.js";const p=e.div`
  margin: 20px 34px 52px 138px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
    margin: 20px 27px 40px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
    margin: 20px 10px 80px 10px;
  }
`,c=e.h2`
  margin-bottom: 16px;
`,t=e.div`
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
`,l=e.div`
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
`,m=e.a`
  display: block;
  margin-top: 16px;
  color: #b6b6b6;
  font-size: 16px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`,h=e.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,f=e.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,g=e.p`
  color: #b6b6b6;
`,j=()=>{const d=[{id:1,icon:n,name:"Avocado",measure:"100 g",calories:"200 calories"},{id:2,icon:s,name:"Beans",measure:"100 g",calories:"123 calories"},{id:3,icon:r,name:"Nuts",measure:"100 g",calories:"500 calories"},{id:4,icon:x,name:"Broccoli",measure:"100 g",calories:"28 calories"}];return i.jsxs(p,{children:[i.jsx(c,{children:"Recommended Food"}),i.jsx(t,{children:d.map(o=>i.jsxs(l,{children:[i.jsx("img",{src:o.icon,alt:o.name}),i.jsxs(h,{children:[i.jsx("h3",{children:o.name}),i.jsxs(f,{children:[i.jsx("p",{children:o.measure}),i.jsx(g,{children:o.calories})]})]})]},o.id))}),i.jsx(a,{to:"/recommended_food",children:i.jsx(m,{children:"See more →"})})]})};export{j as default};
