import{s as t,j as e}from"./index-6630076f.js";const r=t.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  padding: 24px 10px 40px 10px;

  @media screen and (min-width: 834px) {
    max-width: 834px;
    padding: 40px 26px 60px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    width: 1440px;
    padding: 40px 150px 0px 150px;
    align-items: unset;
    flex-direction: row;
    justify-content: space-between;
  }
`,a=t.img`
  width: 300px;
  height: 296px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-bottom: 0;
  }
`,p=({children:n,image:i})=>e.jsxs(r,{children:[e.jsx(a,{src:i,alt:i}),n]}),x=t.h2`
  margin-bottom: 16px;

  color: var(--color-primary-white);
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,d=t.p`
  margin-bottom: 24px;

  color: var(--color-primary-grey, #b6b6b6);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    display: block;
    width: 444px;
    text-align: center;
    font-size: 22px;
    line-height: 1.4;

    @media screen and (min-width: 1440px) {
      text-align: left;
    }
  }
`,s=t.button`
  width: 300px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  gap: 10px;

  border: none;
  border-radius: 12px;
  line-height: 1.4;
  background-color: transparent;
  color: var(--color-crimary-grey);

  transition:
    background-color 0.4s cubic-bezier(0, 0, 1, 1),
    color 0.4s cubic-bezier(0, 0, 1, 1);

  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }

  &:hover {
    color: var(--color-primary-black-2);
    background: var(--color-primary-green-lite);
  }

  &.btn-active {
    color: var(--color-primary-black-2);
    background: var(--color-primary-green-lite);
  }
`,c=t.div`
  position: absolute;
  top: 40px;
  left: 10px;
  color: #e74a3b;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
`,l="/food_diary/assets/Illustration-9c0f4b06.png";export{p as A,s as B,c as I,x as T,d as a,l as i};
