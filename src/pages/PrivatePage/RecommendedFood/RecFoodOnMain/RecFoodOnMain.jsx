import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  RecommendedFoodWrapper,
  FoodCardsWrapper,
  FoodCard,
  SeeMoreButton,
  Title,
  CharacteristicsContainer,
  WeightOfCalorieContainer,
  Calories,
  Container,
  Subtitle,
} from './RecFoodOnMainStyled';

const RecommendedFoodOnMain = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://food-diary-backend-kr1b.onrender.com/api/recommended-food'
        );
        setFoodItems(response.data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching recommended food:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <RecommendedFoodWrapper>
        <Title>Recommended Food</Title>
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
        <Link to="/recommended-food">
          <SeeMoreButton>See more →</SeeMoreButton>
        </Link>
      </RecommendedFoodWrapper>
    </Container>
  );
};

export default RecommendedFoodOnMain;
