import axios from 'axios';
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
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectToken } from '../../../Redux/Auth/selectors';

function ModalWeight({ setIsWeightModalOpen, setWeight }) {
  const dispatch = useDispatch();
  const [enteredWeight, setEnteredWeight] = useState('');
  const persistedToken = useSelector(selectToken)
  
  const handleSubmit = async () => {
    try {
      if (!persistedToken) {
        throw new Error('Token not found');
      }

      const axiosInstance = axios.create({
        baseURL: 'https://food-diary-backend-kr1b.onrender.com/api',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${persistedToken}`,
        },
      });

      const response = await axiosInstance.post('/user/weight', {
        weight: enteredWeight,
      });

      dispatch({ type: 'WEIGHT_UPDATED', payload: response.data.weight });
      setWeight(enteredWeight);
      setIsWeightModalOpen(false);
    } catch (error) {
      console.error('Error updating weight:', error);
    }
  };

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
