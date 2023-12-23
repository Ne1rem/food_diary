import{r as o,j as e}from"./index-de5b1b4b.js";import{n as i,L as p,M as x,d as l,l as m,e as c,f as h}from"./snack-1bf005c4.js";import"./emotion-element-c39617d8.browser.esm-316dcaf9.js";import"./index.esm-923045e1.js";import"./hoist-non-react-statics.cjs-d8d96381.js";const g=i.div`
@media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 40px) / 2);
  }`,w=i.div`
@media screen and (max-width: 834px) {
width: 180px;
  }
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   margin-bottom:6px;
   margin-right: 54px;
   align-items: center;
  }`,f=i.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,j=i.h3`
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
padding-left: 20px;`;const y=i.ul`
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
  }`,a=i.li`
font-size: 14px;
color: var(--color-primary-white);
font-weight: 600;
line-height: 1.42;
width: 100%;`,u=i.button`
background: none;
border: none;
margin-left: 16px;
color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
line-height: 1.42;`,b=({name:n,img:t})=>{const[r,d]=o.useState(!1),s=()=>{d(!r)};return e.jsxs(g,{children:[e.jsxs(w,{children:[e.jsxs(f,{children:[e.jsx("img",{src:t}),e.jsx(j,{children:n})]}),e.jsx(p,{name:n})]}),e.jsxs(y,{children:[e.jsxs(a,{children:["1",e.jsx(u,{onClick:s,children:"+ Record your meal"})]}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"}),e.jsx(a,{children:"4"})]}),r&&e.jsx(x,{name:n,img:t,onClose:s})]})},v=i.div`
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
   padding: 20px 34px 52px 34px;}`,k=i.img`
width: 16px;
height: 16px;
@media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }`,I=i.h2`
margin-left: 4px;
color: var(--color-primary-white);
font-size: 24px;
font-weight: 500;
line-height: 1.25;
@media screen and (min-width: 834px) {
    margin-left: 12px;
    font-size: 30px;
    line-height: 1.2;
  }`,z=i.div`
display: flex;
margin-bottom: 16px;
align-items: center;
text-align: left;`,D=i.ul`
@media screen and (min-width: 1440px) {
   display:flex;
   flex-wrap: wrap;
   gap: 20px;
  }`,M="/food_diary/assets/arrow-right-1ad1ad4c.svg",A=()=>{const n=[{name:"breakfast",img:l},{name:"lunch",img:m},{name:"dinner",img:c},{name:"snack",img:h}];return e.jsxs(v,{children:[e.jsxs(z,{children:[e.jsx(k,{src:M}),e.jsx(I,{children:"Diary"})]}),e.jsx(D,{children:n.map(t=>e.jsx(b,{name:t.name,img:t.img},t.name))})]})};export{A as default};
