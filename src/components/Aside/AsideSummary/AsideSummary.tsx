import React from 'react';
import Button from '../../Basic/Button';
import { AsideSummaryStyled } from './AsideSummaryStyled';

const AsideSummary:React.FC = () => (
  <AsideSummaryStyled>
    <div className="aside-summary__items">
      <div className="aside-summary__item">
        <span>Delivery Time</span>
        <span>30 – 45 minutes</span>
      </div>
      <div className="aside-summary__item">
        <span>Total</span>
        <span>2 590 $</span>
      </div>
    </div>
    <Button name="Checkout" className="full" />
  </AsideSummaryStyled>
);

export default AsideSummary;
