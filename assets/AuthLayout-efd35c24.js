import{s as i,j as t}from"./index-7ab8d3dd.js";const e="/food_diary/assets/Illustration-9c0f4b06.png",x=i.div`
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
    max-width: 1140px;
    width: 1140px;
    padding: 40px 150px 0px 150px;
    flex-direction: row;
    justify-content: space-between;
  }
`,p=i.img`
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
`,a=({children:n})=>t.jsxs(x,{children:[t.jsx(p,{src:e,alt:""}),n]});export{a as A};
