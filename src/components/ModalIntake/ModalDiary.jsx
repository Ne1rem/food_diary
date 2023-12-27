import FormDiary from "./FormDiary";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectorIntake } from "../../Redux/Diary/selectors";
import { addFoodIntakeThunk, updateFoodIntakeThunk } from '../../Redux/Diary/diaryThunks';
import { useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import * as yup from 'yup';

import {
  Overlay,
  ModalWindow,
  Header,
  Wrapper,
  Title,
  Button,
  ButtonActive,
  ButtonAddMore,
  WrapperButton
} from "./ModalDiary.styled";

const foodSchema = yup.object({
  dish: yup.array().of(
    yup.object().shape({
      name: yup.string()
        .required('Enter a name dish')
        .min(2, 'Very short'),
      carbonohidrates: yup.number()
        .required('Enter a number')
        .max(999.99, 'Maximum 999.99'),
      protein: yup.number()
        .required('Enter a number')
        .max(999.99, 'Maximum 999.99'),
      fat: yup.number()
        .required('Enter a number')
        .max(999.99, 'Maximum 999.99'),
      calories: yup.number()
        .required('Enter a number')
        .max(999.99, 'Maximum 999.99'),
    })
  ),
});

const intakeTemplate = {
  name: '',
  carbonohidrates: '',
  protein: '',
  fat: '',
  calories: '',
}

const ModalDiary = ({ name, img, onClose, requestType, idIntake }) => {
  const dispatch = useDispatch();

  const [validation, setValidation] = useState('');

  const onClickHandleSubmit = () => {
  setValidation('validation');
}

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleFormSubmit = (values) => {

    if (requestType === 'POST') { 
      const intakeData = {
        [name.toLowerCase()]: {
          dish: values.dish.map((product) => ({
            name: product.name,
            carbonohidrates: parseFloat(product.carbonohidrates),
            protein: parseFloat(product.protein),
            fat: parseFloat(product.fat),
            calories: parseFloat(product.calories),
          })),
        },
      };
      dispatch(addFoodIntakeThunk(intakeData));
    } else if (requestType === 'PUT') {
      const intakeData = {
        [name.toLowerCase()]: {
          dish: [
            {
            name: values.dish[0].name,
            carbonohidrates: parseFloat(values.dish[0].carbonohidrates),
            protein: parseFloat(values.dish[0].protein),
            fat: parseFloat(values.dish[0].fat),
            calories: parseFloat(values.dish[0].calories),
          }],
        },
      };
      console.log(idIntake);
      console.log(intakeData);

      dispatch(updateFoodIntakeThunk({id: idIntake, intakeData}));
    }
    onClose();
  };

  const maxFormsCount = 4;

  const handleAddMore = (e, { values, setFieldValue, errors }) => {
    e.preventDefault();

    if (requestType === 'PUT') {
      return;
    }
  
    const hasErrors = values.dish.some((product, index) => {
      const productErrors = errors.dish && errors.dish[index];
      return !!productErrors;
    });
  
    if (hasErrors) {
      setValidation('validation');
      return;
    }

    if (values.dish.length < maxFormsCount) {
      const lastIndex = values.dish.length - 1;
      const lastItemForm = values.dish[lastIndex];
  
      foodSchema
        .validate(lastItemForm, { abortEarly: false })
        .then(() => {
          setFieldValue('dish', [...values.dish, intakeTemplate]);
        })
    } else {
      return;
    }
  };

  const intake = useSelector(selectorIntake);

  let selectedIntakeDish;
  switch (name) {
    case "breakfast":
      selectedIntakeDish = intake?.breakfast?.dish;
      break;
    case "lunch":
      selectedIntakeDish = intake?.lunch?.dish;
      break;
    case "dinner":
      selectedIntakeDish = intake?.dinner?.dish;
      break;
    case "snack":
      selectedIntakeDish = intake?.snack?.dish;
      break;
    default:
      selectedIntakeDish = null;
      break;
  }

  const foundItem = requestType === 'PUT' ? selectedIntakeDish.find((item) => item._id === idIntake) : null;
  
  return(
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>
      <Header>Record your meal</Header>
        <Wrapper>
          <img src={img} alt={name} />
          <Title>{name}</Title>
        </Wrapper>
        <Formik
  initialValues={
    requestType === 'POST'
      ? {
          dish:
            selectedIntakeDish && selectedIntakeDish.length
              ? selectedIntakeDish.map((product) => ({
                  name: product.name || '',
                  carbonohidrates: product.carbonohidrates || '',
                  protein: product.protein || '',
                  fat: product.fat || '',
                  calories: product.calories || '',
                  productId: product.productId || '',
                }))
              : [intakeTemplate],
        }
      : {
          dish:
            selectedIntakeDish && selectedIntakeDish.length
              ? [
                  {
                    name: foundItem.name || '',
                    carbonohidrates: foundItem.carbonohidrates || '',
                    protein: foundItem.protein || '',
                    fat: foundItem.fat || '',
                    calories: foundItem.calories || '',
                    productId: foundItem.productId || '',
                  },
                ]
              : [intakeTemplate],
        }
  }
  onSubmit={handleFormSubmit}
  validationSchema={foodSchema}
        >
          {({ errors, touched, values, setFieldValue}) => (
            <Form autoComplete="off">
                <FieldArray name='dish'>
                   {({ remove }) => (
                    <ul>
                        {values.dish.map((product, index) => (
                         <li key={index}>
                            <FormDiary
                              validation={validation}
                              index={index}
                              errors={errors}
                              touched={touched}
                              values={values}
                              setFieldValue={setFieldValue}
                              remove={remove}
                            />
                         </li>
                        ))}

                     </ul>
                   )}
                </FieldArray>
          <ButtonAddMore type="button" onClick={(e) => handleAddMore(e, { values, setFieldValue, errors })}>+ Add more</ButtonAddMore>
          <WrapperButton>
             <ButtonActive type="submit" onClick={() => {onClickHandleSubmit()}}>Confirm</ButtonActive>
             <Button type="button" onClick={onClose}>Cancel</Button>
             </WrapperButton>

            </Form>
          )}

</Formik>
      </ModalWindow>
    </Overlay>
  );
};

export default ModalDiary;

