import React from 'react';
import { useTypeSelector } from '../../redux/useTypeSelector';
import Checkout from '../Checkout';
import AsideItems from './AsideItems';
import AsideLine from './AsideLine/AsideLine';
import { AsideStyled } from './AsideStyled';
import AsideSummary from './AsideSummary/AsideSummary';
import AsideTitle from './AsideTitle';

const Aside:React.FC = () => {
  const { checkout } = useTypeSelector((state) => state.asideReducer);
  return (
    <>
      <AsideStyled>
        <AsideTitle />
        <AsideItems />
        <AsideLine />
        <AsideSummary />
      </AsideStyled>
      {checkout && <Checkout />}
    </>
  );
};

export default Aside;
