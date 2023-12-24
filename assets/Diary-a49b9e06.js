import{j as e,r as g,u,l as y,b}from"./index-0432439b.js";import{n as i,s as j,L as v,M as k,b as z,l as I,d as C,a as D}from"./snack-06e2f6bc.js";import"./emotion-element-c39617d8.browser.esm-225c8cc5.js";import"./index.esm-11f02052.js";import"./hoist-non-react-statics.cjs-9afab3a3.js";const L=i.div`
@media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 40px) / 2);
  }`,E=i.div`
@media screen and (max-width: 834px) {
width: 180px;
  }
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   margin-bottom:6px;
   margin-right: 54px;
   align-items: center;
  }`,M=i.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,S=i.h3`
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
padding-left: 20px;`;const T=i.ul`
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
width: 100%;`,W=i.button`
background: none;
border: none;
margin-left: 16px;
color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
line-height: 1.42;`,$=i.button`
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
} `,A=i.svg`
width: 16px;
height: 16px;
stroke: var(--color-primary-grey);
&:hover{
  stroke: var(--color-primary-green-lite)
}
`,F=i.div`
display: flex;
flex-wrap: wrap;`,H=i.div`
margin-left: 16px;
margin-bottom: 6px;
text-transform: capitalize;
@media screen and (min-width: 834px) {
    font-size: 14px;
    line-height: 1.42;
  }`,N=i.ul`
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
  }`,R=({intakeItem:r})=>e.jsxs(F,{children:[e.jsx(H,{children:r.name}),e.jsxs(N,{children:[e.jsxs("li",{children:["Carb. ",r.carbonohidrates]}),e.jsxs("li",{children:["Prot. ",r.protein]}),e.jsxs("li",{children:["Fat. ",r.fat]})]})]}),_="/food_diary/assets/edit-04fc11be.svg",q=({name:r,img:s})=>{var c,x,h,m;const[p,f]=g.useState(!1),l=u();g.useEffect(()=>{l(y())},[l]);const t=b(j);let a;switch(r){case"breakfast":a=(c=t==null?void 0:t.breakfast)==null?void 0:c.dish;break;case"lunch":a=(x=t==null?void 0:t.lunch)==null?void 0:x.dish;break;case"dinner":a=(h=t==null?void 0:t.dinner)==null?void 0:h.dish;break;case"snack":a=(m=t==null?void 0:t.snack)==null?void 0:m.dish;break;default:a=null;break}const o=()=>{f(!p)},w=[0,1,2,3];return e.jsxs(L,{children:[e.jsxs(E,{children:[e.jsxs(M,{children:[e.jsx("img",{src:s}),e.jsx(S,{children:r})]}),e.jsx(v,{name:r})]}),e.jsxs(T,{children:[w.map(n=>e.jsx("div",{children:a&&a[n]?e.jsxs(d,{children:[n+1,e.jsx(R,{toggleModal:o,intakeItem:a[n]})]},n):n===0?e.jsxs(d,{children:[n+1,e.jsx(W,{onClick:o,children:"+ Record your meal"})]},n):e.jsx(d,{children:n+1},n)},n)),e.jsxs($,{onClick:o,children:[e.jsx(A,{children:e.jsx("use",{href:`${_}#icon-edit`})}),"Edit"]})]}),p&&e.jsx(k,{name:r,img:s,onClose:o})]})},P=i.div`
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
   padding: 20px 34px 52px 34px;}`,B=i.img`
width: 16px;
height: 16px;
@media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }`,G=i.h2`
margin-left: 4px;
color: var(--color-primary-white);
font-size: 24px;
font-weight: 500;
line-height: 1.25;
@media screen and (min-width: 834px) {
    margin-left: 12px;
    font-size: 30px;
    line-height: 1.2;
  }`,J=i.div`
display: flex;
margin-bottom: 16px;
align-items: center;
text-align: left;`,K=i.ul`
@media screen and (min-width: 1440px) {
   display:flex;
   flex-wrap: wrap;
   gap: 20px;
  }`,O="/food_diary/assets/arrow-right-1ad1ad4c.svg",Z=()=>{const r=[{name:"breakfast",img:z},{name:"lunch",img:I},{name:"dinner",img:C},{name:"snack",img:D}];return e.jsxs(P,{children:[e.jsxs(J,{children:[e.jsx(B,{src:O}),e.jsx(G,{children:"Diary"})]}),e.jsx(K,{children:r.map(s=>e.jsx(q,{name:s.name,img:s.img},s.name))})]})};export{Z as default};
