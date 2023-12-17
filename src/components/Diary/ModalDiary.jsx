import { useEffect } from "react";
import FormDiary from "./FormDiary";
import { useFormik } from "formik";
import * as Yup from 'yup';

import { Overlay,
    ModalWindow,
    Header,
    Wrapper,
    Title,
    Button,
    ButtonActive,
    ButtonAddMore,
    WrapperButton } from "./ModalDiary.styled"; 

    const foodSchema = Yup.object().shape({
        food: Yup.string().required('is required').min(2, 'Too Short!'),
        carbonohidrates: Yup.number().required('is required').max(999.99, 'Maximum value is 999.99'),
        protein: Yup.number().required('is required').max(999.99, 'Maximum value is 999.99'),
        fat: Yup.number().required('is required').max(999.99, 'Maximum value is 999.99'),
        calories: Yup.number().required('is required').max(999.99, 'Maximum value is 999.99'),
      });

const ModalDiary = ({name, img, onClose}) => {
    const formik = useFormik({
        initialValues: {
            food: '',
            carbonohidrates: '',
            protein: '',
            fat: '',
            calories: ''
        },
        validationSchema: foodSchema,
        onSubmit: values => {
            console.log(values);
        },
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        formik.handleSubmit(e);
    };

    useEffect(()=>{
        const originalOverflow = document.body.style.overflow;
        const handleKeyDown = e => {
            if(e.code === 'Escape'){
                onClose();
            }
        }
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return() => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = originalOverflow;
    }
    },[onClose])

    const handleOverlayClick = e => {
        if(e.currentTarget === e.target){
            onClose()
        }
    }
    return(
        <Overlay onClick={handleOverlayClick}>
            <ModalWindow>
                <Header>Record your meal</Header>
                <Wrapper>
                  <img src={img}/>
                  <Title>{name}</Title>
                </Wrapper>
            <form onSubmit={handleFormSubmit}>
                <FormDiary formik={formik}/>
                  <ButtonAddMore>+ Add more</ButtonAddMore>
                  <WrapperButton>
                  <ButtonActive type="submit">Confirm</ButtonActive>
                  <Button type="button" onClick={onClose}>Cancel</Button>
                  </WrapperButton>
            </form>

            </ModalWindow>
        </Overlay>
    )
}

export default ModalDiary;