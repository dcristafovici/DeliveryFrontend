import React from 'react';
import { OrdersItemsStyled } from '../OrdersItems/OrdersItemStyled';
import OrderPosition from '../OrdersPosition';

const OrdersItem:React.FC = () => (
  <OrdersItemsStyled>
    <div className="orders-item__top">
      <div className="orders-top__number">
        Order 238
      </div>
      <div className="orders-top__status">
        <span>Status</span>
        <span>Delivered</span>
      </div>
      <div className="orders-top__toggle">
        <span>Details</span>
      </div>
    </div>

    <div className="orders-item__bottom">
      <div className="orders-bottom__general">
        <div className="orders-general__restaurant">Bamboo Bar</div>
        <div className="orders-general__rating">4.6</div>
      </div>
      <div className="orders-positions">
        <OrderPosition />
      </div>
    </div>
  </OrdersItemsStyled>
);

export default OrdersItem;
