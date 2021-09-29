import React from 'react';
import { useTypeSelector } from '../../../redux/useTypeSelector';
import Button from '../../Basic/Button';
import { AsideSummaryStyled } from './AsideSummaryStyled';

const AsideSummary:React.FC = () => {
  const { deliveryTime = '', total = 0 } = useTypeSelector((state) => state.asideReducer);
  return (
    <AsideSummaryStyled>
      <div className="aside-summary__items">
        <div className="aside-summary__item">
          <span>Delivery Time</span>
          <span>{deliveryTime}</span>
        </div>
        <div className="aside-summary__item">
          <span>Total</span>
          <span>{`${total} $`}</span>
        </div>
      </div>
      <Button name="Checkout" className="full" />
    </AsideSummaryStyled>
  );
};

export default AsideSummary;
