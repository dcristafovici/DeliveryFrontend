import React from 'react';
import { OrderPositionInterface } from './OrderPositionInterface';
import { OrderPositionStyled } from './OrderPositionStyled';

const OrdersPosition:React.FC<OrderPositionInterface> = (
  { quantity, product }: OrderPositionInterface,
) => (
  <OrderPositionStyled className="orders-position">
    {(window.innerWidth > 480) && (
      <div className="orders-position__image">
        <img src={`http://localhost:5000/${product.media.small}`} alt="P1" />
      </div>
    )}
    <div className="orders-position__name">
      <span>
        {product.name}
      </span>
      <span>{product.weight}</span>
    </div>
    <div className="orders-position__quantity">{`${quantity} u.`}</div>
    <div className="orders-position__price">{`${product.price * quantity} $`}</div>
  </OrderPositionStyled>
);

export default OrdersPosition;
