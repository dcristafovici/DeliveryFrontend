import React from 'react';
import { OrdersStyled } from './OrdersStyled';

const Orders:React.FC = () => (
  <OrdersStyled>
    <div className="orders-title">Orders</div>
    {/* {Object.values(stucturedOrders).map((orderWrapper:any) => (
      <OrdersWrapper key={orderWrapper[0].created_at} date={orderWrapper[0].created_at}>
        <OrdersItems ordersItems={orderWrapper} />
      </OrdersWrapper>
    ))} */}
  </OrdersStyled>
);

export default Orders;
