import React from 'react';
import Button from '../../Basic/Button';
import { OrdersItemsStyled } from '../OrdersItems/OrdersItemStyled';
import OrdersPosition from '../OrdersPosition';

const OrdersItem:React.FC = () => (
  <OrdersItemsStyled>
    <div className="orders-item__top">
      <div className="orders-top__left">
        <div className="orders-top__number">
          Order 238
        </div>
        <div className="orders-top__status">
          <span>Status: </span>
          <span>Delivered</span>
        </div>
      </div>
      <div className="orders-top__right">
        <div className="orders-top__toggle">
          <span>Details</span>
        </div>
      </div>
    </div>

    <div className="orders-item__bottom">
      <div className="orders-general">
        <div className="orders-general__restaurant">Bamboo Bar</div>
        <div className="orders-general__rating">4.6</div>
      </div>
      <div className="orders-positions">
        <OrdersPosition />
        <OrdersPosition />
        <OrdersPosition />
        <OrdersPosition />
        <OrdersPosition />
        <OrdersPosition />
      </div>
      <div className="orders-actions">
        <div className="orders-repeat">
          <Button name="Repeat" className="transparent" />
        </div>
        <div className="orders-total">
          <span>Итого:</span>
          <span>2 590 ₽</span>
        </div>
      </div>
    </div>
  </OrdersItemsStyled>
);

export default OrdersItem;
