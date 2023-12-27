import{n as q,r as _,u as R,k as G,b as W,j as r,o as H,p as K}from"./index-0e3e8457.js";import{_ as J,w as Q,T as X,g as Y,s as Z,r as V,u as ee,i as ae}from"./emotion-element-c39617d8.browser.esm-ca1391f8.js";import{F as te,E as re,c as M,d as ie,a as oe,b as z,e as ne,f as se,g as de}from"./index.esm-cdf6585b.js";var le=q,ce=function(e){return e!=="theme"},A=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?le:ce},L=function(e,t,a){var o;if(t){var p=t.shouldForwardProp;o=e.__emotion_forwardProp&&p?function(u){return e.__emotion_forwardProp(u)&&p(u)}:p}return typeof o!="function"&&a&&(o=e.__emotion_forwardProp),o},he=function(e){var t=e.cache,a=e.serialized,o=e.isStringTag;return V(t,a,o),ee(function(){return ae(t,a,o)}),null},pe=function i(e,t){var a=e.__emotion_real===e,o=a&&e.__emotion_base||e,p,u;t!==void 0&&(p=t.label,u=t.target);var w=L(e,t,a),g=w||A(o),P=!g("as");return function(){var f=arguments,x=a&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(p!==void 0&&x.push("label:"+p+";"),f[0]==null||f[0].raw===void 0)x.push.apply(x,f);else{x.push(f[0][0]);for(var N=f.length,h=1;h<N;h++)x.push(f[h],f[0][h])}var s=Q(function(d,v,$){var S=P&&d.as||o,y="",l=[],c=d;if(d.theme==null){c={};for(var m in d)c[m]=d[m];c.theme=_.useContext(X)}typeof d.className=="string"?y=Y(v.registered,l,d.className):d.className!=null&&(y=d.className+" ");var k=Z(x.concat(l),v.registered,c);y+=v.key+"-"+k.name,u!==void 0&&(y+=" "+u);var F=P&&w===void 0?A(S):g,j={};for(var b in d)P&&b==="as"||F(b)&&(j[b]=d[b]);return j.className=y,j.ref=$,_.createElement(_.Fragment,null,_.createElement(he,{cache:v,serialized:k,isStringTag:typeof S=="string"}),_.createElement(S,j))});return s.displayName=p!==void 0?p:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",s.defaultProps=e.defaultProps,s.__emotion_real=s,s.__emotion_base=o,s.__emotion_styles=x,s.__emotion_forwardProp=w,Object.defineProperty(s,"toString",{value:function(){return"."+u}}),s.withComponent=function(d,v){return i(d,J({},t,v,{shouldForwardProp:L(s,v,!0)})).apply(void 0,x)},s}},me=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],n=pe.bind();me.forEach(function(i){n[i]=n(i)});const U=i=>i.intake.intake,T=n.li`
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
font-weight: 400;`,Le=({name:i})=>{const e=R();_.useEffect(()=>{e(G())},[e]);const t=W(U);let a;switch(i){case"breakfast":a=t.breakfast;break;case"lunch":a=t.lunch;break;case"dinner":a=t.dinner;break;case"snack":a=t.snack;break;default:a=null;break}const o=a&&a.totalCarbs!==void 0?a.totalCarbs:0,p=a&&a.totalProtein!==void 0?a.totalProtein:0,u=a&&a.totalFat!==void 0?a.totalFat:0;return r.jsxs(fe,{children:[r.jsxs(T,{children:["Carbonohidrates: ",r.jsx(O,{children:o})]}),r.jsxs(T,{children:["Protein: ",r.jsx(O,{children:p})]}),r.jsxs(T,{children:["Fat: ",r.jsx(O,{children:u})]})]})},ue=n.div`
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
  }`;const I=n(te)`
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
`,ve=n(I)`
width: 276px;

@media screen and (min-width: 834px) {
   max-width: 255px;
  }
`,we=n(I)`
width: 276px;


@media screen and (min-width: 834px) {
   max-width: 100px;
  }
`,ye=n(I)`
width: 276px;

@media screen and (min-width: 834px) {
   max-width: 86px;
  }
`,ke=n(I)`
max-width: 120px;

@media screen and (min-width: 834px) {
   max-width: 61px;
  }
`,je=n(I)`
max-width: 120px;

@media screen and (min-width: 834px) {
   max-width: 78px;
  }
`,E=n.div`
position: relative;
`,C=n(re)`
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
`;const _e="/food_diary/assets/trash-fb77e3c9.svg",Pe=({validation:i,index:e,touched:t,errors:a,values:o,remove:p,setFieldValue:u})=>{const w=(g,P,f)=>{P.dish.length>1?p(g):(f(`dish[${g}].name`,""),f(`dish[${g}].carbonohidrates`,""),f(`dish[${g}].protein`,""),f(`dish[${g}].fat`,""),f(`dish[${g}].calories`,""))};return r.jsxs(ue,{children:[r.jsxs(E,{children:[r.jsx(ve,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].name&&a.dish&&a.dish[e]&&a.dish[e].name?"error":"correct",id:`name${e}`,name:`dish[${e}].name`,placeholder:"The name of the product or dish",value:o.dish[e].name}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].name&&a.dish&&a.dish[e]&&a.dish[e].name&&r.jsx(C,{name:`dish[${e}].name`,component:"div"})]}),r.jsxs(E,{children:[r.jsx(we,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates?"error":"correct",id:`carbonohidrates${e}`,name:`dish[${e}].carbonohidrates`,placeholder:"Carbonoh.",value:o.dish[e].carbonohidrates}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates&&r.jsx(C,{name:`dish[${e}].carbonohidrates`,component:"div"})]}),r.jsxs(E,{children:[r.jsx(ye,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].protein&&a.dish&&a.dish[e]&&a.dish[e].protein?"error":"correct",id:`protein${e}`,name:`dish[${e}].protein`,placeholder:"Protein",value:o.dish[e].protein}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates&&r.jsx(C,{name:`dish[${e}].protein`,component:"div"})]}),r.jsxs(ge,{children:[r.jsxs(E,{children:[r.jsx(ke,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].fat&&a.dish&&a.dish[e]&&a.dish[e].fat?"error":"correct",id:`fat${e}`,name:`dish[${e}].fat`,placeholder:"Fat",value:o.dish[e].fat}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].fat&&a.dish&&a.dish[e]&&a.dish[e].fat&&r.jsx(C,{name:`dish[${e}].fat`,component:"div"})]}),r.jsxs(E,{children:[r.jsx(je,{className:i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].calories&&a.dish&&a.dish[e]&&a.dish[e].calories?"error":"correct",id:`calories${e}`,name:`dish[${e}].calories`,placeholder:"Calories",value:o.dish[e].calories}),i==="validation"&&t.dish&&t.dish[e]&&t.dish[e].calories&&a.dish&&a.dish[e]&&a.dish[e].calories&&r.jsx(C,{name:`dish[${e}].calories`,component:"div"})]}),r.jsx(xe,{type:"button",onClick:()=>w(e,o,u),children:r.jsx(be,{children:r.jsx("use",{href:`${_e}#icon-trash`})})})]})]})},Se=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.8);
  z-index: 1200;`,Fe=n.div`
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
  }`,$e=n.button`
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
  }`,ze=n.button`
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
  }`,Ne=n.button`
background: none;
border: none;
text-align: left;
margin-top: 20px;
color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
line-height: 1.42;`,Te=n.div`
margin-top: 64px;
@media only screen and (min-width: 834px){
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  margin-top: 120px; 
  }`,B=M({dish:ie().of(M().shape({name:oe().required("Enter a name dish").min(2,"Very short"),carbonohidrates:z().required("Enter a number").max(999.99,"Maximum 999.99"),protein:z().required("Enter a number").max(999.99,"Maximum 999.99"),fat:z().required("Enter a number").max(999.99,"Maximum 999.99"),calories:z().required("Enter a number").max(999.99,"Maximum 999.99")}))}),D={name:"",carbonohidrates:"",protein:"",fat:"",calories:""},Be=({name:i,img:e,onClose:t,requestType:a,idIntake:o})=>{var v,$,S,y;const p=R(),[u,w]=_.useState(""),g=()=>{w("validation")};_.useEffect(()=>{const l=document.body.style.overflow,c=m=>{m.code==="Escape"&&t()};return window.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",c),document.body.style.overflow=l}},[t]);const P=l=>{l.currentTarget===l.target&&t()},f=l=>{if(a==="POST"){const c={[i.toLowerCase()]:{dish:l.dish.map(m=>({name:m.name,carbonohidrates:parseFloat(m.carbonohidrates),protein:parseFloat(m.protein),fat:parseFloat(m.fat),calories:parseFloat(m.calories)}))}};p(H(c))}else if(a==="PUT"){const c={[i.toLowerCase()]:{dish:[{name:l.dish[0].name,carbonohidrates:parseFloat(l.dish[0].carbonohidrates),protein:parseFloat(l.dish[0].protein),fat:parseFloat(l.dish[0].fat),calories:parseFloat(l.dish[0].calories)}]}};console.log(o),console.log(c),p(K({id:o,intakeData:c}))}t()},x=4,N=(l,{values:c,setFieldValue:m,errors:k})=>{if(l.preventDefault(),a==="PUT")return;if(c.dish.some((j,b)=>!!(k.dish&&k.dish[b]))){w("validation");return}if(c.dish.length<x){const j=c.dish.length-1,b=c.dish[j];B.validate(b,{abortEarly:!1}).then(()=>{m("dish",[...c.dish,D])})}else return},h=W(U);let s;switch(i){case"breakfast":s=(v=h==null?void 0:h.breakfast)==null?void 0:v.dish;break;case"lunch":s=($=h==null?void 0:h.lunch)==null?void 0:$.dish;break;case"dinner":s=(S=h==null?void 0:h.dinner)==null?void 0:S.dish;break;case"snack":s=(y=h==null?void 0:h.snack)==null?void 0:y.dish;break;default:s=null;break}const d=a==="PUT"?s.find(l=>l._id===o):null;return r.jsx(Se,{onClick:P,children:r.jsxs(Fe,{children:[r.jsx(Ee,{children:"Record your meal"}),r.jsxs(Ce,{children:[r.jsx("img",{src:e,alt:i}),r.jsx(Ie,{children:i})]}),r.jsx(ne,{initialValues:a==="PUT"?{dish:s&&s.length?[{name:d.name||"",carbonohidrates:d.carbonohidrates||"",protein:d.protein||"",fat:d.fat||"",calories:d.calories||"",productId:d.productId||""}]:[D]}:{dish:[D]},onSubmit:f,validationSchema:B,children:({errors:l,touched:c,values:m,setFieldValue:k})=>r.jsxs(se,{autoComplete:"off",children:[r.jsx(de,{name:"dish",children:({remove:F})=>r.jsx("ul",{children:m.dish.map((j,b)=>r.jsx("li",{children:r.jsx(Pe,{validation:u,index:b,errors:l,touched:c,values:m,setFieldValue:k,remove:F})},b))})}),a==="POST"&&(!s||s.length===0)&&r.jsx(Ne,{type:"button",onClick:F=>N(F,{values:m,setFieldValue:k,errors:l}),children:"+ Add more"}),r.jsxs(Te,{children:[r.jsx($e,{type:"submit",onClick:()=>{g()},children:"Confirm"}),r.jsx(ze,{type:"button",onClick:t,children:"Cancel"})]})]})})]})})},Re="/food_diary/assets/breakfast-d9429527.svg",We="/food_diary/assets/lunch-233cf7ab.svg",Ue="/food_diary/assets/dinner-392691b4.svg",qe="/food_diary/assets/snack-6fc8f33a.svg";export{Le as L,Be as M,qe as a,Re as b,Ue as d,We as l,n,U as s,_e as t};
