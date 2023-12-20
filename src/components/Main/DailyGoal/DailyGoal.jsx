import {
  DecorText,
  GoalItem,
  GoalText,
  GoalTitle,
  Wrapper,
} from './DailyGoal.styled';

import iconsSprite from '../../../assets/sprite.svg';

export const DailyGoal = ({ calories, water }) => {
  return (
    <Wrapper>
      <ul>
        <GoalItem>
          <svg width={80} height={80}>
            <use href={`${iconsSprite}#icon-bubble`}></use>
          </svg>
          <div>
            <GoalTitle>Calories</GoalTitle>
            <GoalText>{calories}</GoalText>
          </div>
        </GoalItem>
        <GoalItem>
          <svg width={80} height={80}>
            <use href={`${iconsSprite}#icon-bottle`}></use>
          </svg>
          <div>
            <GoalTitle>Water</GoalTitle>
            <GoalText>
              {water} <DecorText>ml</DecorText>
            </GoalText>
          </div>
        </GoalItem>
      </ul>
    </Wrapper>
  );
};
