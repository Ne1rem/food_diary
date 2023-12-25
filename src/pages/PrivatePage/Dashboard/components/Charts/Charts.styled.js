import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 16px;

  @media only screen and (min-width: 834px) {
    margin: 24px 0 16px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 20px 0 16px;
  }
`;

export const BackIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  @media only screen and (min-width: 834px) {
    gap: 12px;
  }
`;

export const BackIconLink = styled(Link)`
display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--color-primary-grey);
  transition: 'all 0.3s ease';
  &:hover,
  &:focus {
    color: var(--color-primary-green-lite);
  }

  @media only screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }
`;

export const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: 'var(--color-primary-white)',
    fontFamily: 'Poppins',
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '1.25',
    outline: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused
      ? 'var(--color-primary-green-lite)'
      : 'var(--color-primary-white)',
    transition: 'all 0.3s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    padding: '0',
  }),
  menu: (provided, state) => ({
    ...provided,
    boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
    backgroundColor: 'var(--color-primary-grey)',
    width: '212px',
    height: '162px', // important!
    outline: 'none',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? 'var(--secondary-color-grey-1)'
      : 'var(--color-primary-black-2)',
    color: state.isFocused
      ? 'var(--color-primary-green-lite)'
      : 'var(--color-primary-grey)',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.42',
    marginTop: '-4px', // important!
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: 'var(--color-primary-white)',
    transition: 'all 0.3s ease',
  }),
  indicatorSeparator: (provided, state) => ({
    display: 'none',
  }),
};

export const Month = styled.p`
  color: var(--color-primary-whit);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;

  @media only screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;

  @media only screen and (min-width: 834px) {
    gap: 40px;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const ChartsWrapper = styled.div`
  align-items: center;
`;

export const ContainerValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 6px;

  @media only screen and (min-width: 834px) {
    justify-content: start;
    align-items: center;
    gap: 40px;
  }
`;

export const TitleCalories = styled.h1`
  color: var(--color-primary-whit);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;

  @media only screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const ContainerWaterValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 834px) {
    justify-content: start;
    gap: 40px;
  }
`;

export const TitleWater = styled.h2`
  color: var(--color-primary-whit);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;

  @media only screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const Value = styled.p`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 500;
  display: flex;
  gap: 8px;
`;

export const Span = styled.span`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 400;
`;

export const ContainerChart = styled.div`
  width: 642px;
  height: 333px;
  flex-shrink: 0;
  padding: 25px 20px 24px 14px;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 834px) {
    width: 735px;
    height: 333px;
    padding: 25px 31px 24px 14px;
  }

  @media only screen and (min-width: 1440px) {
    width: 642px;
    height: 333px;
    padding: 25px 20px 24px 14px;
  }
`;

export const ContainerWeightValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 6px 0;

  @media only screen and (min-width: 834px) {
    justify-content: start;
    gap: 40px;
  }
`;

export const WeightWrapper = styled.div`
  padding: 0 0 60px;

  margin: 27px 0 0;

  @media only screen and (min-width: 834px) {
    margin: 40px 0 0;
  }

  @media only screen and (min-width: 1440px) {
    margin: 20px 0 0;
  }
`;

export const TitleWeight = styled.h3`
  color: var(--color-primary-whit);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;
  margin: 0;
  align-items: center;

  @media only screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const ContainerWeightChart = styled.div`
  @media only screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FlexContainer = styled.div`
`;

export const WeightWrap = styled.div`
  width: 1310px;
  height: 110px;
  padding: 24px 41px 36px 21px;
  margin: 0;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 16px;

  /* position: relative;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch; */

  @media only screen and (min-width: 834px) {
    width: 738px;
    height: 110px;
    padding: 24px 20px 44px 22px;
    /* gap: 12px; */
  }

  @media only screen and (min-width: 1440px) {
    width: 1310px;
    height: 110px;
    padding: 24px 41px 36px 21px;
    /* gap: 16px; */
  }
`;

export const Upper = styled.div`
  display: flex;
  align-items: center;
  justify-content: inherit;
  /* gap: 23px; */
  font-size: 14px;
  line-height: 1.42;
  font-weight: 400;
  color: var(--color-primary-whit);
  /* padding: 0 41px 0 21px; */

  @media only screen and (min-width: 834px) {
    /* gap: 6px; */
    font-size: 10px;
    line-height: 1.6;
    /* padding: 0 20px 0 22px; */
  }

  @media only screen and (min-width: 1440px) {
    /* gap: 23px; */
    font-size: 14px;
    line-height: 1.42;
    font-weight: 400;
    /* padding: 0 41px 0 21px; */
  }
`;

export const UpperValue = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1.42;

  @media only screen and (min-width: 834px) {
    font-size: 10px;
    line-height: 1.6;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 1.42;
  }
`;

export const LowerWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: inherit;
  /* gap: 29px; */
  color: var(--color-primary-grey);
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  /* padding: 0 44px 0 24px; */

  @media only screen and (min-width: 834px) {
    /* gap: 10px; */
    /* padding: 0 22px 0 24px; */
  }

  @media only screen and (min-width: 1440px) {
    /* gap: 29px; */
    /* padding: 0 44px 0 24px; */
  }
`;

export const LowerValue = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1.4;
`;

// export const ScrollContainer = styled.div`
//   overflow-x: auto;
//   white-space: nowrap;
//   -webkit-overflow-scrolling: touch;
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     top: 8px;
//     right: 0;
//     width: 8px;
//     height: calc(100% - 8px);
//     transform: rotate(-90deg);
//     flex-shrink: 0;
//     border-radius: 12px;
//     background: #0f0f0f;
//   }

//   @media only screen and (min-width: 834px) {
//     overflow-x: hidden;
//     &::after {
//       display: none;
//     }
//   }
// `;
