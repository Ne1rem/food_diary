import { ItemNutrients, NutrientsList } from "./ListNutritients.styled"
const ListNutritients = ({carbonohidrates, protein, fat}) => {
    return(
    <NutrientsList>
        <ItemNutrients>Carbonohidrates: <span>{carbonohidrates}</span></ItemNutrients>
        <ItemNutrients>Protein: <span>{protein}</span></ItemNutrients>
        <ItemNutrients>Fat: <span>{fat}</span></ItemNutrients>
    </NutrientsList>
    )
}

export default ListNutritients;