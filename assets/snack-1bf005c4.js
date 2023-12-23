import{n as B,r as b,b as R,k as W,u as $,j as r}from"./index-de5b1b4b.js";import{_ as G,w as V,T as H,g as K,s as U,r as J,u as Q,i as X}from"./emotion-element-c39617d8.browser.esm-316dcaf9.js";import{E as Y,F as v,c as q,d as Z,a as ee,b as P,e as re,f as te,g as ae}from"./index.esm-923045e1.js";const ne=e=>e.intake.intake.breakfast,oe=e=>e.intake.intake.lunch,ie=e=>e.intake.intake.dinner,se=e=>e.intake.intake.snack;var le=B,de=function(t){return t!=="theme"},N=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?le:de},O=function(t,a,l){var i;if(a){var m=a.shouldForwardProp;i=t.__emotion_forwardProp&&m?function(n){return t.__emotion_forwardProp(n)&&m(n)}:m}return typeof i!="function"&&l&&(i=t.__emotion_forwardProp),i},ce=function(t){var a=t.cache,l=t.serialized,i=t.isStringTag;return J(a,l,i),Q(function(){return X(a,l,i)}),null},me=function e(t,a){var l=t.__emotion_real===t,i=l&&t.__emotion_base||t,m,n;a!==void 0&&(m=a.label,n=a.target);var o=O(t,a,l),p=o||N(i),h=!p("as");return function(){var u=arguments,d=l&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(m!==void 0&&d.push("label:"+m+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{d.push(u[0][0]);for(var k=u.length,g=1;g<k;g++)d.push(u[g],u[0][g])}var f=V(function(c,x,D){var F=h&&c.as||i,y="",C=[],j=c;if(c.theme==null){j={};for(var z in c)j[z]=c[z];j.theme=b.useContext(H)}typeof c.className=="string"?y=K(x.registered,C,c.className):c.className!=null&&(y=c.className+" ");var T=U(d.concat(C),x.registered,j);y+=x.key+"-"+T.name,n!==void 0&&(y+=" "+n);var L=h&&o===void 0?N(F):p,_={};for(var S in c)h&&S==="as"||L(S)&&(_[S]=c[S]);return _.className=y,_.ref=D,b.createElement(b.Fragment,null,b.createElement(ce,{cache:x,serialized:T,isStringTag:typeof F=="string"}),b.createElement(F,_))});return f.displayName=m!==void 0?m:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",f.defaultProps=t.defaultProps,f.__emotion_real=f,f.__emotion_base=i,f.__emotion_styles=d,f.__emotion_forwardProp=o,Object.defineProperty(f,"toString",{value:function(){return"."+n}}),f.withComponent=function(c,x){return e(c,G({},a,x,{shouldForwardProp:O(f,x,!0)})).apply(void 0,d)},f}},pe=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],s=me.bind();pe.forEach(function(e){s[e]=s(e)});const I=s.li`
padding-right: 20px;`,he=s.ul`
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
`,Te=({name:e})=>{const t=R();b.useEffect(()=>{t(W())},[t]);const a=$(ne),l=$(oe),i=$(ie),m=$(se);let n;switch(e){case"breakfast":n=a;break;case"lunch":n=l;break;case"dinner":n=i;break;case"snack":n=m;break;default:n=null;break}const o=n?n.totalCarbs:0,p=n?n.totalProtein:0,h=n?n.totalFat:0;return r.jsxs(he,{children:[r.jsxs(I,{children:["Carbonohidrates: ",r.jsx("span",{children:o})]}),r.jsxs(I,{children:["Protein: ",r.jsx("span",{children:p})]}),r.jsxs(I,{children:["Fat: ",r.jsx("span",{children:h})]})]})},ue=s.div`
display: flex;
flex-direction: column;
gap: 16px;margin-bottom: 20px;
@media only screen and (min-width: 834px){
  flex-direction: row; 
  gap: 12px;
  }
`,fe=s.input`
  min-width: 255px;
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;`,E=s.input`
  min-width: 61px;
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;`,ge=s.div`
display: flex;
gap: 8px;
@media only screen and (min-width: 834px){
  width: 185px;
  gap: 12px;
}`,xe=s.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,be=s.button`
background-color: transparent;
border: none;
padding: 0;
`,w=s(Y)`
padding: 0 5px;
font-size: 8px;
font-weight: 400;
line-height: 10px;
color: red;`,ye="/food_diary/assets/trash-fb77e3c9.svg",ve=({index:e,errors:t,touched:a,values:l,remove:i})=>r.jsxs(ue,{children:[r.jsx(v,{as:fe,id:`name${e}`,name:`dish[${e}].name`,placeholder:"The name of the product or dish",value:l.dish[e].name,required:!0}),t[`name${e}`]&&a[`name${e}`]?r.jsx(w,{name:`dish[${e}].name`,component:"div"}):null,r.jsx(v,{as:E,id:`carbonohidrates${e}`,name:`dish[${e}].carbonohidrates`,placeholder:"Carbonoh.",value:l.dish[e].carbonohidrates,required:!0}),t[`carbonohidrates${e}`]&&a[`carbonohidrates${e}`]?r.jsx(w,{name:`dish[${e}].carbonohidrates`,component:"div"}):null,r.jsx(v,{as:E,id:`protein${e}`,name:`dish[${e}].protein`,placeholder:"Protein",value:l.dish[e].protein,required:!0}),t[`protein${e}`]&&a[`protein${e}`]?r.jsx(w,{name:`dish[${e}].protein`,component:"div"}):null,r.jsxs(ge,{children:[r.jsx(v,{as:E,id:`fat${e}`,name:`dish[${e}].fat`,placeholder:"Fat",value:l.dish[e].fat,required:!0}),t[`fat${e}`]&&a[`fat${e}`]?r.jsx(w,{name:`dish[${e}].fat`,component:"div"}):null,r.jsx(v,{as:E,id:`calories${e}`,name:`dish[${e}].calories`,placeholder:"Calories",value:l.dish[e].calories,required:!0}),t[`calories${e}`]&&a[`calories${e}`]?r.jsx(w,{name:`dish[${e}].calories`,component:"div"}):null,r.jsx(be,{type:"button",onClick:()=>i(e),children:r.jsx(xe,{children:r.jsx("use",{href:`${ye}#icon-trash`})})})]})]}),we=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.8);
  z-index: 1200;`,ke=s.div`
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
  }`,je=s.h2`
color: var(--color-primary-white);
font-size: 24px;
line-height: 1.25;
margin-bottom: 24px;
@media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }`,_e=s.div`
display: flex;
align-items: center;
text-align: left;
margin-bottom: 16px;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,Se=s.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`,$e=s.button`
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
  }`,Pe=s.button`
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
  }`,Ee=s.button`
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
  }`,Fe=s.div`
@media only screen and (min-width: 834px){
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  }`,M=q({dish:Z().of(q().shape({name:ee().required("Enter the name of the product or dish").min(2,"Very short product name"),carbonohidrates:P().required("Enter the amount of carbohydrates").max(999.99,"Maximum number is 999.99"),protein:P().required("Enter the amount of protein").max(999.99,"Maximum number is 999.99"),fat:P().required("Enter the amount of fat").max(999.99,"Maximum number is 999.99"),calories:P().required("Enter the amount of calories").max(999.99,"Maximum number is 999.99")}))}),A={name:"",carbonohidrates:"",protein:"",fat:"",calories:""},qe=({name:e,img:t,onClose:a})=>{b.useEffect(()=>{const o=document.body.style.overflow,p=h=>{h.code==="Escape"&&a()};return window.addEventListener("keydown",p),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",p),document.body.style.overflow=o}},[a]);const l=o=>{o.currentTarget===o.target&&a()},i=()=>{console.log("handleFormSubmit")},m=(o,{values:p,setFieldValue:h})=>{o.preventDefault();const u=p.dish.length-1,d=p.dish[u];M.validate(d,{abortEarly:!1}).then(()=>{console.log("Form is valid"),h("dish",[...p.dish,A])}).catch(k=>{console.log("Errors:",k.errors),console.log("Form is invalid")}),console.log("handleAddMore")},n=[{name:"new",carbonohidrates:30,protein:25,fat:23,calories:750,_id:"6583100f05cec9e389439301"},{name:"new",carbonohidrates:30,protein:25,fat:23,calories:750,_id:"6583100f05cec9e389439301"}];return r.jsx(we,{onClick:l,children:r.jsxs(ke,{children:[r.jsx(je,{children:"Record your meal"}),r.jsxs(_e,{children:[r.jsx("img",{src:t,alt:e}),r.jsx(Se,{children:e})]}),r.jsx(re,{initialValues:{dish:n&&n?n.map(o=>({name:o.name||"",carbonohidrates:o.carbonohidrates||"",protein:o.protein||"",fat:o.fat||"",calories:o.calories||"",productId:o.productId||""})):[A]},onSubmit:i,validationSchema:M,children:({errors:o,touched:p,values:h,setFieldValue:u})=>r.jsxs(te,{autoComplete:"off",children:[r.jsx(ae,{name:"dish",children:({remove:d})=>r.jsx("ul",{children:h.dish.map((k,g)=>r.jsx("li",{children:r.jsx(ve,{index:g,errors:o,touched:p,values:h,setFieldValue:u,remove:d})},g))})}),r.jsx(Ee,{type:"button",onClick:d=>m(d,{values:h,setFieldValue:u,errors:o}),children:"+ Add more"}),r.jsxs(Fe,{children:[r.jsx($e,{type:"submit",children:"Confirm"}),r.jsx(Pe,{type:"button",onClick:a,children:"Cancel"})]})]})})]})})},Ne="/food_diary/assets/breakfast-d9429527.svg",Oe="/food_diary/assets/lunch-233cf7ab.svg",Me="/food_diary/assets/dinner-392691b4.svg",Ae="/food_diary/assets/snack-6fc8f33a.svg";export{Te as L,qe as M,oe as a,ie as b,se as c,Ne as d,Me as e,Ae as f,Oe as l,s as n,ne as s,ye as t};
