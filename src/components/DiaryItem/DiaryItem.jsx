import { 
    WrapperItemDiary,
    WrapperListHeader,
    Title,
    Wrapper,
    ListNutrients,
    ItemNutrients,
    ListToComplete,
    ItemToComplete,
    ModalLink } from './DiaryItem.styled';
    
const DiaryItem = ({name, img}) => {
    return ( 
    <WrapperItemDiary>
    <WrapperListHeader>
    <Wrapper>
        <img src={img}/>
        <Title>{name}</Title>
    </Wrapper>
    <ListNutrients>
        <ItemNutrients>Carbonohidrates: <span>0</span></ItemNutrients>
        <ItemNutrients>Protein: <span>0</span></ItemNutrients>
        <ItemNutrients>Fat: <span>0</span></ItemNutrients>
    </ListNutrients>
    </WrapperListHeader>
    <ListToComplete>
        <ItemToComplete>1<ModalLink>+ Record your meal</ModalLink></ItemToComplete>
        <ItemToComplete>2</ItemToComplete>
        <ItemToComplete>3</ItemToComplete>
        <ItemToComplete>4</ItemToComplete>
    </ListToComplete>
    </WrapperItemDiary> );
}
 
export default DiaryItem;