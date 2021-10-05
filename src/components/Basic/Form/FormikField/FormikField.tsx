import React from 'react';
import Input from '../Input';
import Textarea from '../Textarea';
import { FormikFieldInterface } from './FormikFieldInterface';
import { FormikFieldStyled } from './FormikFieldStyled';

const FormikField:React.FC<FormikFieldInterface> = (
  { name, label, type, error, touched, isTextarea, ...rest }: FormikFieldInterface,
) => {
  const { single, clickEvent, isEdit } = rest;
  const onClickHandler = (e:any) => {
    console.log(isEdit);
  };
  return (
    <FormikFieldStyled className={isEdit || single ? 'is-edit formik-field' : 'formik-field'}>
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
      {single && (
        <div
          className="send-icon"
          role="button"
          tabIndex={0}
          onClick={() => clickEvent()}
        >
          Submit
        </div>
      )}
      {isEdit && (
        <div
          className="edit-field"
          role="button"
          tabIndex={0}
          onClick={onClickHandler}
        >
          Edit
        </div>
      )}
    </FormikFieldStyled>
  );
};

export default FormikField;
