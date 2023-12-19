import { useMemo, useState } from 'react';

import {
  AddWaterBtn,
  DecorText,
  FirstText,
  SecondText,
  TextWrapper,
  Title,
  WaterDiagram,
  WaterDiagramWrapper,
  WaterInfo,
  WaterPercent,
  Wrapper,
} from './WaterStatistic.styled';

import iconsSprite from '../../../assets/sprite.svg';

export const WaterStatistic = ({ dailyWater }) => {
  const [water, setWater] = useState(1050);

  const waterPercentage = useMemo(() => {
    return Math.round((water / dailyWater) * 100);
  }, [dailyWater, water]);

  return (
    <Wrapper>
      <WaterDiagramWrapper>
        <WaterDiagram $percent={waterPercentage}>
          <WaterPercent $isHighPercent={waterPercentage >= 84}>
            {waterPercentage}%
          </WaterPercent>
        </WaterDiagram>
      </WaterDiagramWrapper>
      <WaterInfo>
        <Title>Water consumption</Title>
        <TextWrapper>
          <FirstText>
            {water} <DecorText>ml</DecorText>
          </FirstText>
          <SecondText>
            left: <DecorText>{dailyWater - water} ml</DecorText>
          </SecondText>
        </TextWrapper>
        <AddWaterBtn>
          <svg height={12} width={12}>
            <use href={`${iconsSprite}#icon-plus`}></use>
          </svg>
          Add water intake
        </AddWaterBtn>
      </WaterInfo>
    </Wrapper>
  );
};
