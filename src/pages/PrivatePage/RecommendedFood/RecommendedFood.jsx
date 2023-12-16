import {
  RecommendedFoodWrapper,
  FoodCardsWrapper,
  FoodCard,
  SeeMoreButton,
  Title,
  CharacteristicsContainer,
  WeightOfCalorieContainer,
  Calories,
} from './Styled';
import Avocado from '../../../assets/recommendedfood/Avocado.png';
import Beans from '../../../assets/recommendedfood/Beans.png';
import Nuts from '../../../assets/recommendedfood/Nuts.png';
import Broccoli from '../../../assets/recommendedfood/Broccoli.png';

const RecommendedFood = () => {
  const foodItems = [
    {
      id: 1,
      icon: Avocado,
      name: 'Avocado',
      measure: '100 g',
      calories: '200 calories',
    },
    {
      id: 2,
      icon: Beans,
      name: 'Beans',
      measure: '100 g',
      calories: '123 calories',
    },
    {
      id: 3,
      icon: Nuts,
      name: 'Nuts',
      measure: '100 g',
      calories: '500 calories',
    },
    {
      id: 4,
      icon: Broccoli,
      name: 'Broccoli',
      measure: '100 g',
      calories: '28 calories',
    },
  ];

  return (
    <RecommendedFoodWrapper>
      <Title>Recommended Food</Title>
      <FoodCardsWrapper>
        {foodItems.map((item) => (
          <FoodCard key={item.id}>
            <img src={item.icon} alt={item.name} />
            <CharacteristicsContainer>
              <h3>{item.name}</h3>
              <WeightOfCalorieContainer>
                <p>{item.measure}</p>
                <Calories>{item.calories}</Calories>
              </WeightOfCalorieContainer>
            </CharacteristicsContainer>
          </FoodCard>
        ))}
      </FoodCardsWrapper>
      <SeeMoreButton href="/recommended-food">See more →</SeeMoreButton>
    </RecommendedFoodWrapper>
  );
};

export default RecommendedFood;
