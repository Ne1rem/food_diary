import { ItemNutrients, NutrientsList } from "./ListNutritients.styled"
const ListNutritients = () => {
    return(
    <NutrientsList>
        <ItemNutrients>Carbonohidrates: <span>0</span></ItemNutrients>
        <ItemNutrients>Protein: <span>0</span></ItemNutrients>
        <ItemNutrients>Fat: <span>0</span></ItemNutrients>
    </NutrientsList>
    )
}

export default ListNutritients;