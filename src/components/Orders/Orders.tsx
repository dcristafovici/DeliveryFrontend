import { useQuery } from '@apollo/client';
import React from 'react';
import { FIND_ORDERS_BY_KEYS } from '../../GraphQL/Order/OrderQueries';
import { useTypeSelector } from '../../redux/reduxHooks';
import { combineOrders } from '../../utils/order_utils';
import OrdersItems from './OrdersItems';
import { OrdersStyled } from './OrdersStyled';
import OrdersWrapper from './OrdersWrapper';

const Orders:React.FC = () => {
  const { id } = useTypeSelector((state) => state.userReducer);
  const { data = {} } = useQuery(FIND_ORDERS_BY_KEYS, {
    variables: { data: { field: 'user', value: id } },
    skip: !id,
  });
  const { findByKeyOrders = [] } = data;
  return (
    <OrdersStyled>
      <div className="orders-title">Orders</div>
      {Object.values(combineOrders(findByKeyOrders)).map((orders:any) => (
        <OrdersWrapper key={orders[0].created_at} date={orders[0].created_at}>
          <OrdersItems ordersItems={orders} />
        </OrdersWrapper>
      ))}
    </OrdersStyled>
  );
};

export default Orders;
