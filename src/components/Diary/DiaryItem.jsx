import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { requestFoodIntakeThunk } from '../../Redux/Diary/diaryThunks';
import { selectorIntake } from '../../Redux/Diary/selectors';
import { useState } from 'react';
import { 
    WrapperItemDiary,
    WrapperItemHeader,
    Title,
    Wrapper,
    ListToComplete,
    ModalLink,
    ItemToComplete,
    EditLink,
    EditSvg} from './DiaryItem.styled';

import ListNutritients from './ListNutritients';
import ItemListToComplete from './ItemListToComplete';
import ModalDiary from '../ModalIntake/ModalDiary';
import editSvg from "../../assets/diary/edit.svg";

const DiaryItem = ({name, img}) => {
    const[showModal, setShowModal] = useState(false);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(requestFoodIntakeThunk())
    // },[dispatch])

    const intake = useSelector(selectorIntake);
    let selectedIntakeDish;
    switch (name) {
      case "breakfast":
        selectedIntakeDish = intake?.breakfast?.dish;
        break;
      case "lunch":
        selectedIntakeDish = intake?.lunch?.dish;
        break;
      case "dinner":
        selectedIntakeDish = intake?.dinner?.dish;
        break;
      case "snack":
        selectedIntakeDish = intake?.snack?.dish;
        break;
      default:
        selectedIntakeDish = null;
        break;
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const indexArray = [0, 1, 2, 3];

    return ( 
    <WrapperItemDiary>
    <WrapperItemHeader>
    <Wrapper>
        <img src={img}/>
        <Title>{name}</Title>
    </Wrapper>
    <ListNutritients  name={name}/>
    </WrapperItemHeader>
    <ListToComplete>
    {indexArray.map((index) => (
          <div key={index}>
            {selectedIntakeDish && selectedIntakeDish[index] ? (
              <ItemToComplete key={index}>{index + 1}<ItemListToComplete toggleModal={toggleModal} intakeItem={selectedIntakeDish[index]} /></ItemToComplete>
            ) : index === 0 ? (
              <ItemToComplete key={index}>{index + 1}<ModalLink onClick={toggleModal}>+ Record your meal</ModalLink></ItemToComplete>
            ) : (
              <ItemToComplete key={index}>{index + 1}</ItemToComplete>
            )}
          </div>
        ))}
           <EditLink onClick={toggleModal}>
                <EditSvg><use href={`${editSvg}#icon-edit`} /></EditSvg>
                Edit
           </EditLink>
    </ListToComplete>
    {showModal && <ModalDiary name={name} img={img} onClose={toggleModal}></ModalDiary>}
    </WrapperItemDiary> );
}
 
export default DiaryItem;