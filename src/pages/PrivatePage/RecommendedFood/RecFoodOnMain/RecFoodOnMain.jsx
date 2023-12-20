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
                <h3>{item.name}</h3>
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

// import React, { useState, useEffect } from 'react';
// import {
//   RecommendedFoodWrapper,
//   FoodCardsWrapper,
//   FoodCard,
//   SeeMoreButton,
//   Title,
//   CharacteristicsContainer,
//   WeightOfCalorieContainer,
//   Calories,
// } from './Styled';

// const RecommendedFood = () => {
//   const [foodItems, setFoodItems] = useState([]);

//   useEffect(() => {
//     const fetchRecommendedFood = async () => {
//       try {
//         const response = await fetch(
//           'https://food-diary-backend-kr1b.onrender.com/products'
//         );
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setFoodItems(data);
//       } catch (error) {
//         console.error(
//           'There was a problem fetching the recommended food:',
//           error
//         );
//       }
//     };

//     fetchRecommendedFood();
//   }, []);

//   return (
//     <RecommendedFoodWrapper>
//       <Title>Recommended Food</Title>
//       <FoodCardsWrapper>
//         {foodItems.map((item, index) => (
//           <FoodCard key={index}>
//             <img src={item.img} alt={item.name} />
//             <CharacteristicsContainer>
//               <h3>{item.name}</h3>
//               <WeightOfCalorieContainer>
//                 <p>{item.amount}</p>
//                 <Calories>{item.calories} calories</Calories>
//               </WeightOfCalorieContainer>
//             </CharacteristicsContainer>
//           </FoodCard>
//         ))}
//       </FoodCardsWrapper>
//       <SeeMoreButton href="">See more →</SeeMoreButton>
//     </RecommendedFoodWrapper>
//   );
// };

// export default RecommendedFood;

// asd
