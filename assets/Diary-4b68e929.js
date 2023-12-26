import{j as e,r as o,u as k,l as I,b as z,L as S}from"./index-0e4cf6c7.js";import{n as t,s as L,L as T,M as C,b as D,l as E,d as M,a as W}from"./snack-0ed062e1.js";import"./emotion-element-c39617d8.browser.esm-223a3e19.js";import"./index.esm-e4a4a464.js";import"./hoist-non-react-statics.cjs-0a9ec2ec.js";const q=t.div`
@media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 40px) / 2);
  }`,A=t.div`
@media screen and (max-width: 834px) {
width: 180px;
  }
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   margin-bottom:6px;
   margin-right: 54px;
   align-items: center;
  }`,F=t.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,P=t.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`;t.li`
padding-left: 20px;`;const R=t.ul`
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
  }`,d=t.li`
display: flex;
font-size: 14px;
color: var(--color-primary-white);
font-weight: 600;
line-height: 1.42;
width: 100%;`,_=t.button`
background: none;
border: none;
margin-left: 16px;
color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
line-height: 1.42;`,$=t.div`
position: relative;`,H=t.button`
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
} `,N=t.svg`
width: 16px;
height: 16px;
stroke: var(--color-primary-grey);
&:hover{
  stroke: var(--color-primary-green-lite)
}
`,O=t.div`
display: flex;
flex-wrap: wrap;`,U=t.div`
margin-left: 16px;
margin-bottom: 6px;
text-transform: capitalize;
@media screen and (min-width: 834px) {
    font-size: 14px;
    line-height: 1.42;
  }`,B=t.ul`
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
  }`,G=({intakeItem:a})=>e.jsxs(O,{children:[e.jsx(U,{children:a.name}),e.jsxs(B,{children:[e.jsxs("li",{children:["Carb. ",a.carbonohidrates]}),e.jsxs("li",{children:["Prot. ",a.protein]}),e.jsxs("li",{children:["Fat. ",a.fat]})]})]}),J="/food_diary/assets/edit-04fc11be.svg",K=({name:a,img:s})=>{var x,h,m,g;const[p,f]=o.useState(!1),[w,u]=o.useState(null),[y,j]=o.useState(null),c=k();o.useEffect(()=>{c(I())},[c]);const n=z(L);let r;switch(a){case"breakfast":r=(x=n==null?void 0:n.breakfast)==null?void 0:x.dish;break;case"lunch":r=(h=n==null?void 0:n.lunch)==null?void 0:h.dish;break;case"dinner":r=(m=n==null?void 0:n.dinner)==null?void 0:m.dish;break;case"snack":r=(g=n==null?void 0:n.snack)==null?void 0:g.dish;break;default:r=null;break}const l=(i,v)=>{u(i),f(!p),j(v)},b=[0,1,2,3];return e.jsxs(q,{children:[e.jsxs(A,{children:[e.jsxs(F,{children:[e.jsx("img",{src:s}),e.jsx(P,{children:a})]}),e.jsx(T,{name:a})]}),e.jsx(R,{children:b.map(i=>e.jsxs($,{children:[r&&r[i]?e.jsxs(d,{children:[i+1,e.jsx(G,{intakeItem:r[i]})]},i):i===0||i===(r==null?void 0:r.length)?e.jsxs(d,{children:[i+1,e.jsx(_,{onClick:()=>l("POST",null),children:"+ Record your meal"})]},i):e.jsx(d,{children:i+1},i),r&&r[i]?e.jsxs(H,{onClick:()=>l("PUT",r[i]._id),children:[e.jsx(N,{children:e.jsx("use",{href:`${J}#icon-edit`})}),"Edit"]}):null]},i))}),p&&e.jsx(C,{name:a,img:s,onClose:l,requestType:w,idIntake:y})]})},Q=t.div`
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
   padding: 20px 34px 52px 34px;}`,V=t.img`
width: 16px;
height: 16px;
@media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }`,X=t.h2`
margin-left: 4px;
color: var(--color-primary-white);
font-size: 24px;
font-weight: 500;
line-height: 1.25;
@media screen and (min-width: 834px) {
    margin-left: 12px;
    font-size: 30px;
    line-height: 1.2;
  }`,Y=t(S)`
display: flex;
margin-bottom: 16px;
align-items: center;
text-align: left;`,Z=t.ul`
@media screen and (min-width: 1440px) {
   display:flex;
   flex-wrap: wrap;
   gap: 20px;
  }`,ee="/food_diary/assets/arrow-right-1ad1ad4c.svg",se=()=>{const a=[{name:"breakfast",img:D},{name:"lunch",img:E},{name:"dinner",img:M},{name:"snack",img:W}];return e.jsxs(Q,{children:[e.jsxs(Y,{to:"/",children:[e.jsx(V,{src:ee}),e.jsx(X,{children:"Diary"})]}),e.jsx(Z,{children:a.map(s=>e.jsx(K,{name:s.name,img:s.img},s.name))})]})};export{se as default};
