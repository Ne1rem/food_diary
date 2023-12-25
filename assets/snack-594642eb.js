import{o as G,r as w,u as L,l as V,b as B,j as r,p as H}from"./index-8e0af2fb.js";import{_ as K,w as U,T as J,g as Q,s as X,r as Y,u as Z,i as ee}from"./emotion-element-c39617d8.browser.esm-c3a3106f.js";import{E as j,F as $,c as N,d as re,a as te,b as E,e as ae,f as oe,g as ne}from"./index.esm-a9c19de0.js";const R=e=>e.intake.intake;var ie=G,se=function(t){return t!=="theme"},O=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?ie:se},M=function(t,n,a){var s;if(n){var h=n.shouldForwardProp;s=t.__emotion_forwardProp&&h?function(p){return t.__emotion_forwardProp(p)&&h(p)}:h}return typeof s!="function"&&a&&(s=t.__emotion_forwardProp),s},le=function(t){var n=t.cache,a=t.serialized,s=t.isStringTag;return Y(n,a,s),Z(function(){return ee(n,a,s)}),null},de=function e(t,n){var a=t.__emotion_real===t,s=a&&t.__emotion_base||t,h,p;n!==void 0&&(h=n.label,p=n.target);var _=M(t,n,a),c=_||O(s),m=!c("as");return function(){var f=arguments,u=a&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(h!==void 0&&u.push("label:"+h+";"),f[0]==null||f[0].raw===void 0)u.push.apply(u,f);else{u.push(f[0][0]);for(var F=f.length,v=1;v<F;v++)u.push(f[v],f[0][v])}var o=U(function(i,l,x){var y=m&&i.as||s,b="",g=[],k=i;if(i.theme==null){k={};for(var T in i)k[T]=i[T];k.theme=w.useContext(J)}typeof i.className=="string"?b=Q(l.registered,g,i.className):i.className!=null&&(b=i.className+" ");var q=X(u.concat(g),l.registered,k);b+=l.key+"-"+q.name,p!==void 0&&(b+=" "+p);var W=m&&_===void 0?O(y):c,S={};for(var P in i)m&&P==="as"||W(P)&&(S[P]=i[P]);return S.className=b,S.ref=x,w.createElement(w.Fragment,null,w.createElement(le,{cache:l,serialized:q,isStringTag:typeof y=="string"}),w.createElement(y,S))});return o.displayName=h!==void 0?h:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",o.defaultProps=t.defaultProps,o.__emotion_real=o,o.__emotion_base=s,o.__emotion_styles=u,o.__emotion_forwardProp=_,Object.defineProperty(o,"toString",{value:function(){return"."+p}}),o.withComponent=function(i,l){return e(i,K({},n,l,{shouldForwardProp:M(o,l,!0)})).apply(void 0,u)},o}},ce=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],d=de.bind();ce.forEach(function(e){d[e]=d(e)});const z=d.li`
padding-right: 20px;`,he=d.ul`
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
`,Ie=({name:e})=>{const t=L();w.useEffect(()=>{t(V())},[t]);const n=B(R);let a;switch(e){case"breakfast":a=n.breakfast;break;case"lunch":a=n.lunch;break;case"dinner":a=n.dinner;break;case"snack":a=n.snack;break;default:a=null;break}const s=a&&a.totalCarbs!==void 0?a.totalCarbs:0,h=a&&a.totalProtein!==void 0?a.totalProtein:0,p=a&&a.totalFat!==void 0?a.totalFat:0;return r.jsxs(he,{children:[r.jsxs(z,{children:["Carbonohidrates: ",r.jsx("span",{children:s})]}),r.jsxs(z,{children:["Protein: ",r.jsx("span",{children:h})]}),r.jsxs(z,{children:["Fat: ",r.jsx("span",{children:p})]})]})},pe=d.div`
display: flex;
flex-direction: column;
gap: 16px;margin-bottom: 20px;
@media only screen and (min-width: 834px){
  flex-direction: row; 
  gap: 12px;
  }
`,me=d.input`
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
  }`,C=d.input`
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
  }`,ue=d.div`
display: flex;
gap: 8px;
@media only screen and (min-width: 834px){
  width: 185px;
  gap: 12px;
}`,fe=d.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,ge=d.button`
background-color: transparent;
border: none;
padding: 0;
`,I=d(j)`
position: absolute;
padding: 0 5px;
font-size: 8px;
font-weight: 400;
line-height: 10px;
color: green;`;d.div`
  position: absolute;
  top: 40px;
  left: 10px;
  color: green;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
`;const be="/food_diary/assets/trash-fb77e3c9.svg",xe=({index:e,errors:t,touched:n,values:a,remove:s})=>r.jsxs(pe,{children:[r.jsx($,{as:me,id:`name${e}`,name:`dish[${e}].name`,placeholder:"The name of the product or dish",value:a.dish[e].name,required:!0}),t[`name${e}`]&&n[`name${e}`]?r.jsx("div",{children:`dish[${e}].name`}):null,r.jsx(j,{name:`dish[${e}].name`}),r.jsx($,{as:C,id:`carbonohidrates${e}`,name:`dish[${e}].carbonohidrates`,placeholder:"Carbonoh.",value:a.dish[e].carbonohidrates,required:!0}),t[`carbonohidrates${e}`]&&n[`carbonohidrates${e}`]?r.jsx(I,{name:`dish[${e}].carbonohidrates`,component:"div"}):null,r.jsx(j,{name:`dish[${e}].carbonohidrates`}),r.jsx($,{as:C,id:`protein${e}`,name:`dish[${e}].protein`,placeholder:"Protein",value:a.dish[e].protein,required:!0}),t[`protein${e}`]&&n[`protein${e}`]?r.jsx(I,{name:`dish[${e}].protein`,component:"div"}):null,r.jsx(j,{name:`dish[${e}].protein`}),r.jsxs(ue,{children:[r.jsx($,{as:C,id:`fat${e}`,name:`dish[${e}].fat`,placeholder:"Fat",value:a.dish[e].fat,required:!0}),t[`fat${e}`]&&n[`fat${e}`]?r.jsx(I,{name:`dish[${e}].fat`,component:"div"}):null,r.jsx(j,{name:`dish[${e}].fat`}),r.jsx($,{as:C,id:`calories${e}`,name:`dish[${e}].calories`,placeholder:"Calories",value:a.dish[e].calories,required:!0}),t[`calories${e}`]&&n[`calories${e}`]?r.jsx(I,{name:`dish[${e}].calories`,component:"div"}):null,r.jsx(j,{name:`dish[${e}].calories`}),r.jsx(ge,{type:"button",onClick:()=>s(e),children:r.jsx(fe,{children:r.jsx("use",{href:`${be}#icon-trash`})})})]})]}),ye=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.8);
  z-index: 1200;`,ve=d.div`
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
  }`,we=d.h2`
color: var(--color-primary-white);
font-size: 24px;
line-height: 1.25;
margin-bottom: 24px;
@media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }`,ke=d.div`
display: flex;
align-items: center;
text-align: left;
margin-bottom: 16px;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,je=d.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`,_e=d.button`
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
  }`,$e=d.button`
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
  }`,Fe=d.button`
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
  }`,Se=d.div`
@media only screen and (min-width: 834px){
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  }`,D=N({dish:re().of(N().shape({name:te().required("Enter the name of the product or dish").min(2,"Very short product name"),carbonohidrates:E().required("Enter the amount of carbohydrates").max(999.99,"Maximum number is 999.99"),protein:E().required("Enter the amount of protein").max(999.99,"Maximum number is 999.99"),fat:E().required("Enter the amount of fat").max(999.99,"Maximum number is 999.99"),calories:E().required("Enter the amount of calories").max(999.99,"Maximum number is 999.99")}))}),A={name:"",carbonohidrates:"",protein:"",fat:"",calories:""},ze=({name:e,img:t,onClose:n})=>{var f,u,F,v;const a=L();w.useEffect(()=>{const o=document.body.style.overflow,i=l=>{l.code==="Escape"&&n()};return window.addEventListener("keydown",i),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",i),document.body.style.overflow=o}},[n]);const s=o=>{o.currentTarget===o.target&&n()},h=o=>{const i={[e.toLowerCase()]:{dish:o.dish.map(l=>({name:l.name,carbonohidrates:parseFloat(l.carbonohidrates),protein:parseFloat(l.protein),fat:parseFloat(l.fat),calories:parseFloat(l.calories)}))}};console.log(i),a(H(i)),n()},p=4,_=(o,{values:i,setFieldValue:l,errors:x})=>{if(o.preventDefault(),i.dish.some((b,g)=>{const k=x.dish&&x.dish[g];return console.log(x.dish[g]),!!k})){console.log("Cannot add more items due to validation errors");return}if(i.dish.length<p){const b=i.dish.length-1,g=i.dish[b];D.validate(g,{abortEarly:!1}).then(()=>{l("dish",[...i.dish,A])})}else console.log("Cannot add more than 4 items")},c=B(R);let m;switch(e){case"breakfast":m=(f=c==null?void 0:c.breakfast)==null?void 0:f.dish;break;case"lunch":m=(u=c==null?void 0:c.lunch)==null?void 0:u.dish;break;case"dinner":m=(F=c==null?void 0:c.dinner)==null?void 0:F.dish;break;case"snack":m=(v=c==null?void 0:c.snack)==null?void 0:v.dish;break;default:m=null;break}return r.jsx(ye,{onClick:s,children:r.jsxs(ve,{children:[r.jsx(we,{children:"Record your meal"}),r.jsxs(ke,{children:[r.jsx("img",{src:t,alt:e}),r.jsx(je,{children:e})]}),r.jsx(ae,{initialValues:{dish:m&&m.length?m.map(o=>({name:o.name||"",carbonohidrates:o.carbonohidrates||"",protein:o.protein||"",fat:o.fat||"",calories:o.calories||"",productId:o.productId||""})):[A]},onSubmit:h,validationSchema:D,children:({errors:o,touched:i,values:l,setFieldValue:x})=>r.jsxs(oe,{autoComplete:"off",children:[r.jsx(ne,{name:"dish",children:({remove:y})=>r.jsx("ul",{children:l.dish.map((b,g)=>r.jsx("li",{children:r.jsx(xe,{index:g,errors:o,touched:i,values:l,setFieldValue:x,remove:y})},g))})}),r.jsx(Fe,{type:"button",onClick:y=>_(y,{values:l,setFieldValue:x,errors:o}),children:"+ Add more"}),r.jsxs(Se,{children:[r.jsx(_e,{type:"submit",children:"Confirm"}),r.jsx($e,{type:"button",onClick:n,children:"Cancel"})]})]})})]})})},Te="/food_diary/assets/breakfast-d9429527.svg",qe="/food_diary/assets/lunch-233cf7ab.svg",Ne="/food_diary/assets/dinner-392691b4.svg",Oe="/food_diary/assets/snack-6fc8f33a.svg";export{Ie as L,ze as M,Oe as a,Te as b,Ne as d,qe as l,d as n,R as s,be as t};
