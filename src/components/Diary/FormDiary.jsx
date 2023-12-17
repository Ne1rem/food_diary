import { ContainerInputs, InputStyle, InputProductStyle, DivWrapper, ButtonSvg, TrashSvg } from "./FormDiary.styled";
import trashImg from "../../assets/diary/trash.svg";


const FormDiary = ({formik}) =>{
    const handleClear = (e) => {
        e.preventDefault();
        formik.resetForm();
      };
    return(
        <ContainerInputs>
            <InputProductStyle
              id="food"
              name="food"
              placeholder="The name of the product or dish"
              onChange={formik.handleChange}
              value={formik.values.food}/>
            <InputStyle
              id="carbonohidrates"
              name="carbonohidrates"
              placeholder="Carbonoh."
              onChange={formik.handleChange}
              value={formik.values.carbonohidrates}/>
            <InputStyle
              id="protein"
              name="protein"
              placeholder="Protein"
              onChange={formik.handleChange}
              value={formik.values.protein}/>
            <DivWrapper>
             <InputStyle
               id="fat"
               name="fat"
               placeholder="Fat"
               onChange={formik.handleChange}
               value={formik.values.fat}/>
             <InputStyle
               id="calories"
               name="calories"
              placeholder="Calories"
              onChange={formik.handleChange}
              value={formik.values.calories}/>
                  <ButtonSvg onClick={handleClear}>
                   <TrashSvg><use href={`${trashImg}#icon-trash`} /></TrashSvg>
                   </ButtonSvg>                     
            </DivWrapper>
            {formik.touched.food && formik.errors.food ? (
                <div style={{ color: 'red' }}>{formik.errors.food}</div>
            ) : null}
        </ContainerInputs>

    )
}

export default FormDiary;