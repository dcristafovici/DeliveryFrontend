import React from 'react';
import { CheckoutGeneralStyled } from './CheckoutGeneralStyled';

export const CheckoutGeneral:React.FC = () => (
  <CheckoutGeneralStyled>
    <div className="checkout-general__item">
      <span>Delivery Time</span>
      <span>30 - 45 minutes</span>
    </div>
    <div className="checkout-general__item">
      <span>Total</span>
      <span>450 $</span>
    </div>
  </CheckoutGeneralStyled>
);

export default CheckoutGeneral;
