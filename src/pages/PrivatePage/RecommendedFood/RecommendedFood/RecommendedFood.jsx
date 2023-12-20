import Avocado from '../../../../assets/recommendedfood/Avocado.png';
import Beans from '../../../../assets/recommendedfood/Beans.png';
import Nuts from '../../../../assets/recommendedfood/Nuts.png';
import Broccoli from '../../../../assets/recommendedfood/Broccoli.png';
import PhotoRecFood from '../../../../assets/recommendedfood/PhotoRecFood.png';
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
  ];

  return (
    <Container>
      <Title>Recommended Food</Title>
      <RecommendedFoodWrapper>
        <Photo src={PhotoRecFood} alt="Фото" />
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
      </RecommendedFoodWrapper>
    </Container>
  );
};

export default RecommendedFood;
