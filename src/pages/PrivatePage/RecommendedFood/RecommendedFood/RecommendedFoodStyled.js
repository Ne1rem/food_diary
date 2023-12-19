import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 34px 60px 34px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    padding: 24px 27px 290px 27px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    padding: 16px 10px 40px 10px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 30px;
  color: #fff;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const Photo = styled.img`
  width: 536px;
  height: 560px;
  margin-top: 8px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 380px;
    height: 396px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    width: 300px;
    height: 312px;
  }
`;

export const RecommendedFoodWrapper = styled.div`
  display: flex;
  gap: 44px;
  padding-left: 116px;

  @media (min-width: 835px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    flex-direction: column;
    align-items: center;
    padding-left: 0px;
    gap: 24px;
  }

  @media (max-width: 480px) {
    /* Стилі для телефонів */
    flex-direction: column;
    gap: 24px;
    padding-left: 0px;
  }
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
    flex-direction: column;
  }
`;

export const FoodCard = styled.div`
  width: 328px;
  height: 86px;
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
