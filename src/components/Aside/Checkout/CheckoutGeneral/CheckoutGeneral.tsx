import React from 'react';
import { useTypeSelector } from '../../../../redux/reduxHooks';
import { CheckoutGeneralStyled } from './CheckoutGeneralStyled';

export const CheckoutGeneral:React.FC = () => {
  const { deliveryTime, total } = useTypeSelector((state) => state.asideReducer);
  return (
    <CheckoutGeneralStyled>
      <div className="checkout-general__item">
        <span>Delivery Time</span>
        <span>{deliveryTime}</span>
      </div>
      <div className="checkout-general__item">
        <span>Total</span>
        <span>{total}</span>
      </div>
    </CheckoutGeneralStyled>
  );
};

export default CheckoutGeneral;
