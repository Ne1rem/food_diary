import{s,j as n}from"./index-e5363258.js";const e=s.span`
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: var(--secondary-color-grey-1);
    position: relative;
    -webkit-animation: 1.2s scaleDown ease-in-out infinite ;
    animation: 1.2s scaleDown ease-in-out infinite ;

&:nth-child(2){
    margin: 0 15px;
    -webkit-animation: 1.2s scaleDown ease-in-out infinite .15555s;
    animation: 1.2s scaleDown ease-in-out infinite .15555s;
}

&:nth-child(3){
    -webkit-animation: 1.2s scaleDown ease-in-out infinite .300000s;
    animation: 1.2s scaleDown ease-in-out infinite .300000s;
}

@-webkit-keyframes scaleDown{
    0%, 80%, 100%{
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    40%{
      -webkit-transform: scale(1);
              transform: scale(1);
    }
}

@keyframes scaleDown{
    0%, 80%, 100%{
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    40%{
      -webkit-transform: scale(1);
              transform: scale(1);
    }
}
`,i=()=>n.jsxs(n.Fragment,{children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]});export{i as L};
