import React from 'react';
import { InputInterface } from '../Input/InputInterface';
import { TextareaStyled } from './TextareaStyled';

const Textarea:React.FC<InputInterface> = (
  { name, ...rest }: InputInterface,
) => (
  <TextareaStyled name={name} autoComplete="off" {...rest} />
);

export default Textarea;
