import { gender, goal } from '../userMenu';
import {
  ButtonCloseModalGoal,
  ConfirmModalGoal,
  DivButtonCancellGoal,
  DivChooseModalGoal,
  DivModalGoal,
  DivModalGoalTextPart,
  DivModalGoalTextPart1,
  DivModalGoalTextPartP1,
  DivModalGoalTextPartP2,
  SvgCloseModalGoal,
  UlButtonModalGoal,
  UlImgButtonModalGoal,
  UlModalGoal,
  UlPButtonModalGoal,
} from './Modals-styles/ModalGoal.styles';
import GainMuscle from '/src/assets/header/Gain-muscle.png';
import LoseFatGirl from '/src/assets/header/Lose-fat-girl.png';
import LoseFatMan from '/src/assets/header/Lose-fat-man.png';
import MaintainGirl from '/src/assets/header/Maintain-girl.png';
import MaintainMan from '/src/assets/header/Maintain-man.png';
import HeaderSvg from '/src/assets/header/headerSvg.svg';

function ModalGoal({ setIsGoalModalOpen }) {
  
  const imagesPath = {
    'Lose Fat female': LoseFatGirl,
    'Lose Fat male': LoseFatMan,
    'Maintain female': MaintainGirl,
    'Maintain male': MaintainMan,
  };

  const selectedImageLoseFat =
    gender === 'female' ? imagesPath['Lose Fat female'] : imagesPath['Lose Fat male'];

  const selectedImageMaintain =
    gender === 'female'
      ? imagesPath['Maintain female']
      : imagesPath['Maintain male'];

  return (
    <DivModalGoal>
      <ButtonCloseModalGoal onClick={() => setIsGoalModalOpen(false)}>
        <SvgCloseModalGoal>
          <use href={`${HeaderSvg}#close-modal`} />
        </SvgCloseModalGoal>
      </ButtonCloseModalGoal>
      <DivModalGoalTextPart>
        <DivModalGoalTextPart1>
          <DivModalGoalTextPartP1>Target sections</DivModalGoalTextPartP1>
          <DivModalGoalTextPartP2>
            The service will adjust your calorie intake to your goal
          </DivModalGoalTextPartP2>
        </DivModalGoalTextPart1>
        <DivChooseModalGoal>
          <UlModalGoal>
            <li>
              <UlButtonModalGoal>
                <UlImgButtonModalGoal className={goal == 'Lose Fat' ? 'active' : ''} src={selectedImageLoseFat} alt="LoseFat" />
                <UlPButtonModalGoal className={goal == 'Lose Fat' ? 'active' : ''}>Lose fat</UlPButtonModalGoal>
              </UlButtonModalGoal>
            </li>
            <li>
              <UlButtonModalGoal>
                <UlImgButtonModalGoal className={goal == 'Maintain' ? 'active' : ''} src={selectedImageMaintain} alt="Maintain" />
                <UlPButtonModalGoal className={goal == 'Maintain' ? 'active' : ''} >Maintain</UlPButtonModalGoal>
              </UlButtonModalGoal>
            </li>
            <li>
              <UlButtonModalGoal>
                <UlImgButtonModalGoal className={goal == 'GainMuscle' ? 'active' : ''} src={GainMuscle} alt="Gain muscle" />
                <UlPButtonModalGoal className={goal == 'GainMuscle' ? 'active' : ''} >Gain Muscle</UlPButtonModalGoal>
              </UlButtonModalGoal>
            </li>
            <li>
              <ConfirmModalGoal onClick={() => setIsGoalModalOpen(false)}>Confirm</ConfirmModalGoal>
            </li>
          </UlModalGoal>
        </DivChooseModalGoal>
      </DivModalGoalTextPart>
      <DivButtonCancellGoal onClick={() => setIsGoalModalOpen(false)}>Cancel</DivButtonCancellGoal>
    </DivModalGoal>
  );
}

export default ModalGoal;
