import {
  ContainerInputs,
  InputNameProduct,
  InputCarbonah,
  InputProtein,
  InputFat,
  InputCaloties,
  DivWrapper,
  ButtonSvg,
  TrashSvg,
  StyledError,
  InputWrapper,
} from './FormDiary.styled';
import trashImg from '../../assets/diary/trash.svg';

const FormDiary = ({ validation, index, touched, errors, values, remove }) => {
  return (
    <ContainerInputs>
      <InputWrapper>
        <InputNameProduct
          className={ 
            validation === 'validation' && 
            touched.dish && touched.dish[index] && touched.dish[index].name 
            && errors.dish && errors.dish[index] && errors.dish[index].name
            ? 'error' : 'correct'
          }
          id={`name${index}`}
          name={`dish[${index}].name`}
          placeholder="The name of the product or dish"
          value={values.dish[index].name}
        />
        {validation === 'validation' && 
       touched.dish && touched.dish[index] && touched.dish[index].name 
       && errors.dish && errors.dish[index] && errors.dish[index].name
         && (
          <StyledError name={`dish[${index}].name`} component="div" />
        )}
      </InputWrapper>
      <InputWrapper>
        <InputCarbonah
          className={
            validation === 'validation' &&
              touched.dish && touched.dish[index] && touched.dish[index].carbonohidrates 
              && errors.dish && errors.dish[index] && errors.dish[index].carbonohidrates
                ? 'error'
                : 'correct'
          }
          id={`carbonohidrates${index}`}
          name={`dish[${index}].carbonohidrates`}
          placeholder="Carbonoh."
          value={values.dish[index].carbonohidrates}
        />
        {validation === 'validation' &&
        touched.dish && touched.dish[index] && touched.dish[index].carbonohidrates 
        && errors.dish && errors.dish[index] && errors.dish[index].carbonohidrates
          && (
          <StyledError
            name={`dish[${index}].carbonohidrates`}
            component="div"
          />
        )}
      </InputWrapper>
      <InputWrapper>
        <InputProtein
         className={
          validation === 'validation' &&
            touched.dish && touched.dish[index] && touched.dish[index].protein 
            && errors.dish && errors.dish[index] && errors.dish[index].protein
              ? 'error'
              : 'correct'
        }
          id={`protein${index}`}
          name={`dish[${index}].protein`}
          placeholder="Protein"
          value={values.dish[index].protein}
        />
        {validation === 'validation' &&
        touched.dish && touched.dish[index] && touched.dish[index].carbonohidrates 
        && errors.dish && errors.dish[index] && errors.dish[index].carbonohidrates
         && (
          <StyledError name={`dish[${index}].protein`} component="div" />
        )}
      </InputWrapper>
      <DivWrapper>
        <InputWrapper>
          <InputFat
            className={
              validation === 'validation' &&
                touched.dish && touched.dish[index] && touched.dish[index].fat 
                && errors.dish && errors.dish[index] && errors.dish[index].fat
                  ? 'error'
                  : 'correct'
            }
            id={`fat${index}`}
            name={`dish[${index}].fat`}
            placeholder="Fat"
            value={values.dish[index].fat}
          />
          {validation === 'validation'  &&  
            touched.dish && touched.dish[index] && touched.dish[index].fat 
            && errors.dish && errors.dish[index] && errors.dish[index].fat
           && (
            <StyledError name={`dish[${index}].fat`} component="div" />
          )}
        </InputWrapper>
        <InputWrapper>
          <InputCaloties
          className={
            validation === 'validation' &&
              touched.dish && touched.dish[index] && touched.dish[index].calories 
              && errors.dish && errors.dish[index] && errors.dish[index].calories
                ? 'error'
                : 'correct'
          }
            id={`calories${index}`}
            name={`dish[${index}].calories`}
            placeholder="Calories"
            value={values.dish[index].calories}
          />
          {validation === 'validation' && 
             touched.dish && touched.dish[index] && touched.dish[index].calories 
             && errors.dish && errors.dish[index] && errors.dish[index].calories
           && (
            <StyledError name={`dish[${index}].calories`} component="div" />
          )}
        </InputWrapper>
        <ButtonSvg type="button" onClick={() => remove(index)}>
          <TrashSvg>
            <use href={`${trashImg}#icon-trash`} />
          </TrashSvg>
        </ButtonSvg>
      </DivWrapper>
    </ContainerInputs>
  );
};

export default FormDiary;
