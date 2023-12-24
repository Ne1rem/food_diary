import axios from 'axios';
import { useMemo, useState } from 'react';

import { AddWaterModal } from '../AddWaterModal';
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
  const [isModalShown, setIsModalShown] = useState(false);

  const closeModal = () => {
    setIsModalShown(false);
  };

  const postWater = async (value) => {
    try {
      const response = await axios.post('/user/water-intake', { water: value });

      const date = new Date();
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      const formattedDate = year + '-' + month + '-' + day;

      setWater(response.data.waters[formattedDate]);
    } catch (err) {
      console.log(err);
    }
  };

  const onAddWater = (value) => {
    setWater((s) => s + value);
    postWater(value);
  };

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
        <AddWaterBtn onClick={() => setIsModalShown(true)}>
          <svg height={12} width={12}>
            <use href={`${iconsSprite}#icon-plus`}></use>
          </svg>
          Add water intake
        </AddWaterBtn>
      </WaterInfo>
      {isModalShown && (
        <AddWaterModal onClose={closeModal} successHandler={onAddWater} />
      )}
    </Wrapper>
  );
};
