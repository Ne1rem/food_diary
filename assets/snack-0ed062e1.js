import{o as R,r as k,u as B,l as U,b as q,j as r,p as V,q as G}from"./index-0e4cf6c7.js";import{_ as H,w as K,T as J,g as Q,s as X,r as Y,u as Z,i as ee}from"./emotion-element-c39617d8.browser.esm-223a3e19.js";import{F as ae,E as te,c as D,d as re,a as ie,b as $,e as ne,f as oe,g as se}from"./index.esm-e4a4a464.js";const W=i=>i.intake.intake;var de=R,le=function(e){return e!=="theme"},M=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?de:le},A=function(e,t,a){var s;if(t){var p=t.shouldForwardProp;s=e.__emotion_forwardProp&&p?function(f){return e.__emotion_forwardProp(f)&&p(f)}:p}return typeof s!="function"&&a&&(s=e.__emotion_forwardProp),s},ce=function(e){var t=e.cache,a=e.serialized,s=e.isStringTag;return Y(t,a,s),Z(function(){return ee(t,a,s)}),null},he=function i(e,t){var a=e.__emotion_real===e,s=a&&e.__emotion_base||e,p,f;t!==void 0&&(p=t.label,f=t.target);var j=A(e,t,a),C=j||M(s),P=!C("as");return function(){var x=arguments,g=a&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(p!==void 0&&g.push("label:"+p+";"),x[0]==null||x[0].raw===void 0)g.push.apply(g,x);else{g.push(x[0][0]);for(var z=x.length,h=1;h<z;h++)g.push(x[h],x[0][h])}var d=K(function(l,b,N){var _=P&&l.as||s,v="",n=[],c=l;if(l.theme==null){c={};for(var m in l)c[m]=l[m];c.theme=k.useContext(J)}typeof l.className=="string"?v=Q(b.registered,n,l.className):l.className!=null&&(v=l.className+" ");var w=X(g.concat(n),b.registered,c);v+=b.key+"-"+w.name,f!==void 0&&(v+=" "+f);var F=P&&j===void 0?M(_):C,y={};for(var u in l)P&&u==="as"||F(u)&&(y[u]=l[u]);return y.className=v,y.ref=N,k.createElement(k.Fragment,null,k.createElement(ce,{cache:b,serialized:w,isStringTag:typeof _=="string"}),k.createElement(_,y))});return d.displayName=p!==void 0?p:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",d.defaultProps=e.defaultProps,d.__emotion_real=d,d.__emotion_base=s,d.__emotion_styles=g,d.__emotion_forwardProp=j,Object.defineProperty(d,"toString",{value:function(){return"."+f}}),d.withComponent=function(l,b){return i(l,H({},t,b,{shouldForwardProp:A(d,b,!0)})).apply(void 0,g)},d}},pe=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],o=he.bind();pe.forEach(function(i){o[i]=o(i)});const T=o.li`
padding-right: 20px;`,me=o.ul`
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
`,Ae=({name:i})=>{const e=B();k.useEffect(()=>{e(U())},[e]);const t=q(W);let a;switch(i){case"breakfast":a=t.breakfast;break;case"lunch":a=t.lunch;break;case"dinner":a=t.dinner;break;case"snack":a=t.snack;break;default:a=null;break}const s=a&&a.totalCarbs!==void 0?a.totalCarbs:0,p=a&&a.totalProtein!==void 0?a.totalProtein:0,f=a&&a.totalFat!==void 0?a.totalFat:0;return r.jsxs(me,{children:[r.jsxs(T,{children:["Carbonohidrates: ",r.jsx("span",{children:s})]}),r.jsxs(T,{children:["Protein: ",r.jsx("span",{children:p})]}),r.jsxs(T,{children:["Fat: ",r.jsx("span",{children:f})]})]})},fe=o.div`
display: flex;
flex-direction: column;
gap: 16px;
margin-bottom: 20px;
@media only screen and (min-width: 834px){
  flex-direction: row; 
  gap: 12px;
  }
`;o.input`
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
  }`;const I=o(ae)`
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
  `,ue=o.div`
display: flex;
gap: 8px;
@media only screen and (min-width: 834px){
  width: 185px;
  gap: 12px;
}`,ge=o.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,be=o.button`
background-color: transparent;
border: none;
padding: 0;
`,xe=o(I)`
width: 276px;

@media screen and (min-width: 834px) {
   max-width: 255px;
  }
`,ve=o(I)`
width: 276px;


@media screen and (min-width: 834px) {
   max-width: 100px;
  }
`,we=o(I)`
width: 276px;

@media screen and (min-width: 834px) {
   max-width: 86px;
  }
`,ye=o(I)`
max-width: 120px;

@media screen and (min-width: 834px) {
   max-width: 61px;
  }
`,ke=o(I)`
max-width: 120px;

@media screen and (min-width: 834px) {
   max-width: 78px;
  }
`,S=o.div`
position: relative;
`,E=o(te)`
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

`;o.div`
  position: absolute;
  top: 40px;
  left: 10px;
  color: #E74A3B;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
`;const je="/food_diary/assets/trash-fb77e3c9.svg",_e=({validation:i,index:e,touched:t,errors:a,values:s,remove:p})=>r.jsxs(fe,{children:[r.jsxs(S,{children:[r.jsx(xe,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].name&&a.dish&&a.dish[e]&&a.dish[e].name?"error":"correct",id:`name${e}`,name:`dish[${e}].name`,placeholder:"The name of the product or dish",value:s.dish[e].name}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].name&&a.dish&&a.dish[e]&&a.dish[e].name&&r.jsx(E,{name:`dish[${e}].name`,component:"div"})]}),r.jsxs(S,{children:[r.jsx(ve,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates?"error":"correct",id:`carbonohidrates${e}`,name:`dish[${e}].carbonohidrates`,placeholder:"Carbonoh.",value:s.dish[e].carbonohidrates}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates&&r.jsx(E,{name:`dish[${e}].carbonohidrates`,component:"div"})]}),r.jsxs(S,{children:[r.jsx(we,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].protein&&a.dish&&a.dish[e]&&a.dish[e].protein?"error":"correct",id:`protein${e}`,name:`dish[${e}].protein`,placeholder:"Protein",value:s.dish[e].protein}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates&&r.jsx(E,{name:`dish[${e}].protein`,component:"div"})]}),r.jsxs(ue,{children:[r.jsxs(S,{children:[r.jsx(ye,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].fat&&a.dish&&a.dish[e]&&a.dish[e].fat?"error":"correct",id:`fat${e}`,name:`dish[${e}].fat`,placeholder:"Fat",value:s.dish[e].fat}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].fat&&a.dish&&a.dish[e]&&a.dish[e].fat&&r.jsx(E,{name:`dish[${e}].fat`,component:"div"})]}),r.jsxs(S,{children:[r.jsx(ke,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].calories&&a.dish&&a.dish[e]&&a.dish[e].calories?"error":"correct",id:`calories${e}`,name:`dish[${e}].calories`,placeholder:"Calories",value:s.dish[e].calories}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].calories&&a.dish&&a.dish[e]&&a.dish[e].calories&&r.jsx(E,{name:`dish[${e}].calories`,component:"div"})]}),r.jsx(be,{type:"button",onClick:()=>p(e),children:r.jsx(ge,{children:r.jsx("use",{href:`${je}#icon-trash`})})})]})]}),Fe=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.8);
  z-index: 1200;`,Pe=o.div`
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
  }`,Se=o.h2`
color: var(--color-primary-white);
font-size: 24px;
line-height: 1.25;
margin-bottom: 24px;
@media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }`,Ee=o.div`
display: flex;
align-items: center;
text-align: left;
margin-bottom: 16px;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,Ie=o.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`,Ce=o.button`
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
  }`,Ne=o.button`
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
  }`,$e=o.button`
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
  }`,ze=o.div`
@media only screen and (min-width: 834px){
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  }`,L=D({dish:re().of(D().shape({name:ie().required("Enter a name dish").min(2,"Very short"),carbonohidrates:$().required("Enter a number").max(999.99,"Maximum 999.99"),protein:$().required("Enter a number").max(999.99,"Maximum 999.99"),fat:$().required("Enter a number").max(999.99,"Maximum 999.99"),calories:$().required("Enter a number").max(999.99,"Maximum 999.99")}))}),O={name:"",carbonohidrates:"",protein:"",fat:"",calories:""},Le=({name:i,img:e,onClose:t,requestType:a,idIntake:s})=>{var b,N,_,v;const p=B(),[f,j]=k.useState(""),C=()=>{j("validation")};k.useEffect(()=>{const n=document.body.style.overflow,c=m=>{m.code==="Escape"&&t()};return window.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",c),document.body.style.overflow=n}},[t]);const P=n=>{n.currentTarget===n.target&&t()},x=n=>{if(a==="POST"){const c={[i.toLowerCase()]:{dish:n.dish.map(m=>({name:m.name,carbonohidrates:parseFloat(m.carbonohidrates),protein:parseFloat(m.protein),fat:parseFloat(m.fat),calories:parseFloat(m.calories)}))}};p(V(c))}else if(a==="PUT"){const c={[i.toLowerCase()]:{dish:[{name:n.dish.name,carbonohidrates:parseFloat(n.dish.carbonohidrates),protein:parseFloat(n.dish.protein),fat:parseFloat(n.dish.fat),calories:parseFloat(n.dish.calories)}]}};p(G(s,c))}t()},g=4,z=(n,{values:c,setFieldValue:m,errors:w})=>{if(n.preventDefault(),a==="PUT")return;if(c.dish.some((y,u)=>!!(w.dish&&w.dish[u]))){j("validation");return}if(c.dish.length<g){const y=c.dish.length-1,u=c.dish[y];L.validate(u,{abortEarly:!1}).then(()=>{m("dish",[...c.dish,O])})}else return},h=q(W);let d;switch(i){case"breakfast":d=(b=h==null?void 0:h.breakfast)==null?void 0:b.dish;break;case"lunch":d=(N=h==null?void 0:h.lunch)==null?void 0:N.dish;break;case"dinner":d=(_=h==null?void 0:h.dinner)==null?void 0:_.dish;break;case"snack":d=(v=h==null?void 0:h.snack)==null?void 0:v.dish;break;default:d=null;break}const l=a==="PUT"?d.find(n=>n._id===s):null;return r.jsx(Fe,{onClick:P,children:r.jsxs(Pe,{children:[r.jsx(Se,{children:"Record your meal"}),r.jsxs(Ee,{children:[r.jsx("img",{src:e,alt:i}),r.jsx(Ie,{children:i})]}),r.jsx(ne,{initialValues:a==="POST"?{dish:d&&d.length?d.map(n=>({name:n.name||"",carbonohidrates:n.carbonohidrates||"",protein:n.protein||"",fat:n.fat||"",calories:n.calories||"",productId:n.productId||""})):[O]}:{dish:d&&d.length?[{name:l.name||"",carbonohidrates:l.carbonohidrates||"",protein:l.protein||"",fat:l.fat||"",calories:l.calories||"",productId:l.productId||""}]:[O]},onSubmit:x,validationSchema:L,children:({errors:n,touched:c,values:m,setFieldValue:w})=>r.jsxs(oe,{autoComplete:"off",children:[r.jsx(se,{name:"dish",children:({remove:F})=>r.jsx("ul",{children:m.dish.map((y,u)=>r.jsx("li",{children:r.jsx(_e,{validation:f,index:u,errors:n,touched:c,values:m,setFieldValue:w,remove:F})},u))})}),r.jsx($e,{type:"button",onClick:F=>z(F,{values:m,setFieldValue:w,errors:n}),children:"+ Add more"}),r.jsxs(ze,{children:[r.jsx(Ce,{type:"submit",onClick:()=>{C()},children:"Confirm"}),r.jsx(Ne,{type:"button",onClick:t,children:"Cancel"})]})]})})]})})},Be="/food_diary/assets/breakfast-d9429527.svg",qe="/food_diary/assets/lunch-233cf7ab.svg",We="/food_diary/assets/dinner-392691b4.svg",Re="/food_diary/assets/snack-6fc8f33a.svg";export{Ae as L,Le as M,Re as a,Be as b,We as d,qe as l,o as n,W as s,je as t};
