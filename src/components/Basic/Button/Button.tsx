import React from 'react';
import { ButtonInterface } from './ButtonInterface';
import { ButtonStyled } from './ButtonStyled';

const Button:React.FC<ButtonInterface> = ({ name, className, onClickEvent }: ButtonInterface) => (
  <ButtonStyled onClick={onClickEvent} className={className}>
    <span>{name}</span>
  </ButtonStyled>
);

export default Button;
