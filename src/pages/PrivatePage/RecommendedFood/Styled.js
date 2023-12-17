import styled from 'styled-components';

export const RecommendedFoodWrapper = styled.div`
  margin: 20px 34px 52px 138px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
    margin: 20px 27px 40px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
    margin: 20px 10px 80px 10px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const FoodCardsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 676px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
    gap: 10px;

    & > div:nth-child(n + 3) {
      display: none;
    }
  }
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

export const SeeMoreButton = styled.a`
  display: block;
  margin-top: 16px;
  color: #b6b6b6;
  font-size: 16px;

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 14px;
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
