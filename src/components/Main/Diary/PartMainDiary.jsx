
import DiaryItemMain from './DiaryItemMain';
import breakfastImg from '../../../assets/diary/breakfast.svg';
import lunchImg from '../../../assets/diary/lunch.svg';
import dinnerImg from '../../../assets/diary/dinner.svg';
import snackImg from '../../../assets/diary/snack.svg';
import { selectorIntake } from '../../../Redux/Diary/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { requestFoodIntakeThunk } from '../../../Redux/Diary/diaryThunks';
import { Header, LinkStyled, ListDiary, ConteinerDiary } from './PartMainDiary.styled';

const PartMainDiary = () => {
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
    return(
        <ConteinerDiary>
        <Header>Diary<LinkStyled to="/diary">See more</LinkStyled></Header>
        <ListDiary>
        {FoodArray.map(item => (<DiaryItemMain
        key={item.name}
        name={item.name}
        img={item.img}
        intake={intake} />))}
        </ListDiary>
        </ConteinerDiary>
    )
}

export default PartMainDiary;