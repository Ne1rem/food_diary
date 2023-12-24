import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

import { AddWaterModal } from '../AddWaterModal';
import {
  AddWaterBtn,
  ClearButton,
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

export const WaterStatistic = ({ dailyWater, water }) => {
  const [currentWater, setCurrentWater] = useState(null);
  const [isModalShown, setIsModalShown] = useState(false);

  useEffect(() => {
    setCurrentWater(water);
  }, [water]);

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

      setCurrentWater(response.data.waters[formattedDate]);
    } catch (err) {
      console.log(err);
    }
  };

  const changeWaterHandler = (value) => {
    postWater(value);
  };

  const clearWaterHandler = async () => {
    try {
      const response = await axios.delete('/user/water-intake');
      console.log(response);
      setCurrentWater(0);
    } catch (err) {
      console.log(err);
    }
  };

  const waterPercentage = useMemo(() => {
    return Math.floor((currentWater / dailyWater) * 100);
  }, [dailyWater, currentWater]);

  return (
    <Wrapper>
      <ClearButton onClick={clearWaterHandler}>
        <svg width={20} height={20}>
          <use href={`${iconsSprite}#icon-trash-bin`}></use>
        </svg>
      </ClearButton>
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
            {currentWater} <DecorText>ml</DecorText>
          </FirstText>
          {dailyWater > currentWater && (
            <SecondText>
              left: <DecorText>{dailyWater - currentWater} ml</DecorText>
            </SecondText>
          )}
        </TextWrapper>
        <AddWaterBtn onClick={() => setIsModalShown(true)}>
          <svg height={12} width={12}>
            <use href={`${iconsSprite}#icon-plus`}></use>
          </svg>
          Add water intake
        </AddWaterBtn>
      </WaterInfo>
      {isModalShown && (
        <AddWaterModal
          onClose={closeModal}
          successHandler={changeWaterHandler}
        />
      )}
    </Wrapper>
  );
};
