import React from 'react';
import OrdersItem from '../OrdersItem';
import { OrdersItemInterface } from '../OrdersItem/OrdersItemInterface';
import { OrdersItemsInterface } from './OrdersItemsInterface';
import { OrdersItemsStyled } from './OrdersItemStyled';

const OrdersItems:React.FC<OrdersItemsInterface> = ({ ordersItems }: OrdersItemsInterface) => (
  <OrdersItemsStyled>
    {ordersItems.map((order: OrdersItemInterface) => {
      const { id, date, total, restaurant, orderPayment, orderCart, orderNumber } = order;
      return (
        <OrdersItem
          key={id}
          date={date}
          total={total}
          orderPayment={orderPayment}
          restaurant={restaurant}
          orderCart={orderCart}
          orderNumber={orderNumber}
        />
      );
    })}
  </OrdersItemsStyled>
);

export default OrdersItems;
