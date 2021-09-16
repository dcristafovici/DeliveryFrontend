import React from 'react';
import OrdersItems from './OrdersItems';
import { OrdersStyled } from './OrdersStyled';
import OrdersWrapper from './OrdersWrapper';

const Orders:React.FC = () => (
  <OrdersStyled>
    <div className="orders-title">Orders</div>
    <OrdersWrapper date="03.06.2021">
      <OrdersItems />
    </OrdersWrapper>
  </OrdersStyled>
);

export default Orders;
