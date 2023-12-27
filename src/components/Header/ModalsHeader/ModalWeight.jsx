import {
  CloseModalChangeWeight,
  DivButtonCancellWeight,
  DivPartModalChangeWeight,
  InputPartButtonModalChangeWeight,
  InputPartInputModalChangeWeight,
  InputPartModalChangeWeight,
  ModalChangeWeight,
  SvgCloseModalChangeWeight,
  TextPartModalChangeWeight,
  TextPartP1ModalChangeWeight,
  TextPartP2ModalChangeWeight,
  TodayModalChangeWeight,
} from './Modals-styles/ModalWeight.styles';
import HeaderSvg from '/src/assets/header/headerSvg.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUserWeight } from '../../../Redux/User/userThunks';

function ModalWeight({ setIsWeightModalOpen, setCurrentWeight }) {
  const dispatch = useDispatch();
  const [enteredWeight, setEnteredWeight] = useState('');
  
  const handleSubmit = async () => {
    try {
      await dispatch(addUserWeight(enteredWeight));
      setCurrentWeight(enteredWeight)
      setIsWeightModalOpen(false);
    } catch (error) {
      console.error('Error adding user weight:', error);
    }
  }

  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(
    today.getMonth() + 1
  ).padStart(2, '0')}.${today.getFullYear()}`;

  return (
    <ModalChangeWeight>
      <DivPartModalChangeWeight>
        <CloseModalChangeWeight onClick={() => setIsWeightModalOpen(false)}>
          <SvgCloseModalChangeWeight>
            <use href={`${HeaderSvg}#close-modal`} />
          </SvgCloseModalChangeWeight>
        </CloseModalChangeWeight>
        <TextPartModalChangeWeight>
          <TextPartP1ModalChangeWeight>
            Enter your current weight
          </TextPartP1ModalChangeWeight>
          <TextPartP2ModalChangeWeight>
            You can record your weight once a day
          </TextPartP2ModalChangeWeight>
        </TextPartModalChangeWeight>
        <TodayModalChangeWeight>
          <span style={{ fontWeight: `400`, color: `white` }}>Today</span>{' '}
          {formattedDate}
        </TodayModalChangeWeight>
        <InputPartModalChangeWeight>
          <InputPartInputModalChangeWeight
            placeholder="Enter your weight"
            value={enteredWeight}
            onChange={(e) => setEnteredWeight(e.target.value)}
          ></InputPartInputModalChangeWeight>
          <InputPartButtonModalChangeWeight onClick={handleSubmit}>
            Confirm
          </InputPartButtonModalChangeWeight>
        </InputPartModalChangeWeight>
      </DivPartModalChangeWeight>
      <DivButtonCancellWeight onClick={() => setIsWeightModalOpen(false)}>
        Cancel
      </DivButtonCancellWeight>
    </ModalChangeWeight>
  );
}

export default ModalWeight;
