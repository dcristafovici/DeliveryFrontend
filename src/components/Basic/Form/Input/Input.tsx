import React from 'react';
import { InputInterface } from './InputInterface';
import { InputStyled } from './InputStyled';

const Input:React.FC<InputInterface> = (
  { name, error, disabled = false, type, ...rest }: InputInterface,
) => (
  <>
    {/* {console.log(rest)} */}
    <InputStyled disabled={disabled} type={type} name={name} autoComplete="off" {...rest} />
  </>
);

export default Input;
