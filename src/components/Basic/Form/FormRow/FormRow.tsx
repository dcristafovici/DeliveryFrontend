import React from 'react';
import { FormRowInterface } from './FormRowInterface';
import { FormRowStyled } from './FormRowStyled';

const FormRow:React.FC<FormRowInterface> = ({ className, children }: FormRowInterface) => (
  <FormRowStyled className={className}>
    {children}
  </FormRowStyled>
);

export default FormRow;
