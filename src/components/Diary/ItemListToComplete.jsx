import { Wrapper,
       Title,
       WrapperNutritients } from "./ItemListToComplete.styled";


const ItemListToComplete = ({ intakeItem}) =>{

    return(
        <Wrapper>
            <Title>{intakeItem.name}</Title>
            <WrapperNutritients>
            <li>Carb. {intakeItem.carbonohidrates}</li>
            <li>Prot. {intakeItem.protein}</li>
            <li>Fat. {intakeItem.fat}</li>
            </WrapperNutritients>
        </Wrapper>
    )
}

export default ItemListToComplete;