import React from 'react';
import { InputInterface } from './InputInterface';
import { InputStyled } from './InputStyled';

const Input:React.FC<InputInterface> = (
  { name, error, type, ...rest }: InputInterface,
) => (
  <InputStyled type={type} name={name} autoComplete="off" {...rest} />
);

export default Input;
