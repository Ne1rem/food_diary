import { useState } from 'react';

import  inputSvg  from 'assets/sprite.svg';

import { BodyForm, InputList, Label, ButtonList } from './Step4.styled';
import { Button, Title, Text, InputError } from '../../../AuthStyled/GeneralStyles/GeneralStyles';
import { InputBlock, InputStyle, InputSvgStyle } from '../../../AuthStyled/InputStyle/InputStyle.styled';


const Step4 = ({ formik, increment, decrement }) => {
  const [validation, setValidation] = useState('');


  const onClickBtnNext = () => {
    setValidation('validation');

    if (formik.values.height !== '' &&
      !formik.errors.height &&
      formik.values.weight !== '' &&
      !formik.errors.weight) {
      increment();
    }
  };

  return (
    <BodyForm>
      <Title>Body parameters</Title>
      <Text>Enter your parameters for correct performance tracking</Text>
      <InputList>
        <li>
          <Label htmlFor="height">Height</Label>
          <InputBlock>
          <InputStyle
          className={validation === 'validation' ? formik.errors.height ? "error" : "correct" : ''}
            id="height"
            name="height"
            placeholder="Enter your height"
            onChange={formik.handleChange}
            value={formik.values.height}
          />
          {validation === 'validation' ? (formik.errors.height ? <InputSvgStyle><use href={`${inputSvg}#error`} /></InputSvgStyle> :
           <InputSvgStyle><use href={`${inputSvg}#correct`} /></InputSvgStyle>) : null}
          {validation === 'validation' ? (formik.errors.height ? (<InputError>{formik.errors.height}</InputError>) :
           (<InputError style={{ color: '#3CBC81' }}>Height is valid</InputError>)) : null}
        </InputBlock>
        </li>
        <li>
          <Label htmlFor="weight">Weight</Label>
          <InputBlock>
          <InputStyle
          className={validation === 'validation' ? formik.errors.weight ? "error" : "correct" : ''}
            id="weight"
            name="weight"
            placeholder="Enter your weight"
            onChange={formik.handleChange}
            value={formik.values.weight}
          />
          {validation === 'validation' ? (formik.errors.weight ? <InputSvgStyle><use href={`${inputSvg}#error`} /></InputSvgStyle> :
           <InputSvgStyle><use href={`${inputSvg}#correct`} /></InputSvgStyle>) : null}
          {validation === 'validation' ? (formik.errors.weight ? (<InputError>{formik.errors.weight}</InputError>) :
           (<InputError style={{ color: '#3CBC81' }}>Weight is valid</InputError>)) : null}
        </InputBlock>
        </li>
      </InputList>
      <ButtonList>
        <li>
          <Button
            onClick={() => {onClickBtnNext()}}
            className="btn-active"
            type="submit">
            Next
          </Button>
        </li>
        <li>
          <Button 
            onClick={() => {decrement()}}
            type="button">
            Back
          </Button>
        </li>
      </ButtonList>
    </BodyForm>
  );
};

export default Step4;
