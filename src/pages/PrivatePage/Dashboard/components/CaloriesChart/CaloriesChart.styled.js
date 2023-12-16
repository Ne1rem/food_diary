import styled from 'styled-components';
// import Select from 'react-select';

export const ContainerSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

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
  margin-bottom: 6px;

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

export const SelectIcon = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
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

export const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    backgroundColor: 'transparent',
    color: 'var(--color-primary-white)',
    marginTop: '16px',
    fontFamily: 'Poppins',
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '1.25',
    outline: 'none',
    cursor: 'pointer',
  }),
  '&:focus': {
    outline: 'none',
  },
  '&:active': {
    outline: 'none',
  },
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused
      ? 'var(--color-primary-white)'
      : 'var(--color-primary-grey)',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),
  menu: (provided, state) => ({
    ...provided,
    boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
    backgroundColor: 'var(--color-primary-grey)',
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
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: 'var(--color-primary-white)',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
};



