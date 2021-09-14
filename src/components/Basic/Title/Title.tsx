import React from 'react';
import { TitleInterface } from './TitleInterface';
import { TitleStyled } from './TitleStyled';

const Title:React.FC<TitleInterface> = ({ title }: TitleInterface) => (
  <TitleStyled>
    {title}
  </TitleStyled>
);

export default Title;
