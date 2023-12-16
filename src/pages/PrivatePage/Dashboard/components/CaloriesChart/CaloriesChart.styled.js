import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 0;

  /* з [835px */
  @media only screen and (min-width: 835px) {
  }

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
  }

  /* Для мобільних екранів (менше 600px]) */
  @media only screen and (max-width: 600px) {
  }
`;

export const ContainerValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 6px;

  /* з [835px */
  @media only screen and (min-width: 835px) {
  }

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
  }

  /* Для мобільних екранів (менше 600px]) */
  @media only screen and (max-width: 600px) {
  }
`;

export const ContainerChart = styled.div`
  width: 676px;
  height: 382px;
  padding: 25px 20px 24px 14px;

  border-radius: 12px;
  background: var(--Color-Primary-Black-2, #0f0f0f);

  /* з [835px */
  @media only screen and (min-width: 835px) {
    width: 780px;
    height: 382px;
  }

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
    width: 780px;
    height: 382px;
  }

  /* Для мобільних екранів (менше 600px]) */
  @media only screen and (max-width: 600px) {
  }
`;

export const ChartContainer = styled(ContainerChart)`
  width: 100%;
  max-width: 382px;
  padding: 24px 14px;
  border-radius: 12px;
  background-color: #0f0f0f;
  overflow-x: auto;
`;

export const Month = styled.p`
  color: var(--color-primary-whit);
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin: 0;

  /* з [835px */
  @media only screen and (min-width: 835px) {
  }

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
  }

  /* Для мобільних екранів (менше 600px]) */
  @media only screen and (max-width: 600px) {
  }
`;

export const TitleCalories = styled.h1`
  color: var(--color-primary-whit);
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;

  /* з [835px */
  @media only screen and (min-width: 835px) {
  }

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
  }

  /* Для мобільних екранів (менше 600px]) */
  @media only screen and (max-width: 600px) {
  }
`;

export const BackIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  /* з [835px */
  @media only screen and (min-width: 835px) {
  }

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
  }

  /* Для мобільних екранів (менше 600px]) */
  @media only screen and (max-width: 600px) {
  }
`;

export const BackIconLink = styled(Link)`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--color-primary-grey);

  &:hover,
  &:focus {
    color: var(--color-primary-green-lite);
  }

  /* з [835px */
  @media only screen and (min-width: 835px) {
  }

  /* з [1441px */
  @media only screen and (min-width: 1441px) {
  }

  /* Для мобільних екранів (менше 600px]) */
  @media only screen and (max-width: 600px) {
  }
`;

// fix menu BGC !!!
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
