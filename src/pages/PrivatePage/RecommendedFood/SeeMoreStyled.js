import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 34px 60px 34px;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
`;

export const RecommendedFoodWrapper = styled.div`
  display: flex;
  gap: 44px;
  padding-left: 116px;
`;

export const FoodCardsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 676px;
`;

export const FoodCard = styled.div`
  width: 328px;
  display: flex;
  flex-direction: row;
  background-color: #0f0f0f;
  color: #ffffff;
  border-radius: 12px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 24px;

  img {
    width: 46px;
    height: 46px;
  }

  h3,
  p {
    margin: 2px 0;
  }

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 380px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`;

export const CharacteristicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
`;

export const WeightOfCalorieContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
`;

export const Calories = styled.p`
  color: #b6b6b6;
`;
