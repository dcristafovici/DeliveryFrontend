import React from 'react';
import AsideItems from './AsideItems';
import AsideLine from './AsideLine/AsideLine';
import { AsideStyled } from './AsideStyled';
import AsideSummary from './AsideSummary/AsideSummary';
import AsideTitle from './AsideTitle';

const Aside:React.FC = () => (
  <AsideStyled>
    <AsideTitle />
    <AsideItems />
    <AsideLine />
    <AsideSummary />
  </AsideStyled>
);

export default Aside;
