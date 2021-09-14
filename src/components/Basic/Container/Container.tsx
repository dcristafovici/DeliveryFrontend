import React from 'react';
import { HasChildrenInterface } from '../../../types/HasChildrenInterface';
import { ContainerStyled } from './ContainerStyled';

const Container:React.FC<HasChildrenInterface> = ({ children } : HasChildrenInterface) => (
  <ContainerStyled>
    {children}
  </ContainerStyled>
);

export default Container;
