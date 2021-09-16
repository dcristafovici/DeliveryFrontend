import React from 'react';
import { OrdersWrapperStyled } from './OrdersWrapperStyled';
import { OrderWrapperInterface } from './OrderWrapperInterface';

const OrdersWrapper:React.FC<OrderWrapperInterface> = (
  { date, children }: OrderWrapperInterface,
) => (
  <OrdersWrapperStyled>
    <div className="orders-wrapper__date">{date}</div>
    {children}
  </OrdersWrapperStyled>
);

export default OrdersWrapper;
