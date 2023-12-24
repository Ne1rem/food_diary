import{p as R,r as y,a as W,l as G,c as A,j as r}from"./index-e9f80351.js";import{_ as V,w as H,T as K,g as U,s as J,r as Q,u as X,i as Y}from"./emotion-element-c39617d8.browser.esm-bff0d67c.js";import{E as Z,F as k,c as q,d as ee,a as re,b as P,e as te,f as ae,g as oe}from"./index.esm-a43c21e5.js";const L=e=>e.intake.intake;var ne=R,ie=function(t){return t!=="theme"},N=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?ne:ie},O=function(t,o,a){var s;if(o){var h=o.shouldForwardProp;s=t.__emotion_forwardProp&&h?function(p){return t.__emotion_forwardProp(p)&&h(p)}:h}return typeof s!="function"&&a&&(s=t.__emotion_forwardProp),s},se=function(t){var o=t.cache,a=t.serialized,s=t.isStringTag;return Q(o,a,s),X(function(){return Y(o,a,s)}),null},de=function e(t,o){var a=t.__emotion_real===t,s=a&&t.__emotion_base||t,h,p;o!==void 0&&(h=o.label,p=o.target);var c=O(t,o,a),f=c||N(s),v=!f("as");return function(){var b=arguments,g=a&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(h!==void 0&&g.push("label:"+h+";"),b[0]==null||b[0].raw===void 0)g.push.apply(g,b);else{g.push(b[0][0]);for(var _=b.length,d=1;d<_;d++)g.push(b[d],b[0][d])}var n=H(function(i,m,w){var x=v&&i.as||s,u="",F=[],S=i;if(i.theme==null){S={};for(var z in i)S[z]=i[z];S.theme=y.useContext(K)}typeof i.className=="string"?u=U(m.registered,F,i.className):i.className!=null&&(u=i.className+" ");var T=J(g.concat(F),m.registered,S);u+=m.key+"-"+T.name,p!==void 0&&(u+=" "+p);var B=v&&c===void 0?N(x):f,$={};for(var E in i)v&&E==="as"||B(E)&&($[E]=i[E]);return $.className=u,$.ref=w,y.createElement(y.Fragment,null,y.createElement(se,{cache:m,serialized:T,isStringTag:typeof x=="string"}),y.createElement(x,$))});return n.displayName=h!==void 0?h:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",n.defaultProps=t.defaultProps,n.__emotion_real=n,n.__emotion_base=s,n.__emotion_styles=g,n.__emotion_forwardProp=c,Object.defineProperty(n,"toString",{value:function(){return"."+p}}),n.withComponent=function(i,m){return e(i,V({},o,m,{shouldForwardProp:O(n,m,!0)})).apply(void 0,g)},n}},le=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],l=de.bind();le.forEach(function(e){l[e]=l(e)});const I=l.li`
padding-right: 20px;`,ce=l.ul`
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
`,Fe=({name:e})=>{const t=W();y.useEffect(()=>{t(G())},[t]);const o=A(L);let a;switch(e){case"breakfast":a=o.breakfast;break;case"lunch":a=o.lunch;break;case"dinner":a=o.dinner;break;case"snack":a=o.snack;break;default:a=null;break}const s=a?a.totalCarbs:0,h=a?a.totalProtein:0,p=a?a.totalFat:0;return r.jsxs(ce,{children:[r.jsxs(I,{children:["Carbonohidrates: ",r.jsx("span",{children:s})]}),r.jsxs(I,{children:["Protein: ",r.jsx("span",{children:h})]}),r.jsxs(I,{children:["Fat: ",r.jsx("span",{children:p})]})]})},he=l.div`
display: flex;
flex-direction: column;
gap: 16px;margin-bottom: 20px;
@media only screen and (min-width: 834px){
  flex-direction: row; 
  gap: 12px;
  }
`,me=l.input`
  min-width: 255px;
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;`,C=l.input`
  min-width: 61px;
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;`,pe=l.div`
display: flex;
gap: 8px;
@media only screen and (min-width: 834px){
  width: 185px;
  gap: 12px;
}`,ue=l.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,fe=l.button`
background-color: transparent;
border: none;
padding: 0;
`,j=l(Z)`
padding: 0 5px;
font-size: 8px;
font-weight: 400;
line-height: 10px;
color: red;`,ge="/food_diary/assets/trash-fb77e3c9.svg",be=({index:e,errors:t,touched:o,values:a,remove:s})=>r.jsxs(he,{children:[r.jsx(k,{as:me,id:`name${e}`,name:`dish[${e}].name`,placeholder:"The name of the product or dish",value:a.dish[e].name,required:!0}),t[`name${e}`]&&o[`name${e}`]?r.jsx(j,{name:`dish[${e}].name`,component:"div"}):null,r.jsx(k,{as:C,id:`carbonohidrates${e}`,name:`dish[${e}].carbonohidrates`,placeholder:"Carbonoh.",value:a.dish[e].carbonohidrates,required:!0}),t[`carbonohidrates${e}`]&&o[`carbonohidrates${e}`]?r.jsx(j,{name:`dish[${e}].carbonohidrates`,component:"div"}):null,r.jsx(k,{as:C,id:`protein${e}`,name:`dish[${e}].protein`,placeholder:"Protein",value:a.dish[e].protein,required:!0}),t[`protein${e}`]&&o[`protein${e}`]?r.jsx(j,{name:`dish[${e}].protein`,component:"div"}):null,r.jsxs(pe,{children:[r.jsx(k,{as:C,id:`fat${e}`,name:`dish[${e}].fat`,placeholder:"Fat",value:a.dish[e].fat,required:!0}),t[`fat${e}`]&&o[`fat${e}`]?r.jsx(j,{name:`dish[${e}].fat`,component:"div"}):null,r.jsx(k,{as:C,id:`calories${e}`,name:`dish[${e}].calories`,placeholder:"Calories",value:a.dish[e].calories,required:!0}),t[`calories${e}`]&&o[`calories${e}`]?r.jsx(j,{name:`dish[${e}].calories`,component:"div"}):null,r.jsx(fe,{type:"button",onClick:()=>s(e),children:r.jsx(ue,{children:r.jsx("use",{href:`${ge}#icon-trash`})})})]})]}),xe=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.8);
  z-index: 1200;`,ye=l.div`
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
  }`,ve=l.h2`
color: var(--color-primary-white);
font-size: 24px;
line-height: 1.25;
margin-bottom: 24px;
@media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }`,we=l.div`
display: flex;
align-items: center;
text-align: left;
margin-bottom: 16px;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,ke=l.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`,je=l.button`
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
  }`,_e=l.button`
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
  }`,Se=l.button`
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
  }`,$e=l.div`
@media only screen and (min-width: 834px){
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  }`,M=q({dish:ee().of(q().shape({name:re().required("Enter the name of the product or dish").min(2,"Very short product name"),carbonohidrates:P().required("Enter the amount of carbohydrates").max(999.99,"Maximum number is 999.99"),protein:P().required("Enter the amount of protein").max(999.99,"Maximum number is 999.99"),fat:P().required("Enter the amount of fat").max(999.99,"Maximum number is 999.99"),calories:P().required("Enter the amount of calories").max(999.99,"Maximum number is 999.99")}))}),D={name:"",carbonohidrates:"",protein:"",fat:"",calories:""},Ie=({name:e,img:t,onClose:o})=>{var v,b,g,_;y.useEffect(()=>{const d=document.body.style.overflow,n=i=>{i.code==="Escape"&&o()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow=d}},[o]);const a=d=>{d.currentTarget===d.target&&o()},s=()=>{console.log("handleFormSubmit")},h=4,p=(d,{values:n,setFieldValue:i,errors:m})=>{if(d.preventDefault(),n.dish.some((x,u)=>!!(m.dish&&m.dish[u]))){console.log("Cannot add more items due to validation errors");return}if(n.dish.length<h){const x=n.dish.length-1,u=n.dish[x];M.validate(u,{abortEarly:!1}).then(()=>{i("dish",[...n.dish,D])})}else console.log("Cannot add more than 4 items")},c=A(L);let f;switch(e){case"breakfast":f=(v=c==null?void 0:c.breakfast)==null?void 0:v.dish;break;case"lunch":f=(b=c==null?void 0:c.lunch)==null?void 0:b.dish;break;case"dinner":f=(g=c==null?void 0:c.dinner)==null?void 0:g.dish;break;case"snack":f=(_=c==null?void 0:c.snack)==null?void 0:_.dish;break;default:f=null;break}return r.jsx(xe,{onClick:a,children:r.jsxs(ye,{children:[r.jsx(ve,{children:"Record your meal"}),r.jsxs(we,{children:[r.jsx("img",{src:t,alt:e}),r.jsx(ke,{children:e})]}),r.jsx(te,{initialValues:{dish:f&&f.length?f.map(d=>({name:d.name||"",carbonohidrates:d.carbonohidrates||"",protein:d.protein||"",fat:d.fat||"",calories:d.calories||"",productId:d.productId||""})):[D]},onSubmit:s,validationSchema:M,children:({errors:d,touched:n,values:i,setFieldValue:m})=>r.jsxs(ae,{autoComplete:"off",children:[r.jsx(oe,{name:"dish",children:({remove:w})=>r.jsx("ul",{children:i.dish.map((x,u)=>r.jsx("li",{children:r.jsx(be,{index:u,errors:d,touched:n,values:i,setFieldValue:m,remove:w})},u))})}),r.jsx(Se,{type:"button",onClick:w=>p(w,{values:i,setFieldValue:m,errors:d}),children:"+ Add more"}),r.jsxs($e,{children:[r.jsx(je,{type:"submit",children:"Confirm"}),r.jsx(_e,{type:"button",onClick:o,children:"Cancel"})]})]})})]})})},ze="/food_diary/assets/breakfast-d9429527.svg",Te="/food_diary/assets/lunch-233cf7ab.svg",qe="/food_diary/assets/dinner-392691b4.svg",Ne="/food_diary/assets/snack-6fc8f33a.svg";export{Fe as L,Ie as M,Ne as a,ze as b,qe as d,Te as l,l as n,L as s,ge as t};
