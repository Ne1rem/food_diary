import { ContainerInputs, InputStyle, InputProductStyle, DivWrapper, ButtonSvg, TrashSvg } from "./FormDiary.styled";
import trashImg from "../../assets/diary/trash.svg";

const FormDiary = ({ index, formik, onDelete }) => {


  const dish = formik.values.dish && formik.values.dish[index];

  const handleClear = (e) => {
    e.preventDefault();
    onDelete(index);
  };

  return (
    <ContainerInputs>
      <InputProductStyle
        id={`name${index}`}
        name={`dish[${index}].name`}
        placeholder="The name of the product or dish"
        onChange={formik.handleChange}
        value={dish ? dish.name : ''}
        autoComplete="off"
      />
      <InputStyle
        id={`carbonohidrates${index}`}
        name={`dish[${index}].carbonohidrates`}
        placeholder="Carbonoh."
        onChange={formik.handleChange}
        value={dish ? dish.carbonohidrates : ''}
        autoComplete="off"
      />
      <InputStyle
        id={`protein-${index}`}
        name={`dish[${index}].protein`}
        placeholder="Protein"
        onChange={formik.handleChange}
        value={dish ? dish.protein : ''}
        autoComplete="off"
      />
      <DivWrapper>
        <InputStyle
          id={`fat${index}`}
          name={`dish[${index}].fat`}
          placeholder="Fat"
          onChange={formik.handleChange}
          value={dish ? dish.fat : ''}
          autoComplete="off"
        />
        <InputStyle
          id={`calories${index}`}
          name={`dish[${index}].calories`}
          placeholder="Calories"
          onChange={formik.handleChange}
          value={dish ? dish.calories : ''}
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