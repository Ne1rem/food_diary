import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { requestFoodIntakeThunk } from "../../../Redux/Diary/diaryThunks";
import { selectorIntake } from "../../../Redux/Diary/selectors";
import DiaryItem from "../../../components/Diary/DiaryItem";
import { Conteiner, LinkStyled, ImgArrow, Header, ListDiary } from "./Diary.styled";
import arrow from '../../../assets/diary/arrow-right.svg';
import breakfastImg from '../../../assets/diary/breakfast.svg'
import lunchImg from '../../../assets/diary/lunch.svg'
import dinnerImg from '../../../assets/diary/dinner.svg'
import snackImg from '../../../assets/diary/snack.svg'

const Diary = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestFoodIntakeThunk())
    },[dispatch])

    const intake = useSelector(selectorIntake);

    const FoodArray = [
        { name: 'breakfast', img: breakfastImg },
        { name: 'lunch', img: lunchImg },
        { name: 'dinner', img: dinnerImg },
        { name: 'snack', img: snackImg }
    ]
    return ( <Conteiner>
    <LinkStyled to="/">
    <ImgArrow src={arrow}/>
    <Header>Diary</Header>
    </LinkStyled>
    <ListDiary>
        {FoodArray.map(item => (<DiaryItem
        key={item.name}
        name={item.name}
        img={item.img}
        intake={intake} />))}
    </ListDiary> 
    </Conteiner> );
}
 
export default Diary;