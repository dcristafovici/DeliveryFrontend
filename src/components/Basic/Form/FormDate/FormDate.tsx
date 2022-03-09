import React from 'react';
import DatePicker from 'react-datepicker';
import { FormDateInterface } from './FormDateInterface';
import 'react-datepicker/dist/react-datepicker.css';
import { FormDateStyled } from './FormDateStyled';

const FormDate:React.FC<FormDateInterface> = ({ selectedDate, onChange }: FormDateInterface) => (
  <FormDateStyled>
    <DatePicker
      selected={selectedDate}
      dateFormat="dd/MM/yyyy HH:mm"
      timeFormat="HH:mm"
      minDate={new Date()}
      calendarStartDay={1}
      onChange={(date:Date) => onChange(date)}
      showTimeSelect
    />
  </FormDateStyled>
);

export default FormDate;
