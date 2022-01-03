import React from 'react';
import OrdersItem from '../OrdersItem';
import { OrdersItemsInterface } from './OrdersItemsInterface';
import { OrdersItemsStyled } from './OrdersItemStyled';

const OrdersItems:React.FC<OrdersItemsInterface> = ({ ordersItems }: OrdersItemsInterface) => (
  <OrdersItemsStyled>
    {ordersItems.map((order:any) => (
      <OrdersItem
        key={order.id}
        totalPrice={order.totalPrice}
        id={order.id}
        restaurant={order.restaurant}
        status={order.status}
        orderCart={order.orderCart}
      />
    ))}
  </OrdersItemsStyled>
);

export default OrdersItems;
