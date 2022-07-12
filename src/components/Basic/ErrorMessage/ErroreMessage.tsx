import React from 'react';
import { ErrorMessageInterface } from './ErrorMessageInterface';
import { ErrorMessageStyled } from './ErrorMessageStyled';

const ErrorMessage:React.FC<ErrorMessageInterface> = ({ text }: ErrorMessageInterface) => (
  <ErrorMessageStyled>
    <span>{text}</span>
  </ErrorMessageStyled>
);

export default ErrorMessage;
