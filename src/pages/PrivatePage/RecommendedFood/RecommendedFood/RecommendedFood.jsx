import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Calories,
  CharacteristicsContainer,
  Container,
  FoodCard,
  FoodCardsWrapper,
  Photo,
  RecommendedFoodWrapper,
  Title,
  WeightOfCalorieContainer,
} from './RecommendedFoodStyled';
import PhotoRecFood from '../../../../assets/recommendedfood/PhotoRecFood.png';
import { Subtitle } from '../RecFoodOnMain/RecFoodOnMainStyled';

const RecommendedFood = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchRecommendedFood = async () => {
      try {
        const response = await axios.get(
          'https://food-diary-backend-kr1b.onrender.com/api/recommended-food'
        );
        setFoodItems(response.data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching recommended food:', error);
      }
    };

    fetchRecommendedFood();
  }, []);

  return (
    <>
      <Title>Recommended Food</Title>
    <Container>
      <RecommendedFoodWrapper>
        <Photo src={PhotoRecFood} alt="Фото" />
        <FoodCardsWrapper>
          {foodItems.map((item, index) => (
            <FoodCard key={index}>
              <img src={item.img} alt={item.name} />
              <CharacteristicsContainer>
                <Subtitle>{item.name}</Subtitle>
                <WeightOfCalorieContainer>
                  <p>{item.amount}</p>
                  <Calories>{item.calories} calories</Calories>
                </WeightOfCalorieContainer>
              </CharacteristicsContainer>
            </FoodCard>
          ))}
        </FoodCardsWrapper>
      </RecommendedFoodWrapper>
      </Container>
      </>
  );
};

export default RecommendedFood;
