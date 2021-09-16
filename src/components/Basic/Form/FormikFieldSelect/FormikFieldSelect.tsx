import React from 'react';
import { Towers } from '../../../Banner/Towers';
import Select from '../../Select';
import { FormikFieldStyled } from '../FormikField/FormikFieldStyled';

const FormikFieldSelect:React.FC = () => (
  <FormikFieldStyled className="formik-field formik-field__date">
    <label>Choose Tower</label>
    <Select initialValue="Choose Tower" className="select-dark" values={Towers} />
  </FormikFieldStyled>
);

export default FormikFieldSelect;
