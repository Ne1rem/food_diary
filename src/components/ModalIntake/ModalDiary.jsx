import FormDiary from './FormDiary';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { selectorIntake } from '../../Redux/Diary/selectors';
import { addFoodIntakeThunk, updateFoodIntakeThunk } from '../../Redux/Diary/diaryThunks';
import { Formik, Form, FieldArray } from 'formik';
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
  WrapperButton,
} from './ModalDiary.styled';

const foodSchema = yup.object({
  dish: yup.array().of(
    yup.object().shape({
      name: yup
        .string()
        .required('Required*')
        .min(2, 'Very short product name'),
      carbonohidrates: yup
        .number().typeError("Only number")
        .required('Required*')
        .max(999, 'Max 999'),
      protein: yup
        .number().typeError("Only number")
        .required('Required*')
        .max(999, 'Max 999'),
      fat: yup
        .number().typeError("Only number")
        .required('Required*')
        .max(999, 'Max 999'),
      calories: yup
        .number().typeError("Only number")
        .required('Required*')
        .max(999, 'Max 999'),
    })
  ),
});

const intakeTemplate = {
  name: '',
  carbonohidrates: '',
  protein: '',
  fat: '',
  calories: '',
};

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
            name: values.dish.name,
            carbonohidrates: parseFloat(values.dish.carbonohidrates),
            protein: parseFloat(values.dish.protein),
            fat: parseFloat(values.dish.fat),
            calories: parseFloat(values.dish.calories),
          }],
        },
      };
      console.log(intakeData);
      console.log(idIntake);
      dispatch(updateFoodIntakeThunk(idIntake, intakeData));
    }

    onClose();
  };

  const maxFormsCount = 4;

  const handleAddMore = (e, { values, setFieldValue, errors }) => {
    e.preventDefault();
    const hasErrors = values.dish.some((product, index) => {
      const productErrors = errors.dish && errors.dish[index];
      // console.log(errors.dish[index]);
      return !!productErrors;
    });

      if (hasErrors) {
        console.log('Cannot add more items due to validation errors');
        return;
      }

    if (values.dish.length < maxFormsCount) {
      const lastIndex = values.dish.length - 1;
      const lastItemForm = values.dish[lastIndex];

      foodSchema.validate(lastItemForm, { abortEarly: false }).then(() => {
        setFieldValue('dish', [...values.dish, intakeTemplate]);
      });
    } else {
      console.log('Cannot add more than 4 items');
    }
  };

  const intake = useSelector(selectorIntake);

  let selectedIntakeDish;
  switch (name) {
    case 'breakfast':
      selectedIntakeDish = intake?.breakfast?.dish;
      break;
    case 'lunch':
      selectedIntakeDish = intake?.lunch?.dish;
      break;
    case 'dinner':
      selectedIntakeDish = intake?.dinner?.dish;
      break;
    case 'snack':
      selectedIntakeDish = intake?.snack?.dish;
      break;
    default:
      selectedIntakeDish = null;
      break;
  }

  const foundItem = selectedIntakeDish.find((item) => item._id === idIntake);

  return (
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
          {({ errors, touched, values, setFieldValue }) => (
            <Form autoComplete="off">
              <FieldArray name="dish">
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
              <ButtonAddMore
                type="button"
                onClick={(e) =>
                  handleAddMore(e, { values, setFieldValue, errors })
                }
              >
                + Add more
              </ButtonAddMore>
              <WrapperButton>
                <ButtonActive type="submit" onClick={() => {onClickHandleSubmit()}}>Confirm</ButtonActive>
                <Button type="button" onClick={onClose}>
                  Cancel
                </Button>
              </WrapperButton>
            </Form>
          )}
        </Formik>
      </ModalWindow>
    </Overlay>
  );
};

export default ModalDiary;
