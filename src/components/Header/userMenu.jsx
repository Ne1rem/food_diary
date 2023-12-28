// import { useDispatch, useSelector } from "react-redux"
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

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
import { useSelector } from 'react-redux';

const UserMenu = ({ isMobileModalOpen, setIsMobileModalOpen }) => {
  const name = useSelector((state) => state.user.user.name);
  const gender = useSelector((state) => state.user.user.gender);
  const goal = useSelector((state) => state.user.user.goal);
  const weight = useSelector((state) => state.user.user.weight);
  const userAvatar = useSelector((state) => state.user.user.avatarURL);

  const imagesPath = {
    'Lose Fat female': LoseFatGirl,
    'Maintain female': MaintainGirl,
    'Lose Fat male': LoseFatMan,
    'Maintain male': MaintainMan,
    'Gain Muscle': GainMuscle,
  };

  const selectedImage =
    goal === 'Gain Muscle'
      ? imagesPath[`Gain Muscle`]
      : imagesPath[`${goal} ${gender}`];

  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
  const [isWeightModalOpen, setIsWeightModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  function openGoalModal() {
    setIsGoalModalOpen(true);
    setIsWeightModalOpen(false);
    setIsUserModalOpen(false);
  }

  function openWeightModal() {
    setIsGoalModalOpen(false);
    setIsWeightModalOpen(true);
    setIsUserModalOpen(false);
  }

  function openUserModal() {
    setIsGoalModalOpen(false);
    setIsWeightModalOpen(false);
    setIsUserModalOpen((prevState) => !prevState);
  }

  const backdropStyle = {
    position: 'fixed',
    top: 102,
    left: 0,
    width: '100%',
    height: '100%',
  };

  function handleCloseModal() {
    setIsGoalModalOpen(false);
    setIsWeightModalOpen(false);
    setIsUserModalOpen(false);
  }

  useEffect(() => {
    const body = document.querySelector('body');
    if (window.innerWidth < 700 && (isGoalModalOpen || isWeightModalOpen)) {
      body.classList.add('noOverflow');
    } else {
      body.classList.remove('noOverflow');
    }
  }, [isGoalModalOpen, isWeightModalOpen]);

  return (
    <UserMenuContainer>
      {isGoalModalOpen || isWeightModalOpen || isUserModalOpen ? (
        <div
          className="backdrop"
          style={backdropStyle}
          onClick={() => {
            handleCloseModal();
          }}
        />
      ) : null}
      <GoalHeader>
        <GoalButton
          onClick={() => {
            openGoalModal();
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
          <ModalGoal
            setIsGoalModalOpen={setIsGoalModalOpen}
            gender={gender}
            goal={goal}
          />
        )}
      </GoalHeader>
      <WeightHeader>
        <WeightButton
          onClick={() => {
            openWeightModal();
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
            openUserModal();
          }}
        >
          <UserNameHeader>{name}</UserNameHeader>
          <UserAvatar src={userAvatar} />
          <AvatarSvg
            style={{
              transform: isUserModalOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <use href={`${HeaderSvg}#change-your-goal`} />
          </AvatarSvg>
        </UserHeaderButton>
        {isUserModalOpen && (
          <ModalUserHeader setIsUserModalOpen={setIsUserModalOpen} />
        )}
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
              <ModalGoal
                setIsGoalModalOpen={setIsGoalModalOpen}
                isGoalModalOpen={isGoalModalOpen}
              />
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
