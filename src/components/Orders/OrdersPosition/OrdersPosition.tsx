import React from 'react';
import { OrderPositionStyled } from './OrderPositionStyled';

const OrdersPosition:React.FC = () => (
  <OrderPositionStyled className="orders-position">
    <div className="orders-position__image">
      <img src="/images/p1.jpg" alt="P1" />
    </div>
    <div className="orders-position__name">
      <span>
        Wasabi shrimp with daikon, carrot and almond petals
        Wasabi shrimp with daikon, carrot and almond petals
      </span>
      <span>150 G</span>
    </div>
    <div className="orders-position__quantity">1</div>
    <div className="orders-position__price">1 590 ₽</div>
  </OrderPositionStyled>
);

export default OrdersPosition;
