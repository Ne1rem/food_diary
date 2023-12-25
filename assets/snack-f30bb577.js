import{o as V,r as w,u as L,l as H,b as B,j as r,p as K}from"./index-2fcde90e.js";import{_ as U,w as J,T as Q,g as X,s as Y,r as Z,u as ee,i as re}from"./emotion-element-c39617d8.browser.esm-3b067a63.js";import{E as k,F as $,c as O,d as te,a as ae,b as E,e as oe,f as ne,g as ie}from"./index.esm-b44b4297.js";const W=e=>e.intake.intake;var se=V,le=function(t){return t!=="theme"},M=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?se:le},R=function(t,n,a){var l;if(n){var h=n.shouldForwardProp;l=t.__emotion_forwardProp&&h?function(p){return t.__emotion_forwardProp(p)&&h(p)}:h}return typeof l!="function"&&a&&(l=t.__emotion_forwardProp),l},de=function(t){var n=t.cache,a=t.serialized,l=t.isStringTag;return Z(n,a,l),ee(function(){return re(n,a,l)}),null},ce=function e(t,n){var a=t.__emotion_real===t,l=a&&t.__emotion_base||t,h,p;n!==void 0&&(h=n.label,p=n.target);var _=R(t,n,a),c=_||M(l),m=!c("as");return function(){var f=arguments,u=a&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(h!==void 0&&u.push("label:"+h+";"),f[0]==null||f[0].raw===void 0)u.push.apply(u,f);else{u.push(f[0][0]);for(var S=f.length,y=1;y<S;y++)u.push(f[y],f[0][y])}var o=J(function(i,d,b){var v=m&&i.as||l,x="",g=[],j=i;if(i.theme==null){j={};for(var q in i)j[q]=i[q];j.theme=w.useContext(Q)}typeof i.className=="string"?x=X(d.registered,g,i.className):i.className!=null&&(x=i.className+" ");var N=Y(u.concat(g),d.registered,j);x+=d.key+"-"+N.name,p!==void 0&&(x+=" "+p);var G=m&&_===void 0?M(v):c,P={};for(var C in i)m&&C==="as"||G(C)&&(P[C]=i[C]);return P.className=x,P.ref=b,w.createElement(w.Fragment,null,w.createElement(de,{cache:d,serialized:N,isStringTag:typeof v=="string"}),w.createElement(v,P))});return o.displayName=h!==void 0?h:"Styled("+(typeof l=="string"?l:l.displayName||l.name||"Component")+")",o.defaultProps=t.defaultProps,o.__emotion_real=o,o.__emotion_base=l,o.__emotion_styles=u,o.__emotion_forwardProp=_,Object.defineProperty(o,"toString",{value:function(){return"."+p}}),o.withComponent=function(i,d){return e(i,U({},n,d,{shouldForwardProp:R(o,d,!0)})).apply(void 0,u)},o}},he=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],s=ce.bind();he.forEach(function(e){s[e]=s(e)});const T=s.li`
padding-right: 20px;`,pe=s.ul`
display: flex;
color: var(--color-primary-white);
font-size: 14px;
font-weight: 400;
line-height: 1.42;
@media screen and (max-width: 834px) {
    flex-wrap: wrap;
    gap: 12px;
    /* width: 180px; */
    margin-bottom: 12px;
  }
`,Ie=({name:e})=>{const t=L();w.useEffect(()=>{t(H())},[t]);const n=B(W);let a;switch(e){case"breakfast":a=n.breakfast;break;case"lunch":a=n.lunch;break;case"dinner":a=n.dinner;break;case"snack":a=n.snack;break;default:a=null;break}const l=a&&a.totalCarbs!==void 0?a.totalCarbs:0,h=a&&a.totalProtein!==void 0?a.totalProtein:0,p=a&&a.totalFat!==void 0?a.totalFat:0;return r.jsxs(pe,{children:[r.jsxs(T,{children:["Carbonohidrates: ",r.jsx("span",{children:l})]}),r.jsxs(T,{children:["Protein: ",r.jsx("span",{children:h})]}),r.jsxs(T,{children:["Fat: ",r.jsx("span",{children:p})]})]})},me=s.div`
display: flex;
flex-direction: column;
gap: 16px;margin-bottom: 20px;
@media only screen and (min-width: 834px){
  flex-direction: row; 
  gap: 12px;
  }
`,ue=s.input`
  min-width: 255px;
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;
  &.error {
    border: 1px solid #e74a3b;
  }`,I=s.input`
  min-width: 61px;
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;
  &.error {
    border: 1px solid #e74a3b;
  }`;s.div`
display: flex;
gap: 8px;
@media only screen and (min-width: 834px){
  width: 185px;
  gap: 12px;
}`;const fe=s.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,ge=s.button`
background-color: transparent;
border: none;
padding: 0;
`,F=s.div`
position: relative;
`,z=s(k)`
position: absolute;
padding: 0 5px;
font-size: 8px;
font-weight: 400;
line-height: 10px;
color: green;`;s.div`
  position: absolute;
  top: 40px;
  left: 10px;
  color: green;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
`;const xe="/food_diary/assets/trash-fb77e3c9.svg",be=({index:e,errors:t,touched:n,values:a,remove:l})=>r.jsxs(me,{children:[r.jsxs(F,{children:[r.jsx($,{as:ue,id:`name${e}`,name:`dish[${e}].name`,placeholder:"The name of the product or dish",value:a.dish[e].name}),t[`name${e}`]&&n[`name${e}`]?r.jsx("div",{children:`dish[${e}].name`}):null,r.jsx(k,{name:`dish[${e}].name`})]}),r.jsxs(F,{children:[r.jsx($,{as:I,id:`carbonohidrates${e}`,name:`dish[${e}].carbonohidrates`,placeholder:"Carbonoh.",value:a.dish[e].carbonohidrates}),t[`carbonohidrates${e}`]&&n[`carbonohidrates${e}`]?r.jsx(z,{name:`dish[${e}].carbonohidrates`,component:"div"}):null,r.jsx(k,{name:`dish[${e}].carbonohidrates`})]}),r.jsxs(F,{children:[r.jsx($,{as:I,id:`protein${e}`,name:`dish[${e}].protein`,placeholder:"Protein",value:a.dish[e].protein}),t[`protein${e}`]&&n[`protein${e}`]?r.jsx(z,{name:`dish[${e}].protein`,component:"div"}):null,r.jsx(k,{name:`dish[${e}].protein`})]}),r.jsxs(F,{children:[r.jsx($,{as:I,id:`fat${e}`,name:`dish[${e}].fat`,placeholder:"Fat",value:a.dish[e].fat}),t[`fat${e}`]&&n[`fat${e}`]?r.jsx(z,{name:`dish[${e}].fat`,component:"div"}):null,r.jsx(k,{name:`dish[${e}].fat`})]}),r.jsxs(F,{children:[r.jsx($,{as:I,id:`calories${e}`,name:`dish[${e}].calories`,placeholder:"Calories",value:a.dish[e].calories}),t[`calories${e}`]&&n[`calories${e}`]?r.jsx(z,{name:`dish[${e}].calories`,component:"div"}):null,r.jsx(k,{name:`dish[${e}].calories`})]}),r.jsx(ge,{type:"button",onClick:()=>l(e),children:r.jsx(fe,{children:r.jsx("use",{href:`${xe}#icon-trash`})})})]}),ve=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.8);
  z-index: 1200;`,ye=s.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  border-radius: 12px;
  padding: 16px 12px 40px 12px;
  background-color: var(--color-primary-black-2);
  @media only screen and (min-width: 834px){
    width: 708px;
    padding: 24px 24px 24px 24px;
  }`,we=s.h2`
color: var(--color-primary-white);
font-size: 24px;
line-height: 1.25;
margin-bottom: 24px;
@media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }`,je=s.div`
display: flex;
align-items: center;
text-align: left;
margin-bottom: 16px;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,ke=s.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`,_e=s.button`
width: 276px;
height: 36px;
border-radius: 12px;
border: none;
background-color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
font-style: normal;
line-height: 1.42;
color: var(--color-primary-black-2);
margin-bottom: 8px;
&:hover
{
    background-color: var(--secondary-color-yellow); 
}
@media only screen and (min-width: 834px){
  width: 212px; 
  }`,$e=s.button`
width: 276px;
height: 36px;
border-radius: 12px;
border: none;
background-color: transparent;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.42;
color: var(--color-primary-grey);
margin-bottom: 8px;
&:hover
{ border: 1px solid var(--color-primary-green-lite);
  font-weight: 500;
}
@media only screen and (min-width: 834px){
  width: 212px; 
  }`,Fe=s.button`
background: none;
border: none;
text-align: left;
margin-top: 20px;
margin-bottom: 64px;
color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
line-height: 1.42;
@media only screen and (min-width: 834px){
  margin-bottom: 120px; 
  }`,Se=s.div`
@media only screen and (min-width: 834px){
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  }`,D=O({dish:te().of(O().shape({name:ae().required("Required*").min(2,"Very short product name"),carbonohidrates:E().required("Required*").max(999,"Max 999"),protein:E().required("Required*").max(999,"Max 999"),fat:E().required("Required*").max(999,"Max 999"),calories:E().required("Required*").max(999,"Max 999")}))}),A={name:"",carbonohidrates:"",protein:"",fat:"",calories:""},ze=({name:e,img:t,onClose:n})=>{var f,u,S,y;const a=L();w.useEffect(()=>{const o=document.body.style.overflow,i=d=>{d.code==="Escape"&&n()};return window.addEventListener("keydown",i),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",i),document.body.style.overflow=o}},[n]);const l=o=>{o.currentTarget===o.target&&n()},h=o=>{const i={[e.toLowerCase()]:{dish:o.dish.map(d=>({name:d.name,carbonohidrates:parseFloat(d.carbonohidrates),protein:parseFloat(d.protein),fat:parseFloat(d.fat),calories:parseFloat(d.calories)}))}};console.log(i),a(K(i)),n()},p=4,_=(o,{values:i,setFieldValue:d,errors:b})=>{if(o.preventDefault(),i.dish.some((x,g)=>{const j=b.dish&&b.dish[g];return console.log(b.dish[g]),!!j})){console.log("Cannot add more items due to validation errors");return}if(i.dish.length<p){const x=i.dish.length-1,g=i.dish[x];D.validate(g,{abortEarly:!1}).then(()=>{d("dish",[...i.dish,A])})}else console.log("Cannot add more than 4 items")},c=B(W);let m;switch(e){case"breakfast":m=(f=c==null?void 0:c.breakfast)==null?void 0:f.dish;break;case"lunch":m=(u=c==null?void 0:c.lunch)==null?void 0:u.dish;break;case"dinner":m=(S=c==null?void 0:c.dinner)==null?void 0:S.dish;break;case"snack":m=(y=c==null?void 0:c.snack)==null?void 0:y.dish;break;default:m=null;break}return r.jsx(ve,{onClick:l,children:r.jsxs(ye,{children:[r.jsx(we,{children:"Record your meal"}),r.jsxs(je,{children:[r.jsx("img",{src:t,alt:e}),r.jsx(ke,{children:e})]}),r.jsx(oe,{initialValues:{dish:m&&m.length?m.map(o=>({name:o.name||"",carbonohidrates:o.carbonohidrates||"",protein:o.protein||"",fat:o.fat||"",calories:o.calories||"",productId:o.productId||""})):[A]},onSubmit:h,validationSchema:D,children:({errors:o,touched:i,values:d,setFieldValue:b})=>r.jsxs(ne,{autoComplete:"off",children:[r.jsx(ie,{name:"dish",children:({remove:v})=>r.jsx("ul",{children:d.dish.map((x,g)=>r.jsx("li",{children:r.jsx(be,{index:g,errors:o,touched:i,values:d,setFieldValue:b,remove:v})},g))})}),r.jsx(Fe,{type:"button",onClick:v=>_(v,{values:d,setFieldValue:b,errors:o}),children:"+ Add more"}),r.jsxs(Se,{children:[r.jsx(_e,{type:"submit",children:"Confirm"}),r.jsx($e,{type:"button",onClick:n,children:"Cancel"})]})]})})]})})},Te="/food_diary/assets/breakfast-d9429527.svg",qe="/food_diary/assets/lunch-233cf7ab.svg",Ne="/food_diary/assets/dinner-392691b4.svg",Oe="/food_diary/assets/snack-6fc8f33a.svg";export{Ie as L,ze as M,Oe as a,Te as b,Ne as d,qe as l,s as n,W as s,xe as t};
