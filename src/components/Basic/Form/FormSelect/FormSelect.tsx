import React from 'react';
import Select from '../../Select';
import { FormikFieldStyled } from '../FormikField/FormikFieldStyled';
import { FormSelectInterface } from './FormSelectInterface';

const FormSelect:React.FC<FormSelectInterface> = (
  { label = '', selectDefault, values = [], onSelect }: FormSelectInterface,
) => (
  <FormikFieldStyled className="formik-field formik-field__date">
    <label>{label}</label>
    <Select
      onChangeEvent={(option:string) => onSelect(option)}
      initialValue={selectDefault}
      className="select-dark"
      values={values}
    />
  </FormikFieldStyled>
);

export default FormSelect;
