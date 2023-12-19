import { ContainerInputs, InputStyle, InputProductStyle, DivWrapper, ButtonSvg, TrashSvg } from "./FormDiary.styled";
import trashImg from "../../assets/diary/trash.svg";

const FormDiary = ({ index, formik, onDelete }) => {
  const food = formik.values.foods && formik.values.foods[index];

  const handleClear = (e) => {
    e.preventDefault();
    onDelete(index);
  };

  return (
    <ContainerInputs>
      <InputProductStyle
        id={`name${index}`}
        name={`foods[${index}].name`}
        placeholder="The name of the product or dish"
        onChange={formik.handleChange}
        value={food ? food.name : ''}
        autoComplete="off"
      />
      <InputStyle
        id={`carbonohidrates${index}`}
        name={`foods[${index}].carbonohidrates`}
        placeholder="Carbonoh."
        onChange={formik.handleChange}
        value={food ? food.carbonohidrates : ''}
        autoComplete="off"
      />
      <InputStyle
        id={`protein-${index}`}
        name={`foods[${index}].protein`}
        placeholder="Protein"
        onChange={formik.handleChange}
        value={food ? food.protein : ''}
        autoComplete="off"
      />
      <DivWrapper>
        <InputStyle
          id={`fat${index}`}
          name={`foods[${index}].fat`}
          placeholder="Fat"
          onChange={formik.handleChange}
          value={food ? food.fat : ''}
          autoComplete="off"
        />
        <InputStyle
          id={`calories${index}`}
          name={`foods[${index}].calories`}
          placeholder="Calories"
          onChange={formik.handleChange}
          value={food ? food.calories : ''}
          autoComplete="off"
        />
        <ButtonSvg onClick={handleClear}>
          <TrashSvg><use href={`${trashImg}#icon-trash`} /></TrashSvg>
        </ButtonSvg>
      </DivWrapper>
    </ContainerInputs>
  );
};

export default FormDiary;