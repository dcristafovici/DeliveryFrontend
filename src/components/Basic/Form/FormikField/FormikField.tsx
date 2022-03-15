import React from 'react';
import ErrorMessage from '../ErrorMessage';
import Input from '../Input';
import Textarea from '../Textarea';
import { FormikFieldInterface } from './FormikFieldInterface';
import { FormikFieldStyled } from './FormikFieldStyled';

const FormikField:React.FC<FormikFieldInterface> = (
  { name, label, type, error, isTextarea, ...rest }: FormikFieldInterface,
) => (
  <FormikFieldStyled className={`formik-field ${error ? 'has-error' : ''}`}>
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
    {error && <ErrorMessage error={error} />}
  </FormikFieldStyled>
);

export default FormikField;
