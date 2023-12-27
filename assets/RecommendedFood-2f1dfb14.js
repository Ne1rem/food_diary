import{s as e,r as o,j as i,h as p}from"./index-e3d71783.js";import{S as n}from"./RecFoodOnMainStyled-99da7ce8.js";const r=e.div`
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
`,s=e.h2`
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
`,h=e.img`
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
`,c=e.div`
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
`,m=e.div`
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
`,l=e.div`
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
`,g=e.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`,w=e.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  align-items: center;
`,f=e.p`
  color: var(--color-primary-grey);
`,u="/food_diary/assets/PhotoRecFood-be261e60.png",F=()=>{const[a,x]=o.useState([]);return o.useEffect(()=>{(async()=>{try{const t=await p.get("https://food-diary-backend-kr1b.onrender.com/api/recommended-food");x(t.data.slice(0,10))}catch(t){console.error("Error fetching recommended food:",t)}})()},[]),i.jsxs(i.Fragment,{children:[i.jsx(s,{children:"Recommended Food"}),i.jsx(r,{children:i.jsxs(c,{children:[i.jsx(h,{src:u,alt:"Фото"}),i.jsx(m,{children:a.map((d,t)=>i.jsxs(l,{children:[i.jsx("img",{src:d.img,alt:d.name}),i.jsxs(g,{children:[i.jsx(n,{children:d.name}),i.jsxs(w,{children:[i.jsx("p",{children:d.amount}),i.jsxs(f,{children:[d.calories," calories"]})]})]})]},t))})]})})]})};export{F as default};
