import {
  ButtonCloseModalGoal,
  ConfirmModalGoal,
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
  const gender = 'girl';
//   const goal = 'Maintain';

  const imagesPath = {
    'LoseFat girl': LoseFatGirl,
    'LoseFat man': LoseFatMan,
    'Maintain girl': MaintainGirl,
    'Maintain man': MaintainMan,
  };

  const selectedImageLoseFat =
    gender === 'girl' ? imagesPath['LoseFat girl'] : imagesPath['LoseFat man'];

  const selectedImageMaintain =
    gender === 'girl'
      ? imagesPath['Maintain girl']
      : imagesPath['Maintain man'];

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
                <UlImgButtonModalGoal src={selectedImageLoseFat} alt="LoseFat" />
                <UlPButtonModalGoal>Lose fat</UlPButtonModalGoal>
              </UlButtonModalGoal>
            </li>
            <li>
              <UlButtonModalGoal>
                <UlImgButtonModalGoal src={selectedImageMaintain} alt="Maintain" />
                <UlPButtonModalGoal>Maintain</UlPButtonModalGoal>
              </UlButtonModalGoal>
            </li>
            <li>
              <UlButtonModalGoal>
                <UlImgButtonModalGoal src={GainMuscle} alt="Gain muscle" />
                <UlPButtonModalGoal>Gain Muscle</UlPButtonModalGoal>
              </UlButtonModalGoal>
            </li>
            <li>
              <ConfirmModalGoal onClick={() => setIsGoalModalOpen(false)}>Confirm</ConfirmModalGoal>
            </li>
          </UlModalGoal>
        </DivChooseModalGoal>
      </DivModalGoalTextPart>
    </DivModalGoal>
  );
}

export default ModalGoal;
