import React from 'react';
import { AsideTitleStyled } from './AsideTitleStyled';

const AsideTitle:React.FC = () => (
  <AsideTitleStyled>
    <div className="aside-title__name">Мой заказ</div>
    <div className="aside-title__remove">Удалить все</div>
  </AsideTitleStyled>
);

export default AsideTitle;
