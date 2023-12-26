import{o as U,r as k,u as B,l as V,b as W,j as r,p as H,q as K}from"./index-8375561e.js";import{_ as J,w as Q,T as X,g as Y,s as Z,r as ee,u as re,i as te}from"./emotion-element-c39617d8.browser.esm-427a29ca.js";import{E as _,F as P,c as D,d as ae,a as oe,b as z,e as ne,f as ie,g as se}from"./index.esm-92818c9b.js";const G=e=>e.intake.intake;var de=U,le=function(a){return a!=="theme"},R=function(a){return typeof a=="string"&&a.charCodeAt(0)>96?de:le},A=function(a,o,t){var i;if(o){var m=o.shouldForwardProp;i=a.__emotion_forwardProp&&m?function(u){return a.__emotion_forwardProp(u)&&m(u)}:m}return typeof i!="function"&&t&&(i=a.__emotion_forwardProp),i},ce=function(a){var o=a.cache,t=a.serialized,i=a.isStringTag;return ee(o,t,i),re(function(){return te(o,t,i)}),null},he=function e(a,o){var t=a.__emotion_real===a,i=t&&a.__emotion_base||a,m,u;o!==void 0&&(m=o.label,u=o.target);var F=A(a,o,t),C=F||R(i),$=!C("as");return function(){var d=arguments,l=t&&a.__emotion_styles!==void 0?a.__emotion_styles.slice(0):[];if(m!==void 0&&l.push("label:"+m+";"),d[0]==null||d[0].raw===void 0)l.push.apply(l,d);else{l.push(d[0][0]);for(var v=d.length,w=1;w<v;w++)l.push(d[w],d[0][w])}var f=Q(function(p,g,n){var c=$&&p.as||i,h="",x=[],y=p;if(p.theme==null){y={};for(var j in p)y[j]=p[j];y.theme=k.useContext(X)}typeof p.className=="string"?h=Y(g.registered,x,p.className):p.className!=null&&(h=p.className+" ");var b=Z(l.concat(x),g.registered,y);h+=g.key+"-"+b.name,u!==void 0&&(h+=" "+u);var N=$&&F===void 0?R(c):C,I={};for(var E in p)$&&E==="as"||N(E)&&(I[E]=p[E]);return I.className=h,I.ref=n,k.createElement(k.Fragment,null,k.createElement(ce,{cache:g,serialized:b,isStringTag:typeof c=="string"}),k.createElement(c,I))});return f.displayName=m!==void 0?m:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",f.defaultProps=a.defaultProps,f.__emotion_real=f,f.__emotion_base=i,f.__emotion_styles=l,f.__emotion_forwardProp=F,Object.defineProperty(f,"toString",{value:function(){return"."+u}}),f.withComponent=function(p,g){return e(p,J({},o,g,{shouldForwardProp:A(f,g,!0)})).apply(void 0,l)},f}},pe=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],s=he.bind();pe.forEach(function(e){s[e]=s(e)});const q=s.li`
padding-right: 20px;`,me=s.ul`
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
`,ze=({name:e})=>{const a=B();k.useEffect(()=>{a(V())},[a]);const o=W(G);let t;switch(e){case"breakfast":t=o.breakfast;break;case"lunch":t=o.lunch;break;case"dinner":t=o.dinner;break;case"snack":t=o.snack;break;default:t=null;break}const i=t&&t.totalCarbs!==void 0?t.totalCarbs:0,m=t&&t.totalProtein!==void 0?t.totalProtein:0,u=t&&t.totalFat!==void 0?t.totalFat:0;return r.jsxs(me,{children:[r.jsxs(q,{children:["Carbonohidrates: ",r.jsx("span",{children:i})]}),r.jsxs(q,{children:["Protein: ",r.jsx("span",{children:m})]}),r.jsxs(q,{children:["Fat: ",r.jsx("span",{children:u})]})]})},fe=s.div`
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
  }`,T=s.input`
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
}`;const ge=s.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,be=s.button`
background-color: transparent;
border: none;
padding: 0;
`,S=s.div`
position: relative;
`,O=s(_)`
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
`;const xe="/food_diary/assets/trash-fb77e3c9.svg",ye=({index:e,errors:a,touched:o,values:t,remove:i})=>r.jsxs(fe,{children:[r.jsxs(S,{children:[r.jsx(P,{as:ue,id:`name${e}`,name:`dish[${e}].name`,placeholder:"The name of the product or dish",value:t.dish[e].name}),a[`name${e}`]&&o[`name${e}`]?r.jsx("div",{children:`dish[${e}].name`}):null,r.jsx(_,{name:`dish[${e}].name`})]}),r.jsxs(S,{children:[r.jsx(P,{as:T,id:`carbonohidrates${e}`,name:`dish[${e}].carbonohidrates`,placeholder:"Carbonoh.",value:t.dish[e].carbonohidrates}),a[`carbonohidrates${e}`]&&o[`carbonohidrates${e}`]?r.jsx(O,{name:`dish[${e}].carbonohidrates`,component:"div"}):null,r.jsx(_,{name:`dish[${e}].carbonohidrates`})]}),r.jsxs(S,{children:[r.jsx(P,{as:T,id:`protein${e}`,name:`dish[${e}].protein`,placeholder:"Protein",value:t.dish[e].protein}),a[`protein${e}`]&&o[`protein${e}`]?r.jsx(O,{name:`dish[${e}].protein`,component:"div"}):null,r.jsx(_,{name:`dish[${e}].protein`})]}),r.jsxs(S,{children:[r.jsx(P,{as:T,id:`fat${e}`,name:`dish[${e}].fat`,placeholder:"Fat",value:t.dish[e].fat}),a[`fat${e}`]&&o[`fat${e}`]?r.jsx(O,{name:`dish[${e}].fat`,component:"div"}):null,r.jsx(_,{name:`dish[${e}].fat`})]}),r.jsxs(S,{children:[r.jsx(P,{as:T,id:`calories${e}`,name:`dish[${e}].calories`,placeholder:"Calories",value:t.dish[e].calories}),a[`calories${e}`]&&o[`calories${e}`]?r.jsx(O,{name:`dish[${e}].calories`,component:"div"}):null,r.jsx(_,{name:`dish[${e}].calories`})]}),r.jsx(be,{type:"button",onClick:()=>i(e),children:r.jsx(ge,{children:r.jsx("use",{href:`${xe}#icon-trash`})})})]}),ve=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.8);
  z-index: 1200;`,we=s.div`
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
  }`,ke=s.h2`
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
  }`,_e=s.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`,Fe=s.button`
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
  }`,Pe=s.button`
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
  }`,L=D({dish:ae().of(D().shape({name:oe().required("Required*").min(2,"Very short product name"),carbonohidrates:z().required("Required*").max(999,"Max 999"),protein:z().required("Required*").max(999,"Max 999"),fat:z().required("Required*").max(999,"Max 999"),calories:z().required("Required*").max(999,"Max 999")}))}),M={name:"",carbonohidrates:"",protein:"",fat:"",calories:""},Te=({name:e,img:a,onClose:o,requestType:t,idIntake:i})=>{var w,f,p,g;const m=B();k.useEffect(()=>{const n=document.body.style.overflow,c=h=>{h.code==="Escape"&&o()};return window.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",c),document.body.style.overflow=n}},[o]);const u=n=>{n.currentTarget===n.target&&o()},F=n=>{if(t==="POST"){const c={[e.toLowerCase()]:{dish:n.dish.map(h=>({name:h.name,carbonohidrates:parseFloat(h.carbonohidrates),protein:parseFloat(h.protein),fat:parseFloat(h.fat),calories:parseFloat(h.calories)}))}};m(H(c))}else if(t==="PUT"){const c={[e.toLowerCase()]:{dish:[{name:n.dish.name,carbonohidrates:parseFloat(n.dish.carbonohidrates),protein:parseFloat(n.dish.protein),fat:parseFloat(n.dish.fat),calories:parseFloat(n.dish.calories)}]}};console.log(c),console.log(i),m(K(i,c))}o()},C=4,$=(n,{values:c,setFieldValue:h,errors:x})=>{if(n.preventDefault(),c.dish.some((j,b)=>{const N=x.dish&&x.dish[b];return console.log(x.dish[b]),!!N})){console.log("Cannot add more items due to validation errors");return}if(c.dish.length<C){const j=c.dish.length-1,b=c.dish[j];L.validate(b,{abortEarly:!1}).then(()=>{h("dish",[...c.dish,M])})}else console.log("Cannot add more than 4 items")},d=W(G);let l;switch(e){case"breakfast":l=(w=d==null?void 0:d.breakfast)==null?void 0:w.dish;break;case"lunch":l=(f=d==null?void 0:d.lunch)==null?void 0:f.dish;break;case"dinner":l=(p=d==null?void 0:d.dinner)==null?void 0:p.dish;break;case"snack":l=(g=d==null?void 0:d.snack)==null?void 0:g.dish;break;default:l=null;break}const v=l.find(n=>n._id===i);return r.jsx(ve,{onClick:u,children:r.jsxs(we,{children:[r.jsx(ke,{children:"Record your meal"}),r.jsxs(je,{children:[r.jsx("img",{src:a,alt:e}),r.jsx(_e,{children:e})]}),r.jsx(ne,{initialValues:t==="POST"?{dish:l&&l.length?l.map(n=>({name:n.name||"",carbonohidrates:n.carbonohidrates||"",protein:n.protein||"",fat:n.fat||"",calories:n.calories||"",productId:n.productId||""})):[M]}:{dish:l&&l.length?[{name:v.name||"",carbonohidrates:v.carbonohidrates||"",protein:v.protein||"",fat:v.fat||"",calories:v.calories||"",productId:v.productId||""}]:[M]},onSubmit:F,validationSchema:L,children:({errors:n,touched:c,values:h,setFieldValue:x})=>r.jsxs(ie,{autoComplete:"off",children:[r.jsx(se,{name:"dish",children:({remove:y})=>r.jsx("ul",{children:h.dish.map((j,b)=>r.jsx("li",{children:r.jsx(ye,{index:b,errors:n,touched:c,values:h,setFieldValue:x,remove:y})},b))})}),r.jsx(Pe,{type:"button",onClick:y=>$(y,{values:h,setFieldValue:x,errors:n}),children:"+ Add more"}),r.jsxs(Se,{children:[r.jsx(Fe,{type:"submit",children:"Confirm"}),r.jsx($e,{type:"button",onClick:o,children:"Cancel"})]})]})})]})})},Oe="/food_diary/assets/breakfast-d9429527.svg",Ne="/food_diary/assets/lunch-233cf7ab.svg",qe="/food_diary/assets/dinner-392691b4.svg",Me="/food_diary/assets/snack-6fc8f33a.svg";export{ze as L,Te as M,Me as a,Oe as b,qe as d,Ne as l,s as n,G as s,xe as t};
