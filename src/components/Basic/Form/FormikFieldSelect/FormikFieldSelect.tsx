import React from 'react';
import { Towers } from '../../../Banner/Towers';
import Select from '../../Select';
import { FormikFieldStyled } from '../FormikField/FormikFieldStyled';
import { FormikSelectInterface } from './FormikSelectInterface';

const FormikFieldSelect:React.FC<FormikSelectInterface> = (
  { selectDefault }: FormikSelectInterface,
) => (
  <FormikFieldStyled className="formik-field formik-field__date">
    <label>{selectDefault}</label>
    <Select initialValue={selectDefault} className="select-dark" values={Towers} />
  </FormikFieldStyled>
);

export default FormikFieldSelect;
