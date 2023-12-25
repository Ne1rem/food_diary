import{n as R,r as w,b as A,j as r,u as W,o as G}from"./index-9ea92a8c.js";import{_ as V,w as H,T as K,g as U,s as J,r as Q,u as X,i as Y}from"./emotion-element-c39617d8.browser.esm-ee61eaca.js";import{E as Z,F as _,c as N,d as ee,a as re,b as C,e as te,f as ae,g as oe}from"./index.esm-c784e613.js";const L=e=>e.intake.intake;var ne=R,ie=function(t){return t!=="theme"},O=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?ne:ie},q=function(t,a,d){var i;if(a){var h=a.shouldForwardProp;i=t.__emotion_forwardProp&&h?function(u){return t.__emotion_forwardProp(u)&&h(u)}:h}return typeof i!="function"&&d&&(i=t.__emotion_forwardProp),i},se=function(t){var a=t.cache,d=t.serialized,i=t.isStringTag;return Q(a,d,i),X(function(){return Y(a,d,i)}),null},de=function e(t,a){var d=t.__emotion_real===t,i=d&&t.__emotion_base||t,h,u;a!==void 0&&(h=a.label,u=a.target);var k=q(t,a,d),l=k||O(i),p=!l("as");return function(){var f=arguments,m=d&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(h!==void 0&&m.push("label:"+h+";"),f[0]==null||f[0].raw===void 0)m.push.apply(m,f);else{m.push(f[0][0]);for(var $=f.length,y=1;y<$;y++)m.push(f[y],f[0][y])}var o=H(function(n,c,v){var x=p&&n.as||i,g="",b=[],j=n;if(n.theme==null){j={};for(var z in n)j[z]=n[z];j.theme=w.useContext(K)}typeof n.className=="string"?g=U(c.registered,b,n.className):n.className!=null&&(g=n.className+" ");var T=J(m.concat(b),c.registered,j);g+=c.key+"-"+T.name,u!==void 0&&(g+=" "+u);var B=p&&k===void 0?O(x):l,E={};for(var P in n)p&&P==="as"||B(P)&&(E[P]=n[P]);return E.className=g,E.ref=v,w.createElement(w.Fragment,null,w.createElement(se,{cache:c,serialized:T,isStringTag:typeof x=="string"}),w.createElement(x,E))});return o.displayName=h!==void 0?h:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",o.defaultProps=t.defaultProps,o.__emotion_real=o,o.__emotion_base=i,o.__emotion_styles=m,o.__emotion_forwardProp=k,Object.defineProperty(o,"toString",{value:function(){return"."+u}}),o.withComponent=function(n,c){return e(n,V({},a,c,{shouldForwardProp:q(o,c,!0)})).apply(void 0,m)},o}},le=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],s=de.bind();le.forEach(function(e){s[e]=s(e)});const I=s.li`
padding-right: 20px;`,ce=s.ul`
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
`,Fe=({name:e})=>{const t=A(L);let a;switch(e){case"breakfast":a=t.breakfast;break;case"lunch":a=t.lunch;break;case"dinner":a=t.dinner;break;case"snack":a=t.snack;break;default:a=null;break}const d=a?a.totalCarbs:0,i=a?a.totalProtein:0,h=a?a.totalFat:0;return r.jsxs(ce,{children:[r.jsxs(I,{children:["Carbonohidrates: ",r.jsx("span",{children:d})]}),r.jsxs(I,{children:["Protein: ",r.jsx("span",{children:i})]}),r.jsxs(I,{children:["Fat: ",r.jsx("span",{children:h})]})]})},he=s.div`
display: flex;
flex-direction: column;
gap: 16px;margin-bottom: 20px;
@media only screen and (min-width: 834px){
  flex-direction: row; 
  gap: 12px;
  }
`,pe=s.input`
  min-width: 255px;
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;`,F=s.input`
  min-width: 61px;
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;`,me=s.div`
display: flex;
gap: 8px;
@media only screen and (min-width: 834px){
  width: 185px;
  gap: 12px;
}`,ue=s.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,fe=s.button`
background-color: transparent;
border: none;
padding: 0;
`,S=s(Z)`
padding: 0 5px;
font-size: 8px;
font-weight: 400;
line-height: 10px;
color: red;`,ge="/food_diary/assets/trash-fb77e3c9.svg",be=({index:e,errors:t,touched:a,values:d,remove:i})=>r.jsxs(he,{children:[r.jsx(_,{as:pe,id:`name${e}`,name:`dish[${e}].name`,placeholder:"The name of the product or dish",value:d.dish[e].name,required:!0}),t[`name${e}`]&&a[`name${e}`]?r.jsx(S,{name:`dish[${e}].name`,component:"div"}):null,r.jsx(_,{as:F,id:`carbonohidrates${e}`,name:`dish[${e}].carbonohidrates`,placeholder:"Carbonoh.",value:d.dish[e].carbonohidrates,required:!0}),t[`carbonohidrates${e}`]&&a[`carbonohidrates${e}`]?r.jsx(S,{name:`dish[${e}].carbonohidrates`,component:"div"}):null,r.jsx(_,{as:F,id:`protein${e}`,name:`dish[${e}].protein`,placeholder:"Protein",value:d.dish[e].protein,required:!0}),t[`protein${e}`]&&a[`protein${e}`]?r.jsx(S,{name:`dish[${e}].protein`,component:"div"}):null,r.jsxs(me,{children:[r.jsx(_,{as:F,id:`fat${e}`,name:`dish[${e}].fat`,placeholder:"Fat",value:d.dish[e].fat,required:!0}),t[`fat${e}`]&&a[`fat${e}`]?r.jsx(S,{name:`dish[${e}].fat`,component:"div"}):null,r.jsx(_,{as:F,id:`calories${e}`,name:`dish[${e}].calories`,placeholder:"Calories",value:d.dish[e].calories,required:!0}),t[`calories${e}`]&&a[`calories${e}`]?r.jsx(S,{name:`dish[${e}].calories`,component:"div"}):null,r.jsx(fe,{type:"button",onClick:()=>i(e),children:r.jsx(ue,{children:r.jsx("use",{href:`${ge}#icon-trash`})})})]})]}),xe=s.div`
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
  }`,ve=s.h2`
color: var(--color-primary-white);
font-size: 24px;
line-height: 1.25;
margin-bottom: 24px;
@media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }`,we=s.div`
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
  }`,je=s.button`
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
  }`,_e=s.button`
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
  }`,Se=s.button`
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
  }`,M=N({dish:ee().of(N().shape({name:re().required("Enter the name of the product or dish").min(2,"Very short product name"),carbonohidrates:C().required("Enter the amount of carbohydrates").max(999.99,"Maximum number is 999.99"),protein:C().required("Enter the amount of protein").max(999.99,"Maximum number is 999.99"),fat:C().required("Enter the amount of fat").max(999.99,"Maximum number is 999.99"),calories:C().required("Enter the amount of calories").max(999.99,"Maximum number is 999.99")}))}),D={name:"",carbonohidrates:"",protein:"",fat:"",calories:""},Ie=({name:e,img:t,onClose:a})=>{var f,m,$,y;const d=W();w.useEffect(()=>{const o=document.body.style.overflow,n=c=>{c.code==="Escape"&&a()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow=o}},[a]);const i=o=>{o.currentTarget===o.target&&a()},h=o=>{d(G(o))},u=4,k=(o,{values:n,setFieldValue:c,errors:v})=>{if(o.preventDefault(),n.dish.some((g,b)=>!!(v.dish&&v.dish[b]))){console.log("Cannot add more items due to validation errors");return}if(n.dish.length<u){const g=n.dish.length-1,b=n.dish[g];M.validate(b,{abortEarly:!1}).then(()=>{c("dish",[...n.dish,D])})}else console.log("Cannot add more than 4 items")},l=A(L);let p;switch(e){case"breakfast":p=(f=l==null?void 0:l.breakfast)==null?void 0:f.dish;break;case"lunch":p=(m=l==null?void 0:l.lunch)==null?void 0:m.dish;break;case"dinner":p=($=l==null?void 0:l.dinner)==null?void 0:$.dish;break;case"snack":p=(y=l==null?void 0:l.snack)==null?void 0:y.dish;break;default:p=null;break}return r.jsx(xe,{onClick:i,children:r.jsxs(ye,{children:[r.jsx(ve,{children:"Record your meal"}),r.jsxs(we,{children:[r.jsx("img",{src:t,alt:e}),r.jsx(ke,{children:e})]}),r.jsx(te,{initialValues:{dish:p&&p.length?p.map(o=>({name:o.name||"",carbonohidrates:o.carbonohidrates||"",protein:o.protein||"",fat:o.fat||"",calories:o.calories||"",productId:o.productId||""})):[D]},onSubmit:h,validationSchema:M,children:({errors:o,touched:n,values:c,setFieldValue:v})=>r.jsxs(ae,{autoComplete:"off",children:[r.jsx(oe,{name:"dish",children:({remove:x})=>r.jsx("ul",{children:c.dish.map((g,b)=>r.jsx("li",{children:r.jsx(be,{index:b,errors:o,touched:n,values:c,setFieldValue:v,remove:x})},b))})}),r.jsx(Se,{type:"button",onClick:x=>k(x,{values:c,setFieldValue:v,errors:o}),children:"+ Add more"}),r.jsxs($e,{children:[r.jsx(je,{type:"submit",children:"Confirm"}),r.jsx(_e,{type:"button",onClick:a,children:"Cancel"})]})]})})]})})},ze="/food_diary/assets/breakfast-d9429527.svg",Te="/food_diary/assets/lunch-233cf7ab.svg",Ne="/food_diary/assets/dinner-392691b4.svg",Oe="/food_diary/assets/snack-6fc8f33a.svg";export{Fe as L,Ie as M,Oe as a,ze as b,Ne as d,Te as l,s as n,L as s,ge as t};
