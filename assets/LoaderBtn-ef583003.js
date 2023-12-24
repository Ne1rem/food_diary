import{s as e,j as i}from"./index-a7e9d0ca.js";const a=e.div`
  position: relative;
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,s=e.input`
  width: 300px;
  display: inline-flex;
  padding: 8px 30px 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  color: var(--color-primary-grey, #b6b6b6);
  font-weight: 400;
  line-height: 1.4;

  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: var(--color-primary-black-2);

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }

  &.error {
    border: 1px solid #e74a3b;
  }

  &.correct {
    border: 1px solid #3cbc81;
  }
`,o=e.svg`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 10px;
  right: 10px;
`,n=e.span`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: var(--secondary-color-grey-1);
  position: relative;
  -webkit-animation: 1.2s scaleDown ease-in-out infinite;
  animation: 1.2s scaleDown ease-in-out infinite;

  &:nth-child(2) {
    margin: 0 15px;
    -webkit-animation: 1.2s scaleDown ease-in-out infinite 0.15555s;
    animation: 1.2s scaleDown ease-in-out infinite 0.15555s;
  }

  &:nth-child(3) {
    -webkit-animation: 1.2s scaleDown ease-in-out infinite 0.3s;
    animation: 1.2s scaleDown ease-in-out infinite 0.3s;
  }

  @-webkit-keyframes scaleDown {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes scaleDown {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`,r=()=>i.jsxs(i.Fragment,{children:[i.jsx(n,{}),i.jsx(n,{}),i.jsx(n,{})]});export{a as I,r as L,s as a,o as b};
