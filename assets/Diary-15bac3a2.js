import{j as e,r as f,b as w}from"./index-83c651f1.js";import{n as i,s as y,L as b,M as j,b as u,l as v,d as k,a as z}from"./snack-93ad16b8.js";import"./emotion-element-c39617d8.browser.esm-5cd7f83f.js";import"./index.esm-a57babe9.js";import"./hoist-non-react-statics.cjs-0bd5bcac.js";const I=i.div`
@media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 40px) / 2);
  }`,C=i.div`
@media screen and (max-width: 834px) {
width: 180px;
  }
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   margin-bottom:6px;
   margin-right: 54px;
   align-items: center;
  }`,D=i.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,L=i.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`;i.li`
padding-left: 20px;`;const M=i.ul`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: var(--color-primary-black-2);
border-radius: 12px;
padding: 16px 12px;
height: 232px;
width: 100%;
@media screen and (min-width: 834px) {
    height: 240px;
    width: 780px;
    padding: 32px 14px;
  }
  @media screen and (max-width: 1440px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 676px;
  }`,d=i.li`
display: flex;
font-size: 14px;
color: var(--color-primary-white);
font-weight: 600;
line-height: 1.42;
width: 100%;`,S=i.button`
background: none;
border: none;
margin-left: 16px;
color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
line-height: 1.42;`,W=i.button`
position: absolute;
top: 16px;
right: 12px;
display: flex;
align-items: center;
background: none;
border: none;
margin-left: 14px;
color: var(--color-primary-grey);
font-size: 14px;
font-weight: 400;
line-height: 1.42;
&:hover{
    color: var(--color-primary-green-lite);
} `,E=i.svg`
width: 16px;
height: 16px;
stroke: var(--color-primary-grey);
&:hover{
  stroke: var(--color-primary-green-lite)
}
`,T=i.div`
display: flex;
flex-wrap: wrap;`,$=i.div`
margin-left: 16px;
margin-bottom: 6px;
text-transform: capitalize;
@media screen and (min-width: 834px) {
    font-size: 14px;
    line-height: 1.42;
  }`,A=i.ul`
display: flex;
justify-content: space-between;
font-size: 12px;
font-weight: 400;
line-height: 1.5;
width: 210px;
color: var(--color-primary-grey);
margin-left: 16px;
@media screen and (min-width: 834px) {
    font-size: 14px;
    line-height: 1.42;
    color: var(--color-primary-white);
  }`,F=({intakeItem:r})=>e.jsxs(T,{children:[e.jsx($,{children:r.name}),e.jsxs(A,{children:[e.jsxs("li",{children:["Carb. ",r.carbonohidrates]}),e.jsxs("li",{children:["Prot. ",r.protein]}),e.jsxs("li",{children:["Fat. ",r.fat]})]})]}),H="/food_diary/assets/edit-04fc11be.svg",N=({name:r,img:s})=>{var l,c,x,h;const[p,m]=f.useState(!1),t=w(y);let a;switch(r){case"breakfast":a=(l=t==null?void 0:t.breakfast)==null?void 0:l.dish;break;case"lunch":a=(c=t==null?void 0:t.lunch)==null?void 0:c.dish;break;case"dinner":a=(x=t==null?void 0:t.dinner)==null?void 0:x.dish;break;case"snack":a=(h=t==null?void 0:t.snack)==null?void 0:h.dish;break;default:a=null;break}const o=()=>{m(!p)},g=[0,1,2,3];return e.jsxs(I,{children:[e.jsxs(C,{children:[e.jsxs(D,{children:[e.jsx("img",{src:s}),e.jsx(L,{children:r})]}),e.jsx(b,{name:r})]}),e.jsxs(M,{children:[g.map(n=>e.jsx("div",{children:a&&a[n]?e.jsxs(d,{children:[n+1,e.jsx(F,{toggleModal:o,intakeItem:a[n]})]},n):n===0?e.jsxs(d,{children:[n+1,e.jsx(S,{onClick:o,children:"+ Record your meal"})]},n):e.jsx(d,{children:n+1},n)},n)),e.jsxs(W,{onClick:o,children:[e.jsx(E,{children:e.jsx("use",{href:`${H}#icon-edit`})}),"Edit"]})]}),p&&e.jsx(j,{name:r,img:s,onClose:o})]})},R=i.div`
margin-left: auto;
margin-right: auto;
text-align: left;
width: 300px;
padding: 16px 10px 16px 10px;
  @media screen and (min-width: 834px) {
   width: 834px;
   padding: 24px 27px 16px 27px;
  }  
   @media screen and (min-width: 1440px) {
   width: 1440px;
   padding: 20px 34px 52px 34px;}`,_=i.img`
width: 16px;
height: 16px;
@media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }`,P=i.h2`
margin-left: 4px;
color: var(--color-primary-white);
font-size: 24px;
font-weight: 500;
line-height: 1.25;
@media screen and (min-width: 834px) {
    margin-left: 12px;
    font-size: 30px;
    line-height: 1.2;
  }`,q=i.div`
display: flex;
margin-bottom: 16px;
align-items: center;
text-align: left;`,B=i.ul`
@media screen and (min-width: 1440px) {
   display:flex;
   flex-wrap: wrap;
   gap: 20px;
  }`,G="/food_diary/assets/arrow-right-1ad1ad4c.svg",V=()=>{const r=[{name:"breakfast",img:u},{name:"lunch",img:v},{name:"dinner",img:k},{name:"snack",img:z}];return e.jsxs(R,{children:[e.jsxs(q,{children:[e.jsx(_,{src:G}),e.jsx(P,{children:"Diary"})]}),e.jsx(B,{children:r.map(s=>e.jsx(N,{name:s.name,img:s.img},s.name))})]})};export{V as default};
