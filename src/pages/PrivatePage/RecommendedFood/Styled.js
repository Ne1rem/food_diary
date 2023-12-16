import styled from 'styled-components';

export const RecommendedFoodWrapper = styled.div`
  margin: 20px 34px 52px 138px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const FoodCardsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 876px;
`;

export const FoodCard = styled.div`
  width: 304px;
  height: 46px;
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
`;

export const SeeMoreButton = styled.a`
  display: block;
  margin-top: 16px;
  color: #b6b6b6;
`;

export const CharacteristicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const WeightOfCalorieContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const Calories = styled.p`
  color: #b6b6b6;
`;
