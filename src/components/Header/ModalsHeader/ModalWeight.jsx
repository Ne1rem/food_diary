import { CloseModalChangeWeight, DivPartModalChangeWeight, InputPartButtonModalChangeWeight, InputPartInputModalChangeWeight, InputPartModalChangeWeight, ModalChangeWeight, SvgCloseModalChangeWeight, TextPartModalChangeWeight, TextPartP1ModalChangeWeight, TextPartP2ModalChangeWeight, TodayModalChangeWeight } from './Modals-styles/ModalWeight.styles';
import HeaderSvg from '/src/assets/header/headerSvg.svg';

function ModalWeight({ setIsWeightModalOpen }) {
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
          <TextPartP1ModalChangeWeight>Enter your current weight</TextPartP1ModalChangeWeight>
          <TextPartP2ModalChangeWeight>You can record your weight once a day</TextPartP2ModalChangeWeight>
        </TextPartModalChangeWeight>
        <TodayModalChangeWeight>Today {formattedDate}</TodayModalChangeWeight>
        <InputPartModalChangeWeight>
          <InputPartInputModalChangeWeight placeholder="Enter your weight"></InputPartInputModalChangeWeight>
          <InputPartButtonModalChangeWeight onClick={() => setIsWeightModalOpen(false)}>Confirm</InputPartButtonModalChangeWeight>
        </InputPartModalChangeWeight>
      </DivPartModalChangeWeight>
    </ModalChangeWeight>
  );
}

export default ModalWeight;
