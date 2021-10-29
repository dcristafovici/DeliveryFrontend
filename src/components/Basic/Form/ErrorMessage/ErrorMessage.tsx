import React from 'react';
import { ErrorMessageInterface } from './ErrorMessageInterface';
import { ErrorMessageStyled } from './ErrorMessageStyled';

const ErrorMessage:React.FC<ErrorMessageInterface> = ({ error }: ErrorMessageInterface) => (
  <ErrorMessageStyled>
    <span>{error}</span>
  </ErrorMessageStyled>
);

export default ErrorMessage;
