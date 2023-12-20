import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IconLink, IconContainer } from './GoalButtonOnMain.styled';

const GoalButtonOnMain = () => {
  return (
    <>
      <IconLink to="/dashboard">
        <p>On the way to the goal</p>
        <IconContainer>
          <FaArrowRightLong />
        </IconContainer>
      </IconLink>
    </>
  );
};

export default GoalButtonOnMain;
