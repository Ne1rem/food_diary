import { useState } from 'react';
import { 
    WrapperItemDiary,
    WrapperItemHeader,
    Title,
    Wrapper,
    ListToComplete,
    ItemToComplete,
    ModalLink} from './DiaryItem.styled';

import ListNutritients from './ListNutritients';
import ModalDiary from './ModalDiary';
    
const DiaryItem = ({name, img}) => {
    const[showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal)
    };

    return ( 
    <WrapperItemDiary>
    <WrapperItemHeader>
    <Wrapper>
        <img src={img}/>
        <Title>{name}</Title>
    </Wrapper>
    <ListNutritients />
    </WrapperItemHeader>
    <ListToComplete>
        <ItemToComplete>1<ModalLink onClick={toggleModal}>+ Record your meal</ModalLink></ItemToComplete>
        <ItemToComplete>2</ItemToComplete>
        <ItemToComplete>3</ItemToComplete>
        <ItemToComplete>4</ItemToComplete>
    </ListToComplete>
    {showModal && <ModalDiary name={name} img={img} onClose={toggleModal}></ModalDiary>}
    </WrapperItemDiary> );
}
 
export default DiaryItem;