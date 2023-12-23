import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { requestFoodIntakeThunk } from "../../Redux/Diary/diaryThunks";
import { selectorIntakeBreakfast,
    selectorIntakeLunch,
    selectorIntakeDinner,
    selectorIntakeSnack } from "../../Redux/Diary/selectors";
import { ItemNutrients, NutrientsList } from "./ListNutritients.styled"

const ListNutritients = ({name}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestFoodIntakeThunk())
    },[dispatch])

    const breakfast = useSelector(selectorIntakeBreakfast);
    const lunch = useSelector(selectorIntakeLunch);
    const dinner = useSelector(selectorIntakeDinner);
    const snack = useSelector(selectorIntakeSnack);

    let selectedIntake;
    switch (name) {
      case "breakfast":
        selectedIntake = breakfast;
        break;
      case "lunch":
        selectedIntake = lunch;
        break;
      case "dinner":
        selectedIntake = dinner;
        break;
      case "snack":
        selectedIntake = snack;
        break;
      default:
        selectedIntake = null;
        break;
    }

    const totalCarbs = selectedIntake ? selectedIntake.totalCarbs : 0;
    const totalProtein = selectedIntake ? selectedIntake.totalProtein : 0;
    const totalFat = selectedIntake ? selectedIntake.totalFat : 0;

    return(
    <NutrientsList>
        <ItemNutrients>Carbonohidrates: <span>{totalCarbs}</span></ItemNutrients>
        <ItemNutrients>Protein: <span>{totalProtein}</span></ItemNutrients>
        <ItemNutrients>Fat: <span>{totalFat}</span></ItemNutrients>
    </NutrientsList>
    )
}

export default ListNutritients;