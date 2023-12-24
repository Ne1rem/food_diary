import { useState } from 'react';
import { Modal } from '../../Modal';
import {
  CancelBtn,
  ConfirmBtn,
  Form,
  Input,
  InputLabel,
  InputWrapper,
  ModalContent,
  ModalTitle,
} from './AddWaterModal.styled';

export const AddWaterModal = ({ onClose, successHandler }) => {
  const [amountOfWater, setAmountOfWater] = useState('');

  const onConfirm = (e) => {
    e.preventDefault;

    if (+amountOfWater < 0) {
      return;
    }

    if (+amountOfWater % 1 !== 0) {
      return;
    }

    successHandler(+amountOfWater);
    onClose();
  };

  const onInput = (e) => {
    setAmountOfWater(e.target.value);
  };

  return (
    <Modal onClose={onClose}>
      <ModalContent>
        <ModalTitle>Add water intake</ModalTitle>
        <Form onSubmit={onConfirm}>
          <InputWrapper>
            <InputLabel>How much water</InputLabel>
            <Input type="number" onChange={onInput} value={amountOfWater} />
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
