import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { FormikFieldInterface } from '../FormikField/FormikFieldInterface';
import 'react-day-picker/lib/style.css';
import { FormikFieldStyled } from '../FormikField/FormikFieldStyled';

const FormikFieldDate:React.FC<FormikFieldInterface> = (
  { name, label, type, error, touched, isTextarea, ...rest }: FormikFieldInterface,
) => {
  const { onChange } = rest;
  return (
    <FormikFieldStyled className="formik-field formik-field__date">
      <label>{label}</label>
      <DayPickerInput placeholder={label} onDayChange={(day) => onChange('date', day)} />
    </FormikFieldStyled>
  );
};

export default FormikFieldDate;
