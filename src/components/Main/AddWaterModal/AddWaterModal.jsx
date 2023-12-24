import * as Yup from 'yup';
import { useFormik } from 'formik';

import { Modal } from '../../Modal';
import {
  CancelBtn,
  ConfirmBtn,
  ErrorText,
  Form,
  InnerInputWrapper,
  Input,
  InputIcon,
  InputLabel,
  InputWrapper,
  ModalContent,
  ModalTitle,
} from './AddWaterModal.styled';

import iconsSprite from '../../../assets/sprite.svg';

const waterSchema = Yup.object().shape({
  water: Yup.number()
    .typeError('It must be a valid number')
    .required('Please fill the input')
    .integer('Please enter only integer value')
    .min(1, 'The min value is 1'),
});

export const AddWaterModal = ({ onClose, successHandler }) => {
  const formik = useFormik({
    initialValues: {
      water: '',
    },
    onSubmit: (values) => {
      successHandler(values.water);
      onClose();
    },
    validationSchema: waterSchema,
  });

  const isValidationError = formik.errors.water && formik.touched.water;
  const isCorrectValue = !formik.errors.water && formik.touched.water;

  return (
    <Modal onClose={onClose}>
      <ModalContent>
        <ModalTitle>Add water intake</ModalTitle>
        <Form onSubmit={formik.handleSubmit}>
          <InputWrapper>
            <InputLabel>How much water</InputLabel>
            <InnerInputWrapper
              $isError={isValidationError}
              $isCorrect={isCorrectValue}
            >
              <Input
                type="text"
                name="water"
                onChange={formik.handleChange}
                value={formik.values.water}
              />
              <InputIcon>
                {isCorrectValue && (
                  <svg width={16} height={16}>
                    <use href={`${iconsSprite}#correct`}></use>
                  </svg>
                )}
                {isValidationError && (
                  <svg width={16} height={16}>
                    <use href={`${iconsSprite}#error`}></use>
                  </svg>
                )}
              </InputIcon>
            </InnerInputWrapper>
            {isValidationError ? (
              <ErrorText>{formik.errors.water}</ErrorText>
            ) : null}
          </InputWrapper>
          <ConfirmBtn type="submit">Confirm</ConfirmBtn>
          <CancelBtn type="button" onClick={onClose}>
            Cancel
          </CancelBtn>
        </Form>
      </ModalContent>
    </Modal>
  );
};
