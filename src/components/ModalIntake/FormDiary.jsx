import { ContainerInputs, InputStyle, InputProductStyle, DivWrapper, ButtonSvg, TrashSvg, StyledError } from "./FormDiary.styled";
import trashImg from "../../assets/diary/trash.svg";
import { Field } from "formik";

const FormDiary = ({ index, errors, touched, values, remove }) => {

  return (
    <ContainerInputs>
      <Field
        as={InputProductStyle}
        id={`name${index}`}
        name={`dish[${index}].name`}
        placeholder="The name of the product or dish"
        value={values.dish[index].name}
        required
      />
      {errors[`name${index}`] && touched[`name${index}`] ? (
      <StyledError name={`dish[${index}].name`} component="div" />
      ):null}
      <Field
        as={InputStyle}
        id={`carbonohidrates${index}`}
        name={`dish[${index}].carbonohidrates`}
        placeholder="Carbonoh."
        value={values.dish[index].carbonohidrates}
        required
      />
      {errors[`carbonohidrates${index}`] && touched[`carbonohidrates${index}`] ? (
      <StyledError name={`dish[${index}].carbonohidrates`} component="div" />
      ):null}
      <Field
        as={InputStyle}
        id={`protein${index}`}
        name={`dish[${index}].protein`}
        placeholder="Protein"
        value={values.dish[index].protein}
        required
      />
      {errors[`protein${index}`] && touched[`protein${index}`] ? (
      <StyledError name={`dish[${index}].protein`} component="div" />
      ):null}
      <DivWrapper>
        <Field
          as={InputStyle}
          id={`fat${index}`}
          name={`dish[${index}].fat`}
          placeholder="Fat"
          value={values.dish[index].fat}
          required
        />
      {errors[`fat${index}`] && touched[`fat${index}`] ? (
      <StyledError name={`dish[${index}].fat`} component="div" />
      ):null}
        <Field
          as={InputStyle}
          id={`calories${index}`}
          name={`dish[${index}].calories`}
          placeholder="Calories"
          value={values.dish[index].calories}
          required
        />
      {errors[`calories${index}`] && touched[`calories${index}`] ? (
      <StyledError name={`dish[${index}].calories`} component="div" />
      ):null}
        <ButtonSvg type="button" onClick={() => remove(index)}>
          <TrashSvg><use href={`${trashImg}#icon-trash`} /></TrashSvg>
        </ButtonSvg>
      </DivWrapper>
    </ContainerInputs>
  );
};

export default FormDiary;

