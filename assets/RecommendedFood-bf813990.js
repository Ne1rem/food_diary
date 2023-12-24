import{s as d,r as t,j as i,h as a}from"./index-1c882f1a.js";const n=d.div`
  padding: 20px 34px 60px 34px;

  @media (min-width: 834px) and (max-width: 1439px) {
    /* Стилі для планшетів */
    padding: 24px 27px 290px 27px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    padding: 16px 10px 40px 10px;
  }
`,r=d.h2`
  margin-bottom: 16px;
  font-size: 30px;
  color: var(--color-primary-white);

  @media (min-width: 834px) and (max-width: 1439px) {
    /* Стилі для планшетів */
    margin-bottom: 20px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    font-size: 24px;
    margin-bottom: 16px;
  }
`,s=d.img`
  width: 536px;
  height: 560px;
  margin-top: 8px;

  @media (min-width: 834px) and (max-width: 1439px) {
    /* Стилі для планшетів */
    width: 380px;
    height: 396px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    width: 300px;
    height: 312px;
  }
`,c=d.div`
  display: flex;
  gap: 44px;
  padding-left: 116px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 834px) and (max-width: 1439px) {
    /* Стилі для планшетів */
    flex-direction: column;
    align-items: center;
    padding-left: 0px;
    gap: 24px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    flex-direction: column;
    gap: 24px;
    padding-left: 0px;
  }
`,m=d.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 676px;

  @media (min-width: 834px) and (max-width: 1439px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    flex-direction: column;
    width: 300px;
  }
`,h=d.div`
  width: 328px;
  height: 86px;
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

  @media (min-width: 834px) and (max-width: 1439px) {
    /* Стилі для планшетів */
    width: 380px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`,l=d.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,f=d.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,g=d.p`
  color: var(--color-primary-grey);
`,w="/food_diary/assets/PhotoRecFood-be261e60.png",y=()=>{const[p,x]=t.useState([]);return t.useEffect(()=>{(async()=>{try{const o=await a.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");x(o.data.slice(0,10))}catch(o){console.error("Error fetching recommended food:",o)}})()},[]),i.jsxs(n,{children:[i.jsx(r,{children:"Recommended Food"}),i.jsxs(c,{children:[i.jsx(s,{src:w,alt:"Фото"}),i.jsx(m,{children:p.map((e,o)=>i.jsxs(h,{children:[i.jsx("img",{src:e.img,alt:e.name}),i.jsxs(l,{children:[i.jsx("h3",{children:e.name}),i.jsxs(f,{children:[i.jsx("p",{children:e.amount}),i.jsxs(g,{children:[e.calories," calories"]})]})]})]},o))})]})]})};export{y as default};
