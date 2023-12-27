import{s as d,r as o,j as i,h as p}from"./index-e5482518.js";const n=d.div`
  padding: 0 34px 60px 34px;
  width: 1372px;
  margin: 0 auto;

  @media (min-width: 834px) and (max-width: 1439px) {
    /* Стилі для планшетів */
    padding: 0 27px 290px 27px;
    width: 780px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    padding: 0 10px 40px 10px;
    width: 300px;
  }
`,r=d.h2`
  display: flex;
  font-size: 30px;
  color: var(--color-primary-white);

  font-weight: 500;
  line-height: 1.2;
  width: 1372px;
  text-align: start;
  margin: 20px auto 16px;

  @media (min-width: 834px) and (max-width: 1439px) {
    /* Стилі для планшетів */
    width: 780px;
    margin: 20px auto 16px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    font-size: 24px;
    line-height: 1.25;
    width: 300px;
    margin: 20px auto 16px;
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
`,h=d.div`
  display: flex;
  gap: 44px;
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
`,c=d.div`
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
`,m=d.div`
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
`,g=d.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`,w=d.p`
  color: var(--color-primary-grey);
`,f="/food_diary/assets/PhotoRecFood-be261e60.png",j=()=>{const[x,a]=o.useState([]);return o.useEffect(()=>{(async()=>{try{const t=await p.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");a(t.data.slice(0,10))}catch(t){console.error("Error fetching recommended food:",t)}})()},[]),i.jsxs(i.Fragment,{children:[i.jsx(r,{children:"Recommended Food"}),i.jsx(n,{children:i.jsxs(h,{children:[i.jsx(s,{src:f,alt:"Фото"}),i.jsx(c,{children:x.map((e,t)=>i.jsxs(m,{children:[i.jsx("img",{src:e.img,alt:e.name}),i.jsxs(l,{children:[i.jsx("h3",{children:e.name}),i.jsxs(g,{children:[i.jsx("p",{children:e.amount}),i.jsxs(w,{children:[e.calories," calories"]})]})]})]},t))})]})})]})};export{j as default};
