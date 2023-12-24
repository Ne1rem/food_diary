import styled from 'styled-components';

const LoaderBtnStyle = styled.span`
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
`;

export { LoaderBtnStyle };
