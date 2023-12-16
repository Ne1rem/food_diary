// import { useDispatch, useSelector } from "react-redux"
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import {
  AvatarSvg,
  ButtonCloseMobileModals,
  ButtonsMobileModals,
  DivGoal,
  DivGoalPart,
  DivWeight,
  DivWeightPart,
  GoalButton,
  GoalHeader,
  GoalP,
  GoalPName,
  GoalSvg,
  ImageGoal,
  ImageWeight,
  MobileOpenModal,
  SvgCloseMobileModals,
  UserAvatar,
  UserHeader,
  UserHeaderButton,
  UserMenuContainer,
  UserNameHeader,
  WeightButton,
  WeightHeader,
  WeightP,
  WeightPName,
  WeightSpan,
  MobileDivGoalPart,
  WeightSvg,
  MobileGoalButton,
  MobileGoalHeader,
  MobileWeightP,
  MobileDivWeight,
  MobileDivWeightPart,
  MobileWeightButton,
  MobileWeightHeader,
  MobileDivGoal,
  MobileGoalSvg,
  MobileWeightPName,
  MobileWeightSvg,
  MobileWeightSpan,
} from './userMenu.styled';
import GainMuscle from '../../assets/header/Gain-muscle.png';
import LoseFatGirl from '../../assets/header/Lose-fat-girl.png';
import LoseFatMan from '../../assets/header/Lose-fat-man.png';
import MaintainGirl from '../../assets/header/Maintain-girl.png';
import MaintainMan from '../../assets/header/Maintain-man.png';
import changeWeight from '../../assets/header/Weight-image.png';

import ModalUserHeader from './ModalsHeader/ModalUser';
import ModalWeight from './ModalsHeader/ModalWeight';
import ModalGoal from './ModalsHeader/ModalGoal';

import HeaderSvg from '/src/assets/header/headerSvg.svg';

const UserMenu = ({ isMobileModalOpen, setIsMobileModalOpen }) => {
  // const dispatch = useDispatch()
  // const user = useSelector(selectUser)
  const gender = 'girl';
  const goal = 'LoseFat';
  const weight = 130;
  const userName = 'Dima';

  const imagesPath = {
    'LoseFat girl': LoseFatGirl,
    'Maintain girl': MaintainGirl,
    'LoseFat man': LoseFatMan,
    'Maintain man': MaintainMan,
    'Gain muscle': GainMuscle,
  };

  const selectedImage =
    goal === 'Gain muscle'
      ? imagesPath[`Gain muscle`]
      : imagesPath[`${goal} ${gender}`];

  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
  const [isWeightModalOpen, setIsWeightModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  return (
    <UserMenuContainer>
      <GoalHeader>
        <GoalButton
          onClick={() => {
            setIsGoalModalOpen(true);
          }}
        >
          <ImageGoal src={selectedImage} alt="Goal image" />
          <DivGoalPart>
            <DivGoal>
              <GoalPName>Goal</GoalPName>
              <GoalP>{goal}</GoalP>
            </DivGoal>
            <GoalSvg>
              <use href={`${HeaderSvg}#change-your-goal`} />
            </GoalSvg>
          </DivGoalPart>
        </GoalButton>
        {isGoalModalOpen && (
          <ModalGoal setIsGoalModalOpen={setIsGoalModalOpen} />
        )}
      </GoalHeader>
      <WeightHeader>
        <WeightButton
          onClick={() => {
            setIsWeightModalOpen(true);
          }}
        >
          <ImageWeight src={changeWeight} alt="Change weight" />
          <DivWeightPart>
            <DivWeight>
              <WeightPName>Weight</WeightPName>
              <div style={{ display: 'flex' }}>
                <WeightP>
                  {weight}
                  <WeightSpan>kg</WeightSpan>
                </WeightP>
                <WeightSvg>
                  <use href={`${HeaderSvg}#edit-weight`} />
                </WeightSvg>
              </div>
            </DivWeight>
          </DivWeightPart>
        </WeightButton>
        {isWeightModalOpen && (
          <ModalWeight setIsWeightModalOpen={setIsWeightModalOpen} />
        )}
      </WeightHeader>
      <UserHeader>
        <UserHeaderButton
          onClick={() => {
            setIsUserModalOpen(true);
          }}
        >
          <UserNameHeader>{userName}</UserNameHeader>
          <UserAvatar src={selectedImage} />
          <AvatarSvg>
            <use href={`${HeaderSvg}#change-your-goal`} />
          </AvatarSvg>
        </UserHeaderButton>
        {isUserModalOpen && <ModalUserHeader />}
      </UserHeader>
      {isMobileModalOpen && (
        <MobileOpenModal>
          <ButtonCloseMobileModals onClick={() => setIsMobileModalOpen(false)}>
            <SvgCloseMobileModals>
              <use href={`${HeaderSvg}#close-modal`} />
            </SvgCloseMobileModals>
          </ButtonCloseMobileModals>
          <ButtonsMobileModals>
            <MobileGoalHeader>
              <MobileGoalButton
                onClick={() => {
                  setIsGoalModalOpen(true);
                }}
              >
                <ImageGoal src={selectedImage} alt="Goal image" />
                <MobileDivGoalPart>
                  <MobileDivGoal>
                    <GoalPName>Goal</GoalPName>
                    <GoalP>{goal}</GoalP>
                  </MobileDivGoal>
                  <MobileGoalSvg>
                    <use href={`${HeaderSvg}#icon-right-converted`} />
                  </MobileGoalSvg>
                </MobileDivGoalPart>
              </MobileGoalButton>
            </MobileGoalHeader>
            {isGoalModalOpen && (
                <ModalGoal setIsGoalModalOpen={setIsGoalModalOpen} />
              )}
            <MobileWeightHeader>
              <MobileWeightButton
                onClick={() => {
                  setIsWeightModalOpen(true);
                }}
              >
                <ImageWeight src={changeWeight} alt="Change weight" />
                <MobileDivWeightPart>
                  <MobileDivWeight>
                    <MobileWeightPName>Weight</MobileWeightPName>
                    <div style={{ display: 'flex' }}>
                      <MobileWeightP>
                        {weight}
                        <MobileWeightSpan>kg</MobileWeightSpan>
                      </MobileWeightP>
                      <MobileWeightSvg>
                        <use href={`${HeaderSvg}#edit-weight`} />
                      </MobileWeightSvg>
                    </div>
                  </MobileDivWeight>
                </MobileDivWeightPart>
              </MobileWeightButton>
            </MobileWeightHeader>
            {isWeightModalOpen && (
                <ModalWeight setIsWeightModalOpen={setIsWeightModalOpen} />
              )}
          </ButtonsMobileModals>
        </MobileOpenModal>
      )}
    </UserMenuContainer>
  );
};

export default UserMenu;
