import{s as i,r as t,j as d,g as a}from"./index-110eac03.js";const n=i.div`
  padding: 20px 34px 60px 34px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    padding: 24px 27px 290px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    padding: 16px 10px 40px 10px;
  }
`,r=i.h2`
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
`,s=i.img`
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
`,m=i.div`
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
`,c=i.div`
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
`,h=i.div`
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
`,l=i.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,f=i.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,g=i.p`
  color: #b6b6b6;
`,w="/food_diary/assets/PhotoRecFood-be261e60.png",b=()=>{const[x,p]=t.useState([]);return t.useEffect(()=>{(async()=>{try{const o=await a.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");p(o.data.slice(0,10))}catch(o){console.error("Error fetching recommended food:",o)}})()},[]),d.jsxs(n,{children:[d.jsx(r,{children:"Recommended Food"}),d.jsxs(m,{children:[d.jsx(s,{src:w,alt:"Фото"}),d.jsx(c,{children:x.map(e=>d.jsxs(h,{children:[d.jsx("img",{src:e.img,alt:e.name}),d.jsxs(l,{children:[d.jsx("h3",{children:e.name}),d.jsxs(f,{children:[d.jsx("p",{children:e.amount}),d.jsx(g,{children:e.calories})]})]})]},e.id))})]})]})};export{b as default};
