import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0;

  @media only screen and (min-width: 835px) {
    margin: 30px 0 0;
  }
  @media only screen and (min-width: 1441px) {
    margin: 26px 0 0;
  }
`;

export const BackIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  @media only screen and (min-width: 835px) {
    gap: 12px;
  }
`;

export const BackIconLink = styled(Link)`
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

  @media only screen and (min-width: 835px) {
    width: 24px;
    height: 24px;
  }
`;

// ---------------------fix menu BGC----------------------- !!!
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
  }),
  menu: (provided, state) => ({
    ...provided,
    boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
    backgroundColor: 'var(--color-primary-grey)',
    // width: '212px',
    // height: '144px',
    flexShrink: '0',
    outline: 'none',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? 'rgba(41, 41, 40, 1)'
      : 'rgba(15, 15, 15, 1)',
    color: state.isFocused
      ? 'rgba(227, 255, 168, 1)'
      : 'var(--color-primary-grey)',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.42',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
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

  @media only screen and (min-width: 835px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media only screen and (min-width: 835px) {
    gap: 40px;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 1441px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const ChartsWrapper = styled.div`
`;

export const ContainerValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 6px 0;

  @media only screen and (min-width: 835px) {
    justify-content: start;
    gap: 40px;
  }
`;

export const TitleCalories = styled.h1`
  color: var(--color-primary-whit);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;

  @media only screen and (min-width: 835px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const ContainerWaterValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 6px 0;

  @media only screen and (min-width: 835px) {
    justify-content: start;
    gap: 40px;
  }

  @media only screen and (min-width: 1441px) {
    margin: 12px 0 6px 0; // 12px ??? ---------------------------
  }
`;

export const TitleWater = styled.h2`
  color: var(--color-primary-whit);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;

  @media only screen and (min-width: 835px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const Value = styled.p`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 500;
`;

export const Span = styled.span`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 400;
`;

export const ContainerChart = styled.div`
  width: 642px;
  max-width: 642px;
  height: 333px;
  padding: 25px 20px 24px 14px;
  border-radius: 12px;
  background: var(--color-primary-black-2);

  @media only screen and (min-width: 835px) {
    max-width: 735px;
    height: 333px;
    padding: 25px 31px 24px 14px;
  }

  @media only screen and (min-width: 1441px) {
    max-width: 642px;
    height: 333px;
    padding: 25px 20px 24px 14px;
  }
`;

// ---------------------------------------Layout------------------!!!
export const ChartContainer = styled(ContainerChart)`
  width: 100%;
  max-width: 382px;
  padding: 24px 14px;
  border-radius: 12px;
  background-color: var(--color-primary-black-2);
  overflow-x: auto;
`;

