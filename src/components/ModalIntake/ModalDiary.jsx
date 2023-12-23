import FormDiary from "./FormDiary";
import { useEffect } from "react";
// import { useState } from "react";
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
        .required('Enter the name of the product or dish')
        .min(2, 'Very short product name'),
      carbonohidrates: yup.number()
        .required('Enter the amount of carbohydrates')
        .max(999.99, 'Maximum number is 999.99'),
      protein: yup.number()
        .required('Enter the amount of protein')
        .max(999.99, 'Maximum number is 999.99'),
      fat: yup.number()
        .required('Enter the amount of fat')
        .max(999.99, 'Maximum number is 999.99'),
      calories: yup.number()
        .required('Enter the amount of calories')
        .max(999.99, 'Maximum number is 999.99'),
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

const ModalDiary = ({ name, img, onClose }) => {

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

    const handleFormSubmit = () => {
    console.log('handleFormSubmit');
  };

  const handleAddMore = (e, { values, setFieldValue }) => {
    e.preventDefault();
    const lastIndex = values.dish.length - 1;
    const lastItemForm = values.dish[lastIndex];
  
    foodSchema
      .validate(lastItemForm, { abortEarly: false })
      .then(() => {
        // Усі дані є валідними
        console.log('Form is valid');
        setFieldValue('dish', [...values.dish, intakeTemplate]);
      })
      .catch(validationErrors => {
        // Усі дані не є валідними
        console.log('Errors:', validationErrors.errors);
        console.log('Form is invalid');
      });
  
    console.log('handleAddMore');
  };
  

// template

const todayIntake = [
          {
              "name": "new",
              "carbonohidrates": 30,
              "protein": 25,
              "fat": 23,
              "calories": 750,
              "_id": "6583100f05cec9e389439301"
          },
          {
            "name": "new",
            "carbonohidrates": 30,
            "protein": 25,
            "fat": 23,
            "calories": 750,
            "_id": "6583100f05cec9e389439301"
        }
      ];

  return(
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>
      <Header>Record your meal</Header>
        <Wrapper>
          <img src={img} alt={name} />
          <Title>{name}</Title>
        </Wrapper>
        <Formik
        initialValues={{
          dish: 
          todayIntake && todayIntake
            ? todayIntake.map((product) => ({
                name: product.name || '',
                carbonohidrates: product.carbonohidrates || '',
                protein: product.protein || '',
                fat: product.fat || '',
                calories: product.calories || '',
                productId: product.productId || '',
              }))
            : [intakeTemplate],
        }}
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
             <ButtonActive type="submit">Confirm</ButtonActive>
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




