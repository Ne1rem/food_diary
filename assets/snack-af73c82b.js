import{o as W,r as w,u as A,l as G,b as L,j as r,p as U,q as V}from"./index-cef11774.js";import{_ as H,w as K,T as J,g as Q,s as X,r as Y,u as Z,i as ee}from"./emotion-element-c39617d8.browser.esm-77c357c9.js";import{E as re,F as _,c as O,d as te,a as ae,b as C,e as oe,f as ne,g as ie}from"./index.esm-7dc61f04.js";const B=e=>e.intake.intake;var se=W,de=function(t){return t!=="theme"},q=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?se:de},N=function(t,n,a){var i;if(n){var m=n.shouldForwardProp;i=t.__emotion_forwardProp&&m?function(f){return t.__emotion_forwardProp(f)&&m(f)}:m}return typeof i!="function"&&a&&(i=t.__emotion_forwardProp),i},le=function(t){var n=t.cache,a=t.serialized,i=t.isStringTag;return Y(n,a,i),Z(function(){return ee(n,a,i)}),null},ce=function e(t,n){var a=t.__emotion_real===t,i=a&&t.__emotion_base||t,m,f;n!==void 0&&(m=n.label,f=n.target);var k=N(t,n,a),P=k||q(i),j=!P("as");return function(){var s=arguments,l=a&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(m!==void 0&&l.push("label:"+m+";"),s[0]==null||s[0].raw===void 0)l.push.apply(l,s);else{l.push(s[0][0]);for(var S=s.length,y=1;y<S;y++)l.push(s[y],s[0][y])}var u=K(function(c,o,h){var p=j&&c.as||i,g="",v=[],x=c;if(c.theme==null){x={};for(var b in c)x[b]=c[b];x.theme=w.useContext(J)}typeof c.className=="string"?g=Q(o.registered,v,c.className):c.className!=null&&(g=c.className+" ");var T=X(l.concat(v),o.registered,x);g+=o.key+"-"+T.name,f!==void 0&&(g+=" "+f);var R=j&&k===void 0?q(p):P,$={};for(var E in c)j&&E==="as"||R(E)&&($[E]=c[E]);return $.className=g,$.ref=h,w.createElement(w.Fragment,null,w.createElement(le,{cache:o,serialized:T,isStringTag:typeof p=="string"}),w.createElement(p,$))});return u.displayName=m!==void 0?m:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",u.defaultProps=t.defaultProps,u.__emotion_real=u,u.__emotion_base=i,u.__emotion_styles=l,u.__emotion_forwardProp=k,Object.defineProperty(u,"toString",{value:function(){return"."+f}}),u.withComponent=function(c,o){return e(c,H({},n,o,{shouldForwardProp:N(u,o,!0)})).apply(void 0,l)},u}},he=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],d=ce.bind();he.forEach(function(e){d[e]=d(e)});const z=d.li`
padding-right: 20px;`,pe=d.ul`
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
`,Te=({name:e})=>{const t=A();w.useEffect(()=>{t(G())},[t]);const n=L(B);let a;switch(e){case"breakfast":a=n.breakfast;break;case"lunch":a=n.lunch;break;case"dinner":a=n.dinner;break;case"snack":a=n.snack;break;default:a=null;break}const i=a&&a.totalCarbs!==void 0?a.totalCarbs:0,m=a&&a.totalProtein!==void 0?a.totalProtein:0,f=a&&a.totalFat!==void 0?a.totalFat:0;return r.jsxs(pe,{children:[r.jsxs(z,{children:["Carbonohidrates: ",r.jsx("span",{children:i})]}),r.jsxs(z,{children:["Protein: ",r.jsx("span",{children:m})]}),r.jsxs(z,{children:["Fat: ",r.jsx("span",{children:f})]})]})},me=d.div`
display: flex;
flex-direction: column;
gap: 16px;margin-bottom: 20px;
@media only screen and (min-width: 834px){
  flex-direction: row; 
  gap: 12px;
  }
`,ue=d.input`
  min-width: 255px;
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;`,I=d.input`
  min-width: 61px;
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;`,fe=d.div`
display: flex;
gap: 8px;
@media only screen and (min-width: 834px){
  width: 185px;
  gap: 12px;
}`,ge=d.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,be=d.button`
background-color: transparent;
border: none;
padding: 0;
`,F=d(re)`
padding: 0 5px;
font-size: 8px;
font-weight: 400;
line-height: 10px;
color: red;`,xe="/food_diary/assets/trash-fb77e3c9.svg",ye=({index:e,errors:t,touched:n,values:a,remove:i})=>r.jsxs(me,{children:[r.jsx(_,{as:ue,id:`name${e}`,name:`dish[${e}].name`,placeholder:"The name of the product or dish",value:a.dish[e].name,required:!0}),t[`name${e}`]&&n[`name${e}`]?r.jsx(F,{name:`dish[${e}].name`,component:"div"}):null,r.jsx(_,{as:I,id:`carbonohidrates${e}`,name:`dish[${e}].carbonohidrates`,placeholder:"Carbonoh.",value:a.dish[e].carbonohidrates,required:!0}),t[`carbonohidrates${e}`]&&n[`carbonohidrates${e}`]?r.jsx(F,{name:`dish[${e}].carbonohidrates`,component:"div"}):null,r.jsx(_,{as:I,id:`protein${e}`,name:`dish[${e}].protein`,placeholder:"Protein",value:a.dish[e].protein,required:!0}),t[`protein${e}`]&&n[`protein${e}`]?r.jsx(F,{name:`dish[${e}].protein`,component:"div"}):null,r.jsxs(fe,{children:[r.jsx(_,{as:I,id:`fat${e}`,name:`dish[${e}].fat`,placeholder:"Fat",value:a.dish[e].fat,required:!0}),t[`fat${e}`]&&n[`fat${e}`]?r.jsx(F,{name:`dish[${e}].fat`,component:"div"}):null,r.jsx(_,{as:I,id:`calories${e}`,name:`dish[${e}].calories`,placeholder:"Calories",value:a.dish[e].calories,required:!0}),t[`calories${e}`]&&n[`calories${e}`]?r.jsx(F,{name:`dish[${e}].calories`,component:"div"}):null,r.jsx(be,{type:"button",onClick:()=>i(e),children:r.jsx(ge,{children:r.jsx("use",{href:`${xe}#icon-trash`})})})]})]}),ve=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.8);
  z-index: 1200;`,we=d.div`
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
  }`,ke=d.h2`
color: var(--color-primary-white);
font-size: 24px;
line-height: 1.25;
margin-bottom: 24px;
@media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }`,je=d.div`
display: flex;
align-items: center;
text-align: left;
margin-bottom: 16px;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,_e=d.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`,Fe=d.button`
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
  }`,Pe=d.button`
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
  }`,Se=d.button`
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
  }`,$e=d.div`
@media only screen and (min-width: 834px){
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  }`,D=O({dish:te().of(O().shape({name:ae().required("Enter the name of the product or dish").min(2,"Very short product name"),carbonohidrates:C().required("Enter the amount of carbohydrates").max(999.99,"Maximum number is 999.99"),protein:C().required("Enter the amount of protein").max(999.99,"Maximum number is 999.99"),fat:C().required("Enter the amount of fat").max(999.99,"Maximum number is 999.99"),calories:C().required("Enter the amount of calories").max(999.99,"Maximum number is 999.99")}))}),M={name:"",carbonohidrates:"",protein:"",fat:"",calories:""},ze=({name:e,img:t,onClose:n,requestType:a,idIntake:i})=>{var S,y,u,c;const m=A();w.useEffect(()=>{const o=document.body.style.overflow,h=p=>{p.code==="Escape"&&n()};return window.addEventListener("keydown",h),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",h),document.body.style.overflow=o}},[n]);const f=o=>{o.currentTarget===o.target&&n()},k=o=>{if(a==="POST"){const h={[e.toLowerCase()]:{dish:o.dish.map(p=>({name:p.name,carbonohidrates:parseFloat(p.carbonohidrates),protein:parseFloat(p.protein),fat:parseFloat(p.fat),calories:parseFloat(p.calories)}))}};m(U(h))}else if(a==="PUT"){const h={[e.toLowerCase()]:{dish:[{name:o.dish.name,carbonohidrates:parseFloat(o.dish.carbonohidrates),protein:parseFloat(o.dish.protein),fat:parseFloat(o.dish.fat),calories:parseFloat(o.dish.calories)}]}};console.log(h),console.log(i),m(V(i,h))}n()},P=4,j=(o,{values:h,setFieldValue:p,errors:g})=>{if(o.preventDefault(),h.dish.some((x,b)=>!!(g.dish&&g.dish[b]))){console.log("Cannot add more items due to validation errors");return}if(h.dish.length<P){const x=h.dish.length-1,b=h.dish[x];D.validate(b,{abortEarly:!1}).then(()=>{p("dish",[...h.dish,M])})}else console.log("Cannot add more than 4 items")},s=L(B);let l;switch(e){case"breakfast":l=(S=s==null?void 0:s.breakfast)==null?void 0:S.dish;break;case"lunch":l=(y=s==null?void 0:s.lunch)==null?void 0:y.dish;break;case"dinner":l=(u=s==null?void 0:s.dinner)==null?void 0:u.dish;break;case"snack":l=(c=s==null?void 0:s.snack)==null?void 0:c.dish;break;default:l=null;break}return r.jsx(ve,{onClick:f,children:r.jsxs(we,{children:[r.jsx(ke,{children:"Record your meal"}),r.jsxs(je,{children:[r.jsx("img",{src:t,alt:e}),r.jsx(_e,{children:e})]}),r.jsx(oe,{initialValues:{dish:l&&l.length?l.map(o=>({name:o.name||"",carbonohidrates:o.carbonohidrates||"",protein:o.protein||"",fat:o.fat||"",calories:o.calories||"",productId:o.productId||""})):[M]},onSubmit:k,validationSchema:D,children:({errors:o,touched:h,values:p,setFieldValue:g})=>r.jsxs(ne,{autoComplete:"off",children:[r.jsx(ie,{name:"dish",children:({remove:v})=>r.jsx("ul",{children:p.dish.map((x,b)=>r.jsx("li",{children:r.jsx(ye,{index:b,errors:o,touched:h,values:p,setFieldValue:g,remove:v})},b))})}),r.jsx(Se,{type:"button",onClick:v=>j(v,{values:p,setFieldValue:g,errors:o}),children:"+ Add more"}),r.jsxs($e,{children:[r.jsx(Fe,{type:"submit",children:"Confirm"}),r.jsx(Pe,{type:"button",onClick:n,children:"Cancel"})]})]})})]})})},Oe="/food_diary/assets/breakfast-d9429527.svg",qe="/food_diary/assets/lunch-233cf7ab.svg",Ne="/food_diary/assets/dinner-392691b4.svg",De="/food_diary/assets/snack-6fc8f33a.svg";export{Te as L,ze as M,De as a,Oe as b,Ne as d,qe as l,d as n,B as s,xe as t};
