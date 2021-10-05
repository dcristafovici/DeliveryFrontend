import React, { useState } from 'react';
import Input from '../Input';
import Textarea from '../Textarea';
import { FormikFieldInterface } from './FormikFieldInterface';
import { FormikFieldStyled } from './FormikFieldStyled';

const FormikField:React.FC<FormikFieldInterface> = (
  { name, label, type, error, touched, isTextarea, ...rest }: FormikFieldInterface,
) => {
  const { requireEdit, clickEvent } = rest;
  const [isEditable, setIsEditable] = useState(requireEdit || false);
  const [isSingle, setIsSingle] = useState(false);

  const onClickHandler = (e:any) => {
    setIsEditable(false);
    setIsSingle(true);
  };
  return (
    <FormikFieldStyled className={`formik-field ${isEditable && 'editable'}`}>
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
      {isSingle && (
        <div
          className="send-icon"
          role="button"
          tabIndex={0}
          onClick={() => clickEvent()}
        >
          Submit
        </div>
      )}
      {isEditable && (
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
