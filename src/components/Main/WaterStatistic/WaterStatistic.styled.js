import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px 22px 16px 12px;
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 24px 22px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 24px 24px 40px;
  }
`;

export const WaterDiagramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: flex-end;
  width: 80px;
  height: 192px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-1);

  border-radius: 20px;
  background: var(--primary-color-black);
`;

export const Title = styled.h3`
  margin-bottom: 12px;
  color: var(--color-primary-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 16px;

  color: var(--color-primary-white);

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`;

export const FirstText = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;

  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 1.18;
  }
`;

export const SecondText = styled.p`
  font-size: 14px;
  line-height: 1.43;
`;

export const DecorText = styled.span`
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`;

export const WaterDiagram = styled.div`
  position: relative;
  height: ${(props) => `${props.$percent}%`};

  border-radius: 20px;
  background-color: var(--color-primary-violet);
  box-shadow:
    0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
`;

export const WaterPercent = styled.p`
  position: absolute;
  left: 50%;
  bottom: ${(props) => (props.$isHighPercent ? '50%' : 'calc(100% + 6px)')};
  transform: ${(props) =>
    props.$isHighPercent ? 'translate(-50%, 50%)' : 'translateX(-50%)'};
  color: ${(props) =>
    props.$isHighPercent ? 'black' : 'var(--color-primary-violet)'};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
`;

export const WaterInfo = styled.div``;

export const AddWaterBtn = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;

  border-radius: 12px;
  background-color: var(--color-primary-green-lite);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;
