import React from 'react';
import Input from '../Input';
import Textarea from '../Textarea';
import { FormikFieldInterface } from './FormikFieldInterface';
import { FormikFieldStyled } from './FormikFieldStyled';

const FormikField:React.FC<FormikFieldInterface> = (
  { name, label, type, error, touched, isTextarea, ...rest }: FormikFieldInterface,
) => (
  <FormikFieldStyled className="formik-field">
    <label>{label}</label>
    {isTextarea ? (
      <Textarea
        name={name}
        placeholder={label}
        type={type}
        error={error}
        {...rest}
      />
    ) : (
      <Input
        name={name}
        placeholder={label}
        type={type}
        error={error}
        {...rest}
      />
    )}
  </FormikFieldStyled>
);

export default FormikField;
