import{o as U,r as k,u as q,l as V,b as W,j as r,p as G,q as H}from"./index-68963780.js";import{_ as K,w as J,T as Q,g as X,s as Y,r as Z,u as ee,i as ae}from"./emotion-element-c39617d8.browser.esm-422ccd1e.js";import{F as te,E as re,c as M,d as ie,a as oe,b as N,e as ne,f as se,g as de}from"./index.esm-00e3110c.js";var le=U,ce=function(e){return e!=="theme"},A=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?le:ce},L=function(e,t,a){var s;if(t){var p=t.shouldForwardProp;s=e.__emotion_forwardProp&&p?function(f){return e.__emotion_forwardProp(f)&&p(f)}:p}return typeof s!="function"&&a&&(s=e.__emotion_forwardProp),s},he=function(e){var t=e.cache,a=e.serialized,s=e.isStringTag;return Z(t,a,s),ee(function(){return ae(t,a,s)}),null},pe=function i(e,t){var a=e.__emotion_real===e,s=a&&e.__emotion_base||e,p,f;t!==void 0&&(p=t.label,f=t.target);var j=L(e,t,a),I=j||A(s),P=!I("as");return function(){var x=arguments,g=a&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(p!==void 0&&g.push("label:"+p+";"),x[0]==null||x[0].raw===void 0)g.push.apply(g,x);else{g.push(x[0][0]);for(var $=x.length,h=1;h<$;h++)g.push(x[h],x[0][h])}var d=J(function(l,b,z){var _=P&&l.as||s,v="",o=[],c=l;if(l.theme==null){c={};for(var m in l)c[m]=l[m];c.theme=k.useContext(Q)}typeof l.className=="string"?v=X(b.registered,o,l.className):l.className!=null&&(v=l.className+" ");var w=Y(g.concat(o),b.registered,c);v+=b.key+"-"+w.name,f!==void 0&&(v+=" "+f);var F=P&&j===void 0?A(_):I,y={};for(var u in l)P&&u==="as"||F(u)&&(y[u]=l[u]);return y.className=v,y.ref=z,k.createElement(k.Fragment,null,k.createElement(he,{cache:b,serialized:w,isStringTag:typeof _=="string"}),k.createElement(_,y))});return d.displayName=p!==void 0?p:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",d.defaultProps=e.defaultProps,d.__emotion_real=d,d.__emotion_base=s,d.__emotion_styles=g,d.__emotion_forwardProp=j,Object.defineProperty(d,"toString",{value:function(){return"."+f}}),d.withComponent=function(l,b){return i(l,K({},t,b,{shouldForwardProp:L(d,b,!0)})).apply(void 0,g)},d}},me=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],n=pe.bind();me.forEach(function(i){n[i]=n(i)});const R=i=>i.intake.intake,T=n.li`
padding-right: 20px;`,fe=n.ul`
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
`,O=n.span`
color: var(--color-primary-grey);
font-weight: 400;`,Le=({name:i})=>{const e=q();k.useEffect(()=>{e(V())},[e]);const t=W(R);let a;switch(i){case"breakfast":a=t.breakfast;break;case"lunch":a=t.lunch;break;case"dinner":a=t.dinner;break;case"snack":a=t.snack;break;default:a=null;break}const s=a&&a.totalCarbs!==void 0?a.totalCarbs:0,p=a&&a.totalProtein!==void 0?a.totalProtein:0,f=a&&a.totalFat!==void 0?a.totalFat:0;return r.jsxs(fe,{children:[r.jsxs(T,{children:["Carbonohidrates: ",r.jsx(O,{children:s})]}),r.jsxs(T,{children:["Protein: ",r.jsx(O,{children:p})]}),r.jsxs(T,{children:["Fat: ",r.jsx(O,{children:f})]})]})},ue=n.div`
display: flex;
flex-direction: column;
gap: 16px;
margin-bottom: 20px;
@media only screen and (min-width: 834px){
  flex-direction: row; 
  gap: 12px;
  }
`;n.input`
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
  }`;const C=n(te)`
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
  `,ge=n.div`
display: flex;
gap: 8px;
@media only screen and (min-width: 834px){
  width: 185px;
  gap: 12px;
}`,be=n.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,xe=n.button`
background-color: transparent;
border: none;
padding: 0;
`,ve=n(C)`
width: 276px;

@media screen and (min-width: 834px) {
   max-width: 255px;
  }
`,we=n(C)`
width: 276px;


@media screen and (min-width: 834px) {
   max-width: 100px;
  }
`,ye=n(C)`
width: 276px;

@media screen and (min-width: 834px) {
   max-width: 86px;
  }
`,ke=n(C)`
max-width: 120px;

@media screen and (min-width: 834px) {
   max-width: 61px;
  }
`,je=n(C)`
max-width: 120px;

@media screen and (min-width: 834px) {
   max-width: 78px;
  }
`,S=n.div`
position: relative;
`,E=n(re)`
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

`;n.div`
  position: absolute;
  top: 40px;
  left: 10px;
  color: #E74A3B;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
`;const _e="/food_diary/assets/trash-fb77e3c9.svg",Fe=({validation:i,index:e,touched:t,errors:a,values:s,remove:p})=>r.jsxs(ue,{children:[r.jsxs(S,{children:[r.jsx(ve,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].name&&a.dish&&a.dish[e]&&a.dish[e].name?"error":"correct",id:`name${e}`,name:`dish[${e}].name`,placeholder:"The name of the product or dish",value:s.dish[e].name}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].name&&a.dish&&a.dish[e]&&a.dish[e].name&&r.jsx(E,{name:`dish[${e}].name`,component:"div"})]}),r.jsxs(S,{children:[r.jsx(we,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates?"error":"correct",id:`carbonohidrates${e}`,name:`dish[${e}].carbonohidrates`,placeholder:"Carbonoh.",value:s.dish[e].carbonohidrates}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates&&r.jsx(E,{name:`dish[${e}].carbonohidrates`,component:"div"})]}),r.jsxs(S,{children:[r.jsx(ye,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].protein&&a.dish&&a.dish[e]&&a.dish[e].protein?"error":"correct",id:`protein${e}`,name:`dish[${e}].protein`,placeholder:"Protein",value:s.dish[e].protein}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates&&r.jsx(E,{name:`dish[${e}].protein`,component:"div"})]}),r.jsxs(ge,{children:[r.jsxs(S,{children:[r.jsx(ke,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].fat&&a.dish&&a.dish[e]&&a.dish[e].fat?"error":"correct",id:`fat${e}`,name:`dish[${e}].fat`,placeholder:"Fat",value:s.dish[e].fat}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].fat&&a.dish&&a.dish[e]&&a.dish[e].fat&&r.jsx(E,{name:`dish[${e}].fat`,component:"div"})]}),r.jsxs(S,{children:[r.jsx(je,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].calories&&a.dish&&a.dish[e]&&a.dish[e].calories?"error":"correct",id:`calories${e}`,name:`dish[${e}].calories`,placeholder:"Calories",value:s.dish[e].calories}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].calories&&a.dish&&a.dish[e]&&a.dish[e].calories&&r.jsx(E,{name:`dish[${e}].calories`,component:"div"})]}),r.jsx(xe,{type:"button",onClick:()=>p(e),children:r.jsx(be,{children:r.jsx("use",{href:`${_e}#icon-trash`})})})]})]}),Pe=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.8);
  z-index: 1200;`,Se=n.div`
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
  }`,Ee=n.h2`
color: var(--color-primary-white);
font-size: 24px;
line-height: 1.25;
margin-bottom: 24px;
@media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }`,Ce=n.div`
display: flex;
align-items: center;
text-align: left;
margin-bottom: 16px;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,Ie=n.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`,ze=n.button`
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

@media only screen and (min-width: 834px){
  width: 212px; 
  margin-bottom: 0;
  }`,Ne=n.button`
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

transition:
    background-color 0.4s cubic-bezier(0, 0, 1, 1),
    color 0.4s cubic-bezier(0, 0, 1, 1);
&:hover
{ color: var(--color-primary-black-2);
  background: var(--color-primary-green-lite);
  font-weight: 500;
}
@media only screen and (min-width: 834px){
  width: 212px; 
  }`,$e=n.button`
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
  }`,Te=n.div`
@media only screen and (min-width: 834px){
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  }`,B=M({dish:ie().of(M().shape({name:oe().required("Enter a name dish").min(2,"Very short"),carbonohidrates:N().required("Enter a number").max(999.99,"Maximum 999.99"),protein:N().required("Enter a number").max(999.99,"Maximum 999.99"),fat:N().required("Enter a number").max(999.99,"Maximum 999.99"),calories:N().required("Enter a number").max(999.99,"Maximum 999.99")}))}),D={name:"",carbonohidrates:"",protein:"",fat:"",calories:""},Be=({name:i,img:e,onClose:t,requestType:a,idIntake:s})=>{var b,z,_,v;const p=q(),[f,j]=k.useState(""),I=()=>{j("validation")};k.useEffect(()=>{const o=document.body.style.overflow,c=m=>{m.code==="Escape"&&t()};return window.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",c),document.body.style.overflow=o}},[t]);const P=o=>{o.currentTarget===o.target&&t()},x=o=>{if(a==="POST"){const c={[i.toLowerCase()]:{dish:o.dish.map(m=>({name:m.name,carbonohidrates:parseFloat(m.carbonohidrates),protein:parseFloat(m.protein),fat:parseFloat(m.fat),calories:parseFloat(m.calories)}))}};p(G(c))}else if(a==="PUT"){const c={[i.toLowerCase()]:{dish:[{name:o.dish[0].name,carbonohidrates:parseFloat(o.dish[0].carbonohidrates),protein:parseFloat(o.dish[0].protein),fat:parseFloat(o.dish[0].fat),calories:parseFloat(o.dish[0].calories)}]}};console.log(s),console.log(c),p(H({id:s,intakeData:c}))}t()},g=4,$=(o,{values:c,setFieldValue:m,errors:w})=>{if(o.preventDefault(),a==="PUT")return;if(c.dish.some((y,u)=>!!(w.dish&&w.dish[u]))){j("validation");return}if(c.dish.length<g){const y=c.dish.length-1,u=c.dish[y];B.validate(u,{abortEarly:!1}).then(()=>{m("dish",[...c.dish,D])})}else return},h=W(R);let d;switch(i){case"breakfast":d=(b=h==null?void 0:h.breakfast)==null?void 0:b.dish;break;case"lunch":d=(z=h==null?void 0:h.lunch)==null?void 0:z.dish;break;case"dinner":d=(_=h==null?void 0:h.dinner)==null?void 0:_.dish;break;case"snack":d=(v=h==null?void 0:h.snack)==null?void 0:v.dish;break;default:d=null;break}const l=a==="PUT"?d.find(o=>o._id===s):null;return r.jsx(Pe,{onClick:P,children:r.jsxs(Se,{children:[r.jsx(Ee,{children:"Record your meal"}),r.jsxs(Ce,{children:[r.jsx("img",{src:e,alt:i}),r.jsx(Ie,{children:i})]}),r.jsx(ne,{initialValues:a==="POST"?{dish:d&&d.length?d.map(o=>({name:o.name||"",carbonohidrates:o.carbonohidrates||"",protein:o.protein||"",fat:o.fat||"",calories:o.calories||"",productId:o.productId||""})):[D]}:{dish:d&&d.length?[{name:l.name||"",carbonohidrates:l.carbonohidrates||"",protein:l.protein||"",fat:l.fat||"",calories:l.calories||"",productId:l.productId||""}]:[D]},onSubmit:x,validationSchema:B,children:({errors:o,touched:c,values:m,setFieldValue:w})=>r.jsxs(se,{autoComplete:"off",children:[r.jsx(de,{name:"dish",children:({remove:F})=>r.jsx("ul",{children:m.dish.map((y,u)=>r.jsx("li",{children:r.jsx(Fe,{validation:f,index:u,errors:o,touched:c,values:m,setFieldValue:w,remove:F})},u))})}),r.jsx($e,{type:"button",onClick:F=>$(F,{values:m,setFieldValue:w,errors:o}),children:"+ Add more"}),r.jsxs(Te,{children:[r.jsx(ze,{type:"submit",onClick:()=>{I()},children:"Confirm"}),r.jsx(Ne,{type:"button",onClick:t,children:"Cancel"})]})]})})]})})},qe="/food_diary/assets/breakfast-d9429527.svg",We="/food_diary/assets/lunch-233cf7ab.svg",Re="/food_diary/assets/dinner-392691b4.svg",Ue="/food_diary/assets/snack-6fc8f33a.svg";export{Le as L,Be as M,Ue as a,qe as b,Re as d,We as l,n,R as s,_e as t};
