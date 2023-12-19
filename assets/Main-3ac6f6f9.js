import{j as t,s as i}from"./index-3be07cb6.js";import{C as g,A as m,p as f,a as u,D as j}from"./index-8d3f13f7.js";import b from"./RecommendedFood-66b6adcf.js";g.register(m,f,u);const y={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},C={id:"bcgCircle",beforeDatasetsDraw(n){const{ctx:e}=n;e.save();const s=n.getDatasetMeta(0).data[0].x,a=n.getDatasetMeta(0).data[0].y,r=n.getDatasetMeta(0).data[0].innerRadius,l=n.getDatasetMeta(0).data[0].outerRadius,o=l-r,c=Math.PI/180;e.beginPath(),e.lineWidth=o,e.strokeStyle="rgba(41, 41, 40, 1)",e.arc(s,a,l-o/2,0,c*360,!1),e.stroke()}},x=({dailyCalories:n,inputValue:e,chartBcg:s})=>{e>n&&(e=n,s="red");const a=n-e,r={datasets:[{label:[],data:[e,a],backgroundColor:[s,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return t.jsx(t.Fragment,{children:t.jsx(j,{options:y,data:r,plugins:[C]})})},w=i.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,v=i.div`
  position: relative;
  width: 48px;
  height: 48px;
`,F=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,B=i.div`
  display: flex;
  flex-direction: column;
`,D=i.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,G=i.div`
  display: flex;
  column-gap: 12px;
`,p=i.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,R=i.p`
  width: 78px;
`,d=n=>{const{title:e,chartBcg:s,elementGoal:a,elementValue:r}=n;let l=(a-r).toFixed(1);l<0&&(l=0);let o=Math.round(r*100/a);return(o===1/0||isNaN(o))&&(o=0),o>100&&(o=100),t.jsx(t.Fragment,{children:t.jsxs(w,{children:[t.jsxs(v,{children:[t.jsx(x,{dailyCalories:a,inputValue:r,chartBcg:s}),t.jsx(F,{children:t.jsx("p",{children:`${o}%`})})]}),t.jsxs(B,{children:[t.jsx(D,{children:e}),t.jsxs(G,{children:[t.jsxs(R,{children:["Goal: ",t.jsx(p,{children:a})]}),t.jsxs("p",{children:["left: ",t.jsx(p,{children:l})]})]})]})]})})},z=i.h2`
  color: var(--color-primary-white);
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,M=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px 12px;
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background-color: var(--color-primary-black-2);
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 36px 40px;
    flex-direction: row;
    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
    height: 240px;
  }
`,V=i.div`
  position: relative;

  width: 168px;
  height: 168px;

  font-size: 32px;
  font-weight: 500;
  line-height: 1.19;

  p:last-child {
    color: var(--color-primary-grey);

    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
  }
`,W=i.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,k=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,I="#FFC4F7",P="#FFF3B7",S="#B6B6B6",E=()=>{let n=1700,e=1360,s=119.5,a=136,r=44.8,l=170,o=135.5,c=56,h="#45FFBC";return t.jsxs(t.Fragment,{children:[t.jsx(z,{children:"Food"}),t.jsxs(M,{children:[t.jsxs(V,{children:[t.jsx(x,{dailyCalories:n,inputValue:e,chartBcg:h}),t.jsxs(W,{children:[t.jsx("p",{children:e}),t.jsx("p",{children:"calories"})]})]}),t.jsxs(k,{children:[t.jsx(d,{title:"Carbonohidrates",chartBcg:I,elementGoal:l,elementValue:a}),t.jsx(d,{title:"Protein",chartBcg:P,elementGoal:o,elementValue:s}),t.jsx(d,{title:"Fat",chartBcg:S,elementGoal:c,elementValue:r})]})]})]})},_=()=>t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsx(E,{}),t.jsx(b,{})]})});export{_ as default};
