

import DiaryItem from "../../../components/Diary/DiaryItem";
import { Conteiner, Wrapper, ImgArrow, Header, ListDiary } from "./Diary.styled";
import arrow from '../../../assets/diary/arrow-right.svg';
import breakfastImg from '../../../assets/diary/breakfast.svg'
import lunchImg from '../../../assets/diary/lunch.svg'
import dinnerImg from '../../../assets/diary/dinner.svg'
import snackImg from '../../../assets/diary/snack.svg'

const Diary = () => {


    // useEffect(() => {
    //         const initialState = {
    //             breakfast: {
    //               dish: [],
    //               totalCalories: 0,
    //               totalCarbs: 0,
    //               totalProtein: 0,
    //               totalFat: 0
    //             },
    //             lunch: {
    //               dish: [],
    //               totalCalories: 0,
    //               totalCarbs: 0,
    //               totalProtein: 0,
    //               totalFat: 0
    //             },
    //             dinner: {
    //               dish: [],
    //               totalCalories: 0,
    //               totalCarbs: 0,
    //               totalProtein: 0,
    //               totalFat: 0
    //             },
    //             snack: {
    //               dish: [],
    //               totalCalories: 0,
    //               totalCarbs: 0,
    //               totalProtein: 0,
    //               totalFat: 0
    //             },
    //             totalCalories: 0,
    //             totalCarbs: 0,
    //             totalProtein: 0,
    //             totalFat: 0,
    //           };
    
    //     dispatch(addFoodIntake(initialState));
    //   }, [dispatch]);

    const FoodArray = [
        { name: 'breakfast', img: breakfastImg },
        { name: 'lunch', img: lunchImg },
        { name: 'dinner', img: dinnerImg },
        { name: 'snack', img: snackImg }
    ]
    return ( <Conteiner>
    <Wrapper>
    <ImgArrow src={arrow}/>
    <Header>Diary</Header>
    </Wrapper>
    <ListDiary>
        {FoodArray.map(item => (<DiaryItem
        key={item.name}
        name={item.name}
        img={item.img} />))}
    </ListDiary> 
    </Conteiner> );
}
 
export default Diary;