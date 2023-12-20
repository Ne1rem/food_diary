import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  gap: 80px;
  @media only screen and (max-width: 833px) {
    padding-left: 20px;
    gap: 40px;
  }
  @media only screen and (max-width: 650px) {
    justify-content: space-between;
    margin-left: auto;
  }
`;


//Modal Goal
export const GoalHeader = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const GoalButton = styled.button`
  display: flex;
  padding: 0;
  border-style: none;
  background: transparent;
`;

export const ImageGoal = styled.img`
  border-style: none;
  border-radius: 30%;
  border: 1.5px solid #5f5e5c;
  padding: 10px;
`;

export const DivGoal = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-primary-white);
  padding-left: 12px;
  padding-top: 3px;
  gap: 2px;
  font-family: Poppins;
`;

export const GoalPName = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

export const GoalP = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

export const GoalSvg = styled.svg`
  width: 14px;
  height: 14px;
  padding-left: 12px;
  padding-bottom: 2px;
  display: flex;
  fill: var(--color-primary-green-lite);
  align-self: flex-end;
`;

export const DivGoalPart = styled.div`
  display: flex;
`;

//Modal weight

export const WeightHeader = styled.div`
  padding: 0;
  width: 128px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const WeightButton = styled.button`
  display: flex;
  padding: 0;
  border-style: none;
  background: transparent;
`;

export const ImageWeight = styled.img`
  border-style: none;
  border-radius: 30%;
  border: 1.5px solid #5f5e5c;
  padding: 10px;
`;

export const DivWeight = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-primary-white);
  padding-left: 12px;
  padding-top: 3px;
  gap: 2px;
  font-family: Poppins;
`;

export const WeightPName = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

export const WeightP = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

export const WeightSvg = styled.svg`
  width: 16px;
  height: 16px;
  padding-left: 6px;
  padding-bottom: 2px;
  display: flex;
  fill: var(--color-primary-green-lite);
  align-self: flex-end;
`;

export const DivWeightPart = styled.div`
  display: flex;
`;

export const WeightSpan = styled.span`
  padding-left: 4px;
  color: var(--color-primary-grey);
`;

// Modal Avatar
export const UserHeader = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  border-style: none;
  background: transparent;
`;

export const UserHeaderButton = styled.button`
  background: transparent;
  border-style: none;
  display: flex;
  align-items: center;
`;

export const UserNameHeader = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: right;
  padding-right: 6px;
`;

export const UserAvatar = styled.img`
  padding-right: 4px;
  height: 28px;
  width: 28px;
  border-radius: 50%;
`;

export const AvatarSvg = styled.svg`
  width: 14px;
  height: 14px;
  padding-bottom: 2px;
  display: flex;
  fill: var(--color-primary-green-lite);
  
`;

//ModalMobile
export const ButtonOpenMobileModals = styled.button`
  background-color: transparent;
  border-style: none;
  display: flex;
  align-items: center;
  margin-left: 12px;
  @media only screen and (min-width: 650px) {
    display: none;
  }
`;

export const SvgOpenMobileModals = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--color-primary-white);
`;

export const ButtonCloseMobileModals = styled.button`
  border-style: none;
  background-color: transparent;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const SvgCloseMobileModals = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--color-primary-grey);
`;
export const ButtonsMobileModals = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border-style: none;
  gap: 40px;
  padding: 24px;
`;

  export const MobileOpenModal = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    /* width: 300px; */
    height: 184px;
    left: 10px;
    right: 10px;
    top: 60px;
    justify-content: center;
    border-radius: 12px;
    border: 1px;
    box-shadow: 0px 4px 14px 0px #e3ffa833;
    background-color: var(--color-primary-black-2);
    z-index: 4;
  `;


  export const MobileGoalHeader = styled.div`
    padding: 0;
    display: flex;
    align-items: center;



  `;

  export const MobileGoalButton = styled.button`
    display: flex;
    padding: 0;
    border-style: none;
    background: transparent;
  `;

  export const MobileImageGoal = styled.img`
    border-style: none;
    border-radius: 30%;
    border: 1.5px solid #5f5e5c;
    padding: 10px;
  `;

  export const MobileDivGoal = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--color-primary-white);
    padding-left: 12px;
    padding-top: 3px;
    gap: 2px;
    font-family: Poppins;
  `;

  export const MobileGoalPName = styled.p`
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  `;

  export const MobileGoalP = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  `;

  export const MobileGoalSvg = styled.svg`
    width: 14px;
    height: 14px;
    padding-left: 12px;
    padding-bottom: 2px;
    display: flex;
    fill: var(--color-primary-green-lite);
    align-self: flex-end;
  `;

  export const MobileDivGoalPart = styled.div`
    display: flex;
  `;

  export const MobileWeightHeader = styled.div`
    padding: 0;
    width: 128px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  export const MobileWeightButton = styled.button`
    display: flex;
    padding: 0;
    border-style: none;
    background: transparent;
  `;

  export const MobileImageWeight = styled.img`
    border-style: none;
    border-radius: 30%;
    border: 1.5px solid #5f5e5c;
    padding: 10px;
  `;

  export const MobileDivWeight = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--color-primary-white);
    padding-left: 12px;
    padding-top: 3px;
    gap: 2px;
    font-family: Poppins;
  `;

  export const MobileWeightPName = styled.p`
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  `;

  export const MobileWeightP = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  `;

  export const MobileWeightSvg = styled.svg`
    width: 16px;
    height: 16px;
    padding-left: 6px;
    padding-bottom: 2px;
    display: flex;
    fill: var(--color-primary-green-lite);
    align-self: flex-end;
  `;

  export const MobileDivWeightPart = styled.div`
    display: flex;
  `;

  export const MobileWeightSpan = styled.span`
    padding-left: 4px;
    color: var(--color-primary-grey);
  `;