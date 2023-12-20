import{s as e,j as i}from"./index-029e62ed.js";import{A as o,B as d,N as n,a as x}from"./Broccoli-a6a70450.js";const s="/food_diary/assets/PhotoRecFood-be261e60.png",r=e.div`
  padding: 20px 34px 60px 34px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    padding: 24px 27px 290px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    padding: 16px 10px 40px 10px;
  }
`,t=e.h2`
  margin-bottom: 16px;
  font-size: 30px;
  color: #fff;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 24px;
    margin-bottom: 16px;
  }
`,c=e.img`
  width: 536px;
  height: 560px;
  margin-top: 8px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 380px;
    height: 396px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
    height: 312px;
  }
`,m=e.div`
  display: flex;
  gap: 44px;
  padding-left: 116px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    flex-direction: column;
    align-items: center;
    padding-left: 0px;
    gap: 24px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    flex-direction: column;
    gap: 24px;
    padding-left: 0px;
  }
`,l=e.div`
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
    flex-direction: column;
  }
`,h=e.div`
  width: 328px;
  height: 86px;
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

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,g=e.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,f=e.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,w=e.p`
  color: #b6b6b6;
`,b=()=>{const p=[{id:1,icon:o,name:"Avocado",measure:"100 g",calories:"200 calories"},{id:2,icon:d,name:"Beans",measure:"100 g",calories:"123 calories"},{id:3,icon:n,name:"Nuts",measure:"100 g",calories:"500 calories"},{id:4,icon:x,name:"Broccoli",measure:"100 g",calories:"28 calories"},{id:1,icon:o,name:"Avocado",measure:"100 g",calories:"200 calories"},{id:2,icon:d,name:"Beans",measure:"100 g",calories:"123 calories"},{id:3,icon:n,name:"Nuts",measure:"100 g",calories:"500 calories"},{id:4,icon:x,name:"Broccoli",measure:"100 g",calories:"28 calories"},{id:1,icon:o,name:"Avocado",measure:"100 g",calories:"200 calories"},{id:2,icon:d,name:"Beans",measure:"100 g",calories:"123 calories"}];return i.jsxs(r,{children:[i.jsx(t,{children:"Recommended Food"}),i.jsxs(m,{children:[i.jsx(c,{src:s,alt:"Фото"}),i.jsx(l,{children:p.map(a=>i.jsxs(h,{children:[i.jsx("img",{src:a.icon,alt:a.name}),i.jsxs(g,{children:[i.jsx("h3",{children:a.name}),i.jsxs(f,{children:[i.jsx("p",{children:a.measure}),i.jsx(w,{children:a.calories})]})]})]},a.id))})]})]})};export{b as default};
