import React from 'react';
import { FormWrapperInterface } from './FormWrapperInterface';
import { FormWrapperStyled } from './FormWrapperStyled';

const FormWrapper:React.FC<FormWrapperInterface> = ({ title, children }: FormWrapperInterface) => (
  <FormWrapperStyled>
    <div className="form-wrapper__title">{title}</div>
    {children}
  </FormWrapperStyled>
);

export default FormWrapper;
