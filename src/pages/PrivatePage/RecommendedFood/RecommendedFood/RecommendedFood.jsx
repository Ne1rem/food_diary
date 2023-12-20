import React, { useState, useEffect } from 'react';
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
    <Container>
      <Title>Recommended Food</Title>
      <RecommendedFoodWrapper>
        <Photo src={PhotoRecFood} alt="Фото" />
        <FoodCardsWrapper>
          {foodItems.map((item) => (
            <FoodCard key={item.id}>
              <img src={item.img} alt={item.name} />
              <CharacteristicsContainer>
                <h3>{item.name}</h3>
                <WeightOfCalorieContainer>
                  <p>{item.amount}</p>
                  <Calories>{item.calories}</Calories>
                </WeightOfCalorieContainer>
              </CharacteristicsContainer>
            </FoodCard>
          ))}
        </FoodCardsWrapper>
      </RecommendedFoodWrapper>
    </Container>
  );
};

export default RecommendedFood;
