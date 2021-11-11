import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ORDERS_BY_USER } from '../../GraphQL/Queries';
import { useTypeSelector } from '../../redux/useTypeSelector';
import OrdersItems from './OrdersItems';
import { OrdersStyled } from './OrdersStyled';
import OrdersWrapper from './OrdersWrapper';

const Orders:React.FC = () => {
  const { user } = useTypeSelector((state) => state.authReducer);

  const { loading, data = {} } = useQuery(GET_ORDERS_BY_USER, { variables: { user: user.id } });
  const { GetOrderByUser = [] } = data;

  const UserOrders = GetOrderByUser.map((order:any) => {
    const date = new Date(order.created_at);
    const convetedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    return {
      ...order,
      created_at: convetedDate,
    };
  });

  const stucturedOrders = UserOrders.reduce((row:any, order:any) => {
    row[order.created_at] = [...row[order.created_at] || [], order];
    return row;
  }, {});

  return (
    <OrdersStyled>
      <div className="orders-title">Orders</div>
      {Object.values(stucturedOrders).map((orderWrapper:any) => (
        <OrdersWrapper key={orderWrapper[0].created_at} date={orderWrapper[0].created_at}>
          <OrdersItems ordersItems={orderWrapper} />
        </OrdersWrapper>
      ))}
    </OrdersStyled>
  );
};

export default Orders;
