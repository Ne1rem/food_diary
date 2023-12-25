import{j as e,r as g,u,l as y,b as j,L as b}from"./index-17e32fdd.js";import{n as i,s as v,L as k,M as z,b as I,l as L,d as D,a as C}from"./snack-41aa45c1.js";import"./emotion-element-c39617d8.browser.esm-f4597b17.js";import"./index.esm-d5eb6b2e.js";import"./hoist-non-react-statics.cjs-ec17ed5b.js";const S=i.div`
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
  }`,T=i.h3`
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
padding-left: 20px;`;const W=i.ul`
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
width: 100%;`,A=i.button`
background: none;
border: none;
margin-left: 16px;
color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
line-height: 1.42;`,F=i.div`
position: relative;`,$=i.button`
position: absolute;
top: 0;
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
} `,H=i.svg`
width: 16px;
height: 16px;
stroke: var(--color-primary-grey);
&:hover{
  stroke: var(--color-primary-green-lite)
}
`,N=i.div`
display: flex;
flex-wrap: wrap;`,R=i.div`
margin-left: 16px;
margin-bottom: 6px;
text-transform: capitalize;
@media screen and (min-width: 834px) {
    font-size: 14px;
    line-height: 1.42;
  }`,_=i.ul`
display: flex;
justify-content: space-between;
font-size: 12px;
font-weight: 400;
line-height: 1.5;
width: 210px;
color: var(--color-primary-grey);
margin-left: 16px;
@media screen and (min-width: 834px) {
  justify-content: space-around;
  width: 350px;
    font-size: 14px;
    line-height: 1.42;
    color: var(--color-primary-white);
  }`,q=({intakeItem:r})=>e.jsxs(N,{children:[e.jsx(R,{children:r.name}),e.jsxs(_,{children:[e.jsxs("li",{children:["Carb. ",r.carbonohidrates]}),e.jsxs("li",{children:["Prot. ",r.protein]}),e.jsxs("li",{children:["Fat. ",r.fat]})]})]}),P="/food_diary/assets/edit-04fc11be.svg",B=({name:r,img:s})=>{var c,x,h,m;const[l,f]=g.useState(!1),p=u();g.useEffect(()=>{p(y())},[p]);const t=j(v);let a;switch(r){case"breakfast":a=(c=t==null?void 0:t.breakfast)==null?void 0:c.dish;break;case"lunch":a=(x=t==null?void 0:t.lunch)==null?void 0:x.dish;break;case"dinner":a=(h=t==null?void 0:t.dinner)==null?void 0:h.dish;break;case"snack":a=(m=t==null?void 0:t.snack)==null?void 0:m.dish;break;default:a=null;break}const o=()=>{f(!l)},w=[0,1,2,3];return e.jsxs(S,{children:[e.jsxs(E,{children:[e.jsxs(M,{children:[e.jsx("img",{src:s}),e.jsx(T,{children:r})]}),e.jsx(k,{name:r})]}),e.jsx(W,{children:w.map(n=>e.jsxs(F,{children:[a&&a[n]?e.jsxs(d,{children:[n+1,e.jsx(q,{toggleModal:o,intakeItem:a[n]})]},n):n===0?e.jsxs(d,{children:[n+1,e.jsx(A,{onClick:o,children:"+ Record your meal"})]},n):e.jsx(d,{children:n+1},n),a&&a[n]?e.jsxs($,{onClick:o,children:[e.jsx(H,{children:e.jsx("use",{href:`${P}#icon-edit`})}),"Edit"]}):null]},n))}),l&&e.jsx(z,{name:r,img:s,onClose:o})]})},G=i.div`
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
   padding: 20px 34px 52px 34px;}`,J=i.img`
width: 16px;
height: 16px;
@media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }`,K=i.h2`
margin-left: 4px;
color: var(--color-primary-white);
font-size: 24px;
font-weight: 500;
line-height: 1.25;
@media screen and (min-width: 834px) {
    margin-left: 12px;
    font-size: 30px;
    line-height: 1.2;
  }`,O=i(b)`
display: flex;
margin-bottom: 16px;
align-items: center;
text-align: left;`,Q=i.ul`
@media screen and (min-width: 1440px) {
   display:flex;
   flex-wrap: wrap;
   gap: 20px;
  }`,U="/food_diary/assets/arrow-right-1ad1ad4c.svg",ie=()=>{const r=[{name:"breakfast",img:I},{name:"lunch",img:L},{name:"dinner",img:D},{name:"snack",img:C}];return e.jsxs(G,{children:[e.jsxs(O,{to:"/",children:[e.jsx(J,{src:U}),e.jsx(K,{children:"Diary"})]}),e.jsx(Q,{children:r.map(s=>e.jsx(B,{name:s.name,img:s.img},s.name))})]})};export{ie as default};
