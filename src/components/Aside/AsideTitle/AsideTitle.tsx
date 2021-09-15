import React from 'react';
import { AsideTitleStyled } from './AsideTitleStyled';

const AsideTitle:React.FC = () => (
  <AsideTitleStyled>
    <div className="aside-title__name">My order</div>
    <div className="aside-title__remove">Clear</div>
  </AsideTitleStyled>
);

export default AsideTitle;
