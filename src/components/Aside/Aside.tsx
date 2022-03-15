import React from 'react';
import { useTypeSelector } from '../../redux/reduxHooks';
import AsideItems from './AsideItems';
import AsideLine from './AsideLine/AsideLine';
import { AsideStyled } from './AsideStyled';
import AsideSummary from './AsideSummary/AsideSummary';
import AsideTitle from './AsideTitle';

const Aside:React.FC = () => {
  const {
    total,
    minPrice,
    percent,
  } = useTypeSelector((state) => state.asideReducer);
  return (
    <AsideStyled>
      <AsideTitle />
      <AsideItems />
      <AsideLine
        total={total}
        minPrice={minPrice}
        percent={percent}
      />
      <AsideSummary />
    </AsideStyled>
  );
};

export default Aside;
