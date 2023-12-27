import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 0 138px 0;

  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    margin-top: 20px;
    padding: 0 0 27px 0;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    margin-top: 20px;
    padding: 0 0 10px 0;
  }
`;

export const RecommendedFoodWrapper = styled.div`
  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    width: 300px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  color: var(--color-primary-white);
  font-size: 22px;
  font-weight: 400;
  line-height: 1.45;

  @media (max-width: 833px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const FoodCardsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 676px;

  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 780px;
  }

  @media (max-width: 833px) {
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
  color: var(--color-primary-white);
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

  @media (min-width: 834px) and (max-width: 1440px) {
    /* Стилі для планшетів */
    width: 380px;
  }
`;

export const SeeMoreButton = styled.p`
  display: block;
  margin-top: 16px;
  color: var(--color-primary-grey);
  font-size: 16px;

  @media (max-width: 833px) {
    /* Стилі для телефонів */
    font-size: 14px;
  }
`;

export const CharacteristicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;

  @media (max-width: 833px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
  }
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const WeightOfCalorieContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  align-items: center;

  
`;

export const Calories = styled.p`
  color: var(--color-primary-grey);
`;
