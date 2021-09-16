import React from 'react';
import OrdersItem from '../OrdersItem';
import { OrdersItemsStyled } from './OrdersItemStyled';

const OrdersItems:React.FC = () => (
  <OrdersItemsStyled>
    <OrdersItem />
  </OrdersItemsStyled>
);

export default OrdersItems;
