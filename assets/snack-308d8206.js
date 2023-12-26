import{o as W,r as k,u as R,l as V,b as L,j as r,p as G,q as H}from"./index-4fdc86ac.js";import{_ as U,w as K,T as J,g as Q,s as X,r as Y,u as Z,i as ee}from"./emotion-element-c39617d8.browser.esm-27ed8f13.js";import{F as ae,E as te,c as q,d as re,a as ie,b as O,e as oe,f as ne,g as se}from"./index.esm-34fc0a09.js";const B=i=>i.intake.intake;var de=W,le=function(e){return e!=="theme"},D=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?de:le},M=function(e,t,a){var n;if(t){var p=t.shouldForwardProp;n=e.__emotion_forwardProp&&p?function(f){return e.__emotion_forwardProp(f)&&p(f)}:p}return typeof n!="function"&&a&&(n=e.__emotion_forwardProp),n},ce=function(e){var t=e.cache,a=e.serialized,n=e.isStringTag;return Y(t,a,n),Z(function(){return ee(t,a,n)}),null},he=function i(e,t){var a=e.__emotion_real===e,n=a&&e.__emotion_base||e,p,f;t!==void 0&&(p=t.label,f=t.target);var F=M(e,t,a),I=F||D(n),P=!I("as");return function(){var x=arguments,g=a&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(p!==void 0&&g.push("label:"+p+";"),x[0]==null||x[0].raw===void 0)g.push.apply(g,x);else{g.push(x[0][0]);for(var $=x.length,h=1;h<$;h++)g.push(x[h],x[0][h])}var d=K(function(l,b,N){var j=P&&l.as||n,y="",o=[],c=l;if(l.theme==null){c={};for(var m in l)c[m]=l[m];c.theme=k.useContext(J)}typeof l.className=="string"?y=Q(b.registered,o,l.className):l.className!=null&&(y=l.className+" ");var v=X(g.concat(o),b.registered,c);y+=b.key+"-"+v.name,f!==void 0&&(y+=" "+f);var _=P&&F===void 0?D(j):I,w={};for(var u in l)P&&u==="as"||_(u)&&(w[u]=l[u]);return w.className=y,w.ref=N,k.createElement(k.Fragment,null,k.createElement(ce,{cache:b,serialized:v,isStringTag:typeof j=="string"}),k.createElement(j,w))});return d.displayName=p!==void 0?p:"Styled("+(typeof n=="string"?n:n.displayName||n.name||"Component")+")",d.defaultProps=e.defaultProps,d.__emotion_real=d,d.__emotion_base=n,d.__emotion_styles=g,d.__emotion_forwardProp=F,Object.defineProperty(d,"toString",{value:function(){return"."+f}}),d.withComponent=function(l,b){return i(l,U({},t,b,{shouldForwardProp:M(d,b,!0)})).apply(void 0,g)},d}},pe=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],s=he.bind();pe.forEach(function(i){s[i]=s(i)});const T=s.li`
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
`,Me=({name:i})=>{const e=R();k.useEffect(()=>{e(V())},[e]);const t=L(B);let a;switch(i){case"breakfast":a=t.breakfast;break;case"lunch":a=t.lunch;break;case"dinner":a=t.dinner;break;case"snack":a=t.snack;break;default:a=null;break}const n=a&&a.totalCarbs!==void 0?a.totalCarbs:0,p=a&&a.totalProtein!==void 0?a.totalProtein:0,f=a&&a.totalFat!==void 0?a.totalFat:0;return r.jsxs(me,{children:[r.jsxs(T,{children:["Carbonohidrates: ",r.jsx("span",{children:n})]}),r.jsxs(T,{children:["Protein: ",r.jsx("span",{children:p})]}),r.jsxs(T,{children:["Fat: ",r.jsx("span",{children:f})]})]})},fe=s.div`
display: flex;
flex-direction: column;
gap: 16px;
margin-bottom: 20px;
@media only screen and (min-width: 834px){
  flex-direction: row; 
  gap: 12px;
  }
`,E=s(ae)`
  /* min-width: 61px; */
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
  }

  &.correct {
    border: 1px solid var(--color-primary-green-lite);
  }
  `,ue=s.div`
display: flex;
gap: 8px;
@media only screen and (min-width: 834px){
  width: 185px;
  gap: 12px;
}`,ge=s.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,be=s.button`
background-color: transparent;
border: none;
padding: 0;
`,xe=s(E)`
width: 276px;

@media screen and (min-width: 834px) {
   max-width: 255px;
  }
`,ye=s(E)`
width: 276px;


@media screen and (min-width: 834px) {
   max-width: 100px;
  }
`,ve=s(E)`
width: 276px;

@media screen and (min-width: 834px) {
   max-width: 86px;
  }
`,we=s(E)`
max-width: 120px;

@media screen and (min-width: 834px) {
   max-width: 61px;
  }
`,ke=s(E)`
max-width: 120px;

@media screen and (min-width: 834px) {
   max-width: 78px;
  }
`,S=s.div`
position: relative;
`,C=s(te)`
margin-top: 2px;
margin-left: 10px;
position: absolute;
color: #E74A3B;
text-align: center;
font-size: 12px;
font-weight: 400;
line-height: 14px;

@media screen and (min-width: 834px) {
  margin-top: 4px;
  }

`;s.div`
  position: absolute;
  top: 40px;
  left: 10px;
  color: #E74A3B;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
`;const je="/food_diary/assets/trash-fb77e3c9.svg",_e=({validation:i,index:e,touched:t,errors:a,values:n,remove:p})=>r.jsxs(fe,{children:[r.jsxs(S,{children:[r.jsx(xe,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].name&&a.dish&&a.dish[e]&&a.dish[e].name?"error":"correct",id:`name${e}`,name:`dish[${e}].name`,placeholder:"The name of the product or dish",value:n.dish[e].name}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].name&&a.dish&&a.dish[e]&&a.dish[e].name&&r.jsx(C,{name:`dish[${e}].name`,component:"div"})]}),r.jsxs(S,{children:[r.jsx(ye,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates?"error":"correct",id:`carbonohidrates${e}`,name:`dish[${e}].carbonohidrates`,placeholder:"Carbonoh.",value:n.dish[e].carbonohidrates}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates&&r.jsx(C,{name:`dish[${e}].carbonohidrates`,component:"div"})]}),r.jsxs(S,{children:[r.jsx(ve,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].protein&&a.dish&&a.dish[e]&&a.dish[e].protein?"error":"correct",id:`protein${e}`,name:`dish[${e}].protein`,placeholder:"Protein",value:n.dish[e].protein}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates&&r.jsx(C,{name:`dish[${e}].protein`,component:"div"})]}),r.jsxs(ue,{children:[r.jsxs(S,{children:[r.jsx(we,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].fat&&a.dish&&a.dish[e]&&a.dish[e].fat?"error":"correct",id:`fat${e}`,name:`dish[${e}].fat`,placeholder:"Fat",value:n.dish[e].fat}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].fat&&a.dish&&a.dish[e]&&a.dish[e].fat&&r.jsx(C,{name:`dish[${e}].fat`,component:"div"})]}),r.jsxs(S,{children:[r.jsx(ke,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].calories&&a.dish&&a.dish[e]&&a.dish[e].calories?"error":"correct",id:`calories${e}`,name:`dish[${e}].calories`,placeholder:"Calories",value:n.dish[e].calories}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].calories&&a.dish&&a.dish[e]&&a.dish[e].calories&&r.jsx(C,{name:`dish[${e}].calories`,component:"div"})]}),r.jsx(be,{type:"button",onClick:()=>p(e),children:r.jsx(ge,{children:r.jsx("use",{href:`${je}#icon-trash`})})})]})]}),Fe=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.8);
  z-index: 1200;`,Pe=s.div`
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
  }`,Se=s.h2`
color: var(--color-primary-white);
font-size: 24px;
line-height: 1.25;
margin-bottom: 24px;
@media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }`,Ce=s.div`
display: flex;
align-items: center;
text-align: left;
margin-bottom: 16px;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,Ee=s.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`,Ie=s.button`
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
  }`,Ne=s.button`
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
  }`,Oe=s.button`
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
  }`,$e=s.div`
@media only screen and (min-width: 834px){
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  }`,A=q({dish:re().of(q().shape({name:ie().required("Required*").min(2,"Very short product name"),carbonohidrates:O().typeError("Only number").required("Required*").max(999,"Max 999"),protein:O().typeError("Only number").required("Required*").max(999,"Max 999"),fat:O().typeError("Only number").required("Required*").max(999,"Max 999"),calories:O().typeError("Only number").required("Required*").max(999,"Max 999")}))}),z={name:"",carbonohidrates:"",protein:"",fat:"",calories:""},Ae=({name:i,img:e,onClose:t,requestType:a,idIntake:n})=>{var b,N,j,y;const p=R(),[f,F]=k.useState(""),I=()=>{F("validation")};k.useEffect(()=>{const o=document.body.style.overflow,c=m=>{m.code==="Escape"&&t()};return window.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",c),document.body.style.overflow=o}},[t]);const P=o=>{o.currentTarget===o.target&&t()},x=o=>{if(a==="POST"){const c={[i.toLowerCase()]:{dish:o.dish.map(m=>({name:m.name,carbonohidrates:parseFloat(m.carbonohidrates),protein:parseFloat(m.protein),fat:parseFloat(m.fat),calories:parseFloat(m.calories)}))}};p(G(c))}else if(a==="PUT"){const c={[i.toLowerCase()]:{dish:[{name:o.dish.name,carbonohidrates:parseFloat(o.dish.carbonohidrates),protein:parseFloat(o.dish.protein),fat:parseFloat(o.dish.fat),calories:parseFloat(o.dish.calories)}]}};console.log(c),console.log(n),p(H(n,c))}t()},g=4,$=(o,{values:c,setFieldValue:m,errors:v})=>{if(o.preventDefault(),c.dish.some((w,u)=>!!(v.dish&&v.dish[u]))){console.log("Cannot add more items due to validation errors");return}if(c.dish.length<g){const w=c.dish.length-1,u=c.dish[w];A.validate(u,{abortEarly:!1}).then(()=>{m("dish",[...c.dish,z])})}else console.log("Cannot add more than 4 items")},h=L(B);let d;switch(i){case"breakfast":d=(b=h==null?void 0:h.breakfast)==null?void 0:b.dish;break;case"lunch":d=(N=h==null?void 0:h.lunch)==null?void 0:N.dish;break;case"dinner":d=(j=h==null?void 0:h.dinner)==null?void 0:j.dish;break;case"snack":d=(y=h==null?void 0:h.snack)==null?void 0:y.dish;break;default:d=null;break}const l=d.find(o=>o._id===n);return r.jsx(Fe,{onClick:P,children:r.jsxs(Pe,{children:[r.jsx(Se,{children:"Record your meal"}),r.jsxs(Ce,{children:[r.jsx("img",{src:e,alt:i}),r.jsx(Ee,{children:i})]}),r.jsx(oe,{initialValues:a==="POST"?{dish:d&&d.length?d.map(o=>({name:o.name||"",carbonohidrates:o.carbonohidrates||"",protein:o.protein||"",fat:o.fat||"",calories:o.calories||"",productId:o.productId||""})):[z]}:{dish:d&&d.length?[{name:l.name||"",carbonohidrates:l.carbonohidrates||"",protein:l.protein||"",fat:l.fat||"",calories:l.calories||"",productId:l.productId||""}]:[z]},onSubmit:x,validationSchema:A,children:({errors:o,touched:c,values:m,setFieldValue:v})=>r.jsxs(ne,{autoComplete:"off",children:[r.jsx(se,{name:"dish",children:({remove:_})=>r.jsx("ul",{children:m.dish.map((w,u)=>r.jsx("li",{children:r.jsx(_e,{validation:f,index:u,errors:o,touched:c,values:m,setFieldValue:v,remove:_})},u))})}),r.jsx(Oe,{type:"button",onClick:_=>$(_,{values:m,setFieldValue:v,errors:o}),children:"+ Add more"}),r.jsxs($e,{children:[r.jsx(Ie,{type:"submit",onClick:()=>{I()},children:"Confirm"}),r.jsx(Ne,{type:"button",onClick:t,children:"Cancel"})]})]})})]})})},Re="/food_diary/assets/breakfast-d9429527.svg",Le="/food_diary/assets/lunch-233cf7ab.svg",Be="/food_diary/assets/dinner-392691b4.svg",We="/food_diary/assets/snack-6fc8f33a.svg";export{Me as L,Ae as M,We as a,Re as b,Be as d,Le as l,s as n,B as s,je as t};
