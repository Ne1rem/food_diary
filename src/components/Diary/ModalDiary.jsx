import { useEffect, useState } from "react";
import FormDiary from "./FormDiary";
import { useFormik } from "formik";
import * as Yup from 'yup';


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

const foodSchema = Yup.object().shape({
  dish: Yup.array().of(
    Yup.object().shape({
      name: Yup.string()
        .required('Enter the name of the product or dish')
        .min(2, 'Very short product name'),
      carbonohidrates: Yup.number()
        .required('Enter the amount of carbohydrates')
        .max(999.99, 'Maximum number is 999.99'),
      protein: Yup.number()
        .required('Enter the amount of protein')
        .max(999.99, 'Maximum number is 999.99'),
      fat: Yup.number()
        .required('Enter the amount of fat')
        .max(999.99, 'Maximum number is 999.99'),
      calories: Yup.number()
        .required('Enter the amount of calories')
        .max(999.99, 'Maximum number is 999.99'),
    })
  ),
});

const ModalDiary = ({ name, img, onClose }) => {
  const [diaryForms, setDiaryForms] = useState([{ key: 0 }]);

  const calculateTotalValue = (values, property) => {
    if (
      Array.isArray(values) &&
      values.every(obj => obj && obj[property] !== undefined)
    ) {
      const totalValue = values.reduce(
        (sum, dish) => sum + parseFloat(dish[property] || 0),
        0
      );
      return totalValue;
    } else {
      console.error(`Invalid input array or missing "${property}" property in objects.`);
      return 0;
    }
  };
  


const formik = useFormik({
  initialValues: {
    dish: diaryForms.map((form) => form.initialValues),
  },
  validationSchema: foodSchema,
  onSubmit: (values) => {
    console.log(values);
    console.log(values.dish);
    // Handle the form submission logic here
    const totalCalories = calculateTotalValue(values.dish, 'calories');
    console.log('totalCalories:', totalCalories);
    const totalCarbs = calculateTotalValue(values.dish, 'carbonohidrates');
    console.log('totalCarbs:', totalCarbs); 
    const totalProtein = calculateTotalValue(values.dish, 'protein');
     console.log('totalProtein:', totalProtein);
    const totalFat = calculateTotalValue(values.dish, 'fat');
      console.log('totalFat:', totalFat);  
  },
});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formik.isValid) {
      formik.handleSubmit(e);
      console.log(formik.values);
      onClose();
    } else {
      console.log(formik.errors.dish);
      const dishErrors = formik.errors.dish;
      if (dishErrors && dishErrors.length > 0) {
        dishErrors.forEach((dishError, index) => {
          const nameError = dishError.name;
      
          if (nameError) {
            console.log(`Error in dish[${index}].name: ${nameError}`);
          }
      
          // Repeat similar steps for other properties if needed
        });
      }
    }
  };

  const handleAddMore = (e) => {
    e.preventDefault();
    const newKey = diaryForms.length;
    setDiaryForms((prevForms) => [
      ...prevForms,
      {
        key: newKey,
        initialValues: {
          name: "",
          carbonohidrates: "",
          protein: "",
          fat: "",
          calories: "",
        },
      },
    ]);
  };

  const handleResetForm = (key) => {
    if (diaryForms.length > 1) {
      formik.setFieldValue('dish', formik.values.dish.filter((_, i) => i !== key));
      setDiaryForms((prevForms) => prevForms.filter((form) => form.key !== key));
    } else {
      formik.setFieldValue('dish', [formik.values.dish[0].initialValues]);
      setDiaryForms(() => [{ key: 0, initialValues: { name: "", carbonohidrates: "", protein: "", fat: "", calories: "" } }]);
    }
  };

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

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>
        <Header>Record your meal</Header>
        <Wrapper>
          <img src={img} alt={name} />
          <Title>{name}</Title>
        </Wrapper>
        <form onSubmit={handleFormSubmit}>
          {diaryForms.map(({ key }) => (
            <FormDiary key={key} index={key} formik={formik} onDelete={handleResetForm} />
          ))}
          <ButtonAddMore onClick={handleAddMore}>+ Add more</ButtonAddMore>
          <WrapperButton>
            <ButtonActive type="submit">Confirm</ButtonActive>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
          </WrapperButton>
        </form>
      </ModalWindow>
    </Overlay>
  );
};

export default ModalDiary;



